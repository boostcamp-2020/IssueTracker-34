const Label = require('../sequelizeModels/label.sequelizeModel');

const createLabel = async ({ name, color, content }) => {
  return await Label.create({
    name: name,
    color: color,
    content: content,
  });
};

module.exports = { createLabel };
