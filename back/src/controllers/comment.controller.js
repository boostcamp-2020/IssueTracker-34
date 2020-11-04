const commentService = require('../services/comment.service');

const deleteComment = async (req, res) => {
  try {
    const { commentId } = req.body;

    if (!commentId) {
      throw new Error('param error');
    }
    const result = await commentService.deleteComment({ commentId });

    return res.status(200).json(result);
  } catch (e) {
    const { message } = e;

    console.log(e);
    if (message) return res.status(400).json(message);
    return res.status(500).json();
  }
};

module.exports = { deleteComment };
