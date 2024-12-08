package application

import (
	"context"

	"fizmathplaza/customers/internal/domain"
)

type (
	RegisterCustomer struct {
		ID    string
		Name  string
		Phone string
	}

	GetCustomer struct {
		ID string
	}

	App interface {
		RegisterCustomer(ctx context.Context, register RegisterCustomer) error
		GetCustomer(ctx context.Context, get GetCustomer) (*domain.Customer, error)
	}

	Application struct {
		customers domain.CustomerRepository
	}
)

var _ App = (*Application)(nil)

func Inject(customers domain.CustomerRepository) *Application {
	return &Application{
		customers: customers,
	}
}

func (a Application) RegisterCustomer(ctx context.Context, register RegisterCustomer) error {
	customer, err := domain.RegisterCustomer(register.ID, register.Name, register.Phone)
	if err != nil {
		return err
	}

	if err = a.customers.Save(ctx, customer); err != nil {
		return err
	}

	return nil
}

func (a Application) GetCustomer(ctx context.Context, get GetCustomer) (*domain.Customer, error) {
	return a.customers.Find(ctx, get.ID)
}
