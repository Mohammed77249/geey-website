// import { createRouter, createWebHistory } from 'vue-router'77777777
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



///=========================================================================
import { createRouter, createWebHistory } from 'vue-router';

// desktop
import LoginPage from '@/views/auth/LoginPage.vue';
import NotFoundPageDesktop from '@/views/desktop/NotFoundPage.vue';
import { useAuthStore } from '@/stores/auth';
import LoginEmailPage from '@/views/auth/LoginEmailPage.vue';
import RecommendPage from '@/views/desktop/RecommendPage.vue';
import DesktopHome  from '@/views/desktop/HomePage.vue';
import ProductDetailsPage from '@/views/desktop/ProductDetailsPage.vue';
import CommentsPage from '@/views/desktop/CommentsPage.vue';
import OtpPage from '@/views/auth/OtpPage.vue';
import ForgetPasswordPage from '@/views/auth/ForgetPasswordPage.vue';
import ResetPasswordPage from '@/views/auth/ResatPasswordPage.vue';
import CartPage from '@/views/desktop/CartPage.vue';
import User_Index from '@/views/desktop/user/User_Index.vue';
import User_main from '@/views/desktop/user/User_main.vue';
import MyRequest from '@/views/desktop/user/MyRequest.vue';
import MyAddresses from '@/views/desktop/user/MyAddresses.vue';
import MyProfile from '@/views/desktop/user/MyProfile.vue';


// phone
import PhoneHome  from '@/views/phone/HomePage.vue';
import NotFoundPagePhone from '@/views/phone/NotFoundPage.vue';

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
    path: '/',
    redirect: () => {
      const isDesktop = window.innerWidth >= 768;
      return isDesktop ? '/desktop/home' : '/phone/home';
    },
  },

  // authincation routes

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


  // desktop routes
  {
    path: '/desktop/home',
    name: 'DesktopHome',
    component: DesktopHome ,
  },
  {
    name: 'Recommend',
    path: '/recommend/:id/:name',
    component: RecommendPage,
    // meta: { requiresAuth: true },
  },
  {
    name: 'Recommendcat',
    path: '/recommend/:category_level/:id/:name',
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
    path: '/desktop/:pathMatch(.*)*',
    name: 'NotFoundDesktop',
    component: NotFoundPageDesktop,
  },


  // phone routes
  {
    path: '/phone/home',
    name: 'PhoneHome',
    component: PhoneHome ,
  },
  // Catch-All Route for 404 Not Found
  {
    path: '/phone/:pathMatch(.*)*',
    name: 'NotFoundPhone',
    component: NotFoundPagePhone,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});


router.beforeEach((to, from, next) => {
  const authStore = useAuthStore();
  const isDesktop = window.innerWidth >= 768;
  if (to.meta.requiresAuth && !authStore.isAuthenticated) {
    next('/user/login');
  } else if (isDesktop && to.path.startsWith('/phone')) {
    next(to.path.replace('/phone', '/desktop'));
  } else if (!isDesktop && to.path.startsWith('/desktop')) {
    next(to.path.replace('/desktop', '/phone'));
  } else {
    next();
  }
});

// router.beforeEach((to, from, next) => {
//   const authStore = useAuthStore();
//   if (to.meta.requiresAuth && !authStore.isAuthenticated) {
//     next('/user/login');
//   } else {
//     next();
//   }
// });



// router.beforeEach((to, from, next) => {
//   const isDesktop = window.innerWidth >= 768;
//   if (isDesktop && to.path.startsWith('/phone')) {
//     next(to.path.replace('/phone', '/desktop'));
//   } else if (!isDesktop && to.path.startsWith('/desktop')) {
//     next(to.path.replace('/desktop', '/phone'));
//   } else {
//     next();
//   }
// });

export default router;


//===========================================================

