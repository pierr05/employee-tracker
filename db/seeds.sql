INSERT INTO department (id, department_name)
VALUES  (1, "Sales"),
        (2, "Engineering"),
        (3, "Finance"),
        (4, "Legal");

INSERT INTO role (id, title, department_id, salary)
VALUES  (1, "Sales Lead", 1, 3000),
        (2, "Sales Person", 1, "10000"),
        (3, "Lead Engineer", 2, "60000"),
        (4, "Software Engineer", 2, "70000"),
        (5, "Account Manager", 3, 75000),
        (6, "Accountant", 3, 90000),
        (7, "Legal Team Lead", 4, 80000),
        (8, "Lawyer", 4, 10000); 