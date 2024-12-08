package payments

import (
	"context"
	"encoding/json"

	"fizmathplaza/internal/jstream"
	"fizmathplaza/internal/monolith"
	"fizmathplaza/payments/internal/application"
	"fizmathplaza/payments/internal/grpc"
	"fizmathplaza/payments/internal/logging"
	"fizmathplaza/payments/internal/postgres"
	"fizmathplaza/payments/internal/rest"

	"github.com/nats-io/nats.go/jetstream"
)

type Module struct{}

func (m Module) Startup(ctx context.Context, mono monolith.Monolith) error {

	//  Driven adapters
	payments := postgres.InjectPaymentRepository("payments.payments", mono.DB())

	JStream := jstream.NewStream(mono.Config().Nats.Stream, mono.JS(), mono.ST())

	cons1, _ := mono.ST().CreateOrUpdateConsumer(ctx, jetstream.ConsumerConfig{
		Durable:       "processor-1",
		AckPolicy:     jetstream.AckExplicitPolicy,
		FilterSubject: "ORDERS.published",
	})

	//  Application
	var app application.App
	app = application.Inject(payments)
	app = logging.LogApplicationAccess(app, mono.Logger())
	application.EventHandlers(JStream)

	//  Driver adapters
	cons1.Consume(func(msg jetstream.Msg) {
		var dat map[string]interface{}
		if err := json.Unmarshal(msg.Data(), &dat); err != nil {
			panic(err)
		}
		app.ConfirmPayment(ctx, dat)
		msg.Ack()
	})
	if err := grpc.RegisterServer(ctx, app, mono.RPC()); err != nil {
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

// • Driven or secondary adapters are the database, loggers, and event producers that are driven
// by the application with some information

// • Driver or primary adapters are the web UIs, APIs, and event consumers that drive information
// in our application

// a port or interface, and an
// adapter or implementation

// Using this technique, our applications will now be isolated from the changes
// made to the outside dependencies

// The Driven adapters implement the ports in the application and only need infrastructure to
// be constructed.
// 2.The application is constructed next and needs the Driven adapters but not the Driver adapters.
// 3.Finally, the Driver adapters are constructed using a combination of infrastructure and the
// application. At this level, we are more concerned with concrete values and try to avoid abstractions.
// This pattern is simple, predictable, and boring, and all three of those characteristics are positives.
