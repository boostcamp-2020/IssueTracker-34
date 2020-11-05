const labelModel = require('../models/label.model');

const labelService = {
  async createLabel(data) {
    return await labelModel.createLabel(data);
  },
  async deleteLabel({ id }) {
    return await labelModel.deleteLabel(id)
  },
}

module.exports = labelService;
