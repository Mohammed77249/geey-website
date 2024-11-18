import { createRouter, createWebHistory } from 'vue-router'
import LoginPage from '@/views/auth/LoginPage.vue'
import NotFoundPage from '@/views/NotFoundPage.vue'
import { useAuthStore } from '@/stores/auth'
import LoginEmailPage from '@/views/auth/LoginEmailPage.vue'
import RecommendPage from '@/views/RecommendPage.vue'
import HomePage from '../views/HomePage.vue'
import ProductDetailsPage from '@/views/ProductDetailsPage.vue'
import CommentsPage from '@/views/CommentsPage.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [

    {
      path: '/user/login',
      name: 'login',
      component: LoginPage,
    },

    {
      path: '/user/loginemail',
      name: 'loginemail',
      component: LoginEmailPage,

    },
    {
      path: '/',
      name: 'home',
      component: HomePage,
      meta: { requiresAuth: true },
    },
    {
      name: 'Recommend',
      path: '/recommend/:name',
      component: RecommendPage,
      meta: { requiresAuth: true },
    },
    {
      path: '/product/:id',
      name: 'ProductDetails',
      component: ProductDetailsPage,
      meta: { requiresAuth: true },
    },
    {
      path: '/product/:id/comments',
      name: 'ProductComments',
      component: CommentsPage,
      meta: { requiresAuth: true },
    },




    // Catch-All Route for 404 Not Found
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: NotFoundPage,
  },
  ],
});

router.beforeEach((to, from, next) => {
  const authStore = useAuthStore();
  if (to.meta.requiresAuth && !authStore.isAuthenticated) {
    next('/user/login');
  } else {
    next();
  }
});

export default router
