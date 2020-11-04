const issueModel = require('../models/issue.model');

exports.getIssues = async () => {
  const issues = await issueModel.getIssues();

  if (issues) return issues;

  throw new Error('Failed to get issues');
};
