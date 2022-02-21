'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('Customers', {
      id: {
          type: Sequelize.DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull:false
      },
      first_name: {
          type: Sequelize.DataTypes.STRING(50),
          allowNull: false
      },
      last_name: {
          type: Sequelize.DataTypes.STRING(50),
          allowNull: true
      },
      email: {
          type: Sequelize.DataTypes.STRING(150),
          allowNull: false
      },
      cpf: {
          type: Sequelize.DataTypes.STRING(11),
          allowNull: true
      },
      phone_number: {
          type: Sequelize.DataTypes.STRING(15),
          allowNull:false
      },
      active: {
          type: Sequelize.BOOLEAN
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
    await queryInterface.dropTable('Customers')
  }
};
