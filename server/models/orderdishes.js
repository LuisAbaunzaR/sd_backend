'use strict';
module.exports = (sequelize, DataTypes) => {
  const OrderDishes = sequelize.define('OrderDishes', {
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue:DataTypes.UUIDV4
    },
    quantity_dishes:{ type:DataTypes.NUMBER, allowNull:false, defaultValue:1},
    dish_specification: DataTypes.STRING
  }, {});
  OrderDishes.associate = function(models) {
    // associations can be defined here
    OrderDishes.belongsTo(models.Orders,{foreignKey:"orderId"})
    OrderDishes.belongsTo(models.Dishes,{foreignKey:"dishId"})
  };
  return OrderDishes;
};


