const issueModel = require('../models/issue.model');

const issueService = {
  async createIssue(data) {
    return await issueModel.createIssue(data);
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
