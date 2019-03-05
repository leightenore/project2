DROP DATABASE IF EXISTS destinations_db;
CREATE DATABASE destinations_db;
USE destinations_db;

CREATE TABLE destinations (
	id INTEGER auto_increment NOT NULL,
    destination VARCHAR(255) NOT NULL,
    biome VARCHAR(255) NOT NULL,
    price_point VARCHAR(255) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE users (
	id INTEGER auto_increment NOT NULL,
    username VARCHAR(255) NOT NULL,
    biome_choice VARCHAR(255) NOT NULL,
    price_choice VARCHAR(255) NOT NULL,
    PRIMARY KEY (id)
);