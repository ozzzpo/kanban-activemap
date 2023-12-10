import axios from "axios";
const API_BASE_URL = "https://team1.activemap.ru/rest";
const authService = {
  sendLogPass: async (login, password) => {
    const requestBody = {
      login: login,
      password: password,
    };
    try {
      const response = await axios.post(
        `${API_BASE_URL}/auth/by-login`,
        requestBody
      );
      return response.data;
    } catch (error) {
      console.log(error.message);
    }
  },
};
export default authService;
