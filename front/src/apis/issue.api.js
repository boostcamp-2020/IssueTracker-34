import axios from 'axios';

const API_URL = process.env.API_URL;

const issueAPI = {
  async getIssues() {
    const { data } = await axios.get(API_URL + '/issue');
    return data;
  },
};

export default issueAPI;
