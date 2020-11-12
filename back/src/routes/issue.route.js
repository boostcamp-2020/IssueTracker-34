const express = require('express');
const router = express.Router();
const issueController = require('../controllers/issue.controller');
const {
  validateCreateIssueInput,
  validateEditIssueInput,
} = require('../middleware/validateInputs');

router.post('/', validateCreateIssueInput, issueController.createIssue);
router.get('/', issueController.getIssues);
router.patch('/', validateEditIssueInput, issueController.editIssue);

module.exports = router;
