const express = require('express');
const router = express.Router();
const commentController = require('../controllers/comment.controller');
const deleteCommentValidator = require('../middleware/deleteCommentValidator');
const editCommentValidator = require('../middleware/editCommentValidator');

router.post('/', commentController.createComment);
router.get('/', commentController.getComments);
router.patch('/', editCommentValidator, commentController.editComment);
router.delete('/', deleteCommentValidator, commentController.deleteComment);

module.exports = router;
