package stores

import (
	"context"
	"encoding/json"
	"fizmathplaza/internal/jstream"
	"fizmathplaza/internal/monolith"
	"fizmathplaza/stores/internal/application"
	"fizmathplaza/stores/internal/domain"
	"fizmathplaza/stores/internal/grpc"
	"fizmathplaza/stores/internal/logging"
	"fizmathplaza/stores/internal/postgres"
	"fizmathplaza/stores/internal/rest"

	"github.com/nats-io/nats.go/jetstream"
)

type Module struct {
}

func (m Module) Startup(ctx context.Context, mono monolith.Monolith) error {

	//  Driven adapters
	stores := postgres.InjectStoreRepository("stores.stores", mono.DB())
	products := postgres.InjectProductRepository("stores.products", mono.DB())

	JStream := jstream.NewStream(mono.Config().Nats.Stream, mono.JS(), mono.ST())
	cons2, _ := mono.ST().CreateOrUpdateConsumer(ctx, jetstream.ConsumerConfig{
		Durable:       "processor-2",
		AckPolicy:     jetstream.AckExplicitPolicy,
		FilterSubject: "ORDERS.published",
	})

	// application
	var app application.App
	app = application.Inject(stores, products)
	app = logging.LogApplicationAccess(app, mono.Logger())

	domain.EventHandlers(JStream)

	//  Driver adapters
	cons2.Consume(func(msg jetstream.Msg) {
		var dat map[string]interface{}
		if err := json.Unmarshal(msg.Data(), &dat); err != nil {
			panic(err)
		}
		app.ConfirmStores(ctx, dat)
		msg.Ack()
	})
	if err := grpc.RegisterServer(app, mono.RPC()); err != nil {
		return err
	}
	if err := rest.RegisterGateway(ctx, mono.Mux(), mono.Config().Rpc.Address()); err != nil {
		return err
	}
	if err := rest.RegisterSwagger(mono.Mux()); err != nil {
		return err
	}

	return nil
}
