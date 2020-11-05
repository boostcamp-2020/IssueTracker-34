const express = require('express');
const router = express.Router();
const labelController = require('../controllers/label.controller');

router.get('/', (req, res) => {
  res.send('label');
});

router.patch('/', labelController.editLabel);

module.exports = router;
