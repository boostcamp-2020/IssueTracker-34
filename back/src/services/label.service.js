const labelModel = require('../models/label.model');

const editLabel = async ({ labelId, name, color, description }) => {
  const result = await labelModel.editLabel({
    labelId,
    name,
    color,
    description,
  });

  if (result) {
    return result;
  }
  return new Error('editLabel failed');
};

module.exports = { editLabel };
