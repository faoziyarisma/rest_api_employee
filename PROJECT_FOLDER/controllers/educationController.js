const db = require('../models')


// create main model
const Employee = db.employee
const EmployeeProfile = db.employee_profile
const Education = db.education
const EmployeeFamily = db.employee_family

// main work
// 1. create Employee
const addEmployeeEducation = async(req, res) => {
    let info = {
        employee_id: req.body.employee_id,
        name: req.body.name,
        level: req.body.level,
        description: req.body.description,
        created_by: req.body.created_by,
        updated_by: req.body.updated_by
    }

    const education = await Education.create(info);
    res.status(200).send(education);
    console.log(education);
}

// 2. get all employees educations
const getAllEmployeeEducations = async(req, res) => {
    let employee_educations = await Education.findAll({});
    res.status(200).send(employee_educations);
}

// 3. get employee educations by employee_id
const getEmployeeEducationsByEmployeeId = async(req, res) => {
    let employee_id = req.params.employee_id;
    let employee_educations = await Education.findAll({where: {employee_id: employee_id}});
    res.status(200).send(employee_educations);
}

// 4. get detail employee educations by id
const getEmployeeEducation = async(req, res) => {
    let id = req.params.id;
    let employee_education = await Education.findOne({where: {id: id}});
    res.status(200).send(employee_education);
}

// 5. update employee profile by id
const updateEmployeeEducation = async(req, res) => {
    let id = req.params.id;
    const education = await Education.update(req.body, { where: { id:id } });
    res.status(200).send(education);
}

// 6. delete employee education by id
const deleteEmployeeEducation = async(req, res) => {
    let id = req.params.id;
    await Education.destroy({where: {id: id}});
    res.status(200).send("Employee's education data deleted!");
}

module.exports = {
    addEmployeeEducation,
    getAllEmployeeEducations,
    getEmployeeEducationsByEmployeeId,
    getEmployeeEducation,
    updateEmployeeEducation,
    deleteEmployeeEducation
}

