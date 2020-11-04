const Label = require('../sequelizeModels/label.sequelizeModel');

const createLabel = async ({ name, color, content }) => {
  try {
    return await Label.create({
      name: name,
      color: color,
      content: content,
    });
  } catch (e) {
    console.error(e);
    return null;
  }
};

module.exports = { createLabel };
