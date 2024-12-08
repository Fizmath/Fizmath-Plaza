package commands

import (
	"context"
	"fmt"

	"fizmathplaza/ordering/internal/domain"
)

type CancelOrder struct {
	OrderID string
}

type CancelOrderHandler struct {
	orders domain.OrderRepository
}

func InjectCancelOrderHandler(orders domain.OrderRepository) CancelOrderHandler {
	return CancelOrderHandler{
		orders: orders,
	}
}

func (h CancelOrderHandler) CancelOrder(ctx context.Context, cmd CancelOrder) error {
	order, err := h.orders.Find(ctx, cmd.OrderID)
	if err != nil {
		return err
	}

	if err = order.Cancel(); err != nil {
		return err
	}

	if err = h.orders.Save(ctx, order); err != nil {
		return fmt.Errorf("order creation save: %w", err)
	}

	return nil
}
