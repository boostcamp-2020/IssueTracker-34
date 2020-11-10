module.exports = {
  apps: [
    {
      name: 'IssueTracker',
      script: './src/app.js',
      instances: 0,
      exec_mode: 'cluster',
    },
  ],
};
