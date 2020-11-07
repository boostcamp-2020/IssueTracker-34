const express = require('express');
const router = express.Router();
const passport = require('../middleware/passport');
const userController = require('../controllers/user.controller')

router.post('/', passport.authenticate('github', { session: false }));

router.post('/callback',
  passport.authenticate('github', {
    failureRedirect: '/user',
    // successRedirect: '/',
    session: false }),
  userController.login);

router.get('/', userController.getAllUsers)

module.exports = router;
