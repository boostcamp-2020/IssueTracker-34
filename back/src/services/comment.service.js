const { getAllComments } = require('../models/comment.model');
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

  async getAllComments() {
    const result = await commentModel.getAllComments();
    if (result) {
      return result;
    }
    throw new Error('Bad Request');
  },
  async getComments({ issueId }) {
    const result = await commentModel.getComments({ issueId });

    if (result) {
      return result;
    }
    throw new Error('Bad Request');
  },

  async editComment({ commentId, comment, date }) {
    console.log(commentId, comment, date);
    const result = await commentModel.editComment({
      commentId,
      comment,
      date,
    });

    if (result) {
      console.log(result);
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
