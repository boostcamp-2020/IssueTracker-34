const UserModel = require("../models/user.model");
const JWTTokenService = require('./jwtToken.service');

const userService = {
  async login({ username, profile_url }) {
    const user = await UserModel.findUser({ username })

    if (user && user.profile_url !== profile_url) {
      user.profile_url = profile_url;
      await user.save();
    }
    if (!user) {
      await UserModel.createUser({ username, profile_url });
    }

    return JWTTokenService.createToken(username);
  },

  async getAllUsers() {
    return await UserModel.findAllUser();
  },
}

module.exports = userService;