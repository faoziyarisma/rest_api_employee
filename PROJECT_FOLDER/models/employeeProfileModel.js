// Constants for enum values
const GENDER = {
    MALE: 'Laki-Laki',
    FEMALE: 'Perempuan',
};

module.exports = (sequelize, DataTypes) => {
    const EmployeeProfile = sequelize.define("employee_profile",{
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
        place_of_birth: {
            type: DataTypes.STRING
        },
        date_of_birth: {
            type: DataTypes.DATEONLY
        },
        gender: {
            type: DataTypes.ENUM(GENDER.MALE, GENDER.FEMALE)
            // allowNull: false
            // collate: 'utf8_general_ci'  // Case-insensitive collation
        },
        is_married: {
            type: DataTypes.BOOLEAN
        },
        prof_pict: {
            type: DataTypes.STRING(255)
        },
        created_by: {
            type: DataTypes.STRING(255)
        },
        updated_by: {
            type: DataTypes.STRING(255)
        }
    });

    // Define association to the Employee model
    EmployeeProfile.belongsTo(sequelize.models.employee, {
        foreignKey: 'employee_id',
        as: 'employees', // Alias to use when accessing the associated Employee model
    });

    // Define association from Employee model to the EmployeeProfile model
    sequelize.models.employee.hasOne(EmployeeProfile, {
        foreignKey: 'employee_id', // Assuming EmployeeProfile has an "employeeId" column as a foreign key
        // onDelete: 'CASCADE' // Adjust the onDelete behavior based on your requirements
    });

    return EmployeeProfile;
}