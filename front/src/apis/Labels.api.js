import axios from "axios";


const Label = {
  async getLabels() {
    const token = localStorage.getItem('token')
    console.log(token);

    const { data } = await axios.get(`${process.env.API_URL}label`, { headers: {
      Authorization: `Bearer ${token}`,
    } })
    return data
  },

  async deleteLabel(labelId) {
    const token = localStorage.getItem('token')
    console.log(token);

    const { data } = await axios.delete(`${process.env.API_URL}label`, { data: labelId }, { headers: {
      Authorization: `Bearer ${token}`,
    } })
    return data;
  },
}

export default Label;
