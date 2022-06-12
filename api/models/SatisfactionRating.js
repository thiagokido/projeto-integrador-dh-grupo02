const Sequelize = require('sequelize');
const database = require('../config/index')

const SatisfactionRating = database.define( 'SatisfactionRating', {
    id: {
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
        type: Sequelize.INTEGER
    },
    barbershop_score: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    employee_score: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    survey_status: {
        type: Sequelize.STRING,
        allowNull: false
    },
    comment: {
        type: Sequelize.STRING,
        allowNull: true
    },
    rated_at: {
        type: Sequelize.DATE,
        allowNull: true
    }
},
{
    tableName: 'satisfaction_ratings'
})
SatisfactionRating.associate = function(models) {
    SatisfactionRating.belongsTo(models.Schedule)
}

module.exports = SatisfactionRating