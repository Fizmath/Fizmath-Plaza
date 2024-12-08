package commands

import (
	"context"
	"fmt"

	"fizmathplaza/ordering/internal/domain"
)

type Idss struct {
	OrderID string
}

type Rids struct {
	Ids []*Idss
}

func InjectIDsHandler(orders domain.OrderRepository) CreateOrderHandler {
	return CreateOrderHandler{
		orders: orders,
	}
}

func (h CreateOrderHandler) RemoveIDs(ctx context.Context, cmd Rids) (err error) {

	for _, item := range cmd.Ids {

		err = h.orders.ByIdis(ctx, item.OrderID)
		if err != nil {
			return fmt.Errorf("cannot iterate due to unexpected runtime error %w", err)
		}
	}

	return nil
}
