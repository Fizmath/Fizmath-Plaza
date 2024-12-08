package application

import (
	"context"

	"fizmathplaza/ordering/internal/application/commands"
	"fizmathplaza/ordering/internal/application/queries"
	"fizmathplaza/ordering/internal/domain"
)

type (
	App interface {
		Commands
		Queries
	}
	Commands interface {
		CreateOrder(ctx context.Context, cmd commands.CreateOrder) error
		CancelOrder(ctx context.Context, cmd commands.CancelOrder) error
		RemoveIDs(ctx context.Context, cmd commands.Rids) error
		// event
		ConfirmOrder(ctx context.Context, cmd commands.ConP) error
	}
	Queries interface {
		GetOrder(ctx context.Context, query queries.GetOrder) (*domain.Order, error)
		GetAll(ctx context.Context, query queries.EventSourcing) ([]*domain.Order, error)
	}

	Application struct {
		appCommands
		appQueries
	}
	appCommands struct {
		commands.CreateOrderHandler
		commands.CancelOrderHandler
		commands.ConfirmOrderHandler
	}
	appQueries struct {
		queries.GetOrderHandler
		queries.GetAllHandler
	}
)

var _ App = (*Application)(nil)

func Inject(orders domain.OrderRepository) *Application {
	return &Application{
		appCommands: appCommands{
			CreateOrderHandler:  commands.InjectCreateOrderHandler(orders),
			CancelOrderHandler:  commands.InjectCancelOrderHandler(orders),
			ConfirmOrderHandler: commands.InjectConfirmOrderHandler(orders),
		},
		appQueries: appQueries{
			GetOrderHandler: queries.InjectGetOrderHandler(orders),
			GetAllHandler:   queries.InjectGetAllHandler(orders),
		},
	}
}
