'use strict';
module.exports = (sequelize, DataTypes) => {
  const OrderDishes = sequelize.define('OrderDishes', {
    quantity_dishes: DataTypes.NUMBER,
    dish_specification: DataTypes.STRING
  }, {});
  OrderDishes.associate = function(models) {
    // associations can be defined here
  };
  return OrderDishes;
};