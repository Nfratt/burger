-- Drops DB if it already exists --
DROP DATABASE IF EXISTS burger_db;

CREATE DATABASE burger_db;
USE burger_db;


CREATE TABLE burgers
(
    id int  NOT NULL AUTO_INCREMENT PRIMARY KEY,
    burger_name VARCHAR(60) NOT NULL,
    devoured BOOLEAN DEFAULT false
);
SELECT * FROM `burgers` 