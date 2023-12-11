import axios from "axios";
const API_BASE_URL = "https://team1.activemap.ru/rest";
const tasksService = {
  getTasks: async (token) => {
    try {
      const response = await axios.get(
        `${API_BASE_URL}/tasks?token=${token}`,
        {}
      );
      return response.data;
    } catch (error) {
      console.log(error.message);
    }
  },
};
export default tasksService;
