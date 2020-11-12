import axios from 'axios';


const Label = {
  
  async createLabel(labelInfo) {
    const token = localStorage.getItem('token');

    const { data } = await axios.post(`${API_URL}label`, labelInfo, header)
    console.log(data);
    return data;
  },
  
  async getLabels() {
    const token = localStorage.getItem('token');

    const { data } = await axios.get(`${process.env.API_URL}label`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return data;
  },

  async deleteLabel(labelId) {
    const token = localStorage.getItem('token');

    const { data } = await axios.delete(
      `${process.env.API_URL}label`,
      { data: labelId },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

export default Label;
