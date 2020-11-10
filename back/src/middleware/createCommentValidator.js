module.exports = function (req, res, next) {
  const { userId, issueId, comment, date } = req.body;
  if (!userId || !issueId || !comment || !date) {
    return res.status(400).send();
  }
  next();
};
