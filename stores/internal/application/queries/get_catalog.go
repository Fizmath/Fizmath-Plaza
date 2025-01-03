package queries

import (
	"context"

	"fizmathplaza/stores/internal/domain"
)

type GetCatalog struct {
	StoreID string
}

type GetCatalogHandler struct {
	products domain.ProductRepository
}

func InjectGetCatalogHandler(products domain.ProductRepository) GetCatalogHandler {
	return GetCatalogHandler{products: products}
}

func (h GetCatalogHandler) GetCatalog(ctx context.Context, query GetCatalog) ([]*domain.Product, error) {
	return h.products.GetCatalog(ctx, query.StoreID)
}
