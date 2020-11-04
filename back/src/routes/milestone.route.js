const express = require('express');
const router = express.Router();
const milestoneController = require('../controllers/label.controller');

router.get('/', milestoneController.getMilestones);

router.post('/', milestoneController.createMilestone);

router.patch('/', milestoneController.editMilestone);

router.delete('/', milestoneController.deleteMilestone);

module.exports = router;
