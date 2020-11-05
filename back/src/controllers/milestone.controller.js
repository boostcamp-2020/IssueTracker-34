const milestoneService = require('../services/milestone.service');

const getMilestones = async (req, res) => {
  try {
    const result = await milestoneService.getMilestones();
    if (result) {
      return res.status(200).json(result);
    }
    return res.json({ result: false });
  } catch (err) {
    return res.status(500).json({ message: 'Internal Server Error' });
  }
};

const createMilestone = async (req, res) => {
  try {
    const milestoneDatas = req.body;
    const result = await milestoneService.createMilestone(milestoneDatas);
    if (result) {
      return res.status(200).json(result);
    }
    return res.json({ ressult: false });
  } catch (err) {
    return res.status(500).json({ message: 'Internal Server Error' });
  }
};

const editMilestone = async (req, res) => {
  try {
    const milestoneDatas = req.body;
    const result = await milestoneService.editMilestone(milestoneDatas);
    if (result) {
      return res.status(200).json(result);
    }
    return res.json({ result: false });
  } catch (err) {
    return res.status(500).json({ message: 'Internal Server Error' });
  }
};

const deleteMilestone = async (req, res) => {
  try {
    const { id } = req.body;
    const result = await milestoneService.deleteMilestone({ id });
    if (result) {
      return res.status(200).json(result);
    }
    return res.json({ result: false });
  } catch (err) {
    return res.status(500).json({ message: 'Internal Server Error' });
  }
};

module.exports = {
  getMilestones,
  createMilestone,
  editMilestone,
  deleteMilestone,
};
