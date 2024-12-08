package commands

import (
	"context"
	"fmt"

	"fizmathplaza/ordering/internal/domain"

	"github.com/pkg/errors"
)

type CreateOrder struct {
	OrderID    string
	CustomerID string
	PaymentID  string
	Items      []*domain.Item
}

type CreateOrderHandler struct {
	orders domain.OrderRepository
}

func InjectCreateOrderHandler(orders domain.OrderRepository) CreateOrderHandler {
	return CreateOrderHandler{
		orders: orders,
	}
}

func (h CreateOrderHandler) CreateOrder(ctx context.Context, cmd CreateOrder) error {
	order, err := domain.CreateOrder(cmd.OrderID, cmd.CustomerID, cmd.PaymentID, cmd.Items)
	if err != nil {
		return errors.Wrap(err, "create order command")
	}

	if err = h.orders.Save(ctx, order); err != nil {
		return errors.Wrap(err, "order creation save")
	}

	if err = domain.Injector.OrderCreatedEvent(ctx, order, "published"); err != nil {

		err = h.orders.ByIdis(ctx, cmd.OrderID)
		if err != nil {
			return fmt.Errorf("order event removal  %w", err)
		}

		return errors.Wrap(err, "order event failed")
	}

	return nil
}
