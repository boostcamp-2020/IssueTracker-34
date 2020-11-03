const Label = require('../sequelizeModels/label.sequelizeModel');

const getLabels = async () => {
  return await Label.findAll();
};

module.exports = { getLabels };
