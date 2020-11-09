const express = require('express');
const router = express.Router();
const issueController = require('../controllers/issue.controller');
const { validateCreateIssueInput } = require('../middleware/validateInputs');

router.post('/', validateCreateIssueInput, issueController.createIssue);
router.get('/', issueController.getIssues);

module.exports = router;
