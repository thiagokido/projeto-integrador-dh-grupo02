module.exports = (sequelize, DataType) => {
    const EmployeeServices = sequelize.define( 'BarbershopService', {
        id: {
            autoIncrement: true,
            primaryKey: true,
            allowNull: false,
            type: DataType.INTEGER
        },
        active: {
            type: DataType.BOOLEAN,
            allowNull: false
        }
    },
    {
        tableName: 'employee_services'
    })
    EmployeeServices.associate = function(models) {
        EmployeeServices.belongsTo(models.BarbershopEmployee)
        EmployeeServices.belongsTo(models.BarbershopService)
    }
    return EmployeeServices
}