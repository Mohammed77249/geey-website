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




<!-- switch kjldkjfjjfj -->

<template>
  <div class="p-6">
    <!-- Toggle Switch -->
    <div class="flex justify-center space-x-4 mb-6">
      <button
        v-for="(type, index) in commentTypes"
        :key="index"
        @click="switchCommentType(type)"
        :class="[
          'px-4 py-2 rounded-md transition-all',
          activeType === type
            ? 'bg-black text-white'
            : 'bg-gray-200 text-gray-600'
        ]"
      >
        {{ type }}
      </button>
    </div>

    <!-- Comments Section -->
    <div>
      <h2 class="text-xl font-semibold mb-4">{{ activeType }} Comments</h2>
      <div
        v-if="filteredComments.length"
        class="space-y-4"
      >
        <div
          v-for="(comment, index) in filteredComments"
          :key="index"
          class="p-4 border rounded-md bg-white shadow-sm"
        >
          <p class="text-gray-800">{{ comment.text }}</p>
          <div class="text-sm text-gray-500 mt-2">- {{ comment.author }}</div>
        </div>
      </div>
      <div v-else class="text-gray-500">No comments available for this type.</div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

// Comment types
const commentTypes = ['All Comments', 'Positive', 'Negative', 'Neutral'];

// Active comment type
const activeType = ref('All Comments');

// Sample comments data
const allComments = ref([
  { text: 'Amazing product! Highly recommend.', author: 'User1', type: 'Positive' },
  { text: 'Not satisfied with the quality.', author: 'User2', type: 'Negative' },
  { text: 'It’s okay, nothing special.', author: 'User3', type: 'Neutral' },
  { text: 'Excellent customer service!', author: 'User4', type: 'Positive' },
]);

// Computed filtered comments
const filteredComments = ref(allComments.value);

// Switch comment type
const switchCommentType = (type) => {
  activeType.value = type;
  if (type === 'All Comments') {
    filteredComments.value = allComments.value;
  } else {
    filteredComments.value = allComments.value.filter(
      (comment) => comment.type === type
    );
  }
};
</script>




<!-- dialog show -->


<template>
  <div
    v-if="isOpen"
    class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
  >
    <!-- Dialog Container -->
    <div
      class="bg-white w-full max-w-md rounded-lg shadow-lg p-6"
    >
      <!-- Dialog Header -->
      <div class="flex justify-between items-center mb-4">
        <h3 class="text-lg font-semibold">{{ title }}</h3>
        <button
          @click="close"
          class="text-gray-500 hover:text-black"
        >
          &times;
        </button>
      </div>

      <!-- Dialog Content -->
      <div>
        <slot></slot>
      </div>

      <!-- Dialog Footer -->
      <div class="mt-4 flex justify-end space-x-4">
        <button
          class="bg-gray-200 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-300"
          @click="close"
        >
          Cancel
        </button>
        <button
          class="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800"
          @click="confirm"
        >
          Confirm
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from "vue";

// Props
defineProps({
  isOpen: {
    type: Boolean,
    required: true,
  },
  title: {
    type: String,
    default: "Dialog",
  },
});

// Emits
const emit = defineEmits(["close", "confirm"]);

// Close the dialog
const close = () => {
  emit("close");
};

// Confirm the action
const confirm = () => {
  emit("confirm");
};
</script>




<!-- قؤاءه المزيد -->

<template>
  <div class="p-6 bg-white shadow-md rounded-lg max-w-4xl mx-auto">
    <!-- العنوان -->
    <h2 class="text-xl font-bold text-gray-800 mb-4">وصف المنتج</h2>

    <!-- النص -->
    <p class="text-gray-700 leading-relaxed mb-4">
      هذا المنتج مصنوع من مواد عالية الجودة ويوفر لك الراحة والأناقة. يتميز بتصميم عصري يناسب جميع الأذواق.
    </p>

    <!-- قائمة مواصفات -->
    <ul class="list-disc list-inside text-gray-700 mb-6">
      <li>مصنوع من القطن بنسبة 100%</li>
      <li>متوفر بألوان وأحجام متعددة</li>
      <li>تصميم مناسب لجميع المواسم</li>
    </ul>

    <!-- تفاصيل إضافية (Accordion) -->
    <div class="border-t border-gray-300 pt-4">
      <button
        @click="toggleDetails"
        class="flex items-center text-blue-500 font-medium hover:text-blue-600 focus:outline-none">
        <span>تفاصيل إضافية</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          :class="{'rotate-180': showDetails}"
          class="w-5 h-5 ml-2 transform transition-transform"
          viewBox="0 0 20 20"
          fill="currentColor">
          <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4 4a.75.75 0 01-1.06 0l-4-4a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
        </svg>
      </button>

      <div v-if="showDetails" class="mt-4 text-gray-700 leading-relaxed">
        <p>
          تم تصميم المنتج بعناية فائقة باستخدام أفضل التقنيات الحديثة لضمان جودة طويلة الأمد. يمكن استخدامه في جميع المناسبات والأنشطة اليومية.
        </p>
        <p>طريقة العناية: يُغسل بالماء البارد ويُجفف في الظل.</p>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    // حالة إظهار التفاصيل الإضافية
    const showDetails = ref(false);

    // تبديل حالة العرض
    const toggleDetails = () => {
      showDetails.value = !showDetails.value;
    };

    return { showDetails, toggleDetails };
  },
};
</script>

