const labelService = require('../services/label.service');

exports.createLabel = async (req, res) => {
  try {
    const { name, color, description } = req.body;
    const createResult = await labelService.createLabel({
      name,
      color,
      description,
    });
    return res.status(200).json({ ...createResult });
  } catch (err) {
    const { message } = err;
    return res.status(500).json({ message: message });
  }
};
