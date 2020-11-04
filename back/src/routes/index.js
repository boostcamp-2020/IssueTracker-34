const express = require('express');
const router = express.Router();
const label = require('./label.route');
const user = require('./user.route');

router.get('/', (req, res) => {
  res.send('hello');
});

router.use('/label', label);

router.use('/user', user)

module.exports = router;
