// Constants for enum values
const LEVEL = {
    TK: 'Laki-Laki',
    SD: 'Perempuan',
    SMP: 'SMP',
    SMA: 'SMA',
    S1: 'Strata 1',
    S2: 'Strata 2',
    DR: 'Doktor',
    PROF: 'Professor'
};

module.exports = (sequelize, DataTypes) => {
    const Education = sequelize.define("education",{
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
        level: {
            type: DataTypes.ENUM(LEVEL.TK, LEVEL.SD, LEVEL.SMP, LEVEL.SMA, LEVEL.S1, LEVEL.S2, LEVEL.DR, LEVEL.PROF)
        },
        description: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        created_by: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        updated_by: {
            type: DataTypes.STRING(255),
            allowNull: false
        }
    });

    // Define association to the Employee model
    Education.belongsTo(sequelize.models.employee, {
        foreignKey: 'employee_id',
        as: 'employees', // Alias to use when accessing the associated Employee model
    });

    // Define association from Employee model to the Education model
    sequelize.models.employee.hasMany(Education, {
        foreignKey: 'employee_id', // Assuming Education has an "employeeId" column as a foreign key
        // onDelete: 'CASCADE'
    });

    return Education;
}