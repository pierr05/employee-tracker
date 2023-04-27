INSERT INTO department (department_id, department_name)
VALUES  (1, "Sales"),
        (2, "Engineering"),
        (3, "Finance"),
        (4, "Legal");

INSERT INTO role_table (role_table_id, title, salary, department_id)
VALUES  (1, "Sales Lead", 30000, 1),
        (2, "Sales Person", 10000, 1),
        (3, "Lead Engineer", 60000, 2),
        (4, "Software Engineer", 70000, 2),
        (5, "Account Manager", 75000, 3),
        (6, "Accountant", 90000, 3),
        (7, "Legal Team Lead", 80000, 4),
        (8, "Lawyer", 10000, 4); 

INSERT INTO employee (id, first_name, last_name, role_table_id) 
VALUES  (1, "John", "Lewis", 4),
        (2, "Fam", "Gold", 3),
        (3, "Zoe", "Jean", 1),
        (4, "Blaze One", "Vete", 2),
        (5, "Wendy", "Matis", 5),
        (6, "Samson", "Privert", 6),
        (7, "Asefi", "Duck", 7),
        (8, "Tax", "Bracket", 8);