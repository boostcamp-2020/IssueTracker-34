const Milestone = require('../sequelizeModels/milestone.sequelizeModel');

const getMilestones = async () => {
  return await Milestone.findAll();
};

const createMilestone = async ({
  title,
  description,
  due_date,
  status_open_closed,
}) => {
  return await Milestone.create({
    title,
    description,
    due_date,
    status_open_closed,
  });
};

const editMilestone = async ({
  title,
  description,
  due_date,
  status_open_closed,
  id,
}) => {
  return await Milestone.update(
    { title, description, due_date, status_open_closed },
    { where: { id } },
  );
};

const deleteMilestone = async ({ id }) => {
  return await Milestone.destroy({ where: { id } });
};

module.exports = {
  getMilestones,
  createMilestone,
  editMilestone,
  deleteMilestone,
};
