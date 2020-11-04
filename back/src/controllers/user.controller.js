const userService = require('../services/user.service');

const login = async (req, res) => {
  try {
    const { username, photos } = req.user
    const profile_url = photos[0].value || undefined
    console.log(username, profile_url)
    const token = await userService.login({ username, profile_url });
    return res.status(200).json(token);
  } catch (err) {
    return res.status(500).json({ message: 'Internal Error' });
  }
}

const getAllUsers = async (req, res) => {
  try {
    const users = await userService.getAllUsers();
    return res.status(200).json(users);
  } catch (err) {
    return res.status(500).json({ message: 'Internal Error' });
  }
}

module.exports = {
  login,
  getAllUsers,
}