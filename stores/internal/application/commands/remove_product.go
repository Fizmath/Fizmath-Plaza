package commands

import (
	"context"

	"fizmathplaza/stores/internal/domain"
)

type Idss struct {
	ID string
}

type RemoveProduct struct {
	ID  string
	Ids []*Idss
}

type RemoveProductHandler struct {
	products domain.ProductRepository
}

func InjectRemoveProductHandler(products domain.ProductRepository) RemoveProductHandler {
	return RemoveProductHandler{
		products: products,
	}
}

func (h RemoveProductHandler) RemoveProduct(ctx context.Context, cmd RemoveProduct) error {

	product, err := h.products.Find(ctx, cmd.ID)
	if err != nil {
		return err
	}

	if err = product.Remove(); err != nil {
		return err
	}

	if err = h.products.Delete(ctx, cmd.ID); err != nil {
		return err
	}

	return nil
}
