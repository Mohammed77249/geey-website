<template>
  <div class="h-screen w-full flex flex-col items-center justify-center bg-gray-50">
    <!-- Login Form -->
    <div class="bg-white shadow-lg h-full rounded-lg w-full max-w-xl px-8 py-10">

      <div class="mb-5">
        <div class="flex items-center justify-end">
          <h1 class="text-lg  font-bold text-black  "> انشاء حساب جي الخاص بك </h1>
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
        <div class="mb-10 rtl">
          <label for="password" class="block text-gray-600 mb-2">كلمة المرور</label>
          <input
            type="password"
            id="password"
            v-model="password"
            required
            placeholder="أدخل كلمة المرور"
            class="w-full px-4 py-2 border border-gray-300  focus:outline-none focus:ring-0 focus:ring-black focus:border-black focus:border-[1px]"
          />
        </div>

        <div class="mb-4  rtl flex items-center justify-start gap-3">

          <input
            type="radio"
            id="password"
            v-model="password"
            required
            placeholder="أدخل كلمة المرور"
            class=" px-4 py-2 border border-gray-300  focus:outline-none focus:ring-0 focus:ring-black focus:border-black focus:border-[1px]"
          />
          <label for="password" class=" text-gray-600 mb-2">تلقى رسائل اخبارية ونصائح حصرية حول الاناقة من جـــــي
            عبر رسائل القصيرة </label>
        </div>

        <!-- Login Button -->
        <button
          type="submit"
          class="w-full bg-primary-900 text-white py-5 mt-10 font-bold  transition duration-300"
        >
          تسجيل الاشتراك
        </button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useAuthStore } from '@/stores/auth'
const authStore = useAuthStore();
const email = ref('');
const password = ref('');
const router = useRouter();

const handleLogin = () => {
  if (email.value === 'mohammed@gmail.com' && password.value === '123456' ) {
    authStore.loginEmail() ;
    router.push('/');
  } else {
    alert('Invalid credentials');
  }


};
</script>

<style scoped>

</style>
