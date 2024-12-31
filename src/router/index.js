// import { createRouter, createWebHistory } from 'vue-router'
// import LoginPage from '@/views/auth/LoginPage.vue'
// import NotFoundPage from '@/views/NotFoundPage.vue'
// import { useAuthStore } from '@/stores/auth'
// import LoginEmailPage from '@/views/auth/LoginEmailPage.vue'
// import RecommendPage from '@/views/RecommendPage.vue'
// import HomePage from '../views/HomePage.vue'
// import ProductDetailsPage from '@/views/ProductDetailsPage.vue'
// import CommentsPage from '@/views/CommentsPage.vue'
// import OtpPage from '@/views/auth/OtpPage.vue'
// import ForgetPasswordPage from '@/views/auth/ForgetPasswordPage.vue'
// import ResetPasswordPage from '@/views/auth/ResatPasswordPage.vue'
// import CartPage from '@/views/CartPage.vue'
// import MyProfile from '@/views/user/MyProfile.vue'
// const router = createRouter({
//   history: createWebHistory(import.meta.env.BASE_URL),
//   routes: [

//     {
//       path: '/user/login',
//       name: 'login',
//       component: LoginPage,
//       beforeEnter: (to, from, next) => {
//         const authStore = useAuthStore();
//         if (authStore.isAuthenticated) {
//           next("/");
//         } else {
//           next();
//         }
//       },
//     },

//     {
//       path: '/user/loginemail',
//       name: 'loginemail',
//       component: LoginEmailPage,
//       beforeEnter: (to, from, next) => {
//         const authStore = useAuthStore();
//         if (authStore.isAuthenticated) {
//           next("/");
//         } else {
//           next();
//         }
//       },

//     },
//     {
//       path: '/user/otp',
//       name: 'loginotp',
//       component: OtpPage,
//       beforeEnter: (to, from, next) => {
//         const authStore = useAuthStore();
//         if (authStore.isAuthenticated) {
//           next("/");
//         } else {
//           next();
//         }
//       },

//     },
//     {
//       path: '/user/forgetpassword',
//       name: 'forgetpassword',
//       component: ForgetPasswordPage,
//       beforeEnter: (to, from, next) => {
//         const authStore = useAuthStore();
//         if (authStore.isAuthenticated) {
//           next("/");
//         } else {
//           next();
//         }
//       },

//     },
//     {
//       path: '/user/resetpassword',
//       name: 'resetpassword',
//       component: ResetPasswordPage,
//       beforeEnter: (to, from, next) => {
//         const authStore = useAuthStore();
//         if (authStore.isAuthenticated) {
//           next("/");
//         } else {
//           next();
//         }
//       },

//     },

//     {
//       path: '/',
//       name: 'home',
//       component: HomePage,
//       meta: { requiresAuth: true },
//     },
//     {
//       name: 'Recommend',
//       path: '/recommend/:id/:name',
//       component: RecommendPage,
//       meta: { requiresAuth: true },
//     },
//     {
//       path: '/product/:id',
//       name: 'ProductDetails',
//       component: ProductDetailsPage,
//       meta: { requiresAuth: true },
//     },
//     {
//       path: '/product/:id/comments',
//       name: 'ProductComments',
//       component: CommentsPage,
//       meta: { requiresAuth: true },
//     },
//     {
//       name: "Cart",
//       path: "/cart",
//       component: CartPage,
//       meta: { requiresAuth: true , hideHeaderFooter: true },
//     },
//     {
//       path: '/user/account_setting',
//       name: 'useraccount_setting',
//       component: MyProfile,
//       meta: { requiresAuth: true },
//     },





//   {
//     path: '/:pathMatch(.*)*',
//     name: 'NotFound',
//     component: NotFoundPage,
//   },
//   ],
// });

// router.beforeEach((to, from, next) => {
//   const authStore = useAuthStore();
//   if (to.meta.requiresAuth && !authStore.isAuthenticated) {
//     next('/user/login');
//   } else {
//     next();
//   }
// });

// export default router


