const labelService = require('../services/label.service');

const deleteLabel = async (req, res) => {
  try {
    const labelId = req.body;
    const result = await labelService.deleteLabel(labelId);

    return res.status(200).json(result);
  } catch (e) {
    return res.status(400).json();
  }
};

module.exports = { deleteLabel };
