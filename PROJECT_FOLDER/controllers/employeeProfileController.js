const db = require('../models')

// create main model
const Employee = db.employee
const EmployeeProfile = db.employee_profile
const Education = db.education
const EmployeeFamily = db.employee_family

// main work
// 1. create Employee
const addEmployeeProfile = async(req, res) => {
    let info = {
        employee_id: req.body.employee_id,
        place_of_birth: req.body.place_of_birth,
        date_of_birth: req.body.date_of_birth,
        gender: req.body.gender,
        is_married: req.body.is_married,
        prof_pict: req.body.prof_pict,
        created_by: req.body.created_by,
        updated_by: req.body.updated_by
    }

    const employeeProfile = await EmployeeProfile.create(info);
    res.status(200).send(employeeProfile);
    console.log(employeeProfile);
}

// 2. get all employee profiles
const getAllEmployeeProfiles = async(req, res) => {
    let employee_profiles = await EmployeeProfile.findAll({});
    res.status(200).send(employee_profiles);
}

// 3. get employee profile by employee_id
const getEmployeeProfileByEmployeeId = async(req, res) => {
    let employee_id = req.params.employee_id;
    let employee_profile = await EmployeeProfile.findOne({where: {employee_id: employee_id}});
    res.status(200).send(employee_profile);
}


// 4. update employee profile by id
const updateEmployeeProfileByEmployeeId = async(req, res) => {
    let employee_id = req.params.employee_id;
    const employeeProfile = await EmployeeProfile.update(req.body, { where: { employee_id: employee_id } });
    res.status(200).send(employeeProfile);
}

// 5. delete Employee by employee_id
const deleteEmployeeProfileByEmployeeId = async(req, res) => {
    let employee_id = req.params.employee_id;
    await EmployeeProfile.destroy({where: {employee_id: employee_id}});
    res.status(200).send('Employee profile data deleted!');
}

// const deleteEmployeeProfile = async(req, res) => {
//     let id = req.params.id;
//     await EmployeeProfile.destroy({where: {id: id}});
//     res.status(200).send('Employee profile data has been deleted!');
// }

module.exports = {
    addEmployeeProfile,
    getAllEmployeeProfiles,
    getEmployeeProfileByEmployeeId,
    updateEmployeeProfileByEmployeeId,
    deleteEmployeeProfileByEmployeeId
    // deleteEmployeeProfile
}

