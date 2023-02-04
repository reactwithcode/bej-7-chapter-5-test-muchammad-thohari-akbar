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
  }
  User.init({
    name: {
      type: DataTypes.STRING(50)
    },
    address: {
      type: DataTypes.STRING
    },
    age: {
      type: DataTypes.INTEGER
    },
    job: {
      type: DataTypes.STRING(50)
    },
    city: {
      type: DataTypes.STRING(50)
    },
    email: {
      type: DataTypes.STRING
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW
    },
    deletedAt: {
      type: DataTypes.DATE, 
    },
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};