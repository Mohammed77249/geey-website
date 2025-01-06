<template>
  <div class="h-screen w-full flex flex-col items-center justify-center bg-gray-50">
    <!-- Login Form -->
    <div class="bg-white shadow-lg h-full rounded-lg w-full max-w-xl px-8 py-10">

      <div class="mb-5">
        <div class="flex items-center justify-center">
          <h1 class="text-2xl font-bold text-center mb-4">{{ $t('Reset password') }}</h1>
        </div>
        <p class="text-sm text-gray-600 text-center mb-6">
       {{ $t('Enter your new password to reset your account') }}
      </p>
          </div>


      <form @submit.prevent="submitNewPassword">
        <!-- New Password Input -->
        <div class=" mb-5 ">
          <label for="password" class="block text-gray-600 mb-2">{{ $t('New Password') }}</label>
              <!-- Form Group -->
              <div class="relative ">
                <input
                  v-model="newPassword"
                  required
                  :type="isPasswordNewVisible ? 'text' : 'password'"
                   placeholder="********"
                   class="w-full px-4 py-2 border border-gray-300  focus:outline-none focus:ring-0 focus:ring-primary-900 focus:border-primary-900 focus:border-[1px]"
                />
                <button
                  type="button"
                  @click="togglePasswordNewVisibility"
                  class="absolute inset-y-0 end-0 flex items-center z-20 px-3 cursor-pointer text-gray-400 rounded-e-md focus:outline-none focus:text-primary-900"
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
                      :class="isPasswordNewVisible ? 'hidden' : ''"
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
        </div>

        <!-- confirmPassword Input -->

        <div class=" mb-5 ">
          <label  class="block text-gray-600 mb-2">{{ $t('Confirm password') }} </label>
              <!-- Form Group -->
              <div class="relative ">
                <input
                  v-model="confirmPassword"
                  required
                  :type="isconfirmPasswordVisible ? 'text' : 'password'"
                  placeholder="********"
                   class="w-full px-4 py-2 border border-gray-300  focus:outline-none focus:ring-0 focus:ring-primary-900 focus:border-primary-900 focus:border-[1px]"
                />
                <button
                  type="button"
                  @click="toggleconfirmPasswordVisibility"
                  class="absolute inset-y-0 end-0 flex items-center z-20 px-3 cursor-pointer text-gray-400 rounded-e-md focus:outline-none focus:text-primary-900"
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
                      :class="isconfirmPasswordVisible ? 'hidden' : ''"
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
        </div>

        <!-- Login Button -->
        <button
          type="submit"
          class="w-full bg-primary-900 text-white py-5 mt-10 font-bold  transition duration-300"
        >
        {{ $t('Reset password') }}
        </button>
      </form>
      <p v-if="errorMessage" class="text-red-600 text-center mt-4">{{ errorMessage }}</p>
    </div>
    <LoaderComp :is-loader="authStore.loading" />
  </div>
</template>

<script setup>
import {  ref } from 'vue';
import { useRouter } from 'vue-router';
import { useAuthStore } from '@/stores/auth'
import LoaderComp from '@/components/LoaderComp.vue';
const authStore = useAuthStore();
const router = useRouter();

const newPassword = ref('');
const isPasswordNewVisible = ref(false)
function togglePasswordNewVisibility() {
  isPasswordNewVisible.value = !isPasswordNewVisible.value;
}


const confirmPassword = ref('');
const isconfirmPasswordVisible = ref(false)
function toggleconfirmPasswordVisibility() {
  isconfirmPasswordVisible.value = !isconfirmPasswordVisible.value;
}
const errorMessage = ref("");
const emailUser = localStorage.getItem('emailuser');
const submitNewPassword = async() => {

  if (newPassword.value !== confirmPassword.value) {
    errorMessage.value = "كلمتا المرور غير متطابقتين. الرجاء المحاولة مرة أخرى.";
    return;
  }

  if (newPassword.value.length < 8) {
    errorMessage.value = "كلمة المرور يجب أن تكون 8 أحرف أو أكثر.";
    return;
  }

  const respass = await authStore.resetpassword(emailUser,newPassword.value,confirmPassword.value);
  if(respass){
    authStore.isAuthenticated = false
    router.push('/user/loginemail')
  }
  alert("تمت إعادة تعيين كلمة المرور بنجاح!");
  errorMessage.value = "";
};

</script>




