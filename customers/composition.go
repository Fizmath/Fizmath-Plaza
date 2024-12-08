package customers

import (
	"context"
	"fizmathplaza/customers/internal/application"
	"fizmathplaza/customers/internal/grpc"
	"fizmathplaza/customers/internal/logging"
	"fizmathplaza/customers/internal/postgres"
	"fizmathplaza/customers/internal/rest"
	"fizmathplaza/internal/monolith"
)

type Module struct{}

func (m Module) Startup(ctx context.Context, mono monolith.Monolith) error {
	// Driven adapters
	customers := postgres.InjectCustomerRepository("customers.customers", mono.DB())

	// application
	app := logging.LogApplicationAccess(
		application.Inject(customers),
		mono.Logger(),
	)
	// Driver adapters
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
