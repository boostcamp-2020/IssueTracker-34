const Label = require('../sequelizeModels/label.sequelizeModel');

const labelModel = {
  async createLabel ({ name, color, content }) {
      return await Label.create({
      name: name,
      color: color,
      content: content,
    });
  },
  async getLabels () {
    return await Label.findAll();
  },
  async editLabel ({ id, name, color, content }) {
    if (content) {
      return await Label.update({ id, name, color, content });
    }
    return await Label.update({ id, name, color });
  },
}

module.exports = labelModel;
