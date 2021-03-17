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
    chat_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    lang: DataTypes.STRING,
    type: DataTypes.STRING,
    phone: DataTypes.STRING,
    nickname: DataTypes.STRING,
    state: DataTypes.STRING,
    settings: DataTypes.JSONB,
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};