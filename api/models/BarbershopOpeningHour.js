const Sequelize = require('sequelize');
const database = require('../config/index')

const BarbershopOpeningHour = database.define('barbershopOpeningHour',{
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull:false
    },
    weekday: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    opened: {
        type: Sequelize.BOOLEAN,
        allowNull: false
    },
    opening_time: {
        type: Sequelize.TIME,
        allowNull: true
    },
    closing_time: {
        type: Sequelize.TIME,
        allowNull: true
    },
    barbershop_id: {
        type: Sequelize.INTEGER,
        allowNull: false
    }   
},
{
    tableName: 'barbershop_opening_hours'
})
BarbershopOpeningHour.associate = function(models) {
    BarbershopOpeningHour.belongsTo(models.Barbershop)
}

module.exports = BarbershopOpeningHour
