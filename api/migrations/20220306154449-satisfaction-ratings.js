'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable( 'Satisfaction_ratings', {
      id: {
          autoIncrement: true,
          primaryKey: true,
          allowNull: false,
          type: Sequelize.DataTypes.INTEGER
      },
      schedule_id: {
          allowNull: false,
          type: Sequelize.DataTypes.INTEGER,
          references: {
            model: 'Schedules',
            key: 'id'
          }
      },
      barbershop_score: {
          type: Sequelize.DataTypes.INTEGER,
          allowNull: false
      },
      employee_score: {
          type: Sequelize.DataTypes.INTEGER,
          allowNull: false
      },
      survey_status: {
          type: Sequelize.DataTypes.STRING,
          allowNull: false
      },
      comment: {
          type: Sequelize.DataTypes.STRING,
          allowNull: true
      },
      rated_at: {
          type: Sequelize.DataTypes.DATE,
          allowNull: true
      },
      createdAt: {
          type: Sequelize.DataTypes.DATE,
          allowNull: false
      }
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable( 'Satisfaction_ratings')
  }
};
