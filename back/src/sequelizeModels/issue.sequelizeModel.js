const Sequelize = require('sequelize');
const sequelize = require('./config.sequelizeModels');

const Issue = sequelize.define(
  'issues',
  {
    id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    date: {
      type: Sequelize.DATE,
      allowNull: true,
    },
    title: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    status_open_closed: {
      type: Sequelize.TINYINT,
      allowNull: false,
    },
    content: {
      type: Sequelize.STRING,
      allowNull: true,
    },
  },
  { timestamps: false },
);

module.exports = Issue;
