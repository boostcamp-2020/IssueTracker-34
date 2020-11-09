const commentService = require('../services/comment.service');
const commentController = {
  async editComment(req, res) {
    try {
      const result = await commentService.editComment({
        commentId,
        comment,
        date,
      });

      return res.status(200).json(result);
    } catch (err) {
      if (err.message) {
        return res.status(400).send();
      }
      return res.status(500).send();
    }
  },
};

module.exports = commentController;
