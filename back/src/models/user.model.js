const User = require('../sequelizeModels/user.sequelizeModel');

const UserModel = {
  async findUser ({ github_id }) {
    return await User.findOne({ where: { github_id } });
  },

  async findAllUser () {
    return await User.findAll();
  },

  async createUser ({ username, profile_url, github_id }) {
    return await User.create({ name: username, profile_url, github_id })
  },
}

module.exports = UserModel;