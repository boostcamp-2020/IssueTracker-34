const JWTToken = require('../services/jwtToken.service');
const UserModel = require('../models/user.model');

module.exports = async function(req, res, next) {
  // try {
  //   const [bearer, token] = req.headers.authorization.split(' ');
  //   if (!token || token == null) {
  //     return res.status(404).json('unauthorized');
  //   }
  //   const tokenInfo = JWTToken.verifyToken(token)
  //   const user = await UserModel.findUser({ github_id: tokenInfo.data })
  //   if (!user) {
  //     return res.status(404).json('unauthorized');
  //   }
  //   req.body.authorizedUsername = user.name;
  //   req.body.authorizedUserId = user.github_id;
  //   next();

  // } catch (err) {
  //   console.log(err)
  //   return res.status(500).json({ message: err });
  // }


  // 개발용 임시 하드코딩
  req.body.authorizedUsername = 'profornnan';
  req.body.authorizedUserId = 1;

  next();
}