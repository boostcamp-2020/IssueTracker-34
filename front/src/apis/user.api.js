import axios from 'axios';

const API_URL = process.env.API_URL;

const userAPI = {
  async getUsers() {
    const { data } = await axios.get(API_URL + '/user');
    return data;
  },
};

export default userAPI;
