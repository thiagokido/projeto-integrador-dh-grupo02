module.exports = (sequelize, DataType) => {
    const BarbershopOpeningHour = sequelize.define('BarbershopOpeningHour',{
        id: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull:false
        },
        weekday: {
            type: DataType.INTEGER,
            allowNull: false
        },
        opened: {
            type: DataType.BOOLEAN,
            allowNull: false
        },
        opening_time: {
            type: DataType.TIME,
            allowNull: true
        },
        closing_time: {
            type: DataType.TIME,
            allowNull: true
        }   
    },
    {
        tableName: 'barbershop_opening_hours'
    })
    BarbershopOpeningHour.associate = function(models) {
        BarbershopOpeningHour.belongsTo(models.Barbershop)
    }
    return BarbershopOpeningHour
}
