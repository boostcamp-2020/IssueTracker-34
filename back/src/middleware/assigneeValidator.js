module.exports = function(req, res, next) {
  if (!req.body.issueId || req.body.userId) {
    return res.status(400).json('bad request');
  }

  next();
}