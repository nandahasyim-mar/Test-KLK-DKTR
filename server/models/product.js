'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Product.init({
    code_sku: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          message: "Code is required"
        }
      }
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          message: "Name is required"
        }
      }
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false, 
      validate: {
        notEmpty: {
          message: "Image is required"
        },
        isUrl: {
          message: "Image must be format url!"
        }
      }
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        min: {
          args: [0],
          message: "The quantity must be more than 0!" 
        },
        notEmpty: {
          message: "Quantity is required"
        },
        isNumeric: {
          message: "Quantity must be format number!"
        }
      }
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        min: {
          args: [1],
          message: "The price must be more than 0!"
        },
        notEmpty: {
          message: "Price is required"
        },
        isNumeric: {
          message: "The Price must be format number!"
        }
      }
    }
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};