import axios from "axios";
import { toast } from "react-toastify";
import store from "../redux/stores/Store";
const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_URL, 
  timeout: 10000, 
});

axiosInstance.interceptors.request.use(
  (config) => {
    const {token} = store.getState().tokenReducer;
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response && error.response.status === 401) {
      sessionStorage.removeItem("token");
      window.location.href = "/login";
    }
    if (error.response && error.response.status === 404) {
      sessionStorage.removeItem("token");
      window.location.href = "/login";
      toast.error("Your session expired..Login agian!");
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
