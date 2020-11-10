const express = require('express');
const router = express.Router();
const commentController = require('../controllers/comment.controller');
const createCommentValidator = require('../middleware/createCommentValidator');
const deleteCommentValidator = require('../middleware/deleteCommentValidator');
const editCommentValidator = require('../middleware/editCommentValidator');

router.post('/', createCommentValidator, commentController.createComment);
router.get('/', commentController.getComments);
router.patch('/', editCommentValidator, commentController.editComment);
router.delete('/', deleteCommentValidator, commentController.deleteComment);

module.exports = router;
