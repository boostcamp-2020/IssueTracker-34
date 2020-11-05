const labelModel = require('../models/label.model');

const labelService = {
  async createLabel(data) {
    return await labelModel.createLabel(data);
  },
  async editLabel(data) {
    const result = await labelModel.editLabel(data);

    if (result) {
      return result;
    }
    return new Error('Bad Request');
  },
  async deleteLabel({ id }) {
    return await labelModel.deleteLabel(id);
  },
}

module.exports = labelService;