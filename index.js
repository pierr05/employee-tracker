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

  // db.query('SELECT * FROM department', function(err, result) {
  //   console.table(result)
  // });
  // query 2
  db.query('SELECT * FROM role', function(err, result) {
    console.table(result)
  }); 

  // inquirer prompt question
  // inquirer.prompt(
  //   [
  //     {
  //       type: 'rawlist',
  //       name: 'options',
  //       message: "What would you like to do?",
  //       choices: ["View All Employees", "Add Employee", "View All Roles", "Add Role", "View All Departments", "Add Department"]
  //     }
  //   ]
  // );

  app.use((req, res) => {
    res.status(404).end();
  });

  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });