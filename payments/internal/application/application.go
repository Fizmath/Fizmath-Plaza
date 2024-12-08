package application

import (
	"context"
	"fmt"
	"time"

	"fizmathplaza/payments/internal/models"
)

type (
	PayInvoice struct {
		OrderID string
	}

	AuthorizePayment struct {
		ID         string
		CustomerID string
		Amount     float64
	}

	ConP map[string]interface{}

	App interface {
		AuthorizePayment(ctx context.Context, authorize AuthorizePayment) error
		PayInvoice(ctx context.Context, orderid PayInvoice) error
		ConfirmPayment(ctx context.Context, dat ConP) error
	}

	Application struct {
		payments PaymentRepository
	}
)

var _ App = (*Application)(nil)

func Inject(payments PaymentRepository) *Application {
	return &Application{
		payments: payments,
	}
}

func (a Application) AuthorizePayment(ctx context.Context, authorize AuthorizePayment) error {
	return a.payments.Save(ctx, &models.Payment{
		ID:         authorize.ID,
		CustomerID: authorize.CustomerID,
		Amount:     authorize.Amount,
	})
}

func (a Application) ConfirmPayment(ctx context.Context, dat ConP) error {
	time.Sleep(5 * time.Second)

	message := &Order{OrderID: fmt.Sprint(dat["OrderID"]), From: "Payment", Message: "Payment_CONFIRMED"}

	payment, err := a.payments.Find(ctx, fmt.Sprint(dat["PaymentID"]))
	if err != nil || payment == nil {
		return fmt.Errorf("payment cannot be confirmed %w", err)
	}

	strs := dat["Items"].([]interface{})
	var sum float64
	for i := range strs {
		prodid := strs[i].(map[string]interface{})["Price"].(float64)
		quantity := strs[i].(map[string]interface{})["Quantity"].(float64)
		sum += prodid * quantity
	}

	if sum > payment.Amount {
		message.Message = "NOT_ENOUGH_MONEY"

	}

	Injector.PubPayment(ctx, message, "processed")
	return nil
}
func (a Application) PayInvoice(ctx context.Context, orderid PayInvoice) error {

	message := &Order{OrderID: orderid.OrderID, From: "Payment", Message: "delivered"}

	Injector.PubInvoice(ctx, message, "processed")

	return nil

}
