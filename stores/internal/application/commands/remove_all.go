package commands

import (
	"context"
	"fmt"

	"fizmathplaza/stores/internal/domain"
)

type RemoveIDSHandler struct {
	products domain.ProductRepository
}

func InjectRemoveIDSHandler(products domain.ProductRepository) RemoveIDSHandler {
	return RemoveIDSHandler{
		products: products,
	}
}

func (h RemoveProductHandler) RemoveIDS(ctx context.Context, cmd RemoveProduct) error {

	for _, item := range cmd.Ids {

		product, err := h.products.Find(ctx, item.ID)
		if err != nil {
			return fmt.Errorf("cannot iterate due to unexpected runtime error %v", err)
		}

		if err = product.Remove(); err != nil {
			return fmt.Errorf("cannot iterate due to unexpected runtime error %v", err)
		}

		if err = h.products.Delete(ctx, item.ID); err != nil {
			return fmt.Errorf("cannot iterate due to unexpected runtime error %v", err)
		}

	}

	return nil
}
