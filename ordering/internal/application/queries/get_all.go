package queries

import (
	"context"

	"fizmathplaza/ordering/internal/domain"
)

type GetAllHandler struct {
	repo domain.OrderRepository
}

type EventSourcing struct {
	Events bool
}

func InjectGetAllHandler(repo domain.OrderRepository) GetAllHandler {
	return GetAllHandler{repo: repo}
}

func (h GetAllHandler) GetAll(ctx context.Context, eventsourcing EventSourcing) ([]*domain.Order, error) {
	order, err := h.repo.FindAll(ctx, eventsourcing.Events)

	return order, err
}
