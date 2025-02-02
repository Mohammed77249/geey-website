
<template>

  <div class="h-screen w-full flex flex-col items-center justify-center bg-gray-50">

      <div class="bg-white shadow-lg h-full rounded-lg w-full max-w-xl px-8 py-10">
  <div class="z-[100]  w-full  rounded-lg md:mt-0 sm:max-w-[630px] sm:max-h-[750px] xl:p-0">

          <div class="flex items-center justify-center ">
            <img class="w-[150px] h-[150px]" src="/jeeeeylogo3.jpg" alt="logo" />
          </div>

          <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
            <div class="mb-2 flex ">
              <h1
                class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl  mr-5"
              >
              {{ $t('Did you forget your password') }}
              </h1>
            </div>
            <div class="">
              <span class="text-[#A3A3A3]">{{ $t('Enter your email and we will send you instructions to reset your password') }}</span>
            </div>


            <form  @submit.prevent="handleForgetpassword" class="space-y-4 md:space-y-6" >
              <div class="mb-4">
                <label for="email" class="block text-gray-600 mb-2"> {{ $t('Email or phone number') }} </label>
                <input
                  type="email"
                  id="email"
                  v-model="email"
                  required
                  :placeholder="$t('Email or phone number')"
                  class="w-full px-4 py-2 border border-gray-300  focus:outline-none focus:ring-0 focus:ring-primary-900 focus:border-primary-900 focus:border-[1px]"
                />
              </div>
              <p v-if="authStore.error" class="text-red-500 text-sm text-center mb-4">
            {{ authStore.error }}
          </p>

              <button
                type="submit"
                class="w-full text-white bg-primary-900 py-5 font-bold  text-[15px]   text-center"
              >
            {{ $t('Send reset') }}
              </button>

            </form>
            <div class="flex items-center justify-center">
                <RouterLink to="/phone/login" class="text-[20px]  mb-16 font-bold text-primary-900 hover:underline flex">
                  {{ $t('Return to the login page') }}
                  <img class="w-[24px] h-[24px] mt-1 mr-1 " :src="lang == 'ar' ? '/src/assets/images/arrow-left.svg' :'/src/assets/images/arrow-right.svg'" alt="logo" />
              </RouterLink>
              </div>
          </div>

        </div>

      </div>

      <LoaderComp :is-loader="authStore.loading"/>
    </div>

  </template>


  <script setup >
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';
  import { useAuthStore } from '@/stores/auth'
  import LoaderComp from '@/components/LoaderComp.vue';
  const authStore = useAuthStore();
  const email = ref('');
  const router = useRouter();

  const lang = localStorage.getItem('language');
  const emailUser = localStorage.getItem('emailuser');
  const handleForgetpassword = async () => {
    const forpass = await authStore.forgetpassword(emailUser);
    if(forpass){
      localStorage.setItem('UserOld','old');
      router.push('/phone/otp');
      alert("success");
    }
  };

  </script>
