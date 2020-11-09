const commentModel = require('../models/comment.model');

const commentService = {
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
};

module.exports = commentService;
