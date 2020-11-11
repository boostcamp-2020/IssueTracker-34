import axios from "axios";

const Auth = {
  async login(code) {
    const { data } = await axios.post(`${process.env.API_URL}user`, { code })
    console.log(data);
    return data
  },
}

export default Auth;
