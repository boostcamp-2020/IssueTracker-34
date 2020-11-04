const express = require('express');
const router = express.Router();
const label = require('./label.route');
const comment = require('./comment.route');
const { testAuth } = require('../middleware/testAuth');

router.get('/', (req, res) => {
  res.send('hello');
});

router.use(testAuth);
router.use('/label', label);
router.use('/comment', comment);

module.exports = router;
