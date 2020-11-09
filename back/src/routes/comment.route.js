const express = require('express');
const router = express.Router();
const commentController = require('../controllers/comment.controller');
const editCommentValidator = require('../middleware/editCommentValidator');

router.post('/', commentController.createComment);
router.patch('/', editCommentValidator, commentController.editComment);

module.exports = router;
