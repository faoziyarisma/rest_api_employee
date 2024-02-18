const employeeProfileController = require('../controllers/employeeProfileController.js');

const router = require('express').Router();

router.post('/addEmployeeProfile', employeeProfileController.addEmployeeProfile);

router.get('/allEmployeeProfiles', employeeProfileController.getAllEmployeeProfiles);

router.get('/:employee_id', employeeProfileController.getEmployeeProfileByEmployeeId);

router.put('/:employee_id', employeeProfileController.updateEmployeeProfileByEmployeeId);

router.delete('/:employee_id', employeeProfileController.deleteEmployeeProfileByEmployeeId);

module.exports = router