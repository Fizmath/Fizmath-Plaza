#!/bin/sh
set -e

psql -v ON_ERROR_STOP=1 --username "$POSTGRES_USER" --dbname "fizmathplaza" <<-EOSQL
  CREATE SCHEMA ordering;

  CREATE TABLE ordering.orders
  (
    event_id      SERIAL NOT NULL,
    order_id      text NOT NULL,
    customer_id   text NOT NULL,
    payment_id    text NOT NULL,
    status_bank   text NOT NULL,
    status_store  text NOT NULL,
    items         bytea NOT NULL,
    status        text NOT NULL,
    created_at    timestamptz NOT NULL DEFAULT NOW(),
    PRIMARY KEY   (event_id)
  );

  CREATE TRIGGER created_at_orders_trgr BEFORE UPDATE ON ordering.orders FOR EACH ROW EXECUTE PROCEDURE created_at_trigger();
  

  GRANT USAGE ON SCHEMA ordering TO fizmathplaza_user; 

  GRANT USAGE, SELECT ON ALL SEQUENCES IN SCHEMA ordering TO fizmathplaza_user;


  GRANT INSERT, UPDATE, DELETE, SELECT ON ALL TABLES IN SCHEMA ordering TO fizmathplaza_user;
EOSQL
