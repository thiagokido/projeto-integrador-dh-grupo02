module.exports = (sequelize, DataType) => {
    const Barbershop = sequelize.define( 'Barbershop', {
        id: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        name: {
            type: DataType.STRING,
            allowNull: false
        },
        cnpj: {
            type: DataType.STRING,
            allowNull: false
        },
        email: {
            type: DataType.STRING,
            allowNull: false
        },
        phone_number: {
            type: DataType.STRING,
            allowNull: false
        },
        description: {
            type: DataType.STRING,
            allowNull: true
        },
        address: {
            type: DataType.STRING,
            allowNull: true
        },
        zip_code: {
            type: DataType.STRING,
            allowNull: true
        },
        district: {
            type: DataType.STRING,
            allowNull: true
        },
        city: {
            type: DataType.STRING,
            allowNull: true
        },
        state: {
            type: DataType.STRING,
            allowNull: true
        },
        address_details: {
            type: DataType.STRING,
            allowNull: true
        },
        active: {
            type: DataType.BOOLEAN,
            allowNull: false
        }
    },
    {
        tableName: 'barbershops'
    })
    return Barbershop
}