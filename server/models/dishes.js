'use strict';
module.exports = (sequelize, DataTypes) => {
  const Dishes = sequelize.define('Dishes', {
    name: DataTypes.STRING,
    kind_food: DataTypes.ENUM,
    description: DataTypes.STRING,
    price: DataTypes.DECIMAL,
    quantity: DataTypes.STRING,
    photos: DataTypes.ARRAY
  }, {});
  Dishes.associate = function(models) {
    // associations can be defined here
  };
  return Dishes;
};