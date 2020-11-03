const Sequelize = require('sequelize');
const sequelize = require('./config.sequelizeModels');

const Milestone = sequelize.define(
  'milestones',
  {
    id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    description: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    due_date: {
      type: Sequelize.DATE,
      allowNull: true,
    },
    status_open_closed: {
      type: Sequelize.TINYINT,
      allowNull: false,
    },
  },
  { timestamps: false },
);

module.exports = Milestone;
