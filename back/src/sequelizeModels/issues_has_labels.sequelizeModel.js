const sequelize = require('./config.sequelizeModels');

const IssuesHasLabels = sequelize.define(
  'issues_has_labels',
  {},
  { timestamps: false },
);

module.exports = IssuesHasLabels;
