
<template>

  <div class="h-screen w-full flex flex-col items-center justify-center bg-gray-50">

      <div class="bg-white shadow-lg h-full rounded-lg w-full max-w-xl px-8 py-10">
  <div class="z-[100]  w-full  rounded-lg md:mt-0 sm:max-w-[630px] sm:max-h-[750px] xl:p-0">

          <div class="flex items-center justify-center -mb-12">
            <img class="w-[200px] h-[200px]" src="/src/assets/images/logogeey.svg" alt="logo" />
          </div>

          <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
            <div class="mb-2 flex rtl">
              <h1
                class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl  mr-5"
              >
              هل نسيت كلمة المرور الخاص يك
              </h1>
            </div>
            <div class="rtl">
              <span class="text-[#A3A3A3]"> أدخل بريدك الإلكتروني وسنرسل لك التعليمات إلى
                إعادة تعيين كلمة المرور الخاصة بك </span>
            </div>


            <form  @submit.prevent="handleForgetpassword" class="space-y-4 md:space-y-6" >
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
              

              <button
                type="submit"
                class="w-full text-white bg-primary-900 py-5 font-bold  text-[15px]   text-center"
              >
            إرسال إعادة التعيين
              </button>

            </form>
            <div class="flex items-center justify-center">
                <RouterLink to="/user/login" class="text-[20px]  mb-16 font-bold text-primary-900 hover:underline flex">
                  <img class="w-[24px] h-[24px] mt-1 mr-1 " src="/src/assets/images/arrow-left.svg" alt="logo" />
                  العودة ال صفحة تسجيل الدخول
              </RouterLink>
              </div>
          </div>

        </div>

      </div>
    </div>

  </template>


  <script setup >
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';
  import { useAuthStore } from '@/stores/auth'
  const authStore = useAuthStore();
  const email = ref('');
  const router = useRouter();


  const handleForgetpassword = () => {
    if (email.value === 'mohammed@gmail.com') {
      authStore.forgetpassword() ;
      router.push('/user/otp');
    } else {
      alert('Invalid credentials');
    }

  };

  </script>
