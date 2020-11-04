const labelModel = require('../models/label.model');

const labelService = {
  async deleteLabel({ id }) {
    return await labelModel.updateLabel(id)
  },


}

module.exports = labelModel;