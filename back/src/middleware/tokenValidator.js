const JWTToken = require('../services/jwtToken.service');
const UserModel = require('../models/user.model');

module.exports = async function(req, res, next) {
  try {
    if (!req.headers) {
      return res.status(400).send();
    }
    if (!req.headers.authorization) {
      return res.status(400).send();
    }
    const token = req.headers.authorization.replace(/Bearer /, '');
    if (!token || token == null) {
      return res.status(401).json('unauthorized');
    }
    const tokenInfo = JWTToken.verifyToken(token)

    const user = await UserModel.findUser({ github_id: tokenInfo.data })

    if (!user) {
      return res.status(403).json('unauthorized');
    }
    req.body.authorizedUsername = user.dataValues.name;
    req.body.authorizedUserId = user.dataValues.github_id;
    req.body.authorizedProfileURL = user.dataValues.profile_url;
    next();

  } catch (err) {
    return res.status(500).json()
  }

  // next();


  // 개발용 임시 하드코딩
  // req.body.authorizedUsername = 'profornnan';
  // req.body.authorizedUserId = 1;

  // next();
}