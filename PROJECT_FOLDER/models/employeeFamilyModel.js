const RELIGION = {
    ISLAM: 'Islam',
    KATOLIK: 'Katolik',
    BUDDHA: 'Buddha',
    PROTESTAN: 'Protestan',
    KONGHUCU: 'Konghucu'
};

const RELATION_STATUS = {
    SUAMI: 'Suami',
    ISTRI: 'Istri',
    ANAK: 'Anak',
    ANAK_SAMBUNG: 'Anak Sambung'
}

module.exports = (sequelize, DataTypes) => {
    const EmployeeFamily = sequelize.define("employee_family",{
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        employee_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'employees', // This should be the name of the referenced table (case-sensitive)
                key: 'id'
            }
        },
        name: {
            type: DataTypes.STRING(255)
        },
        identifier: {
            type: DataTypes.STRING(255)
        },
        job: {
            type: DataTypes.STRING(255)
        },
        place_of_birth: {
            type: DataTypes.STRING
        },
        date_of_birth: {
            type: DataTypes.DATEONLY
        },
        religion: {
            type: DataTypes.ENUM(RELIGION.ISLAM, RELIGION.KATOLIK, RELIGION.BUDDHA, RELIGION.PROTESTAN, RELIGION.KONGHUCU)
        },
        is_life: {
            type: DataTypes.BOOLEAN
        },
        is_divorced: {
            type: DataTypes.BOOLEAN
        },
        relation_status: {
            type: DataTypes.ENUM(RELATION_STATUS.SUAMI, RELATION_STATUS.ISTRI, RELATION_STATUS.ANAK, RELATION_STATUS.ANAK_SAMBUNG)
        },
        created_by: {
            type: DataTypes.STRING(255),
        },
        updated_by: {
            type: DataTypes.STRING(255),
        }
    });

    // Define association to the Employee model
    EmployeeFamily.belongsTo(sequelize.models.employee, {
        foreignKey: 'employee_id',
        as: 'employees', // Alias to use when accessing the associated Employee model
    });
    
    // Define association from Employee model to the EmployeeFamily model
    sequelize.models.employee.hasMany(EmployeeFamily, {
        foreignKey: 'employee_id', // Assuming EmployeeFamily has an "employeeId" column as a foreign key
        // onDelete: 'CASCADE'
    });

    return EmployeeFamily;
}