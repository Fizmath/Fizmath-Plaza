package commands

import (
	"context"

	"fizmathplaza/stores/internal/domain"
)

type RemoveST struct {
	ID string
}

type RemoveSTHandler struct {
	store    domain.StoreRepository
	products domain.ProductRepository
}

func InjectRemoveSTHandler(store domain.StoreRepository, products domain.ProductRepository) RemoveSTHandler {
	return RemoveSTHandler{
		store:    store,
		products: products,
	}
}

func (h RemoveSTHandler) RemoveST(ctx context.Context, cmd RemoveST) error {

	err := h.products.DeleteAP(ctx, cmd.ID)

	if err != nil {
		return err
	}

	err2 := h.store.Delete(ctx, cmd.ID)
	if err2 != nil {
		return err2
	}

	return nil
}
