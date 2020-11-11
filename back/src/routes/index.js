const express = require('express');
const router = express.Router();
const labelRouter = require('./label.route');
const issueRouter = require('./issue.route');
const commentRouter = require('./comment.route');
const milestoneRouter = require('./milestone.route');
const userRouter = require('./user.route');
const assigneeRouter = require('./assignee.route');
const assigneeValidator = require('../middleware/assigneeValidator');
const { testAuth } = require('../middleware/testAuth');
const tokenValidator = require('../middleware/tokenValidator');

router.get('/', (req, res) => {
  res.send('hello');
});

router.use(testAuth);
router.use('/issue', tokenValidator, issueRouter);
router.use('/label', tokenValidator, labelRouter);
router.use('/comment', tokenValidator, commentRouter);
router.use('/milestone', tokenValidator, milestoneRouter);
router.use('/user', userRouter);
router.use('/assignee', tokenValidator, assigneeValidator, assigneeRouter);

module.exports = router;
