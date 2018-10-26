'use strict';
module.exports = (sequelize, DataTypes) => {
  const Orders = sequelize.define('Orders', {
    date: DataTypes.DATE,
    hours: DataTypes.TIME,
    total: DataTypes.DECIMAL,
    notes: DataTypes.STRING,
    tel: DataTypes.STRING,
    address_to_deliver1: DataTypes.STRING,
    address_to_deliver2: DataTypes.STRING,
    country_to_deliver: DataTypes.STRING,
    city_to_deliver: DataTypes.STRING,
    zip_code_to_deliver: DataTypes.STRING,
    lat_to_deliver: DataTypes.FLOAT,
    long_to_deliver: DataTypes.FLOAT,
    status: DataTypes.ENUM
  }, {});
  Orders.associate = function(models) {
    // associations can be defined here
  };
  return Orders;
};