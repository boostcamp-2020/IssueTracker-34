const labelModel = require('../models/label.model');

exports.getLabels = async () => {
  const labels = await labelModel.getLabels();

  if (labels) return labels;
  throw new Error('fail');
};
