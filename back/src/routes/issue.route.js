const express = require('express');
const router = express.Router();
const issueController = require('../controllers/issue.controller');

router.post('/', issueController.createIssue);

module.exports = router;
