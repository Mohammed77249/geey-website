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

// ========================================================

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
//==============================================================================

// ///=========================================================================
// import { createRouter, createWebHistory } from 'vue-router';

// // desktop
// import LoginPage from '@/views/auth/LoginPage.vue';
// import NotFoundPageDesktop from '@/views/desktop/NotFoundPage.vue';
// import { useAuthStore } from '@/stores/auth';
// import LoginEmailPage from '@/views/auth/LoginEmailPage.vue';
// import RecommendPage from '@/views/desktop/RecommendPage.vue';
// import DesktopHome  from '@/views/desktop/HomePage.vue';
// import ProductDetailsPage from '@/views/desktop/ProductDetailsPage.vue';
// import CommentsPage from '@/views/desktop/CommentsPage.vue';
// import OtpPage from '@/views/auth/OtpPage.vue';
// import ForgetPasswordPage from '@/views/auth/ForgetPasswordPage.vue';
// import ResetPasswordPage from '@/views/auth/ResatPasswordPage.vue';
// import CartPage from '@/views/desktop/CartPage.vue';
// import User_Index from '@/views/desktop/user/User_Index.vue';
// import User_main from '@/views/desktop/user/User_main.vue';
// import MyRequest from '@/views/desktop/user/oreders/MyOreder.vue';
// import MyProfile from '@/views/desktop/user/MyProfile.vue';
// import MyAddresses from '@/views/desktop/user/addresses/MyAddresses.vue';


// // phone
// import PhoneHome  from '@/views/phone/HomePage.vue';
// import NotFoundPagePhone from '@/views/phone/NotFoundPage.vue';
// import OrderDetails from '@/views/desktop/user/oreders/OrderDetails.vue';


// const requiresAuth = (to, from, next) => {
//   const authStore = useAuthStore();
//   if (authStore.isAuthenticated) {
//     next('/');
//   } else {
//     next();
//   }
// };


// const routes = [

//   {
//     path: '/',
//     redirect: () => {
//       const isDesktop = window.innerWidth >= 768;
//       return isDesktop ? '/desktop/home' : '/phone/home';
//     },
//   },

//   // authincation routes

//   {
//     path: '/user/login',
//     name: 'login',
//     component: LoginPage,
//     meta: { hideHeaderFooter: true },
//     beforeEnter: requiresAuth,
//   },
//   {
//     path: '/user/loginemail',
//     name: 'loginemail',
//     component: LoginEmailPage,
//     meta: { hideHeaderFooter: true },
//     beforeEnter: requiresAuth,
//   },
//   {
//     path: '/user/otp',
//     name: 'loginotp',
//     component: OtpPage,
//     meta: { hideHeaderFooter: true },
//     beforeEnter: requiresAuth,
//   },
//   {
//     path: '/user/forgetpassword',
//     name: 'forgetpassword',
//     component: ForgetPasswordPage,
//     meta: { hideHeaderFooter: true },
//     beforeEnter: requiresAuth,
//   },
//   {
//     path: '/user/resetpassword',
//     name: 'resetpassword',
//     component: ResetPasswordPage,
//     meta: { hideHeaderFooter: true },
//     beforeEnter: requiresAuth,
//   },


//   // desktop routes
//   {
//     path: '/desktop/home',
//     name: 'DesktopHome',
//     component: DesktopHome ,
//   },
//   {
//     name: 'Recommend',
//     path: '/recommend/:id/:name',
//     component: RecommendPage,
//     // meta: { requiresAuth: true },
//   },
//   {
//     name: 'Recommendcat',
//     path: '/recommend/:category_level/:id/:name',
//     component: RecommendPage,
//     // meta: { requiresAuth: true },
//   },
//   {
//     path: '/product/:id',
//     name: 'ProductDetails',
//     component: ProductDetailsPage,
//     // meta: { requiresAuth: true },
//   },
//   {
//     path: '/product/:id/comments',
//     name: 'ProductComments',
//     component: CommentsPage,
//     // meta: { requiresAuth: true },
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
//     children:[
//       {
//         name: 'main',
//         path: '/user/user_index',
//         component: User_main
//       },
//       {
//         name: 'myoreder',
//         path: '/myoreder',
//         component: MyRequest
//       },
//       {
//         path: "/myoreder/:id",
//         name: "OrderDetails",
//         component: OrderDetails,
//       },
//       {
//         name: 'myaddresses',
//         path: '/myaddresses',
//         component: MyAddresses
//       },
//       {
//         name: 'myProfile',
//         path: '/my_profile',
//         component: MyProfile
//       },
//     ]
//   },

