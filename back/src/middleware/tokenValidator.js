const JWTToken = require('../services/JWTToken');

module.exports = function(req, res, next) {
  if (!token.headers.authorization) {
    return res.status(404).json('unauthorized');
  }

  const [bearer, token] = req.headers.authorization.split(' ');
  const username = JWTToken.verify(token)
  const user = UserModel.findUser({ username })

  if (!user) {
    return res.status(404).json('unauthorized');
  }

  next();
}