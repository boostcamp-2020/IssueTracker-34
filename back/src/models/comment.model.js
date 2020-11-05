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
  async getComments({ issueId }) {
    return await Comment.findAll({
      include: [{ model: Users, required: true }],
      where: {
        [Sequelize.Op.and]: [{ issue_id: issueId }],
      },
    });
  },
};

module.exports = commentModel;
