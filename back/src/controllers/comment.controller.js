const commentService = require('../services/comment.service');

const editComment = async (req, res) => {
  try {
    const { commentId, comment, date } = req.body;
    if (!userId || !issueId) {
      throw new Error('param error');
    }
    const result = await commentService.editComment({
      commentId,
      comment,
      date,
    });

    return res.status(200).json(result);
  } catch (err) {
    const { message } = err;

    if (message === 'Bad Request') {
      return res.status(400).send();
    }
    return res.status(500).json();
  }
};

module.exports = { editComment };
