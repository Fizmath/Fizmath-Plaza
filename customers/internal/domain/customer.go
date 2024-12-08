package domain

import "errors"

type Customer struct {
	ID    string
	Name  string
	Phone string
}

var (
	ErrNameCannotBeBlank        = errors.New("the customer name cannot be blank")
	ErrCustomerIDCannotBeBlank  = errors.New("the customer id cannot be blank")
	ErrphoneNumberCannotBeBlank = errors.New("the phone number cannot be blank")
)

func RegisterCustomer(id, name, phone string) (*Customer, error) {
	if id == "" {
		return nil, ErrCustomerIDCannotBeBlank
	}

	if name == "" {
		return nil, ErrNameCannotBeBlank
	}

	if phone == "" {
		return nil, ErrphoneNumberCannotBeBlank
	}

	customer := &Customer{
		ID:    id,
		Name:  name,
		Phone: phone,
	}

	return customer, nil
}
