This is  the directory for the more queries project. 

These are soem notes and examples 

-- shows user privileges
SHOW GRANTS FOR user_0d_1@localhost;

-- creating user in localhost server
CREATE USER IF NOT EXISTS user_0d_1@localhost
IDENTIFIED BY 'user_0d_1_pwd';
-- giving it all privileges
GRANT ALL PRIVILEGES ON *.* TO user_0d_1@localhost;  

-- creates a database and a user
CREATE DATABASE IF NOT EXISTS hbtn_0d_2;
CREATE USER IF NOT EXISTS user_0d_2@localhost
IDENTIFIED BY 'user_0d_2_pwd';
GRANT SELECT ON hbtn_0d_2.* TO user_0d_2@localhost;;

-- creates a table 
CREATE TABLE IF NOT EXISTS force_name (
    id INT,
    name VARCHAR(256) NOT NULL
);

-- creates table id_not_null
CREATE TABLE IF NOT EXISTS id_not_null (
    id INT NOT NULL DEFAULT 1,
    name VARCHAR(256)
);

-- creates table with unique id
CREATE TABLE IF NOT EXISTS unique_id (
    id INT DEFAULT 1 UNIQUE,
    name VARCHAR(256)
);


