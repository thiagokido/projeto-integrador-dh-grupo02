const Sequelize = require('sequelize');
const database = require('../config/index')

const BarbershopEmployee = database.define('barbershopEmployee', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull:false
    },
    full_name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false
    },
    active: {
        type: Sequelize.BOOLEAN,
        allowNull: false
    },
    barbershop_id: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
},
{
    tableName: 'barbershop_employees'
})
BarbershopEmployee.associate = function(models) {
    // BarbershopEmployee.hasMany(models.EmployeeService, {
    //     foreignKey: 'employee_id'
    // })
    BarbershopEmployee.hasMany(models.EmployeeWorkingDays, {
        foreignKey: 'employee_id'
    })
    BarbershopEmployee.hasMany(models.Schedule, {
        foreignKey: 'employee_service_id'
    })
    BarbershopEmployee.belongsTo(models.Barbershop)
}

module.exports = BarbershopEmployee