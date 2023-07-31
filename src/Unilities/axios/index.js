import axios from "axios";
import { useCookies } from "vue3-cookies";
const { cookies } = useCookies();

const instance = axios.create({
  baseURL: 'https://api.truyenvui.online/',
});

instance.interceptors.request.use(
  (config) => {
    const token = cookies.get("access_token");
    config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  
);

export default instance;
