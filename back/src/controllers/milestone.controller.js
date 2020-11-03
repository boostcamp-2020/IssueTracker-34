const milestoneService = require('../services/milestone.service');

const createMilestone = async (req, res) => {
  try {
    const milestoneDatas = req.body;
    const result = await milestoneService.createMilestone(milestoneDatas);
    if (result) {
      return res.status(200).send();
    }
    return res.status(400).send();
  } catch (err) {
    return res.status(500).send();
  }
};

module.exports = {
  createMilestone,
};
