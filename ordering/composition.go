package ordering

import (
	"context"
	"encoding/json"

	"fizmathplaza/internal/jstream"
	"fizmathplaza/internal/monolith"

	"fizmathplaza/ordering/internal/application"
	"fizmathplaza/ordering/internal/domain"
	"fizmathplaza/ordering/internal/grpc"
	"fizmathplaza/ordering/internal/logging"
	"fizmathplaza/ordering/internal/postgres"
	"fizmathplaza/ordering/internal/rest"

	"github.com/nats-io/nats.go/jetstream"
)

type Module struct{}

func (m Module) Startup(ctx context.Context, mono monolith.Monolith) (err error) {

	// Driven adapters
	orders := postgres.InjectOrderRepository("ordering.orders", mono.DB())
	JStream := jstream.NewStream(mono.Config().Nats.Stream, mono.JS(), mono.ST())

	consEnd, _ := mono.ST().CreateOrUpdateConsumer(ctx, jetstream.ConsumerConfig{
		Durable:       "processor-3",
		AckPolicy:     jetstream.AckExplicitPolicy,
		FilterSubject: "ORDERS.processed",
	})

	//  application
	var app application.App
	app = application.Inject(orders)
	app = logging.LogApplicationAccess(app, mono.Logger())
	domain.EventPublisher(JStream)

	//  Driver adapters
	consEnd.Consume(func(msg jetstream.Msg) {
		var dat map[string]interface{}
		if err := json.Unmarshal(msg.Data(), &dat); err != nil {
			panic(err)
		}
		app.ConfirmOrder(ctx, dat)
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
