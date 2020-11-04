const labelService = require('../services/label.service');

const editLabel = async (req, res) => {
  try {
    const labelDatas = req.body;
    const result = await labelService.updateLabel(labelDatas);
    if (result) {
      return res.json(result);
    }
    return res.json({ result: false });
  } catch (err) {
    return res.status(500).send();
  }
};

module.exports = {
  editLabel,
};
