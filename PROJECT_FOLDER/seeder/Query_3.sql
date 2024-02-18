INSERT INTO employees (nik, name, is_active, start_date, end_date, created_by, updated_by, "createdAt", "updatedAt")
VALUES 
  ('11012', 'Budi', true, '2022-12-12', '2029-12-12', 'admin', null, NOW(), NOW()),
  ('11013', 'Jarot', true, '2021-09-01', '2028-09-01', 'admin', null, NOW(), NOW()),
  ('11014', 'Agung', true, '2020-08-10', '2027-08-10', 'admin', null, NOW(), NOW());

INSERT INTO employee_profiles (employee_id, place_of_birth, date_of_birth, gender, is_married, created_by, updated_by, "createdAt", "updatedAt")
VALUES 
  (1, 'Jakarta', '1997-05-07', 'Laki-Laki', true, 'admin', null, NOW(), NOW()),
  (2, 'Sukabumi', '1996-05-07', 'Laki-Laki', false, 'admin', null, NOW(), NOW());

INSERT INTO education (employee_id, name, level, description, created_by, updated_by, "createdAt", "updatedAt")
VALUES 
  (1, 'SMKN 7 Jakarta', 'SMA', 'Sekolah Menengah Atas', 'admin', 'admin', NOW(), NOW()),
  (2, 'Universitas Negeri Jakarta', 'Strata 1', 'Sarjana', 'admin', 'admin', NOW(), NOW());

INSERT INTO employee_families (employee_id, name, identifier, job, place_of_birth, date_of_birth, religion, is_Life, is_divorced, relation_status, created_by, updated_by, "createdAt", "updatedAt")
VALUES 
  (1, 'Marni', '32100594109960002', 'Ibu Rumah Tangga', 'Denpasar', '1995-10-17', 'Islam', true, false, 'Istri', 'admin', null, NOW(), NOW()),
  (1, 'Clara', '32100594109020004', 'Pelajar', 'Bangkalan', '2008-10-17', 'Islam', true, false, 'Anak', 'admin', null, NOW(), NOW()),
  (1, 'Stephanie', '32100594109020005', 'Pelajar', 'Bangkalan', '2008-10-17', 'Islam', true, false, 'Anak', 'admin', null, NOW(), NOW());
