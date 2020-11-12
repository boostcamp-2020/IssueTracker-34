const Comment = require('../sequelizeModels/comment.sequelizeModel');
const Users = require('../sequelizeModels/user.sequelizeModel');
const Sequelize = require('sequelize');

const commentModel = {
  async createComment({ userId, issueId, comment, date }) {
    return await Comment.create({
      comment: comment,
      date: date,
      user_id: userId,
      issue_id: issueId,
    });
  },

  //전체 코멘트의 개수를 알아야 해서 필요합니다.
  async getAllComments() {
    return await Comment.findAll();
  },

  async getComments({ issueId }) {
    return await Comment.findAll({
      include: [{ model: Users, required: true }],
      where: {
        [Sequelize.Op.and]: [{ issue_id: issueId }],
      },
    });
  },

  async editComment({ commentId, comment, date }) {
    return await Comment.update(
      { comment: comment, date: date },
      { where: { id: commentId } },
    );
  },

  async deleteComment({ commentId }) {
    return await Comment.destroy({ where: { id: commentId } });
  },
};

module.exports = commentModel;
