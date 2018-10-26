'use strict';
module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define('Users', {
    id:{
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUIDV4
    },
    name:{  
      type: DataTypes.STRING,
      allowNull: false
        },
    lastname:{
      type: DataTypes.STRING,
      allowNull: false
    },
    email:{
      type:DataTypes.STRING,
      allowNull:false,
      unique:true,
      //unique:true,
      validate:{
        isEmail:true,
        notEmpty:{
          args:true,
          msg:"Email must be provided"
        }
      },
     
    },
    password: DataTypes.STRING,
    gender: {type:DataTypes.ENUM,values:["M","F"]},
    birth_date: DataTypes.DATE,
    paypal_id: DataTypes.STRING,
    type: {type:DataTypes.ENUM,values:["guest","owner","both"]},

  }, {});
  Users.associate = function(models) {
    // associations can be defined here
    Users.hasMany(models.Restaurants,{foreignKey:"userId"})
    Users.hasMany(models.Orders,{foreignKey:"userId",as:"orders"})
  };
  return Users;
};