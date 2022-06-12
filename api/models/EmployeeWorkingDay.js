const Sequelize = require('sequelize');
const database = require('../config/index')

const EmployeeWorkingDay = database.define( 'EmployeeWorkingDay', {
    id: {
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
        type: Sequelize.INTEGER
    },
    weekday: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    start_time: {
        type: Sequelize.TIME,
        allowNull: true
    },
    end_time: {
        type: Sequelize.TIME,
        allowNull: true
    },
    active: {
        type: Sequelize.BOOLEAN,
        allowNull: true
    }
},
{
    tableName: 'employee_working_days'
})
EmployeeWorkingDay.associate = function(models) {
    EmployeeWorkingDay.belongsTo(models.BarbershopEmployee)
}

module.exports = EmployeeWorkingDay