const Sequelize = require('sequelize');
const database = require('../config/index')

const Barbershop = database.define( 'barbershop', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    cnpj: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false
    },
    phone_number: {
        type: Sequelize.STRING,
        allowNull: false
    },
    description: {
        type: Sequelize.STRING,
        allowNull: true
    },
    address: {
        type: Sequelize.STRING,
        allowNull: true
    },
    zip_code: {
        type: Sequelize.STRING,
        allowNull: true
    },
    district: {
        type: Sequelize.STRING,
        allowNull: true
    },
    city: {
        type: Sequelize.STRING,
        allowNull: true
    },
    state: {
        type: Sequelize.STRING,
        allowNull: true
    },
    address_details: {
        type: Sequelize.STRING,
        allowNull: true
    },
    active: {
        type: Sequelize.BOOLEAN,
        allowNull: false
    }
},
{
    tableName: 'barbershops'
})
Barbershop.associate = function(models) {
    Barbershop.hasMany(models.BarbershopOpeningHour, {
        foreignKey: 'barbershop_id'
    })
    Barbershop.hasMany(models.BarbershopEmployee, {
        foreignKey: 'barbershop_id'
    })
    Barbershop.hasMany(models.BarbershopService, {
        foreignKey: 'barbershop_id'
    })
    Barbershop.hasMany(models.Schedule, {
        foreignKey: 'barbershop_id'
    })
}

module.exports = Barbershop