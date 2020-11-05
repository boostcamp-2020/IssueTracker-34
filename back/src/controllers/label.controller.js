const labelService = require('../services/label.service');

const getLabels = async (req, res) => {
  try {
    const labels = await labelService.getLabels();
    return res.status(200).json(labels);
  } catch (err) {
    return res.status(500).json({ message: 'Internal Error' });
  }
}

module.exports = {
  getLabels,
}