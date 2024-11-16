import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomePage.vue'
import RecommendView from '@/views/RecommendPage.vue'
import LoginPage from '@/views/LoginPage.vue'
import NotFoundPage from '@/views/NotFoundPage.vue'
import { useAuthStore } from '@/stores/auth'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [

    {
      path: '/user/login',
      name: 'login',
      component: LoginPage,
    },
    {
      path: '/',
      name: 'home',
      component: HomeView,
      beforeEnter: (to, from, next) => {
        const authStore = useAuthStore();
        if (authStore.isAuthenticated) {
          next(
          );
        } else {
          next('/user/login');
        }
      },

    },
    {
      name: 'recommend',
      path: '/recommend',
      component: RecommendView,
    },


    // Catch-All Route for 404 Not Found
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: NotFoundPage,
  },
  ],
});

export default router
