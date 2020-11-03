const Sequelize = require('sequelize');
const sequelize = require('./config.sequelizeModels');

const User = sequelize.define(
  'users',
  {
    id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    profile_url: {
      type: Sequelize.STRING,
      allowNull: true,
    },
  },
  { timestamps: false },
);

module.exports = User;
