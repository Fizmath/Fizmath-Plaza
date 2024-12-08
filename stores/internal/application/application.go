package application

import (
	"context"

	"fizmathplaza/stores/internal/application/commands"
	"fizmathplaza/stores/internal/application/queries"
	"fizmathplaza/stores/internal/domain"
)

type (
	App interface {
		Commands
		Queries
	}
	Commands interface {
		CreateStore(ctx context.Context, cmd commands.CreateStore) error
		RebrandStore(ctx context.Context, cmd commands.RebrandStore) error
		EnableParticipation(ctx context.Context, cmd commands.EnableParticipation) error
		DisableParticipation(ctx context.Context, cmd commands.DisableParticipation) error
		RemoveProduct(ctx context.Context, cmd commands.RemoveProduct) error
		RemoveST(ctx context.Context, cmd commands.RemoveST) error
		// products
		RemoveIDS(ctx context.Context, cmd commands.RemoveProduct) error
		RemoveO(ctx context.Context, cmd commands.RemoveO) error
		EditProduct(ctx context.Context, cmd commands.AddProduct) error
		AddProduct(ctx context.Context, cmd commands.AddProduct) error
		// events
		ConfirmStores(ctx context.Context, dat queries.ConP) error
	}
	Queries interface {
		GetStore(ctx context.Context, query queries.GetStore) (*domain.Store, error)
		GetStores(ctx context.Context, query queries.GetStores) ([]*domain.Store, error)
		GetCatalog(ctx context.Context, query queries.GetCatalog) ([]*domain.Product, error)
		GetProduct(ctx context.Context, query queries.GetProduct) (*domain.Product, error)
		GetAllProduct(ctx context.Context) ([]*domain.Product, error)
	}

	Application struct {
		appCommands
		appQueries
	}
	appCommands struct {
		commands.CreateStoreHandler
		commands.EnableParticipationHandler
		commands.DisableParticipationHandler
		commands.AddProductHandler
		commands.RemoveProductHandler

		commands.RebrandStoreHandler
		commands.RemoveIDSHandler
		commands.RemoveOHandler
		commands.RemoveSTHandler
		commands.EDPHandler

		commands.ConfirmStoresHandler
	}
	appQueries struct {
		queries.GetStoreHandler
		queries.GetStoresHandler
		queries.GetCatalogHandler
		queries.GetProductHandler

		queries.GetAllProductHandler
	}
)

var _ App = (*Application)(nil)

func Inject(stores domain.StoreRepository, products domain.ProductRepository) *Application {
	return &Application{
		appCommands: appCommands{
			CreateStoreHandler:          commands.InjectCreateStoreHandler(stores),
			EnableParticipationHandler:  commands.InjectEnableParticipationHandler(stores),
			DisableParticipationHandler: commands.InjectDisableParticipationHandler(stores),
			AddProductHandler:           commands.InjectAddProductHandler(stores, products),
			RemoveProductHandler:        commands.InjectRemoveProductHandler(products),

			RebrandStoreHandler: commands.InjectRebrandStoreHandler(stores),
			RemoveIDSHandler:    commands.InjectRemoveIDSHandler(products),
			RemoveOHandler:      commands.InjectRemoveOHandler(products),
			RemoveSTHandler:     commands.InjectRemoveSTHandler(stores, products),
			EDPHandler:          commands.InjectEDPHandler(stores, products),

			ConfirmStoresHandler: commands.InjectConfirmStoresHandler(products),
		},
		appQueries: appQueries{
			GetStoreHandler:   queries.InjectGetStoreHandler(stores),
			GetStoresHandler:  queries.InjectGetStoresHandler(stores),
			GetCatalogHandler: queries.InjectGetCatalogHandler(products),
			GetProductHandler: queries.InjectGetProductHandler(products),

			GetAllProductHandler: queries.InjectGetAllProductHandler(products),
		},
	}
}
