# REST API Employee Data - Risma Faoziya
Project membuat REST API data employee menggunakan Node.js, Sequelize, Express, dan PostgreSQL. Pada data employee terdapat 4 data yang berhubungan yaitu:
1. Data Employee
2. Data Employee Profile
3. Data Education
4. Data Employee Family

Dimana pada REST API Employee Data memuat request CRUD pada setiap data dan report employee pada data employee.

Catatan:

Terkait sample data employee, employee_profile, education, dan employee_family saya sudah membuat query untuk insert data yang terdapat pada ROW_QUERY dengan nama file Query 3.

Terkait collection Postman saya lampirkan pada folder PROJECT_FOLDER dengan nama REST API Employee - Risma Faoziya.postman_collection.json. Berikut link untuk collection Postman saya jika ingin diimport melalui Postman: https://api.postman.com/collections/18842495-39bd3602-ef1a-4a8d-a3bc-791b5a12d7c5?access_key=PMAT-01HPXMHFTTPP0Z1PNMF9XP4D2C

Berikut langkah untuk menjalankan docker:
1. run container node_db dengan perintah: `docker compose -d node_db`
2. untuk mengecek database yang telah dibuat dengan perintah : `docker ps -a`
3. build docker compose dengan perintah : `docker compose build`
4. run docker compose dengan perintah : `docker compose up`
