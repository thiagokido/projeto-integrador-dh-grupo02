module.exports = (sequelize, DataType) => {
    const Customer = sequelize.define('Customer',{
        id: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull:false
        },
        first_name: {
            type: DataType.STRING,
            allowNull: false
        },
        last_name: {
            type: DataType.STRING,
            allowNull: true
        },
        email: {
            type: DataType.STRING,
            allowNull: false
        },
        cpf: {
            type: DataType.STRING,
            allowNull: true
        },
        phone_number: {
            type: DataType.STRING,
            allowNull:false
        },
        active: {
            type: DataType.BOOLEAN
        }
    },
    {
        tableName:'customers'
    })
    return Customer
}