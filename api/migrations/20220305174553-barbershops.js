'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable( 'Barbershops', {
      id: {
        type: Sequelize.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      name: {
          type: Sequelize.DataTypes.STRING,
          allowNull: false
      },
      cnpj: {
          type: Sequelize.DataTypes.STRING,
          allowNull: false
      },
      email: {
          type: Sequelize.DataTypes.STRING,
          allowNull: false
      },
      phone_number: {
          type: Sequelize.DataTypes.STRING,
          allowNull: false
      },
      description: {
          type: Sequelize.DataTypes.STRING,
          allowNull: true
      },
      address: {
          type: Sequelize.DataTypes.STRING,
          allowNull: true
      },
      zip_code: {
          type: Sequelize.DataTypes.STRING,
          allowNull: true
      },
      district: {
          type: Sequelize.DataTypes.STRING,
          allowNull: true
      },
      city: {
          type: Sequelize.DataTypes.STRING,
          allowNull: true
      },
      state: {
          type: Sequelize.DataTypes.STRING,
          allowNull: true
      },
      address_details: {
          type: Sequelize.DataTypes.STRING,
          allowNull: true
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
    } )
  },
  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('Barbershops')
  }
};
