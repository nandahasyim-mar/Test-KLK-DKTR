'use strict';
const {
  Model
} = require('sequelize');
const  { hashPassword } = require('../helpers/index')
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
      type: DataTypes.BIGINT,
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
    hooks: {
      beforeCreate(user) {
        user.password = hashPassword(user.password)
      }
    },
    sequelize,
    modelName: 'User',
  });
  return User;
};