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

  getFilteredTasks: async (token, assignedFioId, typeId = "1,2,3,4,5,6,7") => {
    try {
      const response = await axios.get(
        `${API_BASE_URL}/tasks?assignedUserId=${assignedFioId}&type_id=${typeId}&token=${token}`
      );
      return response.data;
    } catch (error) {
      console.log(error.message);
    }
  },

  getStatuses: async (token) => {
    try {
      const response = await axios.get(
        `${API_BASE_URL}/statuses?token=${token}`
      );
      return response.data;
    } catch (error) {
      console.log(error.message);
    }
  },

  getTypes: async (token) => {
    try {
      const response = await axios.get(`${API_BASE_URL}/types?token=${token}`);
      return response.data;
    } catch (error) {
      console.log(error.message);
    }
  },
};
export default tasksService;
