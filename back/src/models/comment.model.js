const Comment = require('../sequelizeModels/comment.sequelizeModel');
const commentModel = {
  async editComment({ commentId, comment, date }) {
    return await Comment.update({
      id: commentId,
      comment: comment,
      date: date,
    });
  },
};

module.exports = commentModel;
