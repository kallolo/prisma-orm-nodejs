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