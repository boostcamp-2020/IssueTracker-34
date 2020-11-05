const testAuth = function (req, res, next) {
  req.body.userId = 1;
  next();
};

module.exports = { testAuth };
