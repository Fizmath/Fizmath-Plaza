package domain

import (
	"context"
)

type OrderRepository interface {
	Find(ctx context.Context, orderID string) (*Order, error)
	Save(ctx context.Context, order *Order) error
	FindAll(ctx context.Context, eventsourcing bool) ([]*Order, error)
	ByIdis(ctx context.Context, ids string) error
}
