const userService = require('../services/user.service');

const UserController = {
  async login (req, res) {
    try {
      const { username, photos, id } = req.user
      const profile_url = photos[0].value || undefined
      const github_id = Number(id);
      const token = await userService.login({ username, profile_url, github_id });

      return res.status(200).json(token);
    } catch (err) {
      return res.status(500).send();
    }
  },

  async getAllUsers(req, res) {
    try {
      const users = await userService.getAllUsers();

      return res.status(200).json(users);
    } catch (err) {
      return res.status(500).send();
    }
  },
}

module.exports = UserController;