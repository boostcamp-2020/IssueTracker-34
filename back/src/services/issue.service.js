const issueModel = require('../models/issue.model');

const issueService = {
  async createIssue(data) {
    return await issueModel.createIssue(data);
  },
};

module.exports = issueService;
