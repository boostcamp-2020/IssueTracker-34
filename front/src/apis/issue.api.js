import axios from 'axios';

const API_URL = process.env.API_URL;

const issueAPI = {
  async createIssue(param) {
    const token = localStorage.getItem('token');

    const { title, content, date, milestone, labels, assignees } = param;
    const { data } = await axios.post(
      API_URL + '/issue',
      {
        title,
        content,
        date,
        milestone,
        labels,
        assignees,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );
    return data;
  },

  async getIssues() {
    const token = localStorage.getItem('token');
    const { data } = await axios.get(API_URL + '/issue', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return data;
  },

  async editIssueStatus(id, status) {
    const token = localStorage.getItem('token');

    await axios.patch(
      API_URL + '/issue',
      {
        issueId: id,
        statusOpenClosed: status,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );
  },

  async editIssueTitle(id, title) {
    const token = localStorage.getItem('token');

    await axios.patch(
      API_URL + '/issue',
      {
        issueId: id,
        title: title,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );
  },

  async editIssueContent(id, content) {
    const token = localStorage.getItem('token');

    await axios.patch(
      API_URL + '/issue',
      {
        issueId: id,
        content: content,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );
  },

  async editIssueLabels(id, labels) {
    const token = localStorage.getItem('token');

    await axios.patch(
      API_URL + '/issue',
      {
        issueId: id,
        labels: labels,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );
  },

  async editIssueAssignees(id, assignees) {
    const token = localStorage.getItem('token');

    await axios.patch(
      API_URL + '/issue',
      {
        issueId: id,
        assignees: assignees,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );
  },
};

export default issueAPI;
