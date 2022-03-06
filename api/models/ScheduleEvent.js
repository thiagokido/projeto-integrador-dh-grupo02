module.exports = (sequelize, DataType) => {
    const ScheduleEvent = sequelize.define( 'ScheduleEvent', {
        id: {
            autoIncrement: true,
            primaryKey: true,
            allowNull: false,
            type: DataType.INTEGER
        },
        event_type: {
            allowNull: false,
            type: DataType.STRING
        },
        field: {
            allowNull: false,
            type: DataType.STRING
        },
        value: {
            allowNull: false,
            type: DataType.STRING
        },
        previous_value: {
            allowNull: false,
            type: DataType.STRING
        },
        created_by: {
            allowNull: false,
            type: DataType.INTEGER
        }
    },
    {
        tableName: 'schedule_events'
    })
    ScheduleEvent.associate = function(models) {
        ScheduleEvent.belongsTo(models.Schedule)
    }
}