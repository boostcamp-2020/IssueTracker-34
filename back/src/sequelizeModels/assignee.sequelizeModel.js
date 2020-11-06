const sequelize = require('./config.sequelizeModels');

const Assignee = sequelize.define('assignees', {}, { timestamps: false });

module.exports = Assignee;
