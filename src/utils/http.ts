import axios, {
  AxiosInstance,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from "axios";
import { ConstantsUrl } from "./apiUrl";


const http: AxiosInstance = axios.create({
  baseURL: ConstantsUrl.BASE_URL,//"https://dummyjson.com",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

// Request Interceptor
http.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const token = localStorage.getItem("token");
    // if (token) {
    config.headers = {
      ...config.headers,
      Authorization: `Bearer ${token}`, //not needed for login
      APIKey: ConstantsUrl.API_KEY_CONSTANT,
      POSPlatform: 'CCMobilePOS',
      POSVersion: '2.4.0'
    } as any;
    // }

    return config;
  },
  (error) => Promise.reject(error)
);

// Response Interceptor
http.interceptors.response.use(
  (response: AxiosResponse) => response,
  (error) => {
    console.error("API Error:", error.response || error.message);
    return Promise.reject(error);
  }
);

export default http;
