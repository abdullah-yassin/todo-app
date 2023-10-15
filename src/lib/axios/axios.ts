import axios from "axios";

// Create an instance of Axios with custom configuration
const axiosInstance = axios.create({
  baseURL: "http://localhost:4000/",
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;