import { createRouter, createWebHistory } from 'vue-router';
import LoginPage from '@/views/auth/LoginPage.vue';
import NotFoundPage from '@/views/NotFoundPage.vue';
import { useAuthStore } from '@/stores/auth';
import LoginEmailPage from '@/views/auth/LoginEmailPage.vue';
import RecommendPage from '@/views/RecommendPage.vue';
import HomePage from '../views/HomePage.vue';
import ProductDetailsPage from '@/views/ProductDetailsPage.vue';
import CommentsPage from '@/views/CommentsPage.vue';
import OtpPage from '@/views/auth/OtpPage.vue';
import ForgetPasswordPage from '@/views/auth/ForgetPasswordPage.vue';
import ResetPasswordPage from '@/views/auth/ResatPasswordPage.vue';
import CartPage from '@/views/CartPage.vue';
import User_Index from '@/views/user/User_Index.vue';
import User_main from '@/views/user/User_main.vue';
import MyRequest from '@/views/user/MyRequest.vue';
import MyAddresses from '@/views/user/MyAddresses.vue';
import MyProfile from '@/views/user/MyProfile.vue';

const requiresAuth = (to, from, next) => {
  const authStore = useAuthStore();
  if (authStore.isAuthenticated) {
    next('/');
  } else {
    next();
  }
};

const routes = [
  {
    path: '/user/login',
    name: 'login',
    component: LoginPage,
    meta: { hideHeaderFooter: true },
    beforeEnter: requiresAuth,
  },
  {
    path: '/user/loginemail',
    name: 'loginemail',
    component: LoginEmailPage,
    meta: { hideHeaderFooter: true },
    beforeEnter: requiresAuth,
  },
  {
    path: '/user/otp',
    name: 'loginotp',
    component: OtpPage,
    meta: { hideHeaderFooter: true },
    beforeEnter: requiresAuth,
  },
  {
    path: '/user/forgetpassword',
    name: 'forgetpassword',
    component: ForgetPasswordPage,
    meta: { hideHeaderFooter: true },
    beforeEnter: requiresAuth,
  },
  {
    path: '/user/resetpassword',
    name: 'resetpassword',
    component: ResetPasswordPage,
    meta: { hideHeaderFooter: true },
    beforeEnter: requiresAuth,
  },
  {
    path: '/',
    name: 'home',
    component: HomePage,
  },
  {
    name: 'Recommend',
    path: '/recommend/:id/:name',
    component: RecommendPage,
    // meta: { requiresAuth: true },
  },
  {
    path: '/product/:id',
    name: 'ProductDetails',
    component: ProductDetailsPage,
    // meta: { requiresAuth: true },
  },
  {
    path: '/product/:id/comments',
    name: 'ProductComments',
    component: CommentsPage,
    // meta: { requiresAuth: true },
  },
  {
    name: 'Cart',
    path: '/cart',
    component: CartPage,
    meta: { requiresAuth: true, hideHeaderFooter: true },
  },
  // {
  //   path: '/user/account_setting',
  //   name: 'useraccount_setting',
  //   component: MyProfile,
  //   meta: { requiresAuth: true },
  // },

  {
    path: '/user/user_index',
    name: 'User_index',
    component: User_Index,
    meta: { requiresAuth: true },
    children:[
      {
        name: 'main',
        path: '/user/user_index',
        component: User_main
      },
      {
        name: 'myrequests',
        path: '/myrequests',
        component: MyRequest
      },
      {
        name: 'myaddresses',
        path: '/myaddresses',
        component: MyAddresses
      },
      {
        name: 'myProfile',
        path: '/my_profile',
        component: MyProfile
      },
    ]
  },
  // Catch-All Route for 404 Not Found
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: NotFoundPage,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

// الحماية العامة للمسارات التي تحتاج إلى تسجيل الدخول
router.beforeEach((to, from, next) => {
  const authStore = useAuthStore();

  if (to.meta.requiresAuth && !authStore.isAuthenticated) {
    // إذا كانت المسار يحتاج إلى تسجيل الدخول والمستخدم غير مسجل
    next('/user/login');
  } else {
    // السماح للمستخدم بالوصول
    next();
  }
});

export default router;
