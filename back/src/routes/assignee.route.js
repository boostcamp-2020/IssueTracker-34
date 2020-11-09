const express = require('express');
const router = express.Router();
const accountController = require('../controllers/assignee.controller');

router.get('/', accountController.addAssignee);
router.delete('/', accountController.deleteAssignee);

module.exports = router;
