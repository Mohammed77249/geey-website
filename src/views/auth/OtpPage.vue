<template>
  <div class="h-screen w-full flex flex-col items-center justify-center bg-gray-50">
    <!-- Login Form -->
    <div class="bg-white shadow-lg h-full rounded-lg w-full max-w-xl px-8 py-24">

      <div class="mb-10">
        <h2 class="text-2xl font-bold text-gray-800 text-center mb-4">التحقق برمز الـ OTP</h2>

      <!-- <p class="text-gray-600 text-center mb-6">
        أدخل الرمز المرسل إلى رقم هاتفك <br /> (1234 **** 5678)
      </p> -->

      <p class="text-gray-600 text-center mb-6">
        أدخل الرمز المرسل إلى الايميل الخاص بك  <br /> (mhm****)
      </p>
      </div>

        <div class="flex justify-between gap-2 mb-6">
        <input
          v-for="(box, index) in otpBoxes"
          :key="index"
          type="text"
          maxlength="1"
          class="w-12 h-12 border border-gray-300 text-center text-xl rounded focus:ring focus:ring-blue-200 focus:outline-none"
          v-model="otp[index]"
          @input="moveToNextBox(index)"
        />
      </div>

        <button
          type="submit" @click="verifyOtp"
          class="w-full bg-primary-900 text-white py-5 mt-10 font-bold  transition duration-300"
        >
              تحقق
        </button>


      <p class="text-center text-gray-600 mt-4">
        لم تتلقَ الرمز؟
        <button
          class="text-blue-600 font-semibold hover:underline"
          @click="resendOtp"
        >
          إعادة الإرسال
        </button>
      </p>

    </div>
  </div>

</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
const router = useRouter();
import { useAuthStore } from '@/stores/auth'
const authStore = useAuthStore();

// عدد الحقول
const otpBoxes = Array(6).fill(null);
const otp = ref(new Array(6).fill(''));

// التنقل بين الحقول
const moveToNextBox = (index) => {
  const currentBox = document.querySelectorAll('input')[index];
  if (currentBox.value && index < otpBoxes.length - 1) {
    document.querySelectorAll('input')[index + 1].focus();
  }
};


// إرسال الرمز للتحقق
const verifyOtp = () => {
 // alert(`تم إدخال الرمز: ${otp.value.join('')}`);

  if(otp.value.join('') === '123456'){
    alert(`تم تسجيل الدخول بنجاح  `);
    authStore.otp();
    router.push('/');
  } else{
    alert(`تم إدخال الرمز خطاء`);
  }


};

// إعادة الإرسال
const resendOtp = () => {
  alert('تم إرسال رمز جديد.');
};
</script>





