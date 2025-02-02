<template>
  <div class="h-screen w-full flex flex-col items-center justify-center mt-10 bg-gray-50">
    <!-- Login Form -->
    <div class="bg-white shadow-lg h-full rounded-lg w-full max-w-xl px-4 py-10">
      <div class="mb-5">
        <div class="flex items-center justify-center gap-2">
          <img src="/jeeeeylogo3.jpg" class="w-20 h-16" />
        </div>

        <div class="flex items-center justify-center gap-1 ">
          <h1 class="text-[12px]  text-green-800  text-center"> {{ $t('Your data is protected') }} </h1>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path opacity="0.4" d="M6 10V8C6 4.69 7 2 12 2C17 2 18 4.69 18 8V10" stroke="green" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M17 22H7C3 22 2 21 2 17V15C2 11 3 10 7 10H17C21 10 22 11 22 15V17C22 21 21 22 17 22Z" stroke="green" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path opacity="0.4" d="M15.9965 16H16.0054" stroke="green" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path opacity="0.4" d="M11.9955 16H12.0045" stroke="green" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path opacity="0.4" d="M7.99451 16H8.00349" stroke="green" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>

      </div>


      <form @submit.prevent="handleLogin">
        <!-- Email Input -->
        <div class="mb-4">
          <label for="email" class="block text-gray-600 mb-2">{{ $t('Email or phone number') }}</label>
          <input
            type="email"
            id="email"
            v-model="email"
            required
            :placeholder="$t('Email or phone number')"
            :disabled="authStore.loading"
            class="w-full px-4 py-2 border border-gray-300  focus:outline-none focus:ring-0 focus:ring-primary-900 focus:border-primary-900 focus:border-[1px]"
          />
          <p v-if="authStore.error" class="text-red-500 text-sm">{{ authStore.error }}</p>
        </div>
        <!-- Login Button -->
        <button
          type="submit"  :disabled="authStore.loading"
          class="w-full bg-primary-900 text-white py-3 mt-10 font-bold  transition duration-300"
        >

          <span v-if="authStore.loading" class="loader mr-2"></span>
          <span>{{ authStore.loading ? 'جارٍ التحقق...' : 'متابعة' }}</span>
        </button>
      </form>
      <p v-if="successMessage" class="text-green-500 text-center mt-4">{{ successMessage }}</p>


      <!-- Or Divider -->
      <div class="flex items-center  my-6 ">
        <div class="flex-grow h-px bg-gray-300 "></div>
        <span class="px-4 text-[12px] text-gray-500">{{ $t('Or join with') }}</span>
        <div class="flex-grow h-px bg-gray-300"></div>
      </div>

      <!-- Social Login Buttons -->
      <div class="py-3">
        <button
          class="w-full flex items-center justify-center px-4 py-3  gap-2 border border-gray-500 transition"
        >
        {{ $t('Continue with Google') }}
          <img src="/src/assets/images/google-icon.svg" alt="Google" class="w-5 h-5 mr-2" />

        </button>
        <button
          class="w-full flex items-center justify-center px-4 mt-10 py-3 gap-2 border border-gray-500  transition"
        >
        {{ $t('Continue with Facebook') }}
          <img src="/src/assets/images/facebook-icon.svg" alt="Facebook" class="w-5 h-5 mr-2" />

        </button>
      </div>
    </div>
    <LoaderComp :is-loader="authStore.loading"/>
  </div>


</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useAuthStore } from '@/stores/auth'
import LoaderComp from '@/components/LoaderComp.vue';
const authStore = useAuthStore();
const email = ref('');
const router = useRouter();
const successMessage = ref(null);

const handleLogin = async () => {

  try {
    const exists = await authStore.checkEmail(email.value);
    if (exists.status =='exists') {
      successMessage.value = 'البريد الإلكتروني متاح. يمكنك المتابعة.';
      setTimeout(() => {
        router.push('/phone/loginemail');
      }, 500);
      localStorage.setItem('userNew','exists');

    }
    else {
      successMessage.value = 'البريد الإلكتروني جديد.';
      setTimeout(() => {
        router.push('/phone/loginemail');
      }, 1500);

      localStorage.setItem('userNew','no exists');
    }
  } catch (error) {
    alert('Error checking email:', error);
  }


};
</script>


