const commentService = require('../services/comment.service');

const deleteComment = async (req, res) => {
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
};

module.exports = { deleteComment };
