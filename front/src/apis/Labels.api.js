import axios from "axios";

const token = localStorage.getItem('token')
const API_URL = process.env.API_URL;
const header = { headers: {
  Authorization: `Bearer ${token}`,
} }

const Label = {
  async getLabels() {
    const { data } = await axios.get(`${API_URL}label`, header)
    return data;
  },
  async createLabel(labelInfo) {
    const { data } = await axios.post(`${API_URL}label`, labelInfo, header)
    console.log(data);
    return data;
  },
}

export default Label;
