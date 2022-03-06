module.exports = (sequelize, DataType) => {
    const BarbershopEmployee = sequelize.define('BarbershopEmployee', {
        id: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull:false
        },
        full_name: {
            type: DataType.STRING,
            allowNull: false
        },
        email: {
            type: DataType.STRING,
            allowNull: false
        },
        active: {
            type: DataType.BOOLEAN,
            allowNull: false
        }
    },
    {
        tableName: 'barbershop_employees'
    })
    BarbershopEmployee.associate = function(models) {
        BarbershopEmployee.hasMany(models.EmployeeService, {
            foreignKey: 'employee_id'
        })
        BarbershopEmployee.hasMany(models.EmployeeWorkingDays, {
            foreignKey: 'employee_id'
        })
        BarbershopEmployee.belongsTo(models.Barbershop)
    }
    return BarbershopEmployee
}