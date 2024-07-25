CREATE TABLE "franchises" (
  "franchises_id" serial PRIMARY KEY NOT NULL,
  "city" varchar(255) NOT NULL,
  "country" varchar(150) NOT NULL,
  "phone" varchar(20) NOT NULL,
  "email" varchar(255) UNIQUE NOT NULL,
  "status" varchar(20) DEFAULT 'active',
  "owner" varchar(255) NOT NULL
);

CREATE TABLE "users" (
  "user_id" SERIAL PRIMARY KEY NOT NULL,
  "franchise_id" INT,
  "first_name" VARCHAR(255) NOT NULL,
  "last_name" VARCHAR(255) NOT NULL,
  "email" VARCHAR(255) UNIQUE NOT NULL,
  "password_hash" VARCHAR(255) NOT NULL,
  "role" VARCHAR(50) NOT NULL
);

CREATE TABLE "customers" (
  "customer_id" SERIAL PRIMARY KEY,
  "first_name" VARCHAR(255) NOT NULL,
  "last_name" VARCHAR(255) NOT NULL,
  "ci" VARCHAR(255) UNIQUE NOT NULL,
  "email" VARCHAR(255) UNIQUE,
  "phone" VARCHAR(20),
  "address" TEXT,
  "city" VARCHAR(255),
  "country" VARCHAR(255) DEFAULT 'Ecuador'
);

CREATE TABLE "products" (
  "product_id" SERIAL PRIMARY KEY,
  "name" VARCHAR(255) NOT NULL,
  "category_id" INT,
  "price" DECIMAL(10,2) NOT NULL
);

CREATE TABLE "categories" (
  "category_id" SERIAL PRIMARY KEY,
  "name" VARCHAR(255) NOT NULL,
  "description" TEXT
);

CREATE TABLE "inventory" (
  "inventory_id" SERIAL PRIMARY KEY,
  "franchise_id" INT,
  "product_id" INT,
  "quantity" INT NOT NULL,
  "date_udpdate" TIMESTAMP DEFAULT (CURRENT_TIMESTAMP)
);

CREATE TABLE "invoices" (
  "invoice_id" SERIAL PRIMARY KEY,
  "franchise_id" INT,
  "customer_id" INT,
  "sales_point_id" INT,
  "invoice_date" TIMESTAMP DEFAULT (CURRENT_TIMESTAMP),
  "total_amount" DECIMAL(10,2) NOT NULL,
  "status_id" INT,
  "payment_method_id" INT,
  "invoice_type" VARCHAR(20) NOT NULL DEFAULT 'Cliente'
);

CREATE TABLE "invoice_items" (
  "invoice_item_id" SERIAL PRIMARY KEY,
  "invoice_id" INT,
  "product_id" INT,
  "quantity" INT NOT NULL,
  "unit_price" DECIMAL(10,2) NOT NULL,
  "subtotal" DECIMAL(10,2) NOT NULL
);

CREATE TABLE "payment_status" (
  "status_id" SERIAL PRIMARY KEY,
  "name_status" varchar(255)
);

CREATE TABLE "orders" (
  "order_id" SERIAL PRIMARY KEY,
  "franchise_id" INT,
  "customer_id" INT,
  "order_date" TIMESTAMP DEFAULT (CURRENT_TIMESTAMP),
  "total_amount" DECIMAL(10,2) NOT NULL,
  "status_id" INT,
  "payment_method_id" INT
);

CREATE TABLE "payment_methods" (
  "payment_method_id" SERIAL PRIMARY KEY,
  "method_name" VARCHAR(255) NOT NULL
);

CREATE TABLE "sales_points" (
  "sales_point_id" SERIAL PRIMARY KEY,
  "franchise_id" INT,
  "name" VARCHAR(255) NOT NULL,
  "address" TEXT NOT NULL,
  "city" VARCHAR(255) NOT NULL,
  "country" VARCHAR(255) DEFAULT 'Ecuador',
  "phone" VARCHAR(20),
  "status" VARCHAR(20) DEFAULT 'active'
);

CREATE TABLE "product_registry" (
  "registry_id" SERIAL PRIMARY KEY,
  "franchise_id" INT,
  "entry_date" TIMESTAMP DEFAULT (CURRENT_TIMESTAMP),
  "notes" TEXT
);

CREATE TABLE "product_registry_items" (
  "registry_item_id" SERIAL PRIMARY KEY,
  "registry_id" INT,
  "product_id" INT,
  "quantity" INT NOT NULL
);

CREATE TABLE "tasks" (
  "task_id" SERIAL PRIMARY KEY,
  "franchise_id" INT,
  "task_name" VARCHAR(255) NOT NULL,
  "description" TEXT,
  "importance" INT NOT NULL,
  "scheduled_time" TIME,
  "scheduled_date" TIMESTAMP
);

ALTER TABLE "users" ADD FOREIGN KEY ("franchise_id") REFERENCES "franchises" ("franchises_id");

ALTER TABLE "products" ADD FOREIGN KEY ("category_id") REFERENCES "categories" ("category_id");

ALTER TABLE "inventory" ADD FOREIGN KEY ("franchise_id") REFERENCES "franchises" ("franchises_id");

ALTER TABLE "inventory" ADD FOREIGN KEY ("product_id") REFERENCES "products" ("product_id");

ALTER TABLE "invoices" ADD FOREIGN KEY ("franchise_id") REFERENCES "franchises" ("franchises_id");

ALTER TABLE "invoices" ADD FOREIGN KEY ("customer_id") REFERENCES "customers" ("customer_id");

ALTER TABLE "invoices" ADD FOREIGN KEY ("sales_point_id") REFERENCES "sales_points" ("sales_point_id");

ALTER TABLE "invoices" ADD FOREIGN KEY ("status_id") REFERENCES "payment_status" ("status_id");

ALTER TABLE "invoices" ADD FOREIGN KEY ("payment_method_id") REFERENCES "payment_methods" ("payment_method_id");

ALTER TABLE "invoice_items" ADD FOREIGN KEY ("invoice_id") REFERENCES "invoices" ("invoice_id");

ALTER TABLE "invoice_items" ADD FOREIGN KEY ("product_id") REFERENCES "products" ("product_id");

ALTER TABLE "orders" ADD FOREIGN KEY ("franchise_id") REFERENCES "franchises" ("franchises_id");

ALTER TABLE "orders" ADD FOREIGN KEY ("customer_id") REFERENCES "customers" ("customer_id");

ALTER TABLE "orders" ADD FOREIGN KEY ("status_id") REFERENCES "payment_status" ("status_id");

ALTER TABLE "orders" ADD FOREIGN KEY ("payment_method_id") REFERENCES "payment_methods" ("payment_method_id");

ALTER TABLE "sales_points" ADD FOREIGN KEY ("franchise_id") REFERENCES "franchises" ("franchises_id");

ALTER TABLE "product_registry" ADD FOREIGN KEY ("franchise_id") REFERENCES "franchises" ("franchises_id");

ALTER TABLE "product_registry_items" ADD FOREIGN KEY ("registry_id") REFERENCES "product_registry" ("registry_id");

ALTER TABLE "product_registry_items" ADD FOREIGN KEY ("product_id") REFERENCES "products" ("product_id");

ALTER TABLE "tasks" ADD FOREIGN KEY ("franchise_id") REFERENCES "franchises" ("franchises_id");
