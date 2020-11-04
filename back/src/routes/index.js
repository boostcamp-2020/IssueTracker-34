const express = require('express');
const router = express.Router();
const label = require('./label.route');
const issue = require('./issue.route');

router.get('/', (req, res) => {
  res.send('hello');
});

router.use('/issue', issue);
router.use('/label', label);

module.exports = router;
