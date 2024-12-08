package queries

import (
	"context"

	"fizmathplaza/stores/internal/domain"
)

type GetAllProductHandler struct {
	products domain.ProductRepository
}

func InjectGetAllProductHandler(products domain.ProductRepository) GetAllProductHandler {
	return GetAllProductHandler{products: products}
}

func (h GetCatalogHandler) GetAllProduct(ctx context.Context) ([]*domain.Product, error) {
	return h.products.FindAll(ctx)
}
