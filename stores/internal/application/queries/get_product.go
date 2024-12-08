package queries

import (
	"context"

	"fizmathplaza/stores/internal/domain"
)

type GetProduct struct {
	ID string
}
type ConP map[string]interface{}

type GetProductHandler struct {
	products domain.ProductRepository
}

func InjectGetProductHandler(products domain.ProductRepository) GetProductHandler {
	return GetProductHandler{products: products}
}

func (h GetProductHandler) GetProduct(ctx context.Context, query GetProduct) (*domain.Product, error) {
	return h.products.Find(ctx, query.ID)
}
