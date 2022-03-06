'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable( 'Schedules', {
      id: {
          autoIncrement: true,
          allowNull: false,
          primaryKey: true,
          type: Sequelize.DataTypes.INTEGER
      },
      customer_id: {
          allowNull: false,
          type: Sequelize.DataTypes.INTEGER,
          references: {
              model: 'Customers',
              key: 'id'
          }
      },
      employee_service_id: {
          allowNull: false,
          type: Sequelize.DataTypes.INTEGER,
          references: {
              model: 'Employee_services',
              key: 'id'
          }
      },
      schedule_datetime: {
          allowNull: false,
          type: Sequelize.DataTypes.DATE
      },
      estimated_endtime: {
          allowNull: false,
          type: Sequelize.DataTypes.DATE
      },
      schedule_status: {
          allowNull: false,
          type: Sequelize.DataTypes.STRING
      },
      createdAt: {
          allowNull: false,
          type: Sequelize.DataTypes.DATE
      },
      updatedAt: {
          allowNull: false,
          type: Sequelize.DataTypes.DATE
      }
    })
  },
  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable( 'Schedules')
  }
};
