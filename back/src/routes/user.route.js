const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller')
const githubOauth = require('../middleware/githubOauth');

router.post('/', githubOauth, userController.login);

router.get('/', userController.getAllUsers)

module.exports = router;
