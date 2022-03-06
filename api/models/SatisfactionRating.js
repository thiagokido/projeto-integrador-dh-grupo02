module.exports = (sequelize, DataType) => {
    const SatisfactionRating = sequelize.define( 'SatisfactionRating', {
        id: {
            autoIncrement: true,
            primaryKey: true,
            allowNull: false,
            type: DataType.INTEGER
        },
        barbershop_score: {
            type: DataType.INTEGER,
            allowNull: false
        },
        employee_score: {
            type: DataType.INTEGER,
            allowNull: false
        },
        survey_status: {
            type: DataType.STRING,
            allowNull: false
        },
        comment: {
            type: DataType.STRING,
            allowNull: true
        },
        rated_at: {
            type: DataType.DATE,
            allowNull: true
        }
    },
    {
        tableName: 'satisfaction_ratings'
    })
    SatisfactionRating.associate = function(models) {
        SatisfactionRating.belongsTo(models.Schedule)
    }
}