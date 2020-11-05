const issueService = require('../services/issue.service');

const issueController = {
  async getIssues(req, res) {
    try {
      const issues = await issueService.getIssues();
      return res.status(200).json(issues);
    } catch (err) {
      return res.status(500).send();
    }
  },
};

module.exports = issueController;
