const Label = require('../services/label.service');

exports.deleteLabel = async ({ labelId }) => {
  return await Label.destroy({
    where: { labelId },
  });
};
