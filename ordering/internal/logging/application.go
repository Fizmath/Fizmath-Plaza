package logging

import (
	"context"

	"github.com/rs/zerolog"

	"fizmathplaza/ordering/internal/application"
	"fizmathplaza/ordering/internal/application/commands"
	"fizmathplaza/ordering/internal/application/queries"
	"fizmathplaza/ordering/internal/domain"
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

func (a Application) CreateOrder(ctx context.Context, cmd commands.CreateOrder) (err error) {
	defer func() { a.logger.Info().Err(err).Msg("Ordering.CreateOrder") }()
	return a.App.CreateOrder(ctx, cmd)
}

func (a Application) CancelOrder(ctx context.Context, cmd commands.CancelOrder) (err error) {
	defer func() { a.logger.Info().Err(err).Msg("Ordering.CancelOrder") }()
	return a.App.CancelOrder(ctx, cmd)
}

func (a Application) GetOrder(ctx context.Context, query queries.GetOrder) (order *domain.Order, err error) {
	defer func() { a.logger.Info().Err(err).Msg(" Ordering.GetOrder") }()
	return a.App.GetOrder(ctx, query)
}

func (a Application) ConfirmOrder(ctx context.Context, query commands.ConP) (err error) {
	defer func() { a.logger.Info().Err(err).Msg("ORDER.JETSTREAM") }()
	return a.App.ConfirmOrder(ctx, query)
}

func (a Application) GetAll(ctx context.Context, query queries.EventSourcing) (order []*domain.Order, err error) {
	defer func() { a.logger.Info().Err(err).Msg("Ordering.GetAllOrders") }()
	return a.App.GetAll(ctx, query)
}

func (a Application) RemoveIDs(ctx context.Context, cmd commands.Rids) (err error) {
	defer func() { a.logger.Info().Err(err).Msg("Ordering.IDssDeletion") }()
	return a.App.RemoveIDs(ctx, cmd)
}
