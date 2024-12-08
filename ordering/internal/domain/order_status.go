package domain

type OrderStatus string

const (
	OrderIsPending    OrderStatus = "pending"
	OrderRejected     OrderStatus = "rejected"
	OrderIsCancelled  OrderStatus = "cancelled"
	OrderAccepted     OrderStatus = "accepted"
	InvoicePaid       OrderStatus = "delivered"
	NOT_ENOUGH_MONEY  OrderStatus = "NOT_ENOUGH_MONEY"
	OUT_OF_STOCK      OrderStatus = "OUT_OF_STOCK"
	Payment_CONFIRMED OrderStatus = "Payment_CONFIRMED"
	Stores_CONFIRMED  OrderStatus = "Stores_CONFIRMED"
)

func (s OrderStatus) String() string {
	switch s {
	case OrderIsPending, OrderIsCancelled, NOT_ENOUGH_MONEY, OUT_OF_STOCK,
		Payment_CONFIRMED, Stores_CONFIRMED, OrderAccepted, OrderRejected, InvoicePaid:
		return string(s)
	default:
		return ""
	}
}

func ToOrderStatus(status string) OrderStatus {
	switch status {
	case OrderIsCancelled.String():
		return OrderIsCancelled
	case OrderIsPending.String():
		return OrderIsPending
	case NOT_ENOUGH_MONEY.String():
		return NOT_ENOUGH_MONEY
	case OUT_OF_STOCK.String():
		return OUT_OF_STOCK
	case Stores_CONFIRMED.String():
		return Stores_CONFIRMED
	case Payment_CONFIRMED.String():
		return Payment_CONFIRMED
	case OrderAccepted.String():
		return OrderAccepted
	case OrderRejected.String():
		return OrderRejected
	case InvoicePaid.String():
		return InvoicePaid
	default:
		return OrderIsPending
	}
}
