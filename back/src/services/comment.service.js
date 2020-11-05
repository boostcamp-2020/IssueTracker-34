const commentModel = require('../models/comment.model');

const createComment = async ({ userId, issueId, comment, date }) => {
  const result = await commentModel.createComment({
    userId,
    issueId,
    comment,
    date,
  });

  if (result) {
    return result;
  }
  throw new Error('createComment failed');
};

module.exports = { createComment };
