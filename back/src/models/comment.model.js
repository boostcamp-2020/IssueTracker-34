const Comment = require('../sequelizeModels/comment.sequelizeModel');

const deleteComment = async ({ commentId }) => {
  return await Comment.destroy({ where: { id: commentId } });
};

module.exports = { deleteComment };
