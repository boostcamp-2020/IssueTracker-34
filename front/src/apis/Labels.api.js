import axios from "axios";

const token = localStorage.getItem('token')
const API_URL = process.env.API_URL;
const header = { headers: {
  Authorization: `Bearer ${token}`,
} }
const Label = {
  async createLabel(labelInfo) {
    const { data } = await axios.post(`${API_URL}label`, labelInfo, header)
    console.log(data);
    return data;
  },

  async getLabels() {
    const token = localStorage.getItem('token')
    const { data } = await axios.get(`${process.env.API_URL}label`, { headers: {
      Authorization: `Bearer ${token}`,
    } })
    return data
  },

  async updateLabel(labelInfo) {
    console.log(labelInfo)
    const token = localStorage.getItem('token')
    const { data } = await axios.patch(`${process.env.API_URL}label`, labelInfo, { headers: {
      Authorization: `Bearer ${token}`,
    } })
    return data
  },


  async deleteLabel(labelId) {
    const token = localStorage.getItem('token')
    const { data } = await axios.delete(`${process.env.API_URL}label`, { data: labelId }, { headers: {
      Authorization: `Bearer ${token}`,
    } })
    return data;
  },
}

export default Label;
