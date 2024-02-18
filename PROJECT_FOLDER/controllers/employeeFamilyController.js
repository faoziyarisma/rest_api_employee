const db = require('../models')

// create main model
const Employee = db.employee
const EmployeeProfile = db.employee_profile
const Education = db.education
const EmployeeFamily = db.employee_family

// main work
// 1. create Employee
const addEmployeeFamily = async(req, res) => {
    let info = {
        employee_id: req.body.employee_id,
        name: req.body.name,
        identifier: req.body.identifier,
        job: req.body.job,
        place_of_birth: req.body.place_of_birth,
        date_of_birth: req.body.date_of_birth,
        religion: req.body.religion,
        is_life: req.body.is_life,
        is_divorced: req.body.is_divorced,
        relation_status: req.body.relation_status,
        created_by: req.body.created_by,
        updated_by: req.body.updated_by
    }

    const employeeFamily = await EmployeeFamily.create(info);
    res.status(200).send(employeeFamily);
    console.log(employeeFamily);
}

// 2. get all employees Familys
const getAllEmployeeFamilys = async(req, res) => {
    let employee_familys = await EmployeeFamily.findAll({});
    res.status(200).send(employee_familys);
}

// 3. get employee Familys by employee_id
const getEmployeeFamilysByEmployeeId = async(req, res) => {
    let employee_id = req.params.employee_id;
    let employee_familys = await EmployeeFamily.findAll({where: {employee_id: employee_id}});
    res.status(200).send(employee_familys);
}

// 4. get detail employee Familys by id
const getEmployeeFamily = async(req, res) => {
    let id = req.params.id;
    let employee_family = await EmployeeFamily.findOne({where: {id: id}});
    res.status(200).send(employee_family);
}

// 5. update employee profile by id
const updateEmployeeFamily = async(req, res) => {
    let id = req.params.id;
    const employeeFamily = await EmployeeFamily.update(req.body, { where: { id:id } });
    res.status(200).send(employeeFamily);
}

// 6. delete employee Family by id
const deleteEmployeeFamily = async(req, res) => {
    let id = req.params.id;
    await EmployeeFamily.destroy({where: {id: id}});
    res.status(200).send("Employee's family data deleted!");
}

module.exports = {
    addEmployeeFamily,
    getAllEmployeeFamilys,
    getEmployeeFamilysByEmployeeId,
    getEmployeeFamily,
    updateEmployeeFamily,
    deleteEmployeeFamily
}


