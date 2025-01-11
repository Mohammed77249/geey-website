import axios from 'axios';
import i18n from './i18n'
const language = i18n.global.locale

const BaseUrl =  import.meta.env.VITE_API_URL
const axiosIns = axios.create({
  baseURL:BaseUrl,
  timeout: 10000,
  headers: {
    "accept-language": language,
    'Content-Type': 'application/json',

  },


});


axiosIns.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('authToken');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);


axiosIns.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error('API Error:', error.response || error.message);
    return Promise.reject(error);
  }
);

export default axiosIns;


