const express = require('express');
const router = express.Router();
const labelController = require('../controllers/label.controller');
const { validateCreateLabelInput } = require('../middleware/validateInputs');

router.post('/', validateCreateLabelInput, labelController.createLabel);
router.get('/', labelController.getLabels);
router.patch('/', labelController.editLabel);
router.delete('/', labelController.deleteLabel);

module.exports = router;
