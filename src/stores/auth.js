import { defineStore } from 'pinia';
import { useRouter } from 'vue-router';

const router = useRouter()
export const useAuthStore = defineStore('auth', {
  state: () => ({
    isAuthenticated: false,
  }),
  actions: {

    initializeAuth () {

      // const savedAuth = cookies.get('UserLoginToken');
        this.isAuthenticated =true
    },

    login() {
      this.isAuthenticated = true;
    },
    logout() {
      this.isAuthenticated = false;
      router.push('/user/login')
      setTimeout(() => {
        window.location.reload()
      }, 200)
    },


  },
});
