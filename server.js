const mysql = require('mysql2')
const inquirer = require('inquirer');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'employee_db'
});

connection.connect(err => {
    if (err) throw err;
    console.log("Connection complete")
});


const promptUser = () => {
    inquirer.prompt([
        {
            type: 'list',
            name: 'choices',
            message: 'What would you like to do?',
            choices: ['View all departments',
                'View all roles',
                'View all employees',
                'Add a department',
                'Add a role',
                'Add an employee',
                'Update an employee role',
            ]
        }

    ])
        .then((answers) => {
            const { choices } = answers;

            if (choices === "View all departments") {
                showDepartments();
            }

            if (choices === "View all roles") {
                showRoles();
            }

            if (choices === "View all employees") {
                showEmployees();
            }

            if (choices === "Add a department") {
                addDepartment();
            }

            if (choices === "Add a role") {
                addRole();
            }

            if (choices === "Add an employee") {
                addEmployee();
            }

            if (choices === "Update an employee role") {
                updateEmployee();
            }
        })
};

showDepartments = () => {
    const sql = `SELECT department.id AS id, department.name AS department FROM department`;
    connection.promise().query(sql).then((rows)=>{
            console.table(rows);
            promptUser();
    });
}

showRoles = () => {
    const sql = `SELECT role.id, role.title, department.name AS department FROM role`;
    connection.promise().query(sql).then((rows) => {
        console.table(rows);
        promptUser();
    });
}

promptUser()