const db = require('../models')
const {QueryTypes} = require("sequelize");

// create main model
const Employee = db.employee
const EmployeeProfile = db.employee_profile
const Education = db.education
const EmployeeFamily = db.employee_family

// main work
// 1. create Employee
const addEmployee = async(req, res) => {
    let info = {
        nik: req.body.nik,
        name: req.body.name,
        is_active: req.body.is_active,
        start_date: req.body.start_date,
        end_date: req.body.end_date,
        created_by: req.body.created_by,
        updated_by: req.body.updated_by
    }

    const employee = await Employee.create(info);
    res.status(200).send(employee);
    console.log(employee);
}

// 2. get all employee
// const getAllEmployees = async(req, res) => {
//     let employees = await Employee.findAll({});
//     res.status(200).send(employees);
// }
const getAllEmployees = async (req, res) => {
    try {
        const employees = await Employee.findAll({
            include: [
                {
                    model: EmployeeProfile,
                    required: false
                },
                {
                    model: Education,
                    required: false
                },
                {
                    model: EmployeeFamily,
                    required: false
                }
            ],
        });

        res.status(200).json(employees);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

// 3. get 1 employee
const getOneEmployee = async(req, res) => {
    try{
        let id = req.params.id;
        const employee = await Employee.findAll({
            where: {id: id},
            include: [
                {
                    model: EmployeeProfile,
                    required: false
                },
                {
                    model: Education,
                    required: false
                },
                {
                    model: EmployeeFamily,
                    required: false
                }
            ],
        });

        if (!employee) {
            return res.status(404).json({ error: 'Employee not found' });
        }

        res.status(200).send(employee);
    }catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

// 4. update Employee by id
const updateEmployee = async(req, res) => {
    let id = req.params.id;
    const employee = await Employee.update(req.body, { where: { id:id } });
    res.status(200).send(employee);
}

// 5. delete Employee by id
const deleteEmployee = async(req, res) => {
    let id = req.params.id;
    await Employee.destroy({where: {id: id}});
    res.status(200).send('Employee data deleted!');
}

// 6. Report Employee by id
const { sequelize } = require('../models'); // Import your Sequelize instance
const ReportEmployees = async (req, res) => {
    try {
      // Your SQL query
      const sqlQuery = `
        WITH sum_fam_1 AS (
          SELECT employee_id, relation_status, COUNT(relation_status) AS count_person
          FROM employee_families
          GROUP BY employee_id, relation_status
        ),
        sum_fam_2 AS (
          SELECT employee_id, CONCAT_WS(' ', count_person, relation_status) AS fam_data
          FROM sum_fam_1
          GROUP BY employee_id, relation_status, count_person
        ),
        sum_fam_3 AS (
          SELECT employee_id, STRING_AGG(fam_data, ' & ') AS family_data
          FROM sum_fam_2
          GROUP BY employee_id
        )
        SELECT 
          e2.employee_id, 
          e1.name, 
          e1.is_active, 
          e2.gender, 
          EXTRACT(year FROM AGE(NOW(), e2.date_of_birth)) || ' Years Old' AS age,
          STRING_AGG(e3.name, ', ') AS school_name,
          STRING_AGG(e3.level::text, ', ') AS education_levels,
          e4.family_data
        FROM employees AS e1
        INNER JOIN employee_profiles AS e2 ON e1.id = e2.employee_id
        INNER JOIN education AS e3 ON e1.id = e3.employee_id
        LEFT JOIN sum_fam_3 AS e4 ON e1.id = e4.employee_id
        GROUP BY e2.employee_id, e1.name, e1.is_active, e2.gender, e2.date_of_birth, e4.family_data;
      `;
  
      // Execute the raw SQL query
      const reportResult = await sequelize.query(sqlQuery, { type: sequelize.QueryTypes.SELECT });
  
      // Return the result as JSON
      res.json(reportResult);
    } catch (error) {
      console.error('Error fetching report:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };

module.exports = {
    addEmployee,
    getAllEmployees,
    getOneEmployee,
    updateEmployee,
    deleteEmployee,
    ReportEmployees
}

