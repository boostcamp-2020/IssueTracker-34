const issueModel = require('../models/issue.model');

const issueService = {
  async createIssue({ userId, title, content, milestone, labels, assignees }) {
    const createResult = await issueModel.createIssue({
      userId,
      title,
      content,
      milestone,
      labels,
      assignees,
    });

    if (createResult) {
      return createResult;
    }

    throw new Error('createIssue failed');
  },
};

module.exports = issueService;
