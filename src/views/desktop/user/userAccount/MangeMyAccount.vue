<template>
  <div class="w-full mx-auto  bg-white shadow-md   p-6">
    <header class="bg-white shadow p-4">
      <h1 class="text-2xl font-bold mb-4 text-center">إدارة حسابي</h1>
    </header>

    <main class="p-4 bg-white shadow border mt-5">
    <!-- نموذج تغيير كلمة المرور -->
    <form @submit.prevent="changePassword">
      <!-- كلمة المرور الحالية -->
      <div  class="mb-4">
        <label class="block text-sm font-medium mb-2">كلمة المرور الحالية</label>
                <div class="relative ">
                <input
                  v-model="currentPassword"
                  required
                  :type="isPasswordCurrentVisible ? 'text' : 'password'"
                    placeholder="أدخل كلمة المرور الحالية"
                   class="w-full px-4 py-2 border border-gray-300  focus:outline-none focus:ring-0 focus:ring-primary-900 focus:border-primary-900 focus:border-[1px]"
                />
                <button
                  type="button"
                  @click="isPasswordCurrentVisible = !isPasswordCurrentVisible"
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
      <div  class="mb-4">
        <label class="block text-sm font-medium mb-2">كلمة المرور الجديدة</label>
        <div class="relative ">
                <input
                  v-model="newPassword"
                  required
                  :type="isPasswordNewVisible ? 'text' : 'password'"
                   :placeholder="$t('Enter password')"
                   class="w-full px-4 py-2 border border-gray-300  focus:outline-none focus:ring-0 focus:ring-primary-900 focus:border-primary-900 focus:border-[1px]"
                />
                <button
                  type="button"
                  @click="isPasswordNewVisible = !isPasswordNewVisible"
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
      <div  class="mb-4">
        <label class="block text-sm font-medium mb-2">تأكيد كلمة المرور الجديدة</label>
                <div class="relative ">
                <input
                  v-model="confirmPassword"
                  required
                  :type="isPasswordConfirmVisible ? 'text' : 'password'"
                   :placeholder="$t('تأكيد كلمة المرور ')"
                   class="w-full px-4 py-2 border border-gray-300  focus:outline-none focus:ring-0 focus:ring-primary-900 focus:border-primary-900 focus:border-[1px]"
                />
                <button
                  type="button"
                  @click="isPasswordConfirmVisible = !isPasswordConfirmVisible"
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
      <button
        type="submit"
        class="w-full bg-primary-900 hover:bg-primary-800 text-white font-medium py-3 px-4 rounded-md"
      >
        تغيير كلمة المرور
      </button>
    </form>

    </main>
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


// الرسائل (للأخطاء أو النجاح)
const errorMessage = ref("");
const successMessage = ref("");

// دالة تغيير كلمة المرور
const changePassword = async() => {
  // التحقق من صحة الإدخالات
  if (!currentPassword.value || !newPassword.value || !confirmPassword.value) {
    errorMessage.value = "جميع الحقول مطلوبة.";
    successMessage.value = "";
    return;
  }

  if (newPassword.value !== confirmPassword.value) {
    errorMessage.value = "كلمة المرور الجديدة وتأكيدها غير متطابقين.";
    successMessage.value = "";
    return;
  }

  if (newPassword.value.length < 6) {
    errorMessage.value = "يجب أن تكون كلمة المرور الجديدة مكونة من 6 أحرف على الأقل.";
    successMessage.value = "";
    return;
  }


  const res = await storeAuth.updatePasswordprofile(currentPassword.value,newPassword.value ,confirmPassword.value);
  if(res){
      // استبدل هذا الجزء بطلب API
      setTimeout(() => {
        // إذا نجح تغيير كلمة المرور
        errorMessage.value = "";
        successMessage.value = "تم تغيير كلمة المرور بنجاح.";

        // إعادة تعيين الحقول
        currentPassword.value = "";
        newPassword.value = "";
        confirmPassword.value = "";
      }, 1000);
  }else{
    errorMessage.value = "كلمه المرور ليست موجوده";
    successMessage.value = ""
  }

};
</script>

<style>
/* تخصيصات إضافية إن لزم الأمر */
body {
  background-color: #f9f9f9;
  font-family: Arial, sans-serif;
}
</style>

