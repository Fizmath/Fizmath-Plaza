package commands

import (
	"context"
	"fmt"

	"fizmathplaza/stores/internal/domain"
)

type AddProduct struct {
	ID          string
	StoreID     string
	Name        string
	Description string
	SKU         int32
	Price       float64
}

type AddProductHandler struct {
	stores   domain.StoreRepository
	products domain.ProductRepository
}

func InjectAddProductHandler(stores domain.StoreRepository, products domain.ProductRepository) AddProductHandler {
	return AddProductHandler{
		stores:   stores,
		products: products,
	}
}

func (h AddProductHandler) AddProduct(ctx context.Context, cmd AddProduct) error {
	if _, err := h.stores.Find(ctx, cmd.StoreID); err != nil {
		return fmt.Errorf("error adding product %w", err)
	}

	product, err := domain.CreateProduct(cmd.ID, cmd.StoreID, cmd.Name, cmd.Description, cmd.SKU, cmd.Price)
	if err != nil {
		return fmt.Errorf("error adding product %w", err)
	}

	if err = h.products.Save(ctx, product); err != nil {
		return fmt.Errorf("error adding product %w", err)

	}

	return nil
}
