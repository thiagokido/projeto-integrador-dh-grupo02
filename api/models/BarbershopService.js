const Sequelize = require('sequelize');
const database = require('../config/index')


const BarbershopService = database.define( 'BarbershopService', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull:false
    },
    service: {
        type: Sequelize.STRING,
        allowNull: false
    },
    description: {
        type: Sequelize.STRING,
        allowNull: false
    },
    price: {
        type: Sequelize.NUMERIC,
        allowNull: false
    },
    duration: {
        type: Sequelize.NUMERIC,
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
    tableName: 'barbershop_services'
})
BarbershopService.associate = function(models) {
    BarbershopService.belongsTo(models.Barbershop)
    BarbershopService.hasMany(models.Schedule, {
        foreignKey: 'barbershop_service_id'
    })
    // BarbershopService.hasMany(models.EmployeeService, {
    //     foreignKey: 'barbershop_service_id'
    // })
}

module.exports = BarbershopService
