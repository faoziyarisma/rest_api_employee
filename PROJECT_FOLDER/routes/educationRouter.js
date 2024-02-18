const educationController = require('../controllers/educationController.js');

const router = require('express').Router()

router.post('/addEmployeeEducation', educationController.addEmployeeEducation);

router.get('/allEmployeeEducations', educationController.getAllEmployeeEducations);

router.get('/by_employee_id/:employee_id', educationController.getEmployeeEducationsByEmployeeId);

router.get('/:id', educationController.getEmployeeEducation);

router.put('/:id', educationController.updateEmployeeEducation);

router.delete('/:id', educationController.deleteEmployeeEducation);


module.exports = router