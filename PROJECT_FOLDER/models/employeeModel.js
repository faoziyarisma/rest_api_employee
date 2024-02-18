module.exports = (sequelize, DataTypes) => {
    const Employee = sequelize.define("employee",{
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        nik: {
            type: DataTypes.STRING
        },
        name: {
            type: DataTypes.STRING
        },
        is_active: {
            type: DataTypes.BOOLEAN
        },
        start_date: {
            type: DataTypes.DATEONLY,
            allowNull: false,
        },
        end_date: {
            type: DataTypes.DATEONLY,
            allowNull: false
        },
        created_by: {
            type: DataTypes.STRING
        },
        updated_by: {
            type: DataTypes.STRING
        }
    });

    return Employee;
}