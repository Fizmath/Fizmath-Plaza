package logging

import (
	"context"

	"github.com/rs/zerolog"

	"fizmathplaza/customers/internal/application"
	"fizmathplaza/customers/internal/domain"
)

type Application struct {
	application.App
	logger zerolog.Logger
}

var _ application.App = (*Application)(nil)

func LogApplicationAccess(application application.App, logger zerolog.Logger) Application {
	return Application{
		App:    application,
		logger: logger,
	}
}

func (a Application) RegisterCustomer(ctx context.Context, register application.RegisterCustomer) (err error) {
	defer func() { a.logger.Info().Err(err).Msg(" Customers.RegisterCustomer") }()
	return a.App.RegisterCustomer(ctx, register)
}

func (a Application) GetCustomer(ctx context.Context, get application.GetCustomer) (customer *domain.Customer,
	err error,
) {
	defer func() { a.logger.Info().Err(err).Msg(" Customers.GetCustomer") }()
	return a.App.GetCustomer(ctx, get)
}
