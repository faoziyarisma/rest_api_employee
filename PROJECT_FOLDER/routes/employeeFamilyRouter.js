const employeeFamilyController = require('../controllers/employeeFamilyController.js');

const router = require('express').Router()

router.post('/addEmployeeFamily', employeeFamilyController.addEmployeeFamily);

router.get('/allEmployeeFamilys', employeeFamilyController.getAllEmployeeFamilys);

router.get('/by_employee_id/:employee_id', employeeFamilyController.getEmployeeFamilysByEmployeeId);

router.get('/:id', employeeFamilyController.getEmployeeFamily);

router.put('/:id', employeeFamilyController.updateEmployeeFamily);

router.delete('/:id', employeeFamilyController.deleteEmployeeFamily);


module.exports = router