const express = require('express');
const router = express.Router();
const issueController = require('../controllers/issue.controller');

router.get('/', issueController.getIssues);

module.exports = router;
