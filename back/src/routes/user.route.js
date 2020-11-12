const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');
const githubOauth = require('../middleware/githubOauth');
const tokenValidator = require('../middleware/tokenValidator');

router.get('/', tokenValidator, userController.getAllUsers);
router.post('/', githubOauth, userController.login);
router.post('/info', tokenValidator, userController.getUserInfo);

module.exports = router;
