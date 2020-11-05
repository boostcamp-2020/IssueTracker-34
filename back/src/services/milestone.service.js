const milestoneModel = require('../models/milestone.model');

const getMilestones = async (data) => {
  return await milestoneModel.getMilestones(data);
};

const createMilestone = async (data) => {
  return await milestoneModel.createMilestone(data);
};

const editMilestone = async (data) => {
  return await milestoneModel.editMilestone(data);
};

const deleteMilestone = async (data) => {
  return await milestoneModel.deleteMilestone(data);
};

module.exports = {
  getMilestones,
  createMilestone,
  editMilestone,
  deleteMilestone,
};
