const express = require('express');
const router = express.Router();
const commentController = require('../controllers/comment.controller');

router.post('/', commentController.createComment);
router.get('/', commentController.getComments);

module.exports = router;
