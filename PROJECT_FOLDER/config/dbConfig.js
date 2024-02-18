module.exports = {
    HOST: 'node_db',
    USER: 'faoziyarisma',
    PASSWORD: 'july28R)',
    DB: 'node_employee_db',
    dialect: 'postgres',
    pool: {
        max: 5,
        min: 0,
        ackquire: 30000,
        idle: 10000
    }
};