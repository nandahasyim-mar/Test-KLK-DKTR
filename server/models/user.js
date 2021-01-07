'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  User.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          message: "Name is required"
        }
      }
  },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: {
          message: "Must be format email!"
        },
        notEmpty: "Email is required"
      }
    },
    number_phone: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        isNumeric: {
          message: "Must be format number!"
        },
        notEmpty: {
          message: "Number phone is required"
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          message: "Password is required"
        }
      }
    }
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};