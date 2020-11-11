import axios from 'axios';

const token = localStorage.getItem('token');

const Label = {
  async getLabels() {
    const { data } = await axios.get(`${process.env.API_URL}/label`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return data;
  },
};

export default Label;
