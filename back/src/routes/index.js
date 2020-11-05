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

router.get('/', (req, res) => {
  res.send('hello');
});

router.use(testAuth);
router.use('/issue', issueRouter);
router.use('/label', labelRouter);
router.use('/comment', commentRouter);
router.use('/milestone', milestoneRouter);
router.use('/user', userRouter);
router.use('/assignee', assigneeValidator, assigneeRouter);

module.exports = router;
