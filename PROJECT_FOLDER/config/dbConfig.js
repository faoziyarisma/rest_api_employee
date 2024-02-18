module.exports = {
    HOST: 'localhost',
    USER: 'postgres',
    PASSWORD: 'july28R)',
    DB: 'employee_db',
    dialect: 'postgres',
    pool: {
        max: 5,
        min: 0,
        ackquire: 30000,
        idle: 10000
    }
};