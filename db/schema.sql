DROP DATABASE IF EXISTS employee_db; 
CREATE DATABASE employee_db; 

USE employee_db; 

CREATE TABLE department (
    department_id INT NOT NULL auto_increment PRIMARY KEY, 
    department_name VARCHAR(30) NOT NULL
);

CREATE TABLE role (
    id INT NOT NULL auto_increment PRIMARY KEY,
    title VARCHAR(30) NOT NULL,
    salary DECIMAL(),
    -- to hold reference to department role belongs to
    department_id INT FOREIGN KEY REFERENCES department (department_id)
);

CREATE TABLE employee (
    id INT NOT NULL auto_increment PRIMARY KEY,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INT NOT NULL,
    manager_id INT
);

