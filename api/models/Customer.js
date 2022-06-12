const Sequelize = require('sequelize');
const database = require('../config/index')

const Customer = database.define('Customer',{
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull:false
    },
    first_name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    last_name: {
        type: Sequelize.STRING,
        allowNull: true
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false
    },
    cpf: {
        type: Sequelize.STRING,
        allowNull: true
    },
    phone_number: {
        type: Sequelize.STRING,
        allowNull:false
    },
    active: {
        type: Sequelize.BOOLEAN
    }
},
{
    tableName:'customers'
})
Customer.associate = function(models) {
    Customer.hasMany(models.Schedule, {
        foreignKey: 'customer_id'
    })
}

module.exports = Customer