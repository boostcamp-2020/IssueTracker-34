import axios from 'axios';

const API_URL = process.env.API_URL;

const userAPI = {
  async getUsers() {
    const token = localStorage.getItem('token')
    const { data } = await axios.get(API_URL + '/user', { headers: {
      Authorization: `Bearer ${token}`,
    } });
    return data;
  },

  async getUserInfo() {
    const token = localStorage.getItem('token')
    const { data } = await axios({
      method: 'post', //you can set what request you want to be
      url: API_URL + '/user/info',
      data: {},
      headers: {
        Authorization: 'Bearer ' + token,
      },
    })
    return data;
  },
};

export default userAPI;
