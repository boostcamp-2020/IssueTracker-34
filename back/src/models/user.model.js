const User = require('../sequelizeModels/user.sequelizeModel');

const UserModel = {
  async findUser ({ username }) {
    return await User.findOne({ where: { name: username } });
  },

  async findAllUser () {
    return await User.findAll();
  },

  async createUser ({ username, profile_url }) {
    return await User.create({ username, profile_url })
  },
}

module.exports = UserModel;