const Sequelize = require('sequelize');
const database = require('../config/index')


const EmployeeServices = database.define( 'BarbershopService', {
    id: {
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
        type: Sequelize.INTEGER
    },
    active: {
        type: Sequelize.BOOLEAN,
        allowNull: false
    },
    employee_id: {
        type: Sequelize.INTEGER,
        allowNull:false
    },
    barbershop_service_id: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
},
{
    tableName: 'employee_services'
})
// EmployeeServices.associate = function(models) {
//     EmployeeServices.belongsTo(models.BarbershopEmployee)
//     EmployeeServices.belongsTo(models.BarbershopService)
//     // EmployeeServices.hasMany(models.Schedule, {
//     //     foreignKey: 'employee_service_id'
//     // })
// }

module.exports = EmployeeServices