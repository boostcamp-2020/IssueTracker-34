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
};

export default issueAPI;
