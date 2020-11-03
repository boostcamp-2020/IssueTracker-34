const Sequelize = require('sequelize');
const sequelize = require('./config.sequelizeModels');

const Comment = sequelize.define(
  'comments',
  {
    id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    comment: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    date: {
      type: Sequelize.DATE,
      allowNull: true,
    },
  },
  { timestamps: false },
);

module.exports = Comment;
