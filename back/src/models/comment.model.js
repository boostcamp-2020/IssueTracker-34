const Comment = require('../sequelizeModels/comment.sequelizeModel');

const commentModel = {
  async createComment({ userId, issueId, comment, date }) {
    return await Comment.create({
      comment: comment,
      date: date,
      user_id: userId,
      issue_id: issueId,
    });
  },
  async editComment({ commentId, comment, date }) {
    return await Comment.update({
      id: commentId,
      comment: comment,
      date: date,
    });
  },
};

module.exports = commentModel;
