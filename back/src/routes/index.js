const express = require('express');
const router = express.Router();
const label = require('./label.route');

router.get('/', (req, res) => {
  res.send('hello');
});

router.use('/label', label);

module.exports = router;
