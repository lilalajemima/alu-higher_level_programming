This is the project for SQL databases
-- this list all databases in server
SHOW databases;

-- creates a new database of it does not exist
CREATE DATABASE IF NOT EXISTS database;

-- deletes a database if it exists
DROP DATABASE IF EXISTS database

-- show tables in a database
SHOW TABLES;

-- creates a table in a database
CREATE TABLE first_table (
    id INT, 
    name VARCHAR(256)
);

-- shows description of first table
SHOW CREATE TABLE first_table;
