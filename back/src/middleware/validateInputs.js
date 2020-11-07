const validateCreateIssueInput = (req, res, next) => {
  if (!req.body.title) {
    return res.status(400).send();
  }
  next();
};

module.exports = {
  validateCreateIssueInput,
};
