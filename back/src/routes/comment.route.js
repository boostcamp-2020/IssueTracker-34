const express = require('express');
const router = express.Router();
const commentController = require('../controllers/comment.controller');

router.patch('/', commentController.editComment);

module.exports = router;
