const sequelize = require('../sequelizeModels/config.sequelizeModels');
const Issue = require('../sequelizeModels/issue.sequelizeModel');
const IssuesHasLabels = require('../sequelizeModels/issues_has_labels.sequelizeModel');
const Assignee = require('../sequelizeModels/assignee.sequelizeModel');
const User = require('../sequelizeModels/user.sequelizeModel');
const Milestone = require('../sequelizeModels/milestone.sequelizeModel');
const Label = require('../sequelizeModels/label.sequelizeModel');

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
        }),
      );

      await Assignee.bulkCreate(
        assignees.map((assignee) => {
          return { user_id: assignee, issue_id: issueId };
        }),
      );

      return issue;
    });

    return createResult;
  },
  async getIssues() {
    const issues = await Issue.findAll({
      attributes: [
        'id',
        'date',
        'title',
        'status_open_closed',
        'content',
        'user_id',
      ],
      include: [
        {
          model: User,
          through: {
            attributes: [],
          },
        },
        {
          model: Milestone,
          attributes: ['id', 'title'],
        },
        {
          model: Label,
          attributes: ['id', 'name', 'color'],
          through: {
            attributes: [],
          },
        },
      ],
    });

    const issueList = await Promise.all(
      issues.map(async (issue) => {
        const issueCreateUserId = issue.dataValues.user_id;
        const user = await User.findByPk(issueCreateUserId);

        issue.dataValues['user'] = user.dataValues;
        delete issue.dataValues.user_id;

        issue.dataValues['assignees'] = issue.dataValues.users;
        delete issue.dataValues.users;

        return issue;
      }),
    );

    return issueList;
  },
  async editIssue({
    issueId,
    title,
    content,
    milestone,
    statusOpenClosed,
    labels,
    assignees,
  }) {
    const updateResult = await sequelize.transaction(async () => {
      const result = await Issue.update(
        {
          title: title,
          content: content,
          milestone_id: milestone,
          status_open_closed: statusOpenClosed,
        },
        { where: { id: issueId } },
      );

      if (labels) {
        await IssuesHasLabels.destroy({ where: { issue_id: issueId } });

        await IssuesHasLabels.bulkCreate(
          labels.map((label) => {
            return { issue_id: issueId, label_id: label };
          }),
        );
      }

      if (assignees) {
        await Assignee.destroy({ where: { issue_id: issueId } });

        await Assignee.bulkCreate(
          assignees.map((assignee) => {
            return { user_id: assignee, issue_id: issueId };
          }),
        );
      }

      return result;
    });

    return updateResult;
  },
};

module.exports = issueModel;
