DROP DATABASE IF EXISTS employee_db; 
CREATE DATABASE employee_db; 

USE employee_db; 

CREATE TABLE department (
    department_id INT NOT NULL PRIMARY KEY, 
    department_name VARCHAR(30) NOT NULL
);

CREATE TABLE role_table (
    role_table_id INT NOT NULL auto_increment PRIMARY KEY,
    title VARCHAR(30) NOT NULL,
    salary DECIMAL(18, 2),
    -- to hold reference to department role belongs to
    department_id INT,
    FOREIGN KEY (department_id) REFERENCES department (department_id) ON DELETE CASCADE
);

CREATE TABLE employee (
    id INT NOT NULL auto_increment PRIMARY KEY,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_table_id INT NOT NULL,
     FOREIGN KEY (role_table_id)  REFERENCES role_table (role_table_id) ON DELETE CASCADE
);

