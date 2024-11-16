<template>
    <section class="bg-white dark:bg-gray-900">
    <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div class="mx-auto max-w-screen-sm text-center">
            <h1 class="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-primary-600 dark:text-primary-500">404</h1>
            <p class="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl dark:text-white">404 - Page Not Found.</p>
            <p class="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">Sorry, we can't find that page. You'll find lots to explore on the home page. </p>
            <RouterLink to="/" class="inline-flex text-white bg-[#00B69B] hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center  my-4">Back to Homepage</RouterLink>
        </div>
    </div>
</section>



<div class="h-full w-full flex flex-col items-center justify-center bg-gray-50">
    <!-- Logo Section -->
    <!-- <div class="mb-8">
      <img src="/src/assets/images/logogeey.svg" alt="Logo" class="w-32 h-auto" />
    </div> -->

    <!-- Login Form -->
    <div class="bg-white shadow-lg h-full rounded-lg w-full max-w-md px-8 py-10">
      <h2 class="text-2xl font-bold text-gray-800 mb-6 text-center">تسجيل الدخول</h2>

      <form @submit.prevent="handleLogin">
        <!-- Email Input -->
        <div class="mb-4">
          <label for="email" class="block text-gray-600 mb-2">البريد الإلكتروني</label>
          <input
            type="email"
            id="email"
            v-model="email"
            required
            placeholder="أدخل بريدك الإلكتروني"
            class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <!-- Password Input -->
        <div class="mb-4">
          <label for="password" class="block text-gray-600 mb-2">كلمة المرور</label>
          <input
            type="password"
            id="password"
            v-model="password"
            required
            placeholder="أدخل كلمة المرور"
            class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <!-- Login Button -->
        <button
          type="submit"
          class="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
        >
          تسجيل الدخول
        </button>
      </form>

      <!-- Extra Options -->
      <div class="flex justify-between items-center mt-4 text-sm text-gray-600">
        <a href="#" class="hover:underline">نسيت كلمة المرور؟</a>
        <a href="#" class="hover:underline">إنشاء حساب جديد</a>
      </div>

      <!-- Or Divider -->
      <div class="flex items-center my-6">
        <div class="flex-grow h-px bg-gray-300"></div>
        <span class="px-4 text-gray-500">أو</span>
        <div class="flex-grow h-px bg-gray-300"></div>
      </div>

      <!-- Social Login Buttons -->
      <div class="flex gap-4">
        <button
          class="w-full flex items-center justify-center px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-100 transition"
        >
          <img src="/src/assets/images/google-icon.svg" alt="Google" class="w-5 h-5 mr-2" />
          تسجيل الدخول باستخدام Google
        </button>
        <button
          class="w-full flex items-center justify-center px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-100 transition"
        >
          <img src="/src/assets/images/facebook-icon.svg" alt="Facebook" class="w-5 h-5 mr-2" />
          تسجيل الدخول باستخدام Facebook
        </button>
      </div>
    </div>

  </div>
</template>

<script setup>

</script>


<style scoped>
.not-found {
  text-align: center;
  margin-top: 100px;
}

.not-found h1 {
  font-size: 48px;
  margin-bottom: 20px;
}

.not-found p {
  font-size: 18px;
  margin-bottom: 20px;
}

.not-found a {
  font-size: 16px;
  color: #3498db;
  text-decoration: none;
}
</style>
