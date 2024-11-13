import axios from "axios";

const baseURL =
  "https://sda-3-onsite-backend-teamwork-gs0y.onrender.com/api/v1/auth/register";

export const createUser = async (userData) => {
  const response = await axios.post(`${baseURL}/`, userData);
  return response.data;
};
