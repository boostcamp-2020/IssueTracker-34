const Comment = require('../sequelizeModels/comment.sequelizeModel');

const createComment = async ({ userId, issueId, comment, date }) => {
  return await Comment.create({
    comment: comment,
    date: date,
    user_id: userId,
    issue_id: issueId,
  });
};

module.exports = { createComment };
