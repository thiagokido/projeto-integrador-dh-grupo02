'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('Barbershop_opening_hours', {
      id: {
          type: Sequelize.DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull:false
      },
      barbershop_id: {
          allowNull: false,
          type: Sequelize.DataTypes.INTEGER,
          references: {
            model: 'Barbershops',
            key: 'id'
          }
      },
      weekday: {
          type: Sequelize.DataTypes.INTEGER,
          allowNull: false
      },
      opened: {
          type: Sequelize.DataTypes.BOOLEAN,
          allowNull: false
      },
      opening_time: {
          type: Sequelize.DataTypes.TIME,
          allowNull: true
      },
      closing_time: {
          type: Sequelize.DataTypes.TIME,
          allowNull: true
      },
      createdAt: {
          type: Sequelize.DATE
      },
      updatedAt: {
          type: Sequelize.DATE
      }
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('Barbershop_opening_hours')
  }
};
