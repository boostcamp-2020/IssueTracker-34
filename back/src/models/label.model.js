const Label = require('../sequelizeModels/label.sequelizeModel');

const labelModel = {
  async createLabel({ name, color, content }) {
    return await Label.create({
      name: name,
      color: color,
      content: content,
    });
  },
  async getLabels() {
    return await Label.findAll();
  },
  async editLabel({ labelId, name, color, content }) {
    return await Label.update(
      { name, color, content },
      { where: { id: labelId } }
    );
  },
  async deleteLabel({ labelId }) {
    return await Label.destroy({
      where: { id: labelId },
    });
  },
};

module.exports = labelModel;
