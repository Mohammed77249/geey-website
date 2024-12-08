import { defineStore } from 'pinia';
import axiosIns from '@/plugins/axios';
import router from '@/router'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    token:null,
    email: '',
    status: null,
    user: null,
    error: null,
    loading: false,
    isAuthenticated:false,
  }),

  actions: {

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

    async verifyOtp(otp,login) {
      this.loading = true;
      this.error = null;
      try {
        const response = await axiosIns.post('auth/check_otp',{ login, otp });
        this.token = response.data.token;
        localStorage.setItem('authToken', response.data.token);
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
      if (token) {
        this.token = token;
        this.isAuthenticated = true;
      }
    },

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
        router.push('/user/login');
        return true;
      } catch (error) {
        this.error = error.response.data.message || 'خطأ أثناء تسجيل الخروج:';
        alert('خطأ أثناء تسجيل الخروج:', error);
        return false;
      } finally {
        this.loading = false;
      }

    },
  },

});

