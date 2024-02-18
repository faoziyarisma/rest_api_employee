const employeeController = require('../controllers/employeeController.js');

const router = require('express').Router()

router.post('/addEmployee', employeeController.addEmployee);

router.get('/allEmployees', employeeController.getAllEmployees);

router.get('/reportEmployees', employeeController.ReportEmployees)

router.get('/:id', employeeController.getOneEmployee);

router.put('/:id', employeeController.updateEmployee);

router.delete('/:id', employeeController.deleteEmployee);

module.exports = router