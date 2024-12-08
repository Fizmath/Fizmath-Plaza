package domain

import (
	"errors"
)

var (
	ErrProductNameIsBlank         = errors.New("the product name cannot be blank")
	ErrProductPriceIsNegative     = errors.New("the product price cannot be negative or Zero")
	ErrProductSKUcannotbeNegative = errors.New("the product SKU cannot be negative")

	ErrProductDEscriptionBlank = errors.New("the product Description cannot be blank")
)

type Product struct {
	ID          string
	StoreID     string
	Name        string
	Description string
	SKU         int32
	Price       float64
}

func (s *Product) EditDomain(name string, description string, sku int32, price float64) error {
	if name == "" {
		return ErrProductNameIsBlank
	}

	if description == "" {
		return ErrProductDEscriptionBlank
	}

	if sku < 0 {
		return ErrProductSKUcannotbeNegative
	}

	if price <= 0 {
		return ErrProductPriceIsNegative
	}

	s.Name = name
	s.Description = description
	s.SKU = sku
	s.Price = price

	return nil
}

func CreateProduct(id, storeID, name, description string, sku int32, price float64) (*Product, error) {
	if name == "" {
		return nil, ErrProductNameIsBlank
	}

	if price < 0 {
		return nil, ErrProductPriceIsNegative
	}

	product := &Product{
		ID:          id,
		StoreID:     storeID,
		Name:        name,
		Description: description,
		SKU:         sku,
		Price:       price,
	}

	return product, nil
}

func (p *Product) Remove() error {

	return nil
}