<style scoped>
/* أي تعديلات مخصصة هنا */
</style>




<!-- swipper -->

<template>
  <div class="container mx-auto px-4 py-6">
    <!-- تبويبات الوصف -->
    <div class="border-b border-gray-200 mb-6">
      <nav class="-mb-px flex space-x-4" aria-label="Tabs">
        <button
          @click="activeTab = 'description'"
          :class="activeTab === 'description' ? activeTabClass : inactiveTabClass"
          class="py-4 px-1 text-sm font-medium"
        >
          الوصف
        </button>
        <button
          @click="activeTab = 'specifications'"
          :class="activeTab === 'specifications' ? activeTabClass : inactiveTabClass"
          class="py-4 px-1 text-sm font-medium"
        >
          المواصفات
        </button>
        <button
          @click="activeTab = 'reviews'"
          :class="activeTab === 'reviews' ? activeTabClass : inactiveTabClass"
          class="py-4 px-1 text-sm font-medium"
        >
          التقييمات
        </button>
      </nav>
    </div>

    <!-- محتوى التبويبات -->
    <div>
      <!-- تبويب الوصف -->
      <div v-if="activeTab === 'description'" class="text-gray-700 leading-relaxed">
        <h2 class="text-xl font-bold mb-4">وصف المنتج</h2>
        <p>
          هذا المنتج مصنوع من أفضل المواد ويوفر راحة وأناقة فائقة. يتميز بتصميم عصري يناسب جميع المناسبات.
          يمكنك ارتداؤه في المناسبات اليومية أو الرسمية بسهولة.
        </p>
      </div>

      <!-- تبويب المواصفات -->
      <div v-if="activeTab === 'specifications'" class="text-gray-700 leading-relaxed">
        <h2 class="text-xl font-bold mb-4">المواصفات</h2>
        <ul class="list-disc list-inside">
          <li>الخامة: 100% قطن</li>
          <li>التصميم: عصري وأنيق</li>
          <li>الألوان: متوفر بألوان متنوعة</li>
          <li>العناية: يُغسل بالماء البارد</li>
        </ul>
      </div>

      <!-- تبويب التقييمات -->
      <div v-if="activeTab === 'reviews'" class="text-gray-700 leading-relaxed">
        <h2 class="text-xl font-bold mb-4">تقييمات العملاء</h2>
        <!-- كروسر التقييمات -->
        <Swiper
        :modules="modules"
          :slides-per-view="1"
          :space-between="20"
           :direction="vertical"
          :effect="slide"
          :loop="true"
          :autoplay="autoplayOptions"
          :navigation="true"
          :pagination="{ clickable: true }"
          class="w-full h-auto"

        >
          <SwiperSlide v-for="(review, index) in reviews" :key="index">
            <div class="p-4 border rounded-lg shadow-sm bg-white">
              <h3 class="font-semibold text-lg text-gray-800">{{ review.name }}</h3>
              <p class="text-gray-600 text-sm mb-2">{{ review.date }}</p>
              <div class="flex items-center mb-4">
                <!-- النجوم -->
                <span v-for="star in review.rating" :key="star" class="text-yellow-500">&#9733;</span>
                <span v-for="empty in 5 - review.rating" :key="empty" class="text-gray-300">&#9733;</span>
              </div>
              <p class="text-gray-700">{{ review.comment }}</p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import {Pagination , Navigation,Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide, } from 'swiper/vue';
import 'swiper/swiper-bundle.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';

const modules = [Pagination,Navigation,Autoplay]

    const activeTab = ref("description");
    const autoplayOptions = ref({
  delay: 2000,
  disableOnInteraction: false,
});

    // أنماط تبويبات Tailwind CSS
    const activeTabClass =
      "border-b-2 border-blue-500 text-blue-600";
    const inactiveTabClass =
      "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300";

    // بيانات التقييمات
    const reviews = ref([
      {
        name: "أحمد علي",
        date: "15 نوفمبر 2024",
        rating: 4,
        comment: "منتج ممتاز وجودة عالية، ولكن تأخر قليلاً في الشحن."
      },
      {
        name: "فاطمة الزهراء",
        date: "10 نوفمبر 2024",
        rating: 5,
        comment: "رائع جدًا، التصميم جميل والخامة ممتازة."
      },
      {
        name: "محمد إبراهيم",
        date: "8 نوفمبر 2024",
        rating: 3,
        comment: "جيد ولكن الحجم كان صغير قليلاً."
      }
    ]);


</script>