//    // Catch-All Route for 404 Not Found
//    {
//     path: '/desktop/:pathMatch(.*)*',
//     name: 'NotFoundDesktop',
//     component: NotFoundPageDesktop,
//   },


//   // phone routes
//   {
//     path: '/phone/home',
//     name: 'PhoneHome',
//     component: PhoneHome ,
//   },
//   // Catch-All Route for 404 Not Found
//   {
//     path: '/phone/:pathMatch(.*)*',
//     name: 'NotFoundPhone',
//     component: NotFoundPagePhone,
//   },
// ];

// const router = createRouter({
//   history: createWebHistory(import.meta.env.BASE_URL),
//   routes,
// });


// router.beforeEach((to, from, next) => {
//   const authStore = useAuthStore();
//   const isDesktop = window.innerWidth >= 768;
//   if (to.meta.requiresAuth && !authStore.isAuthenticated) {
//     next('/user/login');
//   } else if (isDesktop && to.path.startsWith('/phone')) {
//     next(to.path.replace('/phone', '/desktop'));
//   } else if (!isDesktop && to.path.startsWith('/desktop')) {
//     next(to.path.replace('/desktop', '/phone'));
//   } else {
//     next();
//   }
// });

// // router.beforeEach((to, from, next) => {
// //   const authStore = useAuthStore();
// //   if (to.meta.requiresAuth && !authStore.isAuthenticated) {
// //     next('/user/login');
// //   } else {
// //     next();
// //   }
// // });



// // router.beforeEach((to, from, next) => {
// //   const isDesktop = window.innerWidth >= 768;
// //   if (isDesktop && to.path.startsWith('/phone')) {
// //     next(to.path.replace('/phone', '/desktop'));
// //   } else if (!isDesktop && to.path.startsWith('/desktop')) {
// //     next(to.path.replace('/desktop', '/phone'));
// //   } else {
// //     next();
// //   }
// // });

// export default router;


// =====================================================================




///=========================================================================
import { createRouter, createWebHistory } from 'vue-router';
import { useAuthStore } from '@/stores/auth';

