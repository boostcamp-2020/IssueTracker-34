const User = require('../sequelizeModels/user.sequelizeModel');
const Milestone = require('../sequelizeModels/milestone.sequelizeModel');
const Label = require('../sequelizeModels/label.sequelizeModel');
const Issue = require('../sequelizeModels/issue.sequelizeModel');
const Assignee = require('../sequelizeModels/assignee.sequelizeModel');
const IssuesHasLabels = require('../sequelizeModels/issues_has_labels.sequelizeModel');
const Comment = require('../sequelizeModels/comment.sequelizeModel');

module.exports = async () => {
  await User.bulkCreate([
    {
      name: 'profornnan',
      profile_url:
        'https://avatars2.githubusercontent.com/u/59037261?s=460&u=7b7a0a2f151c1f49c5bc8068d4d6a5bf50c94c7b&v=4',
    },
    {
      name: 'rockpell',
      profile_url:
        'https://avatars1.githubusercontent.com/u/8137615?s=460&u=3cbc84a925ac49ae3603adbcff8b24b444e478da&v=4',
    },
    {
      name: 'pieisland',
      profile_url:
        'https://avatars2.githubusercontent.com/u/35261724?s=460&u=514bbf937b4638c75c39ea1c89b13f42241001da&v=4',
    },
    {
      name: 'gyim1345',
      profile_url:
        'https://avatars2.githubusercontent.com/u/57941049?s=460&u=b20800e6bc681bf4c683143cbcf11b9aa7dcf50c&v=4',
    },
  ]);

  await Milestone.bulkCreate([
    {
      title: 'Week 1',
      description: '1주차 해야할 목록들',
      due_date: '2020-10-30',
      status_open_closed: true,
    },
    {
      title: 'Week 2 - Backend',
      description: '2주차 해야할 목록들 (Backend)',
      due_date: '2020-11-06',
      status_open_closed: true,
    },
  ]);

  await Label.bulkCreate([
    { name: 'bug', color: '#D73A4A', content: "Something isn't working" },
    { name: 'API', color: '#E46AF2', content: 'API 설계 및 구현' },
    { name: '이슈 목록 화면', color: '#13F282' },
    { name: '이슈 상세 화면', color: '#F48F66' },
    { name: '환경 설정', color: '#4D6BB5' },
  ]);

  await Issue.bulkCreate([
    {
      user_id: 2,
      milestone_id: 1,
      date: '2020-10-28',
      title: '개발 환경 구축',
      status_open_closed: false,
      content: '웹 프론트/백 폴더 구분',
    },
    {
      user_id: 1,
      milestone_id: 1,
      date: '2020-10-29',
      title: '필터 초기화 버튼',
      status_open_closed: true,
      content: '필터 초기화 버튼을 구현했습니다.',
    },
    {
      user_id: 3,
      milestone_id: 2,
      date: '2020-10-29',
      title: '이슈 클로즈, 오픈',
      status_open_closed: true,
      content: 'Close issue 버튼 클릭 시 이슈 클로즈',
    },
    {
      user_id: 1,
      milestone_id: 2,
      date: '2020-11-02',
      title: 'Login',
      status_open_closed: true,
      content: 'Login API 구현',
    },
    {
      user_id: 4,
      milestone_id: 2,
      date: '2020-11-04',
      title: 'getIssues',
      status_open_closed: true,
      content: 'getIssues API 구현',
    },
  ]);

  await Assignee.bulkCreate([
    { user_id: 1, issue_id: 2 },
    { user_id: 4, issue_id: 2 },
    { user_id: 3, issue_id: 3 },
    { user_id: 2, issue_id: 4 },
    { user_id: 4, issue_id: 5 },
  ]);

  await IssuesHasLabels.bulkCreate([
    { issue_id: 1, label_id: 5 },
    { issue_id: 2, label_id: 3 },
    { issue_id: 2, label_id: 4 },
    { issue_id: 3, label_id: 3 },
    { issue_id: 4, label_id: 2 },
  ]);

  await Comment.bulkCreate([
    { comment: '고생하셨습니다', date: '2020-10-29', user_id: 1, issue_id: 2 },
    { comment: 'OK', date: '2020-10-30', user_id: 2, issue_id: 2 },
    { comment: '확인했어요', date: '2020-11-01', user_id: 3, issue_id: 3 },
    { comment: 'Many issues', date: '2020-11-01', user_id: 4, issue_id: 4 },
    { comment: 'Fix', date: '2020-11-02', user_id: 1, issue_id: 5 },
  ]);
};
