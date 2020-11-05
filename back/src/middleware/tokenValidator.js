const JWTToken = require('../services/JWTToken');

module.exports = function(req, res, next) {
  if (!token.headers.authorization) {
    return res.status(404).json('unauthorized');
  }

  const [bearer, token] = req.headers.authorization.split(' ');
  const github_id = JWTToken.verify(token)
  const user = UserModel.findUser({ github_id })

  if (!user) {
    return res.status(404).json('unauthorized');
  }

  req.body.authorizedUsername = user.username;
  req.body.authorizedUserId = user.id;

  next();
}