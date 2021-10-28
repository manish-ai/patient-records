import axios from "axios";
import { errorInterceptor } from "./axiosResponseInterceptor";
import { BASE_URL } from "./Constants";


const axiosConfig = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

axiosConfig.interceptors.request.use(
  function (config) {
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);
axiosConfig.interceptors.response.use(undefined, errorInterceptor);

export default axiosConfig;
