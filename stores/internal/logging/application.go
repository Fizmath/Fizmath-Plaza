package logging

import (
	"context"

	"github.com/rs/zerolog"

	"fizmathplaza/stores/internal/application"
	"fizmathplaza/stores/internal/application/commands"
	"fizmathplaza/stores/internal/application/queries"
	"fizmathplaza/stores/internal/domain"
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

func (a Application) CreateStore(ctx context.Context, cmd commands.CreateStore) (err error) {
	defer func() { a.logger.Info().Err(err).Msg(" Stores.CreateStore") }()
	return a.App.CreateStore(ctx, cmd)
}

func (a Application) EnableParticipation(ctx context.Context, cmd commands.EnableParticipation) (err error) {
	defer func() { a.logger.Info().Err(err).Msg(" Stores.EnableParticipation") }()
	return a.App.EnableParticipation(ctx, cmd)
}

func (a Application) DisableParticipation(ctx context.Context, cmd commands.DisableParticipation) (err error) {
	defer func() { a.logger.Info().Err(err).Msg(" Stores.DisableParticipation") }()
	return a.App.DisableParticipation(ctx, cmd)
}

func (a Application) AddProduct(ctx context.Context, cmd commands.AddProduct) (err error) {
	defer func() { a.logger.Info().Err(err).Msg("Stores.AddProduct") }()
	return a.App.AddProduct(ctx, cmd)
}

func (a Application) RemoveProduct(ctx context.Context, cmd commands.RemoveProduct) (err error) {
	defer func() { a.logger.Info().Err(err).Msg(" Stores.RemoveProduct") }()
	return a.App.RemoveProduct(ctx, cmd)
}

func (a Application) GetStore(ctx context.Context, query queries.GetStore) (store *domain.Store, err error) {
	defer func() { a.logger.Info().Err(err).Msg(" Stores.GetStore") }()
	return a.App.GetStore(ctx, query)
}

func (a Application) GetStores(ctx context.Context, query queries.GetStores) (stores []*domain.Store, err error) {
	defer func() { a.logger.Info().Err(err).Msg(" Stores.GetStores") }()
	return a.App.GetStores(ctx, query)
}

func (a Application) GetCatalog(ctx context.Context, query queries.GetCatalog) (products []*domain.Product, err error) {
	defer func() { a.logger.Info().Err(err).Msg(" Stores.GetCatalog") }()
	return a.App.GetCatalog(ctx, query)
}

func (a Application) GetProduct(ctx context.Context, query queries.GetProduct) (product *domain.Product, err error) {
	defer func() { a.logger.Info().Err(err).Msg(" Stores.GetProduct") }()
	return a.App.GetProduct(ctx, query)
}

func (a Application) EditProduct(tx context.Context, cmd commands.AddProduct) (err error) {
	defer func() { a.logger.Info().Err(err).Msg(" Stores.EditProduct") }()
	return a.App.EditProduct(tx, cmd)
}

func (a Application) ConfirmStores(ctx context.Context, dat queries.ConP) (err error) {
	defer func() { a.logger.Info().Err(err).Msg(" Stores.ConfirmStores") }()
	return a.App.ConfirmStores(ctx, dat)
}
