const Comment = require('../sequelizeModels/comment.sequelizeModel');

const editComment = async ({ commentId, comment, date }) => {
  return await Comment.update({
    id: commentId,
    comment: comment,
    date: date,
  });
};

module.exports = { editComment };
