const Sequelize = require('sequelize');
const sequelize = require('./config.sequelizeModels');

const Label = sequelize.define(
  'labels',
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
    color: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    content: {
      type: Sequelize.STRING,
      allowNull: true,
    },
  },
  { timestamps: false },
);

module.exports = Label;
