const validateCreateLabelInput = (req, res, next) => {
  if (!req.body.id || !req.body.name || !req.body.color) {
    return res.status(400).json('input(s) missing');
  }
  next();
}

module.exports = {
  validateCreateLabelInput,
}