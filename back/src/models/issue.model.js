const Issue = require('../sequelizeModels/issue.sequelizeModel');
const User = require('../sequelizeModels/user.sequelizeModel');
const Milestone = require('../sequelizeModels/milestone.sequelizeModel');
const Label = require('../sequelizeModels/label.sequelizeModel');

const issueModel = {
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
      })
    );

    return issueList;
  },
};

module.exports = issueModel;
