package postgres

import (
	"context"
	"database/sql"
	"fmt"

	"fizmathplaza/stores/internal/domain"
)

type ProductRepository struct {
	tableName string
	db        *sql.DB
}

var _ domain.ProductRepository = (*ProductRepository)(nil)

func InjectProductRepository(tableName string, db *sql.DB) ProductRepository {
	return ProductRepository{tableName: tableName, db: db}
}

func (r ProductRepository) Update(ctx context.Context, product *domain.Product) error {
	const query = "UPDATE %s SET  name = $2, description = $3, sku = $4 , price = $5 WHERE id = $1"

	_, err := r.db.ExecContext(ctx, r.table(query), product.ID, product.Name, product.Description, product.SKU, product.Price)
	if err != nil {
		return fmt.Errorf("scanning producte '%w' ", err)
	}

	return nil
}

func (r ProductRepository) Find(ctx context.Context, id string) (*domain.Product, error) {
	const query = "SELECT store_id, name, description, sku, price FROM %s WHERE id = $1 "

	product := &domain.Product{
		ID: id,
	}

	err := r.db.QueryRowContext(ctx, r.table(query), id).Scan(&product.StoreID, &product.Name, &product.Description, &product.SKU, &product.Price)
	if err != nil {
		return nil, fmt.Errorf("scanning producte '%w' ", err)
	}

	return product, nil
}

func (r ProductRepository) Save(ctx context.Context, product *domain.Product) error {
	const query = "INSERT INTO %s (id, store_id, name, description, sku, price) VALUES ($1, $2, $3, $4, $5, $6)"

	_, err := r.db.ExecContext(ctx, r.table(query), product.ID, product.StoreID, product.Name, product.Description, product.SKU, product.Price)

	return err
}

func (r ProductRepository) DeleteAP(ctx context.Context, id string) error {

	const query = "DELETE FROM %s WHERE store_id = $1 "

	fmt.Println(" all products deleted from dog  re")

	_, err := r.db.ExecContext(ctx, r.table(query), id)

	if err != nil {
		return fmt.Errorf("scanning producte '%w' ", err)
	}

	return nil
}

func (r ProductRepository) Delete(ctx context.Context, id string) error {

	const query = "DELETE FROM %s WHERE id = $1 "

	_, err := r.db.ExecContext(ctx, r.table(query), id)

	if err != nil {
		return fmt.Errorf(" deleting product'%w' ", err)
	}

	return nil
}

func (r ProductRepository) GetCatalog(ctx context.Context, storeID string) ([]*domain.Product, error) {
	const query = "SELECT id, name, description, sku, price FROM %s WHERE store_id = $1"

	products := make([]*domain.Product, 0)

	rows, err := r.db.QueryContext(ctx, r.table(query), storeID)
	if err != nil {
		return nil, fmt.Errorf("query producte '%w' ", err)
	}
	defer func(rows *sql.Rows) {
		err := rows.Close()
		if err != nil {
			err := fmt.Errorf("closing rows '%w' ", err)
			fmt.Println(err.Error())
		}
	}(rows)

	for rows.Next() {
		product := &domain.Product{
			StoreID: storeID,
		}
		err := rows.Scan(&product.ID, &product.Name, &product.Description, &product.SKU, &product.Price)
		if err != nil {
			return nil, fmt.Errorf("scanning  '%w' ", err)
		}

		products = append(products, product)
	}

	if err = rows.Err(); err != nil {
		return nil, fmt.Errorf("finishing rows : '%w' ", err)
	}

	return products, nil
}

func (r ProductRepository) table(query string) string {
	return fmt.Sprintf(query, r.tableName)
}

func (r ProductRepository) FindAll(ctx context.Context) (products []*domain.Product, err error) {
	const query = `SELECT id, store_id,  name, description, sku, price FROM %s `

	var rows *sql.Rows
	rows, err = r.db.QueryContext(ctx, r.table(query))
	if err != nil {
		return nil, fmt.Errorf("quering  '%w' ", err)
	}
	defer func(rows *sql.Rows) {
		err := rows.Close()
		if err != nil {
			err := fmt.Errorf("closing rows '%w' ", err)
			fmt.Println(err.Error())
		}
	}(rows)

	for rows.Next() {
		product := &domain.Product{}
		err := rows.Scan(&product.ID, &product.StoreID, &product.Name, &product.Description, &product.SKU, &product.Price)
		if err != nil {
			return nil, fmt.Errorf("scanning producte '%w' ", err)
		}

		products = append(products, product)
	}

	if err = rows.Err(); err != nil {
		return nil, fmt.Errorf("finishing row '%w' ", err)
	}

	return products, nil
}
