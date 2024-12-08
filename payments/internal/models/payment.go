package models

type Payment struct {
	ID         string
	OrderID    string
	CustomerID string
	Amount     float64
}
