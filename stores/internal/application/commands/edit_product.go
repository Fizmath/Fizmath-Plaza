package commands

import (
	"context"

	"fizmathplaza/stores/internal/domain"
)

type EDPHandler struct {
	stores   domain.StoreRepository
	products domain.ProductRepository
}

func InjectEDPHandler(stores domain.StoreRepository, products domain.ProductRepository) EDPHandler {
	return EDPHandler{
		stores:   stores,
		products: products,
	}
}

func (h EDPHandler) EditProduct(ctx context.Context, cmd AddProduct) error {

	product, err := h.products.Find(ctx, cmd.ID)
	if err != nil {
		return err
	}

	if err = product.EditDomain(cmd.Name, cmd.Description, cmd.SKU, cmd.Price); err != nil {
		return err
	}

	if err = h.products.Update(ctx, product); err != nil {
		return err
	}

	return nil
}
