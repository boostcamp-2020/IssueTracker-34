const jwt = require('jsonwebtoken');

const privateKey = process.env.PRIVATEKEY;

const JWTTokenService = {
  createToken(data) {
    return jwt.sign({
      exp: Math.floor(Date.now() / 1000) + (60 * 60),
      data,
    }, privateKey);
  },

  verifyToken(token) {
    return jwt.verify(token, privateKey);
  },
};

module.exports = JWTTokenService;
