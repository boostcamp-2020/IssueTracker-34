const commentModel = require('../models/comment.model');

const editComment = async ({ commentId, comment, date }) => {
  const result = await commentModel.editComment({
    commentId,
    comment,
    date,
  });

  if (result) {
    return result;
  }
  throw new Error('editComment failed');
};

module.exports = { editComment };
