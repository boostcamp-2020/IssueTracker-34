const Comment = require('./comment.sequelizeModel');
const IssuesHasLabels = require('./issues_has_labels.sequelizeModel');
const Label = require('./label.sequelizeModel');
const Assignee = require('./assignee.sequelizeModel');
const Issue = require('./issue.sequelizeModel');
const User = require('./user.sequelizeModel');
const Milestone = require('./milestone.sequelizeModel');
const sequelize = require('./config.sequelizeModels');

Issue.hasMany(Comment, {
  foreignKey: { name: 'issue_id', allowNull: false },
});

Comment.belongsTo(Issue, {
  foreignKey: { name: 'issue_id', allowNull: false },
});

Issue.belongsToMany(Label, {
  through: IssuesHasLabels,
  foreignKey: { name: 'issue_id', allowNull: false },
});

Label.belongsToMany(Issue, {
  through: IssuesHasLabels,
  foreignKey: { name: 'label_id', allowNull: false },
});

User.belongsToMany(Issue, {
  through: Assignee,
  foreignKey: { name: 'user_id', allowNull: false },
});

Issue.belongsToMany(User, {
  through: Assignee,
  foreignKey: { name: 'issue_id', allowNull: false },
});

User.hasMany(Comment, { foreignKey: { name: 'user_id', allowNull: false } });
Comment.belongsTo(User, { foreignKey: { name: 'user_id', allowNull: false } });

User.hasMany(Issue, { foreignKey: { name: 'user_id', allowNull: false } });
Issue.belongsTo(User, { foreignKey: { name: 'user_id', allowNull: false } });

Milestone.hasMany(Issue, {
  foreignKey: { name: 'milestone_id', allowNull: true },
});
Issue.belongsTo(Milestone, {
  foreignKey: { name: 'milestone_id', allowNull: true },
});

sequelize.sync({ force: true });