const isDesktop = () => window.matchMedia('(min-width: 768px)').matches;
const routes = [
  {
    path: '/',
    redirect: () => (isDesktop() ? '/desktop/home' : '/phone/home'),
  },

  // Desktop routes
  {
    path: '/desktop',
    component: () => import('@/layouts/LayoutMain.vue'),
    children: [
      { path: 'home', name: 'DesktopHome', component: () => import('@/views/desktop/HomePage.vue') },

      {
        path: 'login',
        name: 'DesktopLogin',
        component: () => import('@/views/desktop/auth/LoginPage.vue'),
        meta: { guestOnly: true, hideHeaderFooter: true }
      },
      {
        path: 'loginemail',
        name: 'DesktopLoginEmail',
        component: () => import('@/views/desktop/auth/LoginEmailPage.vue'),
        meta: { guestOnly: true, hideHeaderFooter: true }
      },
      {
        path: 'otp',
        name: 'DesktopLoginOtp',
        component: () => import('@/views/desktop/auth/OtpPage.vue'),
        meta: { guestOnly: true, hideHeaderFooter: true }
      },
      {
        path: 'forgetpassword',
        name: 'DesktopForgetPassword',
        component: () => import('@/views/desktop/auth/ForgetPasswordPage.vue'),
        meta: { guestOnly: true, hideHeaderFooter: true }
      },
      {
        path: 'resetpassword',
        name: 'DesktopResetPassword',
        component: () => import('@/views/desktop/auth/ResatPasswordPage.vue'),
        meta: { guestOnly: true, hideHeaderFooter: true }
      },

      { path: 'recommend/:id/:name', name: 'desktopRecommend', component: () => import('@/views/desktop/RecommendPage.vue') },
      { path: 'recommend/:category_level/:id/:name', name: 'desktopRecommendCat', component: () => import('@/views/desktop/RecommendPage.vue') },
      { path: 'product/:id', name: 'desktopProductDetails', component: () => import('@/views/desktop/ProductDetailsPage.vue') },
      { path: 'product/:id/comments', name: 'desktopProductComments', component: () => import('@/views/desktop/CommentsPage.vue') },
      { path: 'cart', name: 'desktopCart', component: () => import('@/views/desktop/CartPage.vue'), meta: { requiresAuth: true, hideHeaderFooter: true } },
      {
        path: 'user',
        component: () => import('@/views/desktop/user/User_Index.vue'),
        meta: { requiresAuth: true, hideHeaderFooter: true },
        children: [
          { path: '', name: 'desktopUserMain', component: () => import('@/views/desktop/user/User_main.vue') },
          { path: 'myorder', name: 'desktopMyOrder', component: () => import('@/views/desktop/user/oreders/MyOreder.vue') },
          { path: 'myorder/:id', name: 'desktopOrderDetails', component: () => import('@/views/desktop/user/oreders/OrderDetails.vue') },
          { path: 'myaddresses', name: 'desktopMyAddresses', component: () => import('@/views/desktop/user/addresses/MyAddresses.vue') },
          { path: 'myprofile', name: 'desktopMyProfile', component: () => import('@/views/desktop/user/MyProfile.vue') },
          { path: 'myaccount', name: 'desktopMyAccount', component: () => import('@/views/desktop/user/userAccount/MangeMyAccount.vue') },
        ],
      },
    ],
    beforeEnter: (to, from, next) => {
      // منع الوصول إلى مسار الكمبيوتر من الهاتف
      if (!isDesktop()) {
        next('/phone/home');
      } else {
        next();
      }
    },
  },
  { path: '/desktop/:pathMatch(.*)*', name: 'NotFoundDesktop', component: () => import('@/views/desktop/NotFoundPage.vue') },

  // Phone routes
  {
    path: '/phone',
    component: () => import('@/layouts/LayoutMain.vue'),  meta: {  showFooter:true ,showHeader:true },
    children: [
      { path: 'home', name: 'PhoneHome', component: () => import('@/views/phone/HomePage.vue') },

      {
        path: 'user',
        component: () => import('@/views/phone/user/UserMainPage.vue'),
        meta: {  showFooter:true ,showHeader:false },
      },
      { path: 'cart', name: 'phoneCart', component: () => import('@/views/phone/CartPage.vue'), meta: { requiresAuth: true, showFooter:true ,showHeader:false  } },

      {
        path: 'login',
        name: 'PhoneLogin',
        component: () => import('@/views/phone/auth/LoginPage.vue'),
        meta: { guestOnly: true, hideHeaderFooter: true ,showFooter:false ,showHeader:false}
      },
      {
        path: 'loginemail',
        name: 'PhoneLoginEmail',
        component: () => import('@/views/phone/auth/LoginEmailPage.vue'),
        meta: { guestOnly: true, hideHeaderFooter: true ,showFooter:false ,showHeader:false}
      },
      {
        path: 'otp',
        name: 'PhoneLoginOtp',
        component: () => import('@/views/phone/auth/OtpPage.vue'),
        meta: { guestOnly: true, hideHeaderFooter: true,showFooter:false ,showHeader:false }
      },
      {
        path: 'forgetpassword',
        name: 'PhoneForgetPassword',
        component: () => import('@/views/phone/auth/ForgetPasswordPage.vue'),
        meta: { guestOnly: true, hideHeaderFooter: true,showFooter:false ,showHeader:false }
      },
      {
        path: 'resetpassword',
        name: 'PhoneResetPassword',
        component: () => import('@/views/phone/auth/ResatPasswordPage.vue'),
        meta: { guestOnly: true, hideHeaderFooter: true ,showFooter:false ,showHeader:false}
      },
      { path: 'product/:id', name: 'phoneProductDetails', component: () => import('@/views/phone/ProductDetailsPage.vue'), meta: {   showFooter:false ,showHeader:false} },

    ],
    beforeEnter: (to, from, next) => {
      // منع الوصول إلى مسار الهاتف من الكمبيوتر
      if (isDesktop()) {
        next('/desktop/home');
      } else {
        next();
      }
    },
  },
  { path: '/phone/:pathMatch(.*)*', name: 'PhoneNotFoundPhone', component: () => import('@/views/phone/NotFoundPage.vue') },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  },
});


router.beforeEach((to, from, next) => {
  const authStore = useAuthStore();

  // Prevent authenticated users from accessing login or signup routes
  if ((to.path === '/desktop/login' || to.path === '/phone/login') && authStore.isAuthenticated) {
    if (to.path !== from.path) {
      next(isDesktop() ? '/desktop/home' : '/phone/home'); // Only redirect if not already at the same location
      return;
    }
  }

  // Redirect if auth is required and the user is not authenticated
  if (to.meta.requiresAuth && !authStore.isAuthenticated) {
    if (to.path !== '/phone/login' && to.path !== '/desktop/login') {
      next(isDesktop() ? '/desktop/login' : '/phone/login'); // Redirect to login if authentication is required
      return;
    }
  }

  // Prevent authenticated users from accessing guest-only routes
  if (to.meta.guestOnly && authStore.isAuthenticated) {
    if (to.path !== '/phone/home' && to.path !== '/desktop/home') {
      next(isDesktop() ? '/desktop/home' : '/phone/home'); // Redirect to home if the user is authenticated and tries to access a guest-only route
      return;
    }
  }

  // Proceed to route
  next();
});

export default router;

