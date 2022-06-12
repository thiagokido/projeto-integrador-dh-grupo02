'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn( 
      'Schedules',
      'barbershop_service_id',
      {
        allowNull: true,
        type: Sequelize.DataTypes.INTEGER,
        references: {
          model: 'Barbershop_Services',
          key: 'id'
        }
      }
    )
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.addColumn( 'Schedules', 'barbershop_service_id' )
  }
};
