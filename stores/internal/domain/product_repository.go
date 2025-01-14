package domain

import (
	"context"
)

type ProductRepository interface {
	Find(ctx context.Context, id string) (*Product, error)
	Save(ctx context.Context, product *Product) error
	Delete(ctx context.Context, id string) error
	GetCatalog(ctx context.Context, storeID string) ([]*Product, error)

	FindAll(ctx context.Context) ([]*Product, error)
	DeleteAP(ctx context.Context, id string) error

	Update(ctx context.Context, product *Product) error
}
