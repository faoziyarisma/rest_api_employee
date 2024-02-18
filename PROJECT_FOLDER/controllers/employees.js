const Employee = require('../models/user');

//CRUD Controllers

// get all employees
exports.getEmployees = (req, res, next) => {
    Employee.findAll()
            .then(employees => {
                res.status(200).json({ employees: employees});
            })
            .catch(err => console.logh(err));
}

// get employee