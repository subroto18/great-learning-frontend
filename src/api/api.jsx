import axios from "axios";

const BASE_URL = import.meta.env.VITE_API_URL
  ? import.meta.env.VITE_API_URL
  : null;

const api = axios.create({
  baseURL: BASE_URL, // Base URL for all requests
  timeout: 5000, // Request timeout in milliseconds
  headers: {
    "Content-Type": "application/json", // Default header
    Authorization: import.meta.env.VITE_APP_AUTHORIZATION, // Add an authorization token if needed
  },
});

export default api;
