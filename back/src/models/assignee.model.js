const Assignee = require("../sequelizeModels/assignee.sequelizeModel");

const assigneeModel = {
  async addAssignee({ issueId, userId }) {
    await Assignee.create({ user_id: userId, issue_id: issueId })
  },

  async deleteAssignee({ issueId, userId }) {
    await Assignee.destroy({ where: {
      user_id: userId,
      issue_id: issueId,
    } })
  },
}

module.exports = assigneeModel;