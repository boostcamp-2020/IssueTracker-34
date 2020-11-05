const express = require('express');
const router = express.Router();

const { validateCreateLabelInput } = require('../middleware/validateInputs')
const labelController = require('../controllers/label.controller');

router.get('/', (req, res) => {
  res.send('label');
});

router.post('/label', validateCreateLabelInput, labelController.createLabel);

module.exports = router;
