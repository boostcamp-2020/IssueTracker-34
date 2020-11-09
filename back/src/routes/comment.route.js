const express = require('express');
const router = express.Router();
const commentController = require('../controllers/comment.controller');
const deleteCommentValidator = require('../middleware/deleteCommentValidator');

router.post('/', commentController.createComment);
router.delete('/', deleteCommentValidator, commentController.deleteComment);

module.exports = router;
