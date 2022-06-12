'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn( 
      'Schedules',
      'barbershop_id',
      {
        allowNull: false,
        type: Sequelize.DataTypes.INTEGER,
        references: {
          model: 'Barbershops',
          key: 'id'
        }
      }
    )
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.addColumn( 'Schedules', 'barbershop_id' )
  }
};
