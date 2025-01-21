import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000/api", // Backend base URL
  withCredentials: true, // Include credentials like cookies
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
