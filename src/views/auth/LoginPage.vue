<template>
  <div class="h-screen w-full flex flex-col items-center justify-center bg-gray-50">
    <!-- Login Form -->
    <div class="bg-white shadow-lg h-full rounded-lg w-full max-w-xl px-8 py-10">
      <div class="mb-5">
        <div class="flex items-center justify-center gap-2">
          <h1 class="text-3xl font-bold text-gray-800  text-center">Jeey </h1>
          <img src="/src/assets/images/logogeey.svg" class="w-20 h-16" />
        </div>

        <div class="flex items-center justify-center  ">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path opacity="0.4" d="M6 10V8C6 4.69 7 2 12 2C17 2 18 4.69 18 8V10" stroke="green" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M17 22H7C3 22 2 21 2 17V15C2 11 3 10 7 10H17C21 10 22 11 22 15V17C22 21 21 22 17 22Z" stroke="green" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path opacity="0.4" d="M15.9965 16H16.0054" stroke="green" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path opacity="0.4" d="M11.9955 16H12.0045" stroke="green" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path opacity="0.4" d="M7.99451 16H8.00349" stroke="green" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <h1 class="text-[12px]  text-green-800  text-center"> Your data is protected </h1>
        </div>

      </div>


      <form @submit.prevent="handleLogin">
        <!-- Email Input -->
        <div class="mb-4 rtl">
          <label for="email" class="block text-gray-600 mb-2">البريد الإلكتروني او رقم الهاتف</label>
          <input
            type="email"
            id="email"
            v-model="email"
            required
            placeholder="أدخل بريدك الإلكتروني او رقم الهاتف"
            class="w-full px-4 py-2 border border-gray-300  focus:outline-none focus:ring-0 focus:ring-black focus:border-black focus:border-[1px]"
          />
        </div>

        <!-- Password Input -->
        <!-- <div class="mb-4 rtl">
          <label for="password" class="block text-gray-600 mb-2">كلمة المرور</label>
          <input
            type="password"
            id="password"
            v-model="password"
            required
            placeholder="أدخل كلمة المرور"
            class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div> -->

        <!-- Login Button -->
        <button
          type="submit"
          class="w-full bg-primary-900 text-white py-5 mt-10 font-bold  transition duration-300"
        >
          متابعة
        </button>
      </form>

      <!-- Extra Options -->
      <!-- <div class="flex justify-between items-center mt-4 text-sm text-gray-600">
        <a href="#" class="hover:underline">نسيت كلمة المرور؟</a>
        <a href="#" class="hover:underline">إنشاء حساب جديد</a>
      </div> -->

      <!-- Or Divider -->
      <div class="flex items-center  my-6 ">
        <div class="flex-grow h-px bg-gray-300 "></div>
        <span class="px-4 text-[12px] text-gray-500">أو</span>
        <div class="flex-grow h-px bg-gray-300"></div>
      </div>

      <!-- Social Login Buttons -->
      <div class="flex gap-4">
        <button
          class="w-full flex items-center justify-center px-4 py-2 border border-gray-500 transition"
        >
          <img src="/src/assets/images/google-icon.svg" alt="Google" class="w-5 h-5 mr-2" />
            Google  الاستمرار ب
        </button>
        <button
          class="w-full flex items-center justify-center px-4 py-2 border border-gray-500  transition"
        >
          <img src="/src/assets/images/facebook-icon.svg" alt="Facebook" class="w-5 h-5 mr-2" />
            Facebook  الاستمرار ب
        </button>
      </div>
    </div>

  </div>


</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useAuthStore } from '@/stores/auth'
const authStore = useAuthStore();
const email = ref('');
// const password = ref('');
const router = useRouter();

// const isnew = ref(false)

const handleLogin = () => {
  if (email.value === 'mohammed@gmail.com' ) {
    authStore.login('true');
    router.push('/user/loginemail');
    localStorage.setItem('emailUser',email.value);
    localStorage.setItem('userNew','false');
  } else {
    authStore.login('true');
    router.push('/user/loginemail');
    localStorage.setItem('emailUser',email.value);
    localStorage.setItem('userNew','true');
  }


};
</script>

<style scoped>

</style>
