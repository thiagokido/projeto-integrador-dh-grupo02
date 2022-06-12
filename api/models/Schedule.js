const Sequelize = require('sequelize');
const database = require('../config/index')

const Schedule = database.define('Schedule', {
    id: {
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER
    },
    schedule_datetime: {
        allowNull: false,
        type: Sequelize.DATE
    },
    estimated_endtime: {
        allowNull: false,
        type: Sequelize.DATE
    },
    schedule_status: {
        allowNull: false,
        type: Sequelize.STRING
    },
    customer_id: {
        allowNull: false,
        type: Sequelize.INTEGER
    },
    barbershop_id: {
        allowNull: false,
        type: Sequelize.INTEGER
    },
    employee_service_id: {
        allowNull: false,
        type: Sequelize.INTEGER
    },
    barbershop_service_id: {
        allowNull: true,
        type: Sequelize.INTEGER
    }
},
{
    tableName: 'schedules'
})
Schedule.associate = function(models) {
    Schedule.belongsTo(models.Barbershop)
    Schedule.belongsTo(models.BarbershopService)
    Schedule.belongsTo(models.BarbershopEmployee)
    Schedule.belongsTo(models.Customer)
    Schedule.hasMany(models.ScheduleEvent, {
        foreignKey: 'schedule_id'
    })
    Schedule.hasMany(models.SatisfactionRating, {
        foreignKey: 'schedule_id'
    })
}

module.exports = Schedule