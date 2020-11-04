const express = require('express');
const router = express.Router();
const accountController = require('../controller/assignee.controller');

router.get('/', accountController.addAssignee);

router.delete('/', accountController.addAssignee);

module.exports = router;