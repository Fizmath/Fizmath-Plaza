package queries

import (
	"context"

	"fizmathplaza/ordering/internal/domain"
)

type GetOrder struct {
	OrderID string
}

type GetOrderHandler struct {
	repo domain.OrderRepository
}

func InjectGetOrderHandler(repo domain.OrderRepository) GetOrderHandler {
	return GetOrderHandler{repo: repo}
}

func (h GetOrderHandler) GetOrder(ctx context.Context, query GetOrder) (*domain.Order, error) {
	order, err := h.repo.Find(ctx, query.OrderID)

	return order, err
}
