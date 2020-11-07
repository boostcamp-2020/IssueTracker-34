const validateCreateIssueInput = (req, res, next) => {
  if (!req.body.title) {
    return res.status(400).send();
  }
  next();
};

const validateCreateLabelInput = (req, res, next) => {
  if (!req.body.name || !req.body.color) {
    return res.status(400).json('input(s) missing');
  }
  next();
};

module.exports = {
  validateCreateIssueInput,
  validateCreateLabelInput,
};
