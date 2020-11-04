const labelModel = require('../models/label.model');

const labelService = {
  async deleteLabel({ id }) {
    return await labelModel.deleteLabel(id)
  },


}

module.exports = labelService;