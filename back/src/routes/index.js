const express = require('express');
const router = express.Router();
const label = require('./label.route');
const assigneeRouter = require('./assignee.route');
const assigneeValidator = require('../middleware/assigneeValidator');

router.get('/', (req, res) => {
  res.send('hello');
});

router.use('/label', label);

router.use('/assignee', assigneeValidator, assigneeRouter)

module.exports = router;
