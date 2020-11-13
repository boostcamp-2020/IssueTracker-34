const UserModel = require('../models/user.model');
const commentService = require('../services/comment.service');

const commentController = {
  async createComment(req, res) {
    try {
      const { userId, issueId, comment, date } = req.body;

      const userDB_ID = await UserModel.findUser({ github_id: userId })

      const result = await commentService.createComment({
        userId: userDB_ID.dataValues.id,
        issueId,
        comment,
        date,
      });
      return res.status(200).json(result);
    } catch (err) {
      if (err.message) {
        return res.status(400).send();
      }
      return res.status(500).send();
    }
  },

  async getComments(req, res) {
    try {
      const { issueId } = req.query;
      if (!issueId) {
        const result = await commentService.getAllComments();
        return res.status(200).json(result);
      }
      const result = await commentService.getComments({ issueId: Number(issueId) });
      return res.status(200).json(result);
    } catch (err) {
      if (err.message) {
        return res.status(400).send();
      }
      return res.status(500).send();
    }
  },

  async editComment(req, res) {
    try {
      const { commentId, comment, date } = req.body;
      const result = await commentService.editComment({
        commentId,
        comment,
        date,
      });

      return res.status(200).json(result);
    } catch (err) {
      if (err.message) {
        return res.status(400).send();
      }
      return res.status(500).send();
    }
  },

  async deleteComment(req, res) {
    try {
      const { commentId } = req.body;
      const result = await commentService.deleteComment({ commentId });
      return res.status(200).json(result);
    } catch (err) {
      if (err.message) {
        return res.status(400).send();
      }
      return res.status(500).send();
    }
  },
};

module.exports = commentController;
