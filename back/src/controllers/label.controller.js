const labelService = require('../services/label.service');

const labelController = {
  async createLabel(req, res) {
    try {
      const { name, color, content } = req.body;
      const result = await labelService.createLabel({
        name,
        color,
        content,
      });
      return res.status(200).json(result);
    } catch (err) {
      return res.status(500).send();
    }
  },
  async getLabels(req, res) {
    try {
      const labels = await labelService.getLabels();
      return res.status(200).json(labels);
    } catch (err) {
      return res.status(500).send();
    }
  },
  async editLabel(req, res) {
    try {
      const data = req.body;
      const result = await labelService.updateLabel(data);
      return res.status(200).json(result);
    } catch (err) {
      if (err.message === 'Bad Request') {
        return res.status(400).send();
      }
      return res.status(500).send();
    }
  },
};

module.exports = labelController;
