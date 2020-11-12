import axios from 'axios';

const API_URL = process.env.API_URL;

const issueAPI = {
  async createIssue(param) {
    const { title, content, date, milestone, labels, assignees } = param;
    const { data } = await axios.post(API_URL + '/issue', {
      title,
      content,
      date,
      milestone,
      labels,
      assignees,
    });
    return data;
  },

  async getIssues() {
    const { data } = await axios.get(API_URL + '/issue');
    return data;
  },

  async editIssueStatus(id, status) {
    await axios.patch(API_URL + '/issue', {
      issueId: id,
      statusOpenClosed: status,
    });
  },

  async editIssueTitle(id, title) {
    await axios.patch(API_URL + '/issue', {
      issueId: id,
      title: title,
    });
  },

  async editIssueContent(id, content) {
    await axios.patch(API_URL + '/issue', {
      issueId: id,
      content: content,
    });
  },

  async editIssueLabels(id, labels) {
    await axios.patch(API_URL + '/issue', {
      issueId: id,
      labels: labels,
    });
  },

  async editIssueAssignees(id, assignees) {
    await axios.patch(API_URL + '/issue', {
      issueId: id,
      assignees: assignees,
    });
  },
};

export default issueAPI;
