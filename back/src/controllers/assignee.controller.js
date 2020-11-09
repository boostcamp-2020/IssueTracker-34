const addAssignee = async (req, res) => {
  try {
    const { issueId, userId } = req.body
    await assingeeService.addAssignee({ issueId, userId });
    return res.status(200).send();
  } catch (err) {
    const { message } = err;
    if (message === 'not found') {
      return res.status(400).json('not found')
    }
    return res.status(500).send();
  }
}

const deleteAssignee = async (req, res) => {
  try {
    const { issueId, userId } = req.body
    await assingeeService.deleteAssignee({ issueId, userId });
    return res.status(200).send();
  } catch (err) {
    const { message } = err;
    if (message === 'not found') {
      return res.status(400).json('not found')
    }
    return res.status(500).send();
  }
}


module.exports = {
  addAssignee,
  deleteAssignee,
}