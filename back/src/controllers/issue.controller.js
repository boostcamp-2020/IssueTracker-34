const issueService = require('../services/issue.service');

exports.getIssues = async (req, res) => {
  try {
    const issues = await issueService.getIssues();
    return res.status(200).json({ issues });
  } catch (err) {
    const { message } = err;
    return res.status(500).json({ message: message });
  }
};
