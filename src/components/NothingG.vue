<template>
  <div class="relative">
    <!-- شريط التنقل العلوي -->
    <nav class="bg-white shadow-md p-4 flex justify-between items-center">
      <div class="text-lg font-bold">شعار الموقع</div>
      <ul class="flex gap-4">
        <!-- عنصر يحتوي على القائمة المنسدلة -->
        <li
          class="relative group"
          @mouseenter="showDropdown = true"
          @mouseleave="showDropdown = false"
        >
          <button class="text-gray-800 font-semibold">الفئات</button>

          <!-- القائمة المنسدلة التي تحتوي على البطاقات -->
          <div
            v-if="showDropdown"
            class="absolute top-full left-0 mt-2 w-max bg-white shadow-lg p-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4"
          >
            <div
              v-for="(category, index) in categories"
              :key="index"
              class="bg-white border border-gray-200 rounded-lg overflow-hidden p-4 transition-transform duration-200 hover:scale-105"
            >
              <img :src="category.image" :alt="category.name" class="w-full h-32 object-cover rounded">
              <h3 class="text-center mt-2 text-sm font-semibold text-gray-800">{{ category.name }}</h3>
            </div>
          </div>
        </li>
      </ul>
      <div class="flex gap-4">
        <a href="#" class="text-gray-800">الحساب</a>
        <a href="#" class="text-gray-800">السلة</a>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showDropdown: false,
      categories: [
        { name: 'الأزياء النسائية', image: 'https://via.placeholder.com/150' },
        { name: 'الأزياء الرجالية', image: 'https://via.placeholder.com/150' },
        { name: 'الأطفال', image: 'https://via.placeholder.com/150' },
        { name: 'الإكسسوارات', image: 'https://via.placeholder.com/150' },
        { name: 'الأحذية', image: 'https://via.placeholder.com/150' },
        { name: 'الحقائب', image: 'https://via.placeholder.com/150' },
        // أضف المزيد من العناصر حسب الحاجة
      ],
    };
  },
};
</script>

<style>
/* إخفاء القائمة المنسدلة على الشاشات الصغيرة */
@media (max-width: 640px) {
  .group:hover .group-hover\:block {
    display: block;
  }
}
</style>