// import { createRouter, createWebHistory } from 'vue-router';
// import LoginPage from '@/views/auth/LoginPage.vue';
// import NotFoundPage from '@/views/NotFoundPage.vue';
// import { useAuthStore } from '@/stores/auth';
// import LoginEmailPage from '@/views/auth/LoginEmailPage.vue';
// import RecommendPage from '@/views/RecommendPage.vue';
// import HomePage from '@/views/HomePage.vue';
// import ProductDetailsPage from '@/views/ProductDetailsPage.vue';
// import CommentsPage from '@/views/CommentsPage.vue';
// import OtpPage from '@/views/auth/OtpPage.vue';
// import ForgetPasswordPage from '@/views/auth/ForgetPasswordPage.vue';
// import ResetPasswordPage from '@/views/auth/ResatPasswordPage.vue';
// import CartPage from '@/views/CartPage.vue';
// import User_Index from '@/views/user/User_Index.vue';
// import User_main from '@/views/user/User_main.vue';
// import MyRequest from '@/views/user/MyRequest.vue';
// import MyAddresses from '@/views/user/MyAddresses.vue';
// import MyProfile from '@/views/user/MyProfile.vue';

// // تعريف المسارات
// const routes = [
//   {
//     path: '/user/login',
//     name: 'login',
//     component: LoginPage,
//     meta: { hideHeaderFooter: true },
//   },
//   {
//     path: '/user/loginemail',
//     name: 'loginemail',
//     component: LoginEmailPage,
//     meta: { hideHeaderFooter: true },
//   },
//   {
//     path: '/user/otp',
//     name: 'loginotp',
//     component: OtpPage,
//     meta: { hideHeaderFooter: true },
//   },
//   {
//     path: '/user/forgetpassword',
//     name: 'forgetpassword',
//     component: ForgetPasswordPage,
//     meta: { hideHeaderFooter: true },
//   },
//   {
//     path: '/user/resetpassword',
//     name: 'resetpassword',
//     component: ResetPasswordPage,
//     meta: { hideHeaderFooter: true },
//   },
//   {
//     path: '/',
//     name: 'home',
//     component: HomePage,
//   },
//   {
//     name: 'Recommend',
//     path: '/recommend/:id/:name',
//     component: RecommendPage,
//   },
//   {
//     path: '/product/:id',
//     name: 'ProductDetails',
//     component: ProductDetailsPage,
//   },
//   {
//     path: '/product/:id/comments',
//     name: 'ProductComments',
//     component: CommentsPage,
//   },
//   {
//     name: 'Cart',
//     path: '/cart',
//     component: CartPage,
//     meta: { requiresAuth: true, hideHeaderFooter: true },
//   },
//   {
//     path: '/user/user_index',
//     name: 'User_index',
//     component: User_Index,
//     meta: { requiresAuth: true },
//     children: [
//       {
//         name: 'main',
//         path: '',
//         component: User_main,
//       },
//       {
//         name: 'myrequests',
//         path: 'myrequests',
//         component: MyRequest,
//       },
//       {
//         name: 'myaddresses',
//         path: 'myaddresses',
//         component: MyAddresses,
//       },
//       {
//         name: 'myProfile',
//         path: 'my_profile',
//         component: MyProfile,
//       },
//     ],
//   },
//   // Catch-All Route for 404
//   {
//     path: '/:pathMatch(.*)*',
//     name: 'NotFound',
//     component: NotFoundPage,
//   },
// ];

// // إنشاء الروتر
// const router = createRouter({
//   history: createWebHistory(import.meta.env.BASE_URL),
//   routes,
// });

// // الحماية العامة للمسارات التي تحتاج إلى تسجيل الدخول
// router.beforeEach((to, from, next) => {
//   const authStore = useAuthStore();

//   // التحقق من المصادقة للمسارات المحمية
//   if (to.meta.requiresAuth && !authStore.isAuthenticated) {
//     // إعادة توجيه المستخدم إلى تسجيل الدخول مع حفظ الصفحة المطلوبة
//     next({
//       path: '/user/login',
//       query: { redirect: to.fullPath }, // حفظ المسار المطلوب
//     });
//   } else {
//     // السماح بالمتابعة
//     next();
//   }
// });

// export default router;
