import axios from "axios";

const apiRequest = axios.create({
  baseURL: "https://my-estate-server.onrender.com/api",
  withCredentials: true,
});

export default apiRequest;