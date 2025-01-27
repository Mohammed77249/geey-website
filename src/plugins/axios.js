import axios from 'axios';
import i18n from './i18n'
const language = i18n.global.locale
import CryptoJS from "crypto-js";
const encryptionKey = "m-12345krglfksdjojsdkmfkdmsliwefnldvksmlejnsd";

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
      try {
        const bytes = CryptoJS.AES.decrypt(token, encryptionKey);
        const detoken = bytes.toString(CryptoJS.enc.Utf8);

        if (detoken) {
          config.headers.Authorization = `Bearer ${detoken}`;
        }
      } catch (error) {
        console.error("خطأ أثناء فك تشفير التوكن:", error.message);
      }
    } else {
      console.warn("التوكن غير موجود في localStorage.");
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


