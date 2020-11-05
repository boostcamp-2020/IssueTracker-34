
const assingeeService = {
  async addAssignee ({ issueId, userId }) {
    const exists = await this.checkExistence({ issueId, userId })

    if (exists) {
      return await assigneeModel.addAssignee({ issueId, userId });
    }

    throw new Error('not found');
  },

  async deleteAssignee ({ issueId, userId }) {
    const exists = await this.checkExistence({ issueId, userId })

    if (exists) {
      return await assigneeModel.deleteAssignee({ issueId, userId });
    }

    throw new Error('not found');
  },

  async checkExistence ({ issueId, userId }) {
    const user = await userModel.findUserById({ userId });
    const issue = await issueModel.findIssueById({ issueId })
    if (user && issue) {
      return true;
    }
    return false;
  },
}



module.exports = assingeeService;