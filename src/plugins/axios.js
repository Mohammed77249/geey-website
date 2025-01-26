import axios from 'axios';
import i18n from './i18n'
const language = i18n.global.locale
// import CryptoJS from "crypto-js";
// const encryptionKey = "m-12345krglfksdjojsdkmfkdmsliwefnldvksmlejnsd";

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
    // const bytes = CryptoJS.AES.decrypt(token, encryptionKey);
    // const detoken  = bytes.toString(CryptoJS.enc.Utf8);
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


