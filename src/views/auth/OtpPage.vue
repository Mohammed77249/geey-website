<template>
  <div class="h-screen w-full flex flex-col items-center justify-center bg-gray-50">
    <!-- Login Form -->
    <div class="bg-white shadow-lg h-full rounded-lg w-full max-w-xl px-8 py-24">

      <div class="mb-10">
        <h2 class="text-2xl font-bold text-gray-800 text-center mb-4">{{ $t('Verification with OTP code') }}</h2>

      <!-- <p class="text-gray-600 text-center mb-6">
        أدخل الرمز المرسل إلى رقم هاتفك <br /> (1234 **** 5678)
      </p> -->

      <p class="text-gray-600 text-center mb-6">
        {{ $t('Enter the code sent to your email') }} <br /> (mhm****)
      </p>
      </div>

      <div class="flex justify-between   mb-6">
          <input
            v-for="(input, index) in otpInputs"
            :key="index"
            type="text"
            maxlength="1"
            v-model="otp[index]"
            @input="focusNext(index, $event)"
            class="w-12 h-12 border border-gray-300 text-center text-xl rounded focus:ring focus:ring-blue-200 focus:outline-none"
          />
        </div>

      <p v-if="authStore.error" class="text-red-500 text-sm text-center mb-4">
          {{ authStore.error }}
        </p>


        <button
          type="submit" @click="verifyOtp"
          class="w-full bg-primary-900 text-white py-5 mt-10 font-bold  transition duration-300"
          :disabled="authStore.loading"
        >
              {{ $t('verification') }}
        </button>


      <p class="text-center text-gray-600 mt-4">
        {{ $t('Did not receive the code?') }}
        <button
          class="text-blue-600 font-semibold hover:underline"
          @click="resendOtp"
           :disabled="authStore.loading"
        >
          {{ $t('Resend') }}
        </button>

      </p>

    </div>
    <LoaderComp :is-loader="authStore.loading" />
  </div>

</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
const router = useRouter();
import { useAuthStore } from '@/stores/auth'
import LoaderComp from '@/components/LoaderComp.vue';
const authStore = useAuthStore();

const otpInputs= Array.from({ length: 6 });
const otp = ref(["", "", "", "", "", ""]);
const focusNext = (index, event) => {
      if (event.target.value && index < otp.value.length - 1) {
        const nextInput = event.target.nextElementSibling;
        if (nextInput) nextInput.focus();
      }
    };

//const emailUser =ref(authStore.email);
const emailUser = localStorage.getItem('emailuser');
const isnew = localStorage.getItem('UserOld');
const verifyOtp = async() => {
  const VerOtp = await authStore.verifyOtp(otp.value.join(""),emailUser);
  if(VerOtp && isnew == 'old' ){
    authStore.isAuthenticated = false
    router.push('/user/resetpassword');
  }
  if(VerOtp && isnew == 'regester' )
  {
    authStore.isAuthenticated = true
    alert(`تم تسجيل الدخول بنجاح `);
    router.push('/');
  }


};

const resendOtp = async() => {
  const resotp = await authStore.resendOtp(emailUser);
  if(resotp){
    alert('تم إرسال رمز جديد.');
  }else{
    alert('لم بتم ارسال الرمز');
  }

};
</script>





