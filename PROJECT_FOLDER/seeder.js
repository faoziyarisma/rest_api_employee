const db = require('./models');
const { Employee, EmployeeProfile, Education, EmployeeFamily } = db;

// Function to seed data
async function seedData() {
  await Employee.bulkCreate([
    { nik: '11012', name: 'Budi', is_active: 1, start_date: '2022-12-12', end_date: '2029-12-12', created_by: "admin" },
    { nik: '11013', name: 'Jarot', is_active: 1, start_date: '2021-09-01', end_date: '2028-09-01', created_by: "admin" },
    { nik: '11014', name: 'Agung', is_active: 1, start_date: '2020-08-10', end_date: '2027-08-10', created_by: "admin" }
  ]);

  await EmployeeProfile.bulkCreate([
    { employee_id: 1, place_of_birth: 'Jakarta', date_of_birth: '1997-05-07', gender: 'Laki-Laki', is_married: 1, created_by: "admin" },
    { employee_id: 2, place_of_birth: 'Sukabumi', date_of_birth: '1996-05-07', gender: 'Laki-Laki', is_married: 0, created_by: "admin" }
  ]);

  await Education.bulkCreate([
    { employee_id: 1, name: 'SMKN 7 Jakarta', level: 'SMA', description: 'Sekolah Menengah Atas', created_by: "admin", updated_by: "admin" },
    { employee_id: 2, name: 'Universitas Negeri Jakarta', level: 'Strata 1', description: 'Sarjana', created_by: "admin", updated_by: "admin" }
  ]);

  await EmployeeFamily.bulkCreate([
    { employee_id: 1, name: 'Marni', identifier: '32100594109960002', job: 'Ibu Rumah Tangga', place_of_birth: 'Denpasar', date_of_birth: '1995-10-17', religion: 'Islam', is_life: 1, is_divorced: 0, relation_status: 'Istri', created_by: "admin" },
    { employee_id: 1, name: 'Clara', identifier: '32100594109020004', job: 'Pelajar', place_of_birth: 'Bangkalan', date_of_birth: '2008-10-17', religion: 'Islam', is_life: 1, is_divorced: 0, relation_status: 'Anak', created_by: "admin" },
    { employee_id: 1, name: 'Stephanie', identifier: '32100594109020005', job: 'Pelajar', place_of_birth: 'Bangkalan', date_of_birth: '2008-10-17', religion: 'Islam', is_life: 1, is_divorced: 0, relation_status: 'Anak', created_by: "admin" }
  ]);
}

// Run the data seeding function
seedData()
  .then(() => {
    console.log('Data seeding completed.');
    process.exit(0);
  })
  .catch((err) => {
    console.error('Error during data seeding:', err);
    process.exit(1);
  });



  