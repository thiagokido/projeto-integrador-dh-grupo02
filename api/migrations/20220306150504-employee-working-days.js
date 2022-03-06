'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable( 'Employee_working_days', {
      id: {
          autoIncrement: true,
          primaryKey: true,
          allowNull: false,
          type: Sequelize.DataTypes.INTEGER
      },
      employee_id: {
          type: Sequelize.DataTypes.INTEGER,
          allowNull: false,
          references: {
              model: 'Barbershop_employees',
              key: 'id' 
          }
      },
      weekday: {
          type: Sequelize.DataTypes.INTEGER,
          allowNull: false
      },
      start_time: {
          type: Sequelize.DataTypes.TIME,
          allowNull: true
      },
      end_time: {
          type: Sequelize.DataTypes.TIME,
          allowNull: true
      },
      active: {
          type: Sequelize.DataTypes.BOOLEAN,
          allowNull: false
      },
      createdAt: {
          type: Sequelize.DataTypes.DATE
      },
      updatedAt: {
          type: Sequelize.DataTypes.DATE
      }
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('Employee_working_days')
  }
};
