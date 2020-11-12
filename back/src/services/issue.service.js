const issueModel = require('../models/issue.model');
const UserModel = require("../models/user.model");

const issueService = {
  async createIssue({ userId, title, content, milestone, labels, assignees, authorizedUserId }) {
    const userDB_ID = await UserModel.findUser({ github_id: authorizedUserId })

    return await issueModel.createIssue({ userId: userDB_ID.dataValues.id, title, content, milestone, labels, assignees });
  },
  async getIssues() {
    const issues = await issueModel.getIssues();

    if (issues) {
      return issues;
    }
    throw new Error();
  },
  async editIssue(data) {
    const result = await issueModel.editIssue(data);

    if (result) {
      return result;
    }
    throw new Error('Bad Request');
  },
};

module.exports = issueService;
