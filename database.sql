CREATE TABLE sample(
    id varchar(100) not null,
    name varchar(100) not null,
    primary key(id)
) engine innoDB;

CREATE TABLE customers(
    id varchar(100) not null,
    name varchar(100) not null,
    email varchar(100) not null,
    phone varchar(100) not null,
    primary key(id),
    CONSTRAINT customers_email_unique UNIQUE (email),
    CONSTRAINT customers_phone_unique UNIQUE (phone)
) engine innoDB;

CREATE TABLE products(
    id varchar(100) not null,
    name varchar(100) not null,
    price int not null,
    stok int not null,
    category varchar(100) not null,
    primary key(id)
) engine innoDB;

INSERT INTO products (id, name, price, stok, category)
VALUES ('P0001','A',1000, 100, 'K1'), 
('P0002','B',2000, 200, 'K1'), 
('P0003','C',3000, 300, 'K1'), 
('P0004','D',4000, 400, 'K2'), 
('P0005','F',5000, 500, 'K2');

CREATE TABLE category(
    id int not null auto_increment,
    name varchar(100) not null,
    primary key(id)
) engine innoDB;

CREATE TABLE wallet(
    id varchar(100) not null,
    balance int not null,
    customer_id varchar(100) not null,
    primary key(id),
    CONSTRAINT wallet_customer_id_fk FOREIGN KEY (customer_id) REFERENCES customers (id),
    CONSTRAINT wallet_customer_id_unique UNIQUE (customer_id)
) engine innoDB;

CREATE TABLE comments(
    id int not null auto_increment,
    customer_id varchar(100) not null,
    title varchar(200) not null,
    description text,
    primary key(id),
    CONSTRAINT comments_customer_id_fk FOREIGN KEY (customer_id) REFERENCES customers (id)
) engine innoDB;

INSERT INTO comments (customer_id, title, description)
VALUES ('ID-0001','comment 1','Description Comment 1'), ('ID-0001','comment 2','Description Comment 2'), ('ID-0008','comment 1','Description Comment 1');

CREATE TABLE likes(
    customer_id varchar(100) not null,
    product_id varchar(100) not null,
    primary key(customer_id, product_id),
    CONSTRAINT likes_customer_id_fk FOREIGN KEY (customer_id) REFERENCES customers (id),
    CONSTRAINT likes_product_id_fk FOREIGN KEY (product_id) REFERENCES products (id)
) engine innoDB;

CREATE TABLE _loves(
    A varchar(100) not null,
    B varchar(100) not null,
    primary key(A, B),
    CONSTRAINT loves_customer_id_fk FOREIGN KEY (A) REFERENCES customers (id),
    CONSTRAINT loves_product_id_fk FOREIGN KEY (B) REFERENCES products (id)
) engine innoDB;