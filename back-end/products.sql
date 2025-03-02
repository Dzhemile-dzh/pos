CREATE TABLE `products` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `price` decimal(10,2) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci

INSERT INTO products (name, price) VALUES ('POS терминал Ingenico iPP320', 250.00);
INSERT INTO products (name, price) VALUES ('POS терминал Verifone VX520', 300.00);
INSERT INTO products (name, price) VALUES ('POS терминал Ingenico Move/5000', 275.50);
INSERT INTO products (name, price) VALUES ('POS терминал Clover Station', 350.75);
INSERT INTO products (name, price) VALUES ('POS терминал PAX S920', 200.00);
INSERT INTO products (name, price) VALUES ('POS терминал Newland N5', 220.00);
INSERT INTO products (name, price) VALUES ('POS терминал Verifone VX680', 330.00);
INSERT INTO products (name, price) VALUES ('POS терминал Ingenico iCT250', 260.00);
INSERT INTO products (name, price) VALUES ('POS терминал Verifone e285', 310.00);
INSERT INTO products (name, price) VALUES ('POS терминал PAX A920', 290.00);