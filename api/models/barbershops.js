'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Barbershops extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Barbershops.init({
    name: DataTypes.STRING,
    cnpj: DataTypes.STRING,
    email: DataTypes.STRING,
    phone_number: DataTypes.STRING,
    description: DataTypes.STRING,
    address: DataTypes.STRING,
    zip_code: DataTypes.STRING,
    district: DataTypes.STRING,
    city: DataTypes.STRING,
    state: DataTypes.STRING,
    address_details: DataTypes.STRING,
    active: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Barbershops',
  });
  return Barbershops;
};