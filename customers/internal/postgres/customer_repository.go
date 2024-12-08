package postgres

import (
	"context"
	"database/sql"
	"fizmathplaza/customers/internal/domain"
	"fmt"
)

type CustomerRepository struct {
	tableName string
	db        *sql.DB
}

var _ domain.CustomerRepository = (*CustomerRepository)(nil)

func InjectCustomerRepository(tableName string, db *sql.DB) CustomerRepository {
	return CustomerRepository{
		tableName: tableName,
		db:        db,
	}
}

func (r CustomerRepository) Save(ctx context.Context, customer *domain.Customer) error {
	const query = "INSERT INTO %s (id, name, phone) VALUES ($1, $2, $3 )"

	_, err := r.db.ExecContext(ctx, r.table(query), customer.ID, customer.Name, customer.Phone)

	if err != nil {
		return fmt.Errorf("cosutmers sql  : %w", err)
	}

	return nil
}

func (r CustomerRepository) Find(ctx context.Context, customerID string) (*domain.Customer, error) {
	const query = "SELECT name, phone FROM %s WHERE id = $1 LIMIT 1"

	customer := &domain.Customer{
		ID: customerID,
	}

	err := r.db.QueryRowContext(ctx, r.table(query), customerID).Scan(&customer.Name, &customer.Phone)

	return customer, err
}

func (r CustomerRepository) table(query string) string {
	return fmt.Sprintf(query, r.tableName)
}
