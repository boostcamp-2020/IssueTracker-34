const labelModel = require('../models/label.model');

const createLabel = async (data) => {
  return await labelModel.createLabel(data);
};

module.exports = { createLabel };
