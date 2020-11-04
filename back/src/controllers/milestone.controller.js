const milestoneService = require('../services/milestone.service');

const getMilestones = async (req, res) => {
  try {
    const result = await milestoneService.getMilestones();
    if (result) {
      return res.json(result);
    }
    return res.json({ result: false });
  } catch (err) {
    return res.status(500).send();
  }
};

const createMilestone = async (req, res) => {
  try {
    const milestoneDatas = req.body;
    const result = await milestoneService.createMilestone(milestoneDatas);
    if (result) {
      return res.json(result);
    }
    return res.json({ ressult: false });
  } catch (err) {
    return res.status(500).send();
  }
};

const editMilestone = async (req, res) => {
  try {
    const milestoneDatas = req.body;
    const result = await milesonteService.editMilestone(milestoneDatas);
    if (result) {
      return res.json(result);
    }
    return res.json({ result: false });
  } catch (err) {
    return res.status(500).send();
  }
};

const deleteMilestone = async (req, res) => {
  try {
    const { id } = req.body;
    const result = await milesonteService.deleteMilestone({ id });
    if (result) {
      return res.json(result);
    }
    return res.json({ result: false });
  } catch (err) {
    return res.status(500).send();
  }
};

module.exports = {
  getMilestones,
  createMilestone,
  editMilestone,
  deleteMilestone,
};
