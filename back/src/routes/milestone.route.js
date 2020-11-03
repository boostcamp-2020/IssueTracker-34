const express = require('express');
const router = express.Router();
const milestoneController = require('../controllers/label.controller');

router.get('/', (req, recs) => {
  res.send('label');
});

router.post('/', milestoneController.createMilestone);

module.exports = router;
