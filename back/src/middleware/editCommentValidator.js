module.exports = function (req, res, next) {
  if (!req.body.commentId) {
    return res.status(400).send();
  }
  next();
};
