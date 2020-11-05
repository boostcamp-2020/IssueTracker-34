const UserModel = require("../models/user.model");
const JWTTokenService = require('./jwtToken.service');

const userService = {
  async login({ username, profile_url, github_id }) {
    const user = await UserModel.findUser({ github_id })

    if (user && (user.profile_url !== profile_url || user.username !== username)) {
      user.profile_url = profile_url;
      user.username = username;
      await user.save();
    }
    if (!user) {
      await UserModel.createUser({ username, profile_url, github_id });
    }
    return JWTTokenService.createToken(github_id);
  },

  async getAllUsers() {
    return await UserModel.findAllUser();
  },
}

module.exports = userService;