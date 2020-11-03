const milestoneModel = require('../models/milestone.model');

const createMilestone = async (data) => {
  return await milestoneModel.createMilestone(data);
};

module.exports = { createMilestone };
