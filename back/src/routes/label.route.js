const express = require('express');
const router = express.Router();
const labelController = require('../controllers/label.controller');

router.get('/', (req, res) => {
  res.send('label');
});

router.delete('/', labelController.deleteLabel);

module.exports = router;
