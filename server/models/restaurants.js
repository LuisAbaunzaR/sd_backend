'use strict';
module.exports = (sequelize, DataTypes) => {
  const Restaurants = sequelize.define('Restaurants', {
    name: DataTypes.STRING,
    kind: DataTypes.ENUM,
    description: DataTypes.STRING,
    logo: DataTypes.STRING,
    tel: DataTypes.STRING,
    address_1: DataTypes.STRING,
    address_2: DataTypes.STRING,
    country: DataTypes.STRING,
    city: DataTypes.STRING,
    zip_code: DataTypes.STRING,
    lat: DataTypes.FLOAT,
    long: DataTypes.FLOAT
  }, {});
  Restaurants.associate = function(models) {
    // associations can be defined here
  };
  return Restaurants;
};