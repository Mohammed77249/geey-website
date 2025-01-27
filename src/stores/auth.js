import { defineStore } from 'pinia';
import axiosIns from '@/plugins/axios';
import router from '@/router'
import CryptoJS from "crypto-js";
const encryptionKey = "m-12345krglfksdjojsdkmfkdmsliwefnldvksmlejnsd";

export const useAuthStore = defineStore('auth', {
  state: () => ({
    token:null,
    email: '',
    status: null,
    user: null,
    error: null,
    loading: false,
    isAuthenticated:false,
    encryptedToken: "",
  }),

  actions: {

    // check user email in the first
    async checkEmail(login) {
      this.loading = true;
      this.error = null;
      try {
        const response = await axiosIns.post(`auth/check?login=${login}`);
        this.email = response.data.input;
        this.status = response.data.status;
        localStorage.setItem('emailuser', response.data.input);
        return response.data;
      } catch (err) {
        this.error = err.response.data.message || 'حدث خطأ أثناء التحقق.';
        throw err;
      } finally {
        this.loading = false;
      }
    },

    // login if user old
    async loginUser(login,password) {
      this.loading = true;
      this.error = null;


      try {
        const response = await axiosIns.post('auth/login',{ login, password });
        this.user = response.data.user;
        return  true;
      } catch (err) {
        this.error = err.response.data.message || 'خطأ أثناء تسجيل الدخول';
        return false;
      } finally {
        this.loading = false;
      }
    },

    // login if user new
    async loginUserNew(login,password,name) {
      this.loading = true;
      this.error = null;


      try {
        const response = await axiosIns.post('auth/login',{ login, password ,name });
        this.user = response.data.user;
        return  true;
      } catch (err) {
        this.error = err.response.data.message || 'خطأ أثناء تسجيل الدخول';
        return false;
      } finally {
        this.loading = false;
      }
    },



    // check otp
    async verifyOtp(otp,login) {
      this.loading = true;
      this.error = null;
      try {
        const response = await axiosIns.post('auth/check_otp',{ login, otp });
        //  this.token = response.data.token;
        this.encryptedToken = CryptoJS.AES.encrypt(
          response.data.token,
          encryptionKey
        ).toString();

        localStorage.setItem('authToken',this.encryptedToken );

        this.user = response.data.user;
        return true;
      } catch (error) {
        this.error = error.response.data.message || 'حدث خطأ أثناء التحقق من OTP.';
        return false;
      } finally {
        this.loading = false;
      }
    },


    restoreAuth() {

      const token = localStorage.getItem("authToken");
      // if(token){
      // const bytes = CryptoJS.AES.decrypt(token, encryptionKey);
      // const detoken  = bytes.toString(CryptoJS.enc.Utf8);
      // if (detoken) {
      //   this.encryptedToken = detoken;
      //   this.isAuthenticated = true;
      // }

      // }


      // const bytes = CryptoJS.AES.decrypt(this.encryptedToken, encryptionKey);
      // return bytes.toString(CryptoJS.enc.Utf8);


      if (token) {
        this.token = token;
        this.isAuthenticated = true;
      }
    },


    //resendOtp
    async resendOtp(login) {
      this.loading = true;
      this.error = null;

      try {
        const response = await axiosIns.post('auth/update_otp',{login});
        this.user = response.data.user;
        return true;

      } catch (error) {
        this.error = error.response.data.message || 'حدث خطأ أثناء التحقق من OTP.';
        return false;
      } finally {
        this.loading = false;
      }
    },

    //forgetpassword
    async forgetpassword(login) {
      this.loading = true;
      this.error = null;
      try {
        const response = await axiosIns.post('auth/forget_password',{login});
        this.user = response.data.user;
        return true;

      } catch (error) {
        this.error = error.response.data.message || 'حدث خطأ أثناء التحقق من OTP.';
        return false;
      } finally {
        this.loading = false;
      }
    },


    // resetpassword
    async resetpassword(login ,password , password_confirmation) {
      this.loading = true;
      this.error = null;
      try {
        const response = await axiosIns.post('auth/reset_password',{login,password,password_confirmation});
        this.user = response.data.user;
        return true;

      } catch (error) {
        this.error = error.response.data.message || 'حدث خطأ أثناء التحقق من OTP.';
        return false;
      } finally {
        this.loading = false;
      }
    },


    // logout api
    async logout () {
      this.loading = true;
      this.error = null;
      try {
        await axiosIns.post('auth/logout');

        this.isAuthenticated = false;
        this.token = null;
        this.user = null;
        this.email = null;
        this.status = null;

        localStorage.removeItem('authToken');
        localStorage.removeItem('emailuser');
        localStorage.removeItem('userNew');
        router.push('/desktop/login');

        return true;
      } catch (error) {
        this.error = error.response.data.message || 'خطأ أثناء تسجيل الخروج:';
        alert('خطأ أثناء تسجيل الخروج:', error);
        return false;
      } finally {
        this.loading = false;
      }

    },


    // update password profile
    async updatePasswordprofile(old_password ,password , password_confirmation) {
      this.loading = true;
      this.error = null;
      try {
        const response = await axiosIns.post('profile/update_password',{old_password,password,password_confirmation});
        this.user = response;
        return true;

      } catch (error) {
        this.error = error.response;
        return false;
      } finally {
        this.loading = false;
      }
    },
  },

});

