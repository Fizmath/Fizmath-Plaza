package postgres

import (
	"context"
	"database/sql"
	"encoding/json"
	"fmt"

	"fizmathplaza/ordering/internal/domain"

	"github.com/pkg/errors"
)

type OrderRepository struct {
	tableName string
	db        *sql.DB
}

var _ domain.OrderRepository = (*OrderRepository)(nil)

func InjectOrderRepository(tableName string, db *sql.DB) OrderRepository {
	return OrderRepository{
		tableName: tableName,
		db:        db,
	}
}

func (r OrderRepository) ByIdis(ctx context.Context, ordersID string) error {

	const query = "DELETE FROM %s WHERE order_id = $1 "

	_, err := r.db.ExecContext(ctx, r.table(query), ordersID)

	return errors.Wrap(err, "deleting store")
}

func (r OrderRepository) Find(ctx context.Context, orderID string) (*domain.Order, error) {
	const query = "SELECT customer_id, payment_id, items, status, status_bank, status_store , created_at FROM %s WHERE order_id = $1 ORDER BY created_at  DESC  LIMIT 1"
	order := &domain.Order{
		OrderID: orderID,
	}

	var items []byte
	err := r.db.QueryRowContext(ctx, r.table(query), orderID).Scan(&order.CustomerID, &order.PaymentID, &items, &order.Status, &order.StatusP, &order.StatusS, &order.CreatedAt)

	if err != nil {
		return nil, fmt.Errorf("scanning order in Find repository  '%w' ", err)
	}

	err = json.Unmarshal(items, &order.Items)
	if err != nil {
		return nil, fmt.Errorf("unmarshaling items  '%w' ", err)
	}

	return order, nil
}

func (r OrderRepository) Save(ctx context.Context, order *domain.Order) error {
	const query = "INSERT INTO %s ( order_id, customer_id, payment_id, items, status, status_bank, status_store) VALUES ($1, $2, $3, $4, $5 ,$6,$7)"

	items, err := json.Marshal(order.Items)
	if err != nil {
		return fmt.Errorf("marshalling  items '%w' ", err)
	}

	_, err = r.db.ExecContext(ctx, r.table(query), order.OrderID, order.CustomerID, order.PaymentID, items, order.Status.String(), order.StatusP.String(), order.StatusS.String())
	if err != nil {
		return fmt.Errorf("inserting order '%w' ", err)
	}

	return nil
}

func (r OrderRepository) table(query string) string {
	return fmt.Sprintf(query, r.tableName)
}

func (r OrderRepository) FindAll(ctx context.Context, EventSourcing bool) (allorders []*domain.Order, err error) {

	var query = "SELECT  distinct on (order_id) order_id, customer_id, payment_id, items, status, status_bank, status_store ,created_at  FROM %s ORDER BY order_id ,created_at  DESC  "

	if EventSourcing {
		query = "SELECT  order_id, customer_id, payment_id, items, status, status_bank, status_store ,created_at  FROM %s "
	}

	var rows *sql.Rows
	rows, err = r.db.QueryContext(ctx, r.table(query))
	if err != nil {
		return nil, fmt.Errorf("quering orders schemas   '%w' ", err)
	}
	defer func(rows *sql.Rows) {
		err := rows.Close()
		if err != nil {
			fmt.Println(err)
		}
	}(rows)

	var items []byte
	var status string

	for rows.Next() {
		product := &domain.Order{}
		err := rows.Scan(&product.OrderID, &product.CustomerID, &product.PaymentID, &items, &status, &product.StatusP, &product.StatusS, &product.CreatedAt)
		if err != nil {
			return nil, fmt.Errorf("scanning productos !  '%w' ", err)
		}
		product.Status = domain.ToOrderStatus(status)
		err = json.Unmarshal(items, &product.Items)
		if err != nil {
			return nil, fmt.Errorf("unmarshaling order '%w' ", err)
		}

		allorders = append(allorders, product)
	}

	return allorders, nil
}
