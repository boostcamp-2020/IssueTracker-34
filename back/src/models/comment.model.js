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
    return await Comment.update(
      { comment: comment, date: date },
      { where: { id: commentId } }
    );
  },
  
  async deleteComment({ commentId }) {
    return await Comment.destroy({ where: { id: commentId } });
  },
};

module.exports = commentModel;
