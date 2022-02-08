'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Barbershop_opening_hours extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Barbershop_opening_hours.init({
    weekday: DataTypes.INTEGER,
    opened: DataTypes.BOOLEAN,
    opening_time: DataTypes.TIME,
    closing_time: DataTypes.TIME
  }, {
    sequelize,
    modelName: 'Barbershop_opening_hours',
  });
  return Barbershop_opening_hours;
};