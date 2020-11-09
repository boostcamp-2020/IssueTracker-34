const validateCreateIssueInput = (req, res, next) => {
  if (!req.body.title) {
    return res.status(400).send();
  }
  next();
};

const validateEditIssueInput = (req, res, next) => {
  const { title, statusOpenClosed } = req.body;
  if (
    !req.body.issueId ||
    (!title && title !== undefined) ||
    !(
      statusOpenClosed === true ||
      statusOpenClosed === false ||
      statusOpenClosed === undefined
    )
  ) {
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
  validateEditIssueInput,
  validateCreateLabelInput,
};
