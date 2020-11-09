const commentModel = require('../models/comment.model');

const deleteComment = async ({ commentId }) => {
  const result = await commentModel.deleteComment({ commentId });

  if (result) {
    return result;
  }
  throw new Error('Bad Request');
};

module.exports = { deleteComment };
