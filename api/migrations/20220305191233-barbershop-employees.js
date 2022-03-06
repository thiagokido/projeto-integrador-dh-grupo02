'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable( 'Barbershop_employees', {
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
      full_name: {
          type: Sequelize.DataTypes.STRING,
          allowNull: false
      },
      email: {
          type: Sequelize.DataTypes.STRING,
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
    await queryInterface.dropTable('Barbershop_employees')
  }
};
