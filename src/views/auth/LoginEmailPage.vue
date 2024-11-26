<template>
  <div class="h-screen w-full flex flex-col items-center justify-center bg-gray-50">
    <!-- Login Form -->
    <div class="bg-white shadow-lg h-full rounded-lg w-full max-w-xl px-8 py-10">

      <div class="mb-5">
        <div class="flex items-center ">
          <h1 v-if="isUsernew" class="text-lg  font-bold text-black  "> انشاء حساب جي الخاص بك </h1>
          <h1 v-if="!isUsernew" class="text-lg  font-bold text-black  ">{{ $t('Welcome back') }}</h1>
        </div>
        <h1 v-if="!isUsernew" class="text-sm font-medium text-black ">  {{ $t('Enter your password to log in to your Jeey account') }}</h1>
      </div>


      <form @submit.prevent="handleLogin">
        <!-- Email Input -->
        <div class="mb-4 ">
          <label for="email" class="block text-gray-600 mb-2">{{ $t('Email or phone number') }}</label>
          <input
            type="email"
            id="email"
            v-model="emailUser"
            required
            :placeholder="$t('Email or phone number')"
            class="w-full px-4 py-2 border border-gray-300  focus:outline-none focus:ring-0 focus:ring-black focus:border-black focus:border-[1px]"
          />
        </div>


        <!-- Password Input -->

        <div class=" mb-5 ">
          <label for="password" class="block text-gray-600 mb-2">{{ $t('password') }}</label>
              <!-- Form Group -->
              <div class="relative ">
                <input
                  v-model="password"
                  required
                  :type="isPasswordVisible ? 'text' : 'password'" Enter password
                   :placeholder="$t('Enter password')"
                   class="w-full px-4 py-2 border border-gray-300  focus:outline-none focus:ring-0 focus:ring-black focus:border-black focus:border-[1px]"
                />
                <button
                  type="button"
                  @click="togglePasswordVisibility"
                  class="absolute inset-y-0 end-0 flex items-center z-20 px-3 cursor-pointer text-gray-400 rounded-e-md focus:outline-none focus:text-blue-600"
                >
                  <svg
                    class="shrink-0 size-5"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path class="" d="M9.88 9.88a3 3 0 1 0 4.24 4.24"></path>
                    <path
                      class=""
                      d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68"
                    ></path>
                    <path
                      class=""
                      d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61"
                    ></path>
                    <line
                      :class="isPasswordVisible ? 'hidden' : ''"
                      x1="2"
                      x2="22"
                      y1="2"
                      y2="22"
                    ></line>
                    <path
                      class="hs-password-active:block"
                      d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"
                    ></path>
                    <circle class="hs-password-active:block" cx="12" cy="12" r="3"></circle>
                  </svg>
                </button>
              </div>
              <div v-if="!authStore.error" class="mt-2 text-[12px] text-success-500">
                <p>{{ $t('8 symbols minimum') }}</p>
                <p>{{ $t('At least one letter') }}</p>
                <p>{{ $t('At least one number') }}</p>
              </div>
            </div>

            <p v-if="authStore.error" class="text-red-500 text-sm">{{ authStore.error }}</p>


        <div v-if="!isUsernew" class="flex justify-between items-center mb-5 text-sm text-gray-600">
          <p>

          </p>
        <RouterLink  to="/user/forgetpassword" class="hover:underline">{{ $t('Forgot Password') }}</RouterLink>
        </div>


        <div class="mb-4   flex items-center justify-start gap-3">

          <input
            type="radio"
            v-model="message"
            required
            class=" px-4 py-2 border border-gray-300  focus:outline-none focus:ring-0 focus:ring-black focus:border-black focus:border-[1px]"
          />
          <label class=" text-gray-600 mb-2">{{ $t('Receive exclusive newsletters and tips on style from Jeey via SMS') }}</label>
        </div>

        <!-- Login Button -->
        <button
          type="submit"
          class="w-full bg-primary-900 text-white py-5 mt-10 font-bold  transition duration-300"
        >
        <p v-if="isUsernew"> تسجيل الاشتراك</p>
        <p v-if="!isUsernew"> {{ $t('login') }}</p>
        </button>
      </form>
      <LoaderComp :is-loader="authStore.loading" />
    </div>
  </div>
</template>

<script setup>
import {  ref,onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { useAuthStore } from '@/stores/auth'
import LoaderComp from '@/components/LoaderComp.vue';
const authStore = useAuthStore();
const password = ref('');
const message = ref();
const router = useRouter();
const isPasswordVisible = ref(false)

function togglePasswordVisibility() {
  isPasswordVisible.value = !isPasswordVisible.value
}
// const emailUser =ref(authStore.email);
const emailUser = localStorage.getItem('emailuser');
const isUsernew = ref(false);

const readLocalStorage = () => {
  try {
    const isnew = localStorage.getItem('userNew');
    if (isnew == 'no exists') {
      isUsernew.value = true;
    } else if(isnew == 'exists'){
      isUsernew.value = false;
    }
    else {
      alert('لا توجد بيانات للمفتاح userToken في localStorage.');
    }

  } catch (error) {
    alert('حدث خطأ أثناء قراءة localStorage:', error);
  }
};

onMounted(() => {
  readLocalStorage();
});



const handleLogin = async () => {

  const userLogin = await authStore.loginUser(emailUser,password.value);
    if(userLogin)
    {
      router.push('/user/otp');
      localStorage.setItem('UserOld','regester');
    }else{
      console.log("dddd")
    }

};
</script>

