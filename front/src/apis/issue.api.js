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

  async editIssue(param) {
    const {
      issueId,
      title,
      content,
      milestone,
      statusOpenClosed,
      assignees,
      labels,
    } = param;

    const { data } = await axios.patch(API_URL + '/issue', {
      issueId,
      title,
      content,
      milestone,
      statusOpenClosed,
      assignees,
      labels,
    });

    return data;
  },
};

export default issueAPI;
