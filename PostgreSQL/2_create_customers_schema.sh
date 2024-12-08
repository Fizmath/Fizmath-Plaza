#!/bin/sh
set -e

psql -v ON_ERROR_STOP=1 --username "$POSTGRES_USER" --dbname "fizmathplaza" <<-EOSQL
  CREATE SCHEMA customers;

  CREATE TABLE customers.customers
  (
      id         text NOT NULL,
      name       text NOT NULL,
      phone      text NOT NULL,
      created_at timestamptz NOT NULL DEFAULT NOW(),
      updated_at timestamptz NOT NULL DEFAULT NOW(),
      PRIMARY KEY (id)
  );

  CREATE TRIGGER created_at_customers_trgr BEFORE UPDATE ON customers.customers FOR EACH ROW EXECUTE PROCEDURE created_at_trigger();
  CREATE TRIGGER updated_at_customers_trgr BEFORE UPDATE ON customers.customers FOR EACH ROW EXECUTE PROCEDURE updated_at_trigger();

  GRANT USAGE ON SCHEMA customers TO fizmathplaza_user;
  GRANT USAGE, SELECT ON ALL SEQUENCES IN SCHEMA customers TO fizmathplaza_user;

  GRANT INSERT, UPDATE, DELETE, SELECT ON ALL TABLES IN SCHEMA customers TO fizmathplaza_user;
EOSQL
