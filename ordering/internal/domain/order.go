package domain

import (
	"errors"
)

type Idss struct {
	OrderID string
}

type Rids struct {
	Ids []*Idss
}

var (
	ErrOrderHasNoItems         = errors.New("the order has no items")
	ErrOrderCannotBeCancelled  = errors.New("cannot be cancelled : the order delivered or olready canceled")
	ErrCustomerIDCannotBeBlank = errors.New("the customer id cannot be blank")
	ErrPaymentIDCannotBeBlank  = errors.New("the payment id cannot be blank")
)

type Order struct {
	OrderID    string
	CustomerID string
	PaymentID  string
	Items      []*Item
	Status     OrderStatus
	StatusP    OrderStatus
	StatusS    OrderStatus
	CreatedAt  string
}

func CreateOrder(orderId, customerID, paymentID string, items []*Item) (*Order, error) {
	if len(items) == 0 {
		return nil, ErrOrderHasNoItems
	}

	if customerID == "" {
		return nil, ErrCustomerIDCannotBeBlank
	}

	if paymentID == "" {
		return nil, ErrPaymentIDCannotBeBlank
	}

	order := &Order{
		OrderID:    orderId,
		CustomerID: customerID,
		PaymentID:  paymentID,
		Items:      items,
		Status:     OrderIsPending,
		StatusP:    OrderIsPending,
		StatusS:    OrderIsPending,
	}

	return order, nil
}

func (o *Order) Cancel() error {
	if o.Status == InvoicePaid || o.Status == OrderIsCancelled {
		return ErrOrderCannotBeCancelled
	}

	if o.Status == OrderRejected || o.Status == OrderAccepted {
		o.Status = OrderIsCancelled
		return nil
	}

	return nil
}
