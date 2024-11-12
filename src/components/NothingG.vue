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




<template>
  <div class="flex flex-wrap justify-center gap-4 p-6">
    <div v-for="item in items" :key="item.id" class="bg-white shadow-lg rounded-lg overflow-hidden w-80">
      <!-- صور المنتج -->
      <div class="relative group">
        <img :src="item.images[0]" :alt="item.name" class="w-full h-64 object-cover transition-all duration-300 group-hover:scale-105" />
        <div v-if="item.images.length > 1" class="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-all duration-300 bg-gray-800 bg-opacity-50">
          <button @click="viewGallery(item)" class="text-white font-bold p-2 bg-black bg-opacity-70 rounded-lg">
            عرض الصور
          </button>
        </div>
      </div>

      <div class="p-4">
        <!-- اسم المنتج -->
        <h3 class="font-semibold text-xl text-gray-800">{{ item.name }}</h3>
        <!-- وصف المنتج -->
        <p class="text-gray-600 mt-2">{{ item.description }}</p>

        <!-- السعر -->
        <div class="flex justify-between items-center mt-4">
          <span class="text-xl font-bold text-primary">{{ item.price }} ريال</span>

          <!-- زر "أضف إلى السلة" -->
          <button class="bg-primary text-white py-2 px-4 rounded-lg hover:bg-primary-dark transition-all">
            أضف إلى السلة
          </button>
        </div>

        <!-- اختيارات اللون والحجم -->
        <div class="mt-4">
          <div class="text-gray-700">اختر اللون:</div>
          <div class="flex space-x-2 mt-2">
            <button v-for="(color, index) in item.colors" :key="index" :style="{ backgroundColor: color }" class="w-6 h-6 rounded-full border-2 border-gray-300 cursor-pointer hover:ring-2 hover:ring-primary"></button>
          </div>

          <div class="mt-4 text-gray-700">اختر الحجم:</div>
          <div class="flex space-x-2 mt-2">
            <button v-for="(size, index) in item.sizes" :key="index" class="px-3 py-1 bg-gray-200 rounded-full text-sm cursor-pointer hover:bg-primary hover:text-white transition-all">
              {{ size }}
            </button>
          </div>
        </div>

        <!-- التقييمات -->
        <div class="mt-4">
          <div class="flex items-center">
            <span class="text-yellow-500">
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star-half-alt"></i>
            </span>
            <span class="text-gray-500 text-sm ml-2">{{ item.reviews }} تقييم</span>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- عرض المعرض (Modal) -->
  <div v-if="isGalleryVisible" class="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
    <div class="bg-white p-6 rounded-lg w-96">
      <div class="flex justify-end">
        <button @click="isGalleryVisible = false" class="text-xl font-bold text-gray-700 hover:text-red-500">×</button>
      </div>
      <div class="flex space-x-4">
        <img :src="selectedItem.images[0]" alt="Product Image" class="w-32 h-32 object-cover" />
        <img :src="selectedItem.images[1]" alt="Product Image" class="w-32 h-32 object-cover" />
        <!-- يمكنك إضافة المزيد من الصور هنا -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Items",
  data() {
    return {
      isGalleryVisible: false, // لتحديد إذا كان معرض الصور مرئيًا أم لا
      selectedItem: {}, // لتخزين البيانات الخاصة بالمنتج المحدد
      items: [
        {
          id: 1,
          name: "فستان جميل",
          description: "فستان أنيق مع تصميم رائع مثالي للمناسبات.",
          price: 120,
          images: ["/images/dress1.jpg", "/images/dress2.jpg"],
          colors: ["#FF6F61", "#FFD700", "#008080"],
          sizes: ["S", "M", "L", "XL"],
          reviews: 128,
        },
        {
          id: 2,
          name: "حذاء رياضي",
          description: "حذاء رياضي مريح وعصري، مناسب للتمارين الرياضية.",
          price: 150,
          images: ["/images/shoes1.jpg", "/images/shoes2.jpg"],
          colors: ["#000000", "#FFFFFF", "#FF5733"],
          sizes: ["39", "40", "41", "42"],
          reviews: 85,
        },
        // المزيد من العناصر يمكن إضافتها هنا
      ],
    };
  },
  methods: {
    // لعرض معرض الصور
    viewGallery(item) {
      this.selectedItem = item;
      this.isGalleryVisible = true;
    },
  },
};
</script>

<style scoped>
/* Tailwind CSS styles */
.bg-primary {
  background-color: #ff6f61;
}

.bg-primary-dark {
  background-color: #d55c50;
}

.text-primary {
  color: #ff6f61;
}

.text-primary-dark {
  color: #d55c50;
}

button:focus {
  outline: none;
}

button:hover {
  cursor: pointer;
}

button:focus-visible {
  outline: 2px solid #ff6f61;
}
</style>
