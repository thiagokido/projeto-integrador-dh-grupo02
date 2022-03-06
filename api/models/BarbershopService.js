module.exports = (sequelize, DataType) => {
    const BarbershopService = sequelize.define( 'BarbershopService', {
        id: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull:false
        },
        service: {
            type: DataType.STRING,
            allowNull: false
        },
        description: {
            type: DataType.STRING,
            allowNull: false
        },
        price: {
            type: DataType.NUMERIC,
            allowNull: false
        },
        duration: {
            type: DataType.NUMERIC,
            allowNull: false
        },
        active: {
            type: DataType.BOOLEAN,
            allowNull: false
        }
    },
    {
        tableName: 'barbershop_services'
    })
    BarbershopService.associate = function(models) {
        BarbershopService.belongsTo(models.Barbershop)
        BarbershopService.hasMany(models.EmployeeService, {
            foreignKey: 'barbershop_service_id'
        })
    }
    return BarbershopService
}