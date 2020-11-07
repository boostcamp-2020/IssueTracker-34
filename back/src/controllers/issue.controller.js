const issueService = require('../services/issue.service');

const issueController = {
  async createIssue(req, res) {
    try {
      const data = req.body;
      const result = await issueService.createIssue(data);
      return res.status(200).json(result);
    } catch (err) {
      res.status(500).send();
    }
  },
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
