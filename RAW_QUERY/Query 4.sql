WITH sum_fam_1 AS(
	SELECT employee_id, relation_status, COUNT(relation_status) AS count_person
	FROM employee_families
	GROUP BY employee_id, relation_status),

sum_fam_2 AS(
	SELECT employee_id, CONCAT_WS(' ',count_person, relation_status) AS fam_data
	FROM sum_fam_1
	GROUP BY employee_id, relation_status, count_person
),

sum_fam_3 AS(
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
LEFT JOIN employee_profiles AS e2 ON e1.id = e2.employee_id
LEFT JOIN education AS e3 ON e1.id = e3.employee_id
LEFT JOIN sum_fam_3 AS e4 ON e1.id = e4.employee_id
GROUP BY e2.employee_id, e1.name, e1.is_active, e2.gender, e2.date_of_birth, e4.family_data
ORDER BY e2.employee_id;