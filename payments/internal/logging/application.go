package logging

import (
	"context"

	"github.com/rs/zerolog"

	"fizmathplaza/payments/internal/application"
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

func (a Application) AuthorizePayment(ctx context.Context, authorize application.AuthorizePayment) (err error) {
	defer func() { a.logger.Info().Err(err).Msg("Payments.AuthorizePayment") }()
	return a.App.AuthorizePayment(ctx, authorize)
}

func (a Application) ConfirmPayment(ctx context.Context, confirm application.ConP) (err error) {
	defer func() { a.logger.Info().Err(err).Msg(" Payments.ConfirmPayment") }()
	return a.App.ConfirmPayment(ctx, confirm)
}
