import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:4000/api", // 나중에 백엔드 URL 변경
  withCredentials: true,
});

export const fetchHobbies = async () => {
  const { data } = await api.get("/hobbies");
  return data;
};

export default api;
