'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('Barbershop_services', {
      id: {
          type: Sequelize.DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull:false
      },
      barbershop_id: {
          type: Sequelize.DataTypes.INTEGER,
          allowNull: false,
          references: {
              model: 'Barbershops',
              key: 'id'
          }
      },
      service: {
          type: Sequelize.DataTypes.STRING,
          allowNull: false
      },
      description: {
          type: Sequelize.DataTypes.STRING,
          allowNull: false
      },
      price: {
          type: Sequelize.DataTypes.NUMERIC,
          allowNull: false
      },
      duration: {
          type: Sequelize.DataTypes.NUMERIC,
          allowNull: false
      },
      active: {
          type: Sequelize.DataTypes.BOOLEAN,
          allowNull: false
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
    await queryInterface.dropTable('Barbershop_services')
  }
};
