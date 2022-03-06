module.export = (sequelize, DataType) => {
    const EmployeeWorkingDay = sequelize.define( 'EmployeeWorkingDay', {
        id: {
            autoIncrement: true,
            primaryKey: true,
            allowNull: false,
            type: DataType.INTEGER
        },
        weekday: {
            type: DataType.INTEGER,
            allowNull: false
        },
        start_time: {
            type: DataType.TIME,
            allowNull: true
        },
        end_time: {
            type: DataType.TIME,
            allowNull: true
        },
        active: {
            type: DataType.BOOLEAN,
            allowNull: true
        }
    },
    {
        tableName: 'employee_working_days'
    })
    EmployeeWorkingDay.associate = function(models) {
        EmployeeWorkingDay.belongsTo(models.BarbershopEmployee)
    }
    return EmployeeWorkingDay
}