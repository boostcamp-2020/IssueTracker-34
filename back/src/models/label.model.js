const Label = require('../sequelizeModels/label.sequelizeModel');

const labelModel = {
  async editLabel ({ id, name, color, content }) {
    if (content) {
      return await Label.update({ id, name, color, content });
    }
    return await Label.update({ id, name, color });
  },
}

module.exports = labelModel;