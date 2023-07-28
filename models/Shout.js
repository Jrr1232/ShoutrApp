const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Shout extends Model { }

Shout.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    user_id: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    text: {
      type: DataTypes.STRING,
      allowNull: false,

    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'shouts',
  }
);

module.exports = Shout;
