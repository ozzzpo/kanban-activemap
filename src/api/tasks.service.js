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

  deleteTasks: async (token, id) => {
    try {
      const response = await axios.delete(
        `${API_BASE_URL}/tasks/${id}?token=${token}`
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

  uploadPhotos: async (token, file) => {
    const formData = new FormData();
    formData.append("file", file);
    try {
      const response = await axios.post(
        `${API_BASE_URL}/files/upload/photos?token=${token}`,
        formData,
        {
          headers: {
            "Content-Type": " multipart/form-data",
          },
        }
      );
      return response.data;
    } catch (error) {
      console.log(error.message);
    }
  },
  postPhotos: async (token, file, fileName, id) => {
    const requestBody = {
      attachments: [
        {
          file: file,
          file_name: fileName,
          file_type: "PHOTO",
        },
      ],
      update_comments: "",
    };
    try {
      const response = axios.patch(
        `${API_BASE_URL}/tasks/${id}?apiVersion=2.1&token=${token}`,
        requestBody
      );
      return response.data;
    } catch (error) {
      console.log(error.message);
    }
  },
};
export default tasksService;
