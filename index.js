const inquirer = require('inquirer'); 
const express = require('express');
const mysql = require('mysql2');
const consoleTable = require('console.table');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// connect the database 
const db = mysql.createConnection(
    {
      host: 'localhost',
      // MySQL username,
      user: 'root',
      // TODO: Add MySQL password here
      password: 'zbmysql44$',
      database: 'employee_db'
    },
    console.log(`Connected to the employee_db database.`)
  );
  
  let departments;
  db.query('SELECT * FROM department', function(err, result) {
    departments = result;
    return departments;
  });

  // // query 2
  let roles; 
  db.query('SELECT * FROM role_table', function(err, result) {
    roles = result;
    return roles;
  }); 

  // query 3
  let employees; 
  db.query('SELECT * FROM employee', function(err, result) {
    employees = result;
    return employees; 
  }); 

  // inquirer prompt question
  inquirer.prompt(
    [
      {
        type: 'rawlist',
        name: 'options',
        message: "What would you like to do?",
        choices: ["View All Employees", "View All Departments", "View All Roles", "Add Employee", "Add Role", "Add Department"]
      }
    ])
    .then((value)  => {
      if (value.options === "View All Employees") {
        console.table(employees)
        inquirer.prompt([
          {
            type: 'rawlist',
            name: 'options',
            message: "What would you like to do?",
            choices: ["View All Employees", "View All Departments", "View All Roles", "Add Employee", "Add Role", "Add Department"]
          }
        ])
        .then((value) => {
          if (value.options === "View All Departments") {
            console.table(departments);
            inquirer.prompt([
              {
                type: 'rawlist',
                name: 'options',
                message: "What would you like to do?",
                choices: ["View All Employees", "View All Departments", "View All Roles", "Add Employee", "Add Role", "Add Department"]
              }
            ])
            .then((value) => {
              if (value.options === "View All Roles") {
                console.table(roles);
                inquirer.prompt([
                  {
                    type: 'rawlist',
                    name: 'options',
                    message: "What would you like to do?",
                    choices: ["View All Employees", "View All Departments", "View All Roles", "Add Employee", "Add Role", "Add Department"]
                  }
                ])
              }
            })
          }
        })
      }

    }) 
    .catch((err) => {
      console.log(err)
    }); 

  app.use((req, res) => {
    res.status(404).end();
  });

  app.listen(PORT, () => {

  });