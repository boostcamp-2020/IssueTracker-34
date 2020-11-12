import axios from 'axios';

const token = localStorage.getItem('token');

const API_URL = process.env.API_URL;

const Label = {
  async getLabels() {
    const { data } = await axios.get(API_URL + '/label', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return data;
  },
};

export default Label;
