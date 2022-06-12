const Sequelize = require('sequelize');
const database = require('../config/index')

const ScheduleEvent = database.define( 'ScheduleEvent', {
    id: {
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
        type: Sequelize.INTEGER
    },
    event_type: {
        allowNull: false,
        type: Sequelize.STRING
    },
    field: {
        allowNull: false,
        type: Sequelize.STRING
    },
    value: {
        allowNull: false,
        type: Sequelize.STRING
    },
    previous_value: {
        allowNull: false,
        type: Sequelize.STRING
    },
    created_by: {
        allowNull: false,
        type: Sequelize.INTEGER
    }
},
{
    tableName: 'schedule_events'
})
ScheduleEvent.associate = function(models) {
    ScheduleEvent.belongsTo(models.Schedule)
}

module.exports = ScheduleEvent