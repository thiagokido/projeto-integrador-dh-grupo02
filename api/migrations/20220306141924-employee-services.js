'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('Employee_services', {
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
        barbershop_service_id: {
            type: Sequelize.DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'Barbershop_services',
                key: 'id'
            }
        },
        active: {
            type: Sequelize.DataTypes.BOOLEAN,
            allowNull: false
        },
        createdAt: {
            type: Sequelize.DataTypes.DATE,
            allowNull: false
        },
        updatedAt: {
            type: Sequelize.DataTypes.DATE,
            allowNull: false
        }
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('Employee_services')
  }
};
