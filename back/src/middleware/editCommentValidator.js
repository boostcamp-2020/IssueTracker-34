module.exports = function (req, res, next) {
  if (!req.body.userId || !req.body.issueId) {
    return res.status(400).send();
  }
  next();
};
