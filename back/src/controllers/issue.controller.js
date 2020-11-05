const issueService = require('../services/issue.service');

const issueController = {
  async createIssue(req, res) {
    try {
      const { userId, title, content, milestone, labels, assignees } = req.body;

      if (!userId || !title) {
        throw new Error('param error');
      }

      const createResult = await issueService.createIssue({
        userId,
        title,
        content,
        milestone,
        labels,
        assignees,
      });

      res.status(200).json(createResult);
    } catch (err) {
      const { message } = err;
      res.status(500).json({ message: message });
    }
  },
};

module.exports = issueController;
