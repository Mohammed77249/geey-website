<template>
  <div  class="bg-white h-screen">

     <!-- header -->
    <div class="fixed inset-0  bg-white p-2 shadow h-16">
        <div class="grid grid-cols-12 mt-2 items-center justify-between">
          <!-- back button -->
            <div class="col-span-3">
              <RouterLink to="/phone/user/setting/manageAccount">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.90991 19.92L15.4299 13.4C16.1999 12.63 16.1999 11.37 15.4299 10.6L8.90991 4.07996" stroke="#8a1538" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </RouterLink>
            </div>
            <div class=" col-span-6 text-lg font-bold text-center">
              تغيير كلمه المرور
            </div>
        </div>
    </div>

    <!-- main content -->
    <div>
      <main class=" bg-white  mt-16 pt-4">
    <!-- نموذج تغيير كلمة المرور -->
    <form @submit.prevent="changePassword">
      <!-- كلمة المرور الحالية -->
      <div  class="mb-4 p-2 border-b-2 pb-6">
        <label class="block text-sm font-medium mb-2"> {{ $t("Current Password") }}</label>
                <div class="relative ">
                <input
                  v-model="currentPassword"
                  required
                  :type="isPasswordCurrentVisible ? 'text' : 'password'"
                    :placeholder="$t('Enter your current password')"
                   class="w-full px-4 py-3 border border-gray-300  focus:outline-none focus:ring-0 focus:ring-primary-900 focus:border-primary-900 focus:border-[1px]"
                />
                <button
                  type="button"
                  @click="isPasswordCurrentVisible = !isPasswordCurrentVisible"
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
                      :class="isPasswordCurrentVisible ? 'hidden' : ''"
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

      <!-- كلمة المرور الجديدة -->
      <div  class="mb-4 p-2 border-b-2 pb-6">
        <label class="block text-sm font-medium mb-2"> {{ $t("New Password") }}</label>
        <div class="relative ">
                <input
                  v-model="newPassword"
                  required
                  :type="isPasswordNewVisible ? 'text' : 'password'"
                   :placeholder="$t('Enter password')"
                   class="w-full px-4 py-3 border border-gray-300  focus:outline-none focus:ring-0 focus:ring-primary-900 focus:border-primary-900 focus:border-[1px]"
                />
                <button
                  type="button"
                  @click="isPasswordNewVisible = !isPasswordNewVisible"
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

      <!-- تأكيد كلمة المرور الجديدة -->
      <div  class="mb-4 p-2 border-b-2 pb-6">
        <label class="block text-sm font-medium mb-2"> {{ $t("Confirm the new password") }}</label>
                <div class="relative ">
                <input
                  v-model="confirmPassword"
                  required
                  :type="isPasswordConfirmVisible ? 'text' : 'password'"
                   :placeholder="$t('Confirm the new password')"
                   class="w-full px-4 py-3 border border-gray-300  focus:outline-none focus:ring-0 focus:ring-primary-900 focus:border-primary-900 focus:border-[1px]"
                />
                <button
                  type="button"
                  @click="isPasswordConfirmVisible = !isPasswordConfirmVisible"
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
                      :class="isPasswordConfirmVisible ? 'hidden' : ''"
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



      <!-- رسالة الخطأ -->
      <p v-if="errorMessage" class="text-red-500 text-sm mb-4">{{ errorMessage }}</p>

      <!-- رسالة النجاح -->
      <p v-if="successMessage" class="text-green-500 text-sm mb-4">{{ successMessage }}</p>

      <!-- زر تغيير كلمة المرور -->
      <div class="bg-white py-4 px-2  flex items-center   fixed bottom-0 w-full">
      <button
        type="submit"
        class="w-full bg-primary-900 hover:bg-primary-800 text-white font-medium py-4 px-4 rounded-md"
      >
        تغيير كلمة المرور
      </button>
      </div>
    </form>

    </main>
    </div>

  </div>
</template>


<script setup>
import { ref } from 'vue';
import { useAuthStore } from '@/stores/auth';

const storeAuth = useAuthStore();
const currentPassword = ref("");
const newPassword = ref("");
const confirmPassword = ref("");

const isPasswordNewVisible = ref(false)
const isPasswordConfirmVisible = ref(false)
const isPasswordCurrentVisible = ref(false)

import { useI18n } from 'vue-i18n';
const { t } = useI18n();

// الرسائل (للأخطاء أو النجاح)
const errorMessage = ref("");
const successMessage = ref("");

// دالة تغيير كلمة المرور
const changePassword = async() => {
  // التحقق من صحة الإدخالات
  if (!currentPassword.value || !newPassword.value || !confirmPassword.value) {
    errorMessage.value = t("All fields are required.");
    successMessage.value = "";
    return;
  }

  if (newPassword.value !== confirmPassword.value) {
    errorMessage.value = t("The new password and its confirmation do not match.");
    successMessage.value = "";
    return;
  }

  if (newPassword.value.length < 6) {
    errorMessage.value = t("The new password must be at least 6 characters long.");
    successMessage.value = "";
    return;
  }


  const res = await storeAuth.updatePasswordprofile(currentPassword.value,newPassword.value ,confirmPassword.value);
  if(res){
      // استبدل هذا الجزء بطلب API
      setTimeout(() => {
        // إذا نجح تغيير كلمة المرور
        errorMessage.value = "";
        successMessage.value = t("The password has been changed successfully.");
        
        // إعادة تعيين الحقول
        currentPassword.value = "";
        newPassword.value = "";
        confirmPassword.value = "";
      }, 1000);
  }else{
    errorMessage.value = t("The password does not exist");
    successMessage.value = ""
  }

};
</script>


