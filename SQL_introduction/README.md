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

-- Lists all rows in a table
SELECT *
FROM first_table;

-- shows description of first table
SHOW CREATE TABLE first_table;

-- lists records in order by score
SELECT score, name FROM second_table
ORDER BY score DESC;

-- creates secon table in the database
CREATE TABLE IF NOT EXISTS second_table(
    id INT,
    name VARCHAR(256),
    score INT
);

-- Inserts data
INSERT INTO second_table (id, name, score)
VALUES
    (1, "John", 10),
    (2, "Alex", 3),
    (3, "Bob", 14),
    (4, "George", 8);

-- counts numbe rof records with id = 89 in first_table
SELECT COUNT(id) FROM first_table WHERE id = 89;

-- inserts row in table
INSERT INTO first_table
VALUES (89, "Best School");

-- updating a value in the table
UPDATE second_table
SET score = 10 
WHERE name = 'Bob';

-- computes the average of the records
SELECT AVG(score) average
FROM second_table;


