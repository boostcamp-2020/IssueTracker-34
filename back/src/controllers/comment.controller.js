const commentService = require('../services/comment.service');

const commnetController = {
  async createComment(req, res) {
    try {
      const { userId, issueId, comment, date } = req.body;
      if (!userId || !issueId || !comment || !date) {
        throw new Error('param error');
      }
      const result = await commentService.createComment({
        userId,
        issueId,
        comment,
        date,
      });

      return res.status(200).json(result);
    } catch (e) {
      const { message } = e;

      console.log(e);
      if (message) return res.status(400).json(message);
      return res.status(500).json();
    }
  },
  async deleteComment(req, res) {
    try {
      const { commentId } = req.body;
      const result = await commentService.deleteComment({ commentId });

      return res.status(200).json(result);
    } catch (err) {
      if (err.message) {
        return res.status(400).send();
      }
      return res.status(500).send();
    }
  },
};

module.exports = commnetController;
