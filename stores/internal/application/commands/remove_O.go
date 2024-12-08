package commands

import (
	"context"

	"fizmathplaza/stores/internal/domain"
)

type RemoveO struct {
	ID string
}

type RemoveOHandler struct {
	products domain.ProductRepository
}

func InjectRemoveOHandler(products domain.ProductRepository) RemoveOHandler {
	return RemoveOHandler{
		products: products,
	}
}

func (h RemoveOHandler) RemoveO(ctx context.Context, cmd RemoveO) error {

	err := h.products.DeleteAP(ctx, cmd.ID)
	if err != nil {
		return err
	}

	return nil
}
