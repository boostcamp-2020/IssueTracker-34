const commentModel = require('../models/comment.model');

const commentService = {
  async createComment({ userId, issueId, comment, date }) {
    const result = await commentModel.createComment({
      userId,
      issueId,
      comment,
      date,
    });

    if (result) {
      return result;
    }
    throw new Error('Bad Request');
  },

  async editComment({ commentId, comment, date }) {
    const result = await commentModel.editComment({
      commentId,
      comment,
      date,
    });
    if (result) {
      return result;
    }
    throw new Error('Bad Request');
  },

  async deleteComment({ commentId }) {
    const result = await commentModel.deleteComment({ commentId });

    if (result) {
      return result;
    }
    throw new Error('Bad Request');
  },
};

module.exports = commentService;
