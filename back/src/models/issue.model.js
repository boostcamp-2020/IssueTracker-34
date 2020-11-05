const sequelize = require('../sequelizeModels/config.sequelizeModels');
const Issue = require('../sequelizeModels/issue.sequelizeModel');
const IssuesHasLabels = require('../sequelizeModels/issues_has_labels.sequelizeModel');
const Assignee = require('../sequelizeModels/assignee.sequelizeModel');

const issueModel = {
  async createIssue({ userId, title, content, milestone, labels, assignees }) {
    const createResult = await sequelize.transaction(async (t) => {
      const issue = await Issue.create({
        user_id: userId,
        milestone_id: milestone,
        date: Date(),
        title: title,
        status_open_closed: true,
        content: content,
      });

      const issueId = issue.dataValues.id;

      await IssuesHasLabels.bulkCreate(
        labels.map((label) => {
          return { issue_id: issueId, label_id: label };
        })
      );

      await Assignee.bulkCreate(
        assignees.map((assignee) => {
          return { user_id: assignee, issue_id: issueId };
        })
      );

      return issue;
    });

    return createResult;
  },
};

module.exports = issueModel;
