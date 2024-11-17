import { defineStore } from 'pinia';
import router from '@/router'
export const useAuthStore = defineStore('auth', {
  state: () => ({
    isAuthenticated: false,
    token: null,
  }),
  actions: {

    initializeAuth () {
      const token = localStorage.getItem('authToken');
      if (token) {
        this.isAuthenticated = true;
        this.token = token;
      } else {
        this.isAuthenticated = false;
        this.token = null;
      }

    },

    login(token) {
      this.isAuthenticated = false;
      this.token = token;
      localStorage.setItem('authToken', token);
      
    },
    loginEmail() {
      this.isAuthenticated = true;
    },
    logout() {

      this.isAuthenticated = false;
      this.token = null;
      localStorage.removeItem('authToken');
      router.push('/user/login');
      setTimeout(() => {
        window.location.reload()
      }, 200)

    },


  },
});
