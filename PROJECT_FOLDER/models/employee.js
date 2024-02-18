const Sequelize = require('sequelize');
const db = require('../util/database');

const Employee = db.define('employee', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nik: {
        type: Sequelize.STRING,
        allowNull: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: true
    },
    is_active: Sequelize.BOOLEAN,
    start_date: {
        type: Sequelize.DATE,
        allowNull: false,
    },
    end_date: {
        type: Sequelize.DATE,
        allowNull: false
    },
    created_by: {
        type: Sequelize.STRING,
        allowNull: true
    },
    updated_by: {
        type: Sequelize.STRING,
        allowNull: true
    },
    created_at: {
        type: Sequelize.DATE,
        allowNull: false
    },
    updated_at:{
        type: Sequelize.STRING,
        allowNull: false
    }
});

module.exports = User;