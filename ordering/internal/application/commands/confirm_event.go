package commands

import (
	"context"
	"errors"
	"fizmathplaza/ordering/internal/domain"
	"fmt"
)

type ConP map[string]interface{}

type ConfirmOrderHandler struct {
	orders domain.OrderRepository
}

func InjectConfirmOrderHandler(orders domain.OrderRepository) ConfirmOrderHandler {
	return ConfirmOrderHandler{
		orders: orders,
	}
}

func (h ConfirmOrderHandler) ConfirmOrder(ctx context.Context, dat ConP) error {

	orderid := fmt.Sprint(dat["OrderID"])
	message := domain.OrderStatus(fmt.Sprint(dat["Message"]))

	order, err := h.orders.Find(ctx, orderid)
	if err != nil {
		return fmt.Errorf("order creation save: %w", err)

	}

	neworder := &domain.Order{
		OrderID:    order.OrderID,
		CustomerID: order.CustomerID,
		PaymentID:  order.PaymentID,
		Items:      order.Items,
		Status:     order.Status,
		StatusP:    order.StatusP,
		StatusS:    order.StatusS,
	}

	if message != domain.InvoicePaid {

		if message == domain.NOT_ENOUGH_MONEY {
			neworder.StatusP = message
		} else if message == domain.OUT_OF_STOCK {
			neworder.StatusS = message
		} else if message == domain.Payment_CONFIRMED {
			neworder.StatusP = message
		} else {
			neworder.StatusS = domain.Stores_CONFIRMED
		}
		// double
		if neworder.StatusP == domain.Payment_CONFIRMED && neworder.StatusS == domain.Stores_CONFIRMED {
			neworder.Status = domain.OrderAccepted
		} else if neworder.StatusP == domain.NOT_ENOUGH_MONEY || neworder.StatusS == domain.OUT_OF_STOCK {
			neworder.Status = domain.OrderRejected
		}

	} else {

		if neworder.Status == domain.OrderAccepted {
			neworder.Status = message
		} else {
			return errors.New("the order not yet accepted")

		}
	}

	// event soucing
	if err = h.orders.Save(ctx, neworder); err != nil {
		return fmt.Errorf("order creation save: %w", err)
	}

	return nil
}
