const labelModel = require('../models/label.model');

const labelService = {
  async createLabel(data) {
    return await labelModel.createLabel(data);
  },
  async getLabels() {
    const labels = await labelModel.getLabels();

    if (labels) {
      return labels;
    }
    throw new Error();
  },
  async editLabel(data) {
    const result = await labelModel.editLabel(data);

    if (result) {
      return result;
    }
    throw new Error('Bad Request');
  },
  async deleteLabel({ id }) {
    return await labelModel.deleteLabel(id);
  },
};

module.exports = labelService;
