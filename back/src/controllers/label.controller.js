const labelService = require('../services/label.service');

//editLabel이기는 한데 database에서는 update가 어울려서 update라고 해둠..
const updateLabel = async (req, res) => {
  try {
    const labelDatas = req.body;
    const result = await labelService.updateLabel(labelDatas);
    if (result) {
      return res.status(200).send();
    }
    return res.status(400).send();
  } catch (err) {
    return res.status(500).send();
  }
};

module.exports = {
  updateLabel,
};
