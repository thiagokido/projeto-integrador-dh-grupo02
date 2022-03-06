'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable( 'Schedule_events', {
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
      event_type: {
          allowNull: false,
          type: Sequelize.DataTypes.STRING
      },
      field: {
          allowNull: false,
          type: Sequelize.DataTypes.STRING
      },
      value: {
          allowNull: false,
          type: Sequelize.DataTypes.STRING
      },
      previous_value: {
          allowNull: false,
          type: Sequelize.DataTypes.STRING
      },
      created_by: {
          allowNull: false,
          type: Sequelize.DataTypes.INTEGER
      },
      createdAt: {
          type: Sequelize.DataTypes.DATE,
          allowNull: false
      }
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('Schedule_events')
  }
};
