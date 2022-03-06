module.exports = (Sequelize, DataType) => {
    const Schedule = sequelize.define('Schedule', {
        id: {
            autoIncrement: true,
            allowNull: false,
            primaryKey: true,
            type: DataType.INTEGER
        },
        schedule_datetime: {
            allowNull: false,
            type: DataType.DATE
        },
        estimated_endtime: {
            allowNull: false,
            type: DataType.DATE
        },
        schedule_status: {
            allowNull: false,
            type: DataType.STRING
        }
    },
    {
        tableName: 'schedules'
    })
    Schedule.associate = function(models) {
        Schedule.belongsTo(models.EmployeeService)
        Schedule.belongsTo(models.Customer)
        Schedule.hasMany(models.ScheduleEvent, {
            foreignKey: 'schedule_id'
        })
        Schedule.hasMany(models.SatisfactionRating, {
            foreignKey: 'schedule_id'
        })
    }
    return Schedule
}