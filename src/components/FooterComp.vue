<template>
  <footer class="bg-gray-900 text-white text-sm">
    <div class="container mx-auto px-4 py-8">
      <!-- الأقسام الرئيسية -->
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8 border-b border-gray-700 pb-8">
        <!-- القسم الأول -->
        <div>
          <h3 class="text-lg font-semibold mb-4">About SHEIN</h3>
          <ul class="space-y-2">
            <li><a href="#" class="hover:underline">About Us</a></li>
            <li><a href="#" class="hover:underline">Careers</a></li>
            <li><a href="#" class="hover:underline">Privacy Policy</a></li>
            <li><a href="#" class="hover:underline">Affiliate Program</a></li>
          </ul>
        </div>

        <!-- القسم الثاني -->
        <div>
          <h3 class="text-lg font-semibold mb-4">Customer Service</h3>
          <ul class="space-y-2">
            <li><a href="#" class="hover:underline">Track Order</a></li>
            <li><a href="#" class="hover:underline">FAQs</a></li>
            <li><a href="#" class="hover:underline">Returns</a></li>
            <li><a href="#" class="hover:underline">Contact Us</a></li>
          </ul>
        </div>

        <!-- القسم الثالث -->
        <div>
          <h3 class="text-lg font-semibold mb-4">Subscribe</h3>
          <p class="mb-4 text-gray-400">Get exclusive offers and updates!</p>
          <form class="flex items-center">
            <input
              type="email"
              placeholder="Enter your email"
              class="flex-grow px-4 py-2 rounded-l-md text-black"
            />
            <button
              type="submit"
              class="bg-yellow-500 text-black px-4 py-2 rounded-r-md hover:bg-yellow-600"
            >
              Subscribe
            </button>
          </form>
        </div>

        <!-- القسم الرابع -->
        <div>
          <h3 class="text-lg font-semibold mb-4">Follow Us</h3>
          <div class="flex space-x-4">
            <a href="#" class="text-gray-400 hover:text-white">
              <i class="fab fa-facebook-f"></i>
            </a>
            <a href="#" class="text-gray-400 hover:text-white">
              <i class="fab fa-instagram"></i>
            </a>
            <a href="#" class="text-gray-400 hover:text-white">
              <i class="fab fa-twitter"></i>
            </a>
            <a href="#" class="text-gray-400 hover:text-white">
              <i class="fab fa-youtube"></i>
            </a>
          </div>
          <h3 class="text-lg font-semibold mt-6">Download Our App</h3>
          <div class="flex space-x-4 mt-2">
            <a href="#">
              <img src="/src/assets/images/heart.svg" alt="Google Play" class="w-32" />
            </a>
            <a href="#">
              <img src="/src/assets/images/heart.svg" alt="App Store" class="w-32" />
            </a>
          </div>
        </div>
      </div>

      <!-- حقوق النشر -->
      <div class="text-center text-gray-400 mt-6">
        &copy; 2024 SHEIN. All rights reserved.
      </div>
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style>
/* لا يوجد تنسيقات إضافية مطلوبة */
</style>
