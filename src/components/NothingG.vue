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




<!-- new password  -->

<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-100">
    <div class="w-full max-w-md bg-white shadow-lg rounded-lg p-8">
      <h1 class="text-2xl font-bold text-center mb-4">إعادة تعيين كلمة المرور</h1>
      <p class="text-sm text-gray-600 text-center mb-6">
        أدخل كلمة المرور الجديدة لإعادة تعيين حسابك.
      </p>

      <form @submit.prevent="submitNewPassword">
        <!-- كلمة المرور الجديدة -->
        <div class="mb-4">
          <label for="new-password" class="block text-gray-700 font-medium mb-2">كلمة المرور الجديدة</label>
          <input
            type="password"
            id="new-password"
            v-model="newPassword"
            class="w-full border rounded-lg px-3 py-2 text-gray-700 focus:outline-none focus:ring focus:ring-indigo-200"
            placeholder="********"
            required
          />
        </div>

        <!-- تأكيد كلمة المرور -->
        <div class="mb-4">
          <label for="confirm-password" class="block text-gray-700 font-medium mb-2">  تأكيد كلمة المرور </label>
          <input
            type="password"
            id="confirm-password"
            v-model="confirmPassword"
            class="w-full border rounded-lg px-3 py-2 text-gray-700 focus:outline-none focus:ring focus:ring-indigo-200"
            placeholder="********"
            required
          />
        </div>

        <!-- زر إعادة التعيين -->
        <button
          type="submit"
          class="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-indigo-200"
        >
          إعادة تعيين كلمة المرور
        </button>
      </form>

      <!-- رسالة الخطأ -->
      <p v-if="errorMessage" class="text-red-600 text-center mt-4">{{ errorMessage }}</p>

      <!-- روابط -->
      <div class="text-center mt-6">
        <a href="/login" class="text-indigo-600 hover:underline">تسجيل الدخول</a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const newPassword = ref("");
const confirmPassword = ref("");
const errorMessage = ref("");

const submitNewPassword = () => {
  if (newPassword.value !== confirmPassword.value) {
    errorMessage.value = "كلمتا المرور غير متطابقتين. الرجاء المحاولة مرة أخرى.";
    return;
  }

  if (newPassword.value.length < 8) {
    errorMessage.value = "كلمة المرور يجب أن تكون 8 أحرف أو أكثر.";
    return;
  }

  // إعادة تعيين كلمة المرور (منطق وهمي - يمكن تعديله لاحقًا)
  alert("تمت إعادة تعيين كلمة المرور بنجاح!");
  errorMessage.value = "";
};
</script>


<!-- cart page -->


<template>
  <div class="min-h-screen bg-gray-100">
    <!-- Breadcrumbs -->
    <header class="bg-white shadow p-4 flex justify-between items-center">
      <div>
        <a href="/" class="text-sm text-gray-500 hover:underline">الرئيسية</a>
        <span class="mx-1">/</span>
        <span class="text-sm font-semibold">حقيبة التسوق</span>
      </div>
    </header>

    <main class="container mx-auto py-6 px-4 grid grid-cols-3 gap-6">

      <!-- Cart Items -->
      <section class="col-span-2">
        <h2 class="font-semibold text-xl mb-4">المنتجات ({{ cartItems.length }})</h2>
        <div class="space-y-4">
          <div
            v-for="(item, index) in cartItems"
            :key="item.id"
            class="bg-white shadow p-4 rounded-lg flex items-center"
          >
            <!-- Product Image -->
            <img
              :src="item.image"
              alt="Product Image"
              class="w-20 h-20 object-cover rounded-md"
            />

            <!-- Product Info -->
            <div class="flex-1 mx-4">
              <h3 class="font-semibold">{{ item.name }}</h3>
              <p class="text-sm text-gray-500">الحجم: {{ item.size }}</p>
              <p class="text-sm text-gray-500">اللون: {{ item.color }}</p>
              <p class="text-sm font-bold text-red-600">
                -{{ item.discount }}%
              </p>
              <p class="font-bold text-lg">
                SR {{ item.price - (item.price * item.discount) / 100 }}
              </p>
            </div>

            <!-- Quantity Controls -->
            <div class="flex items-center space-x-2">
              <button
                class="bg-gray-200 text-gray-600 px-2 py-1 rounded hover:bg-gray-300"
                @click="decrementQuantity(index)"
              >
                -
              </button>
              <span class="font-bold">{{ item.quantity }}</span>
              <button
                class="bg-gray-200 text-gray-600 px-2 py-1 rounded hover:bg-gray-300"
                @click="incrementQuantity(index)"
              >
                +
              </button>
            </div>
          </div>
        </div>
      </section>

      <!-- Sidebar (Order Summary) -->
      <aside class="col-span-1 bg-white rounded-lg shadow p-4">
        <h2 class="font-semibold text-lg mb-4">ملخص الطلب</h2>
        <div class="flex justify-between py-2">
          <span>الإجمالي الفرعي:</span>
          <span>SR {{ subtotal }}</span>
        </div>
        <div class="flex justify-between py-2">
          <span>الخصم:</span>
          <span>- SR {{ discount }}</span>
        </div>
        <div class="border-t border-gray-200 my-4"></div>
        <div class="flex justify-between font-bold text-lg">
          <span>الإجمالي:</span>
          <span>SR {{ total }}</span>
        </div>
        <button
          class="w-full bg-black text-white py-2 rounded mt-4"
          @click="checkout"
        >
          اشترِ الآن
        </button>

        <!-- Payment Methods -->
        <div class="mt-4">
          <h3 class="text-sm font-semibold mb-2">تقبل:</h3>
          <div class="flex flex-wrap items-center space-x-2">
            <img
              src="/src/assets/images/products/Image (1).svg"
              alt="PayPal"
              class="w-8 h-8 object-contain"
            />
            <img
              src="/src/assets/images/products/Image (1).svg"
              alt="Visa"
              class="w-8 h-8 object-contain"
            />
            <img
              src="/src/assets/images/products/Image (1).svg"
              alt="MasterCard"
              class="w-8 h-8 object-contain"
            />
            <!-- Add other payment icons -->
          </div>
        </div>
      </aside>


    </main>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";

const cartItems = ref([
  {
    id: 1,
    name: "فستان زغبي أسود",
    image: "/src/assets/images/products/Image (2).svg",
    size: "L",
    color: "أسود",
    price: 320,
    discount: 32,
    quantity: 1,
  },
  {
    id: 2,
    name: "قميص نسائي صيفي",
    image: "/src/assets/images/products/Image (1).svg",
    size: "M",
    color: "أبيض",
    price: 210,
    discount: 20,
    quantity: 2,
  },
]);

const subtotal = computed(() =>
  cartItems.value.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  )
);
const discount = computed(() =>
  cartItems.value.reduce(
    (sum, item) =>
      sum + (item.price * item.discount) / 100 * item.quantity,
    0
  )
);
const total = computed(() => subtotal.value - discount.value);

const incrementQuantity = (index) => {
  cartItems.value[index].quantity++;
};

const decrementQuantity = (index) => {
  if (cartItems.value[index].quantity > 1) {
    cartItems.value[index].quantity--;
  }
};

const checkout = () => {
  alert("متابعة إلى صفحة الدفع");
};
</script>

<style scoped>
/* يمكن إضافة أي أنماط إضافية إذا لزم الأمر */
</style>



<!-- تاكيد الطلب -->
<template>
  <div class="bg-gray-100 py-8">
    <div class="max-w-7xl mx-auto grid grid-cols-3 gap-6">
      <!-- القسم الأيسر: ملخص الطلب -->
      <div class="col-span-1 bg-white shadow-md rounded-lg p-6">
        <h2 class="text-lg font-bold text-gray-700 mb-4">ملخص الطلب</h2>
        <!-- السعر -->
        <div class="flex justify-between text-sm text-gray-600 mb-2">
          <span>سعر الوحدة:</span>
          <span class="line-through text-gray-400">SR32.00</span>
        </div>
        <div class="flex justify-between text-sm text-gray-600 mb-2">
          <span>إجمالي المنتج:</span>
          <span class="text-red-500">SR27.20</span>
        </div>
        <!-- نقاط المكافآت -->
        <hr class="my-4">
        <div class="bg-yellow-100 p-4 rounded-lg flex items-center justify-between mb-4">
          <p class="text-sm font-semibold text-gray-700">
            🎉 لديك <span class="text-yellow-600">7 نقاط مكافأة</span>
          </p>
        </div>
        <!-- Shein Club -->
        <div class="bg-green-50 p-4 rounded-lg text-sm mb-4">
          <p class="text-green-700 font-bold mb-2">Shein Club</p>
          <p>تكلفة الانضمام: <span class="text-red-500 font-bold">SR99.99</span></p>
          <p class="text-xs text-gray-500">من خلال الانضمام، ستوافق على الشروط والأحكام</p>
        </div>
        <!-- رمز القسيمة -->
        <div class="mb-4">
          <label class="block text-sm font-semibold text-gray-600 mb-2">رمز القسيمة</label>
          <div class="flex gap-2">
            <input
              type="text"
              placeholder="أدخل الرمز"
              class="w-full border rounded-md p-2 focus:ring-indigo-500 focus:border-indigo-500"
            />
            <button class="bg-gray-200 px-4 py-2 rounded-md font-semibold text-gray-600 hover:bg-gray-300">
              تقديم
            </button>
          </div>
        </div>
        <!-- بطاقة هدية -->
        <div>
          <label class="block text-sm font-semibold text-gray-600 mb-2">بطاقة هدية</label>
          <div class="flex gap-2">
            <input
              type="text"
              placeholder="رقم البطاقة"
              class="w-full border rounded-md p-2 focus:ring-indigo-500 focus:border-indigo-500"
            />
            <button class="bg-gray-200 px-4 py-2 rounded-md font-semibold text-gray-600 hover:bg-gray-300">
              تقديم
            </button>
          </div>
        </div>
        <!-- زر تأكيد الطلب -->
        <button class="w-full mt-6 bg-gray-900 text-white py-3 rounded-lg font-semibold hover:bg-black">
          تأكيد الطلب
        </button>
      </div>

      <!-- القسم الأيمن: عنوان الشحن -->
      <div class="col-span-2 bg-white shadow-md rounded-lg p-6">
        <h2 class="text-lg font-bold text-gray-700 mb-4">عنوان الشحن</h2>
        <form class="space-y-6">
          <!-- الموقع والاسم -->
          <div class="grid grid-cols-2 gap-4">
            <div>
              <label class="block text-sm font-semibold text-gray-600 mb-2">موقع *</label>
              <select
                class="w-full border rounded-md p-2 focus:ring-indigo-500 focus:border-indigo-500"
              >
                <option>اختر موقعك</option>
                <option>السعودية</option>
                <option>البحرين</option>
              </select>
            </div>
            <div>
              <label class="block text-sm font-semibold text-gray-600 mb-2">الاسم *</label>
              <input
                type="text"
                placeholder="الاسم"
                class="w-full border rounded-md p-2 focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
          </div>
          <!-- أرقام الهواتف -->
          <div class="grid grid-cols-2 gap-4">
            <div>
              <label class="block text-sm font-semibold text-gray-600 mb-2">رقم الهاتف *</label>
              <input
                type="text"
                placeholder="BH +973"
                class="w-full border rounded-md p-2 focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
            <div>
              <label class="block text-sm font-semibold text-gray-600 mb-2">
                رقم الهاتف البديل (اختياري)
              </label>
              <input
                type="text"
                placeholder="BH +973"
                class="w-full border rounded-md p-2 focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
          </div>
          <!-- المحافظة -->
          <div>
            <label class="block text-sm font-semibold text-gray-600 mb-2">المحافظة *</label>
            <input
              type="text"
              placeholder="فضلًا اختر الدولة / المحافظة"
              class="w-full border rounded-md p-2 focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <!-- تفاصيل العنوان -->
          <div>
            <label class="block text-sm font-semibold text-gray-600 mb-2">تفاصيل العنوان *</label>
            <textarea
              placeholder="تفاصيل العنوان"
              class="w-full border rounded-md p-2 focus:ring-indigo-500 focus:border-indigo-500"
              rows="3"
            ></textarea>
          </div>
          <!-- المعالم الرئيسية -->
          <div>
            <label class="block text-sm font-semibold text-gray-600 mb-2">المعالم الرئيسية</label>
            <input
              type="text"
              placeholder="معلم قريب (اختياري)"
              class="w-full border rounded-md p-2 focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <!-- زر الحفظ -->
          <button
            type="submit"
            class="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700"
          >
            حفظ التغييرات
          </button>
        </form>
      </div>
    </div>

    <!-- معلومات الأمان -->
    <div class="max-w-7xl mx-auto text-center text-gray-500 text-sm mt-8">
      <p>جميع معلومات الدفع آمنة ومشفرة وفقًا لأعلى معايير الأمان.</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style scoped>
body {
  direction: rtl;
  font-family: 'Arial', sans-serif;
}
</style>





 <!-- my reqest -->

 <template>
  <div class="flex min-h-screen bg-gray-100">
    <!-- Sidebar -->
    <aside class="w-1/4 bg-white shadow p-4">
      <h2 class="text-lg font-bold mb-4">المركز الشخصي</h2>
      <ul class="space-y-2 text-gray-700">
        <li><button class="flex justify-between w-full p-2 hover:bg-gray-100">حسابي <span>+</span></button></li>
        <li><button class="flex justify-between w-full p-2 hover:bg-gray-100">ممتلكاتي <span>+</span></button></li>
        <li><button class="flex justify-between w-full p-2 hover:bg-gray-100">طلبي <span>+</span></button></li>
        <li><button class="flex justify-between w-full p-2 hover:bg-gray-100">اهتمامي <span>+</span></button></li>
        <li><button class="flex justify-between w-full p-2 hover:bg-gray-100">خدمة العملاء <span>+</span></button></li>
        <li><button class="flex justify-between w-full p-2 hover:bg-gray-100">سياسات <span>+</span></button></li>
        <li><button class="flex justify-between w-full p-2 hover:bg-gray-100">تسجيل الخروج <span>+</span></button></li>
      </ul>
    </aside>

    <!-- Main Content -->
    <main class="flex-1 p-6 space-y-6">
      <!-- Profile -->
      <section class="bg-white shadow p-4 rounded">
        <div class="flex items-center justify-between">
          <div>
            <h2 class="text-lg font-bold">مرحباً، mhmdh7550</h2>
            <p class="text-sm text-gray-500">S0 🌟</p>
          </div>
          <button class="bg-orange-100 text-orange-600 px-4 py-2 rounded">انضم الآن</button>
        </div>
        <div class="mt-4 grid grid-cols-4 gap-4">
          <div class="text-center">
            <p class="text-gray-500">كوبونات</p>
            <p class="text-lg font-bold">***</p>
          </div>
          <div class="text-center">
            <p class="text-gray-500">نقاط</p>
            <p class="text-lg font-bold">***</p>
          </div>
          <div class="text-center">
            <p class="text-gray-500">محفظة</p>
            <p class="text-lg font-bold">بطاقة</p>
          </div>
        </div>
      </section>

      <!-- Customer Service -->
      <section class="bg-white shadow p-4 rounded">
        <h2 class="text-lg font-bold mb-4">خدمة العملاء</h2>
        <div class="grid grid-cols-2 gap-4">
          <button class="bg-gray-100 p-4 rounded flex items-center space-x-2">
            📝 <span>سجلات الخدمة</span>
          </button>
          <button class="bg-gray-100 p-4 rounded flex items-center space-x-2">
            📧 <span>رسائلي</span>
          </button>
        </div>
      </section>

      <!-- Wishlist -->
      <section class="bg-white shadow p-4 rounded">
        <div class="flex justify-between items-center">
          <h2 class="text-lg font-bold">قائمة الإرادة</h2>
          <button class="text-sm text-blue-500">0 منتج &gt;</button>
        </div>
      </section>

      <!-- Orders -->
      <section class="bg-white shadow p-4 rounded">
        <h2 class="text-lg font-bold mb-4">طلبي</h2>
        <div class="grid grid-cols-4 gap-4 text-center">
          <div>
            <p class="text-gray-500">غير مدفوع</p>
            <p class="text-lg font-bold">0</p>
          </div>
          <div>
            <p class="text-gray-500">قيد التجهيز</p>
            <p class="text-lg font-bold">0</p>
          </div>
          <div>
            <p class="text-gray-500">تم الشحن</p>
            <p class="text-lg font-bold">0</p>
          </div>
          <div>
            <p class="text-gray-500">المنتجات المسترجعة</p>
            <p class="text-lg font-bold">0</p>
          </div>
        </div>
      </section>

      <!-- Recently Viewed -->
      <section class="bg-white shadow p-4 rounded">
        <div class="flex justify-between items-center">
          <h2 class="text-lg font-bold">شُوهِد مؤخراً</h2>
          <button class="text-sm text-blue-500">أكثر &gt;</button>
        </div>
        <div class="mt-4 flex space-x-4 overflow-x-auto">
          <img src="https://via.placeholder.com/100" class="w-24 h-24 rounded" alt="product" />
          <img src="https://via.placeholder.com/100" class="w-24 h-24 rounded" alt="product" />
          <img src="https://via.placeholder.com/100" class="w-24 h-24 rounded" alt="product" />
        </div>
      </section>
    </main>
  </div>
</template>

<script setup>
// يمكن تحسين البيانات بشكل ديناميكي لاحقاً عبر API
</script>

<style>
/* أضف أي تخصيص هنا */
</style>



<!-- ,y request 2 -->
<template>
  <div class="flex min-h-screen bg-gray-100">

    <!-- Sidebar -->
    <aside class="w-1/6 bg-white shadow  p-6 space-y-6">
      <h2 class="text-lg font-bold mb-4">المركز الشخصي</h2>
      <ul class="space-y-4">
        <li>
          <h3 class="font-semibold text-gray-700">حسابي</h3>
          <ul class="mt-2 space-y-2 text-gray-600 text-sm">
            <li>
              <button class="flex items-center space-x-2 hover:text-blue-500">
                <span>🏅</span> <span>Shein Club</span>
              </button>
            </li>
            <li>
              <button class="flex items-center space-x-2 hover:text-blue-500">
                <span>⭐</span> <span>VIP شي إن</span>
              </button>
            </li>
            <li>
              <button class="flex items-center space-x-2 hover:text-blue-500">
                <span>📍</span> <span>ملفي الشخصي</span>
              </button>
            </li>
            <li>
              <button class="flex items-center space-x-2 hover:text-blue-500">
                <span>💳</span> <span>خيارات الدفع</span>
              </button>
            </li>
            <li>
              <button class="flex items-center space-x-2 hover:text-blue-500">
                <span>📏</span> <span>القياسات الخاصة بي</span>
              </button>
            </li>
            <li>
              <button class="flex items-center space-x-2 hover:text-blue-500">
                <span>🔧</span> <span>إدارة حسابي</span>
              </button>
            </li>
          </ul>
        </li>
        <li>
          <button class="flex justify-between w-full p-2 hover:bg-gray-100">ممتلكاتي <span>+</span></button>
        </li>
        <li>
          <button class="flex justify-between w-full p-2 hover:bg-gray-100">طلبي <span>+</span></button>
        </li>
        <li>
          <button class="flex justify-between w-full p-2 hover:bg-gray-100">اهتمامي <span>+</span></button>
        </li>
        <li>
          <button class="flex justify-between w-full p-2 hover:bg-gray-100">خدمة العملاء <span>+</span></button>
        </li>
        <li>
          <button class="flex justify-between w-full p-2 hover:bg-gray-100">السياسات <span>+</span></button>
        </li>
        <li>
          <button class="flex justify-between w-full p-2 hover:bg-gray-100">تسجيل الخروج <span>+</span></button>
        </li>
      </ul>
    </aside>

    <!-- Main Content -->
    <main class="flex-1 p-6 space-y-6">
      <!-- Header Section -->
      <section class="bg-white shadow p-4 rounded">
        <div class="flex items-center justify-between">
          <div>
            <h2 class="text-lg font-bold">مرحباً، mhmdh7550</h2>
            <p class="text-sm text-gray-500">S0 🌟</p>
          </div>
          <button class="bg-orange-100 text-orange-600 px-4 py-2 rounded">انضم الآن</button>
        </div>
        <div class="mt-4 grid grid-cols-4 gap-4">
          <div class="text-center">
            <p class="text-gray-500">كوبونات</p>
            <p class="text-lg font-bold">***</p>
          </div>
          <div class="text-center">
            <p class="text-gray-500">نقاط</p>
            <p class="text-lg font-bold">***</p>
          </div>
          <div class="text-center">
            <p class="text-gray-500">محفظة</p>
            <p class="text-lg font-bold">بطاقة</p>
          </div>
        </div>
      </section>

      <!-- Customer Service -->
      <section class="bg-white shadow p-4 rounded">
        <h2 class="text-lg font-bold mb-4">خدمة العملاء</h2>
        <div class="grid grid-cols-2 gap-4">
          <button class="bg-gray-100 p-4 rounded flex items-center space-x-2">
            📝 <span>سجلات الخدمة</span>
          </button>
          <button class="bg-gray-100 p-4 rounded flex items-center space-x-2">
            📧 <span>رسائلي</span>
          </button>
        </div>
      </section>

      <!-- Wishlist -->
      <section class="bg-white shadow p-4 rounded">
        <div class="flex justify-between items-center">
          <h2 class="text-lg font-bold">قائمة الإرادة</h2>
          <button class="text-sm text-blue-500">0 منتج &gt;</button>
        </div>
      </section>

      <!-- Orders -->
      <section class="bg-white shadow p-4 rounded">
        <h2 class="text-lg font-bold mb-4">طلبي</h2>
        <div class="grid grid-cols-4 gap-4 text-center">
          <div>
            <p class="text-gray-500">غير مدفوع</p>
            <p class="text-lg font-bold">0</p>
          </div>
          <div>
            <p class="text-gray-500">قيد التجهيز</p>
            <p class="text-lg font-bold">0</p>
          </div>
          <div>
            <p class="text-gray-500">تم الشحن</p>
            <p class="text-lg font-bold">0</p>
          </div>
          <div>
            <p class="text-gray-500">المنتجات المسترجعة</p>
            <p class="text-lg font-bold">0</p>
          </div>
        </div>
      </section>

      <!-- Recently Viewed -->
      <section class="bg-white shadow p-4 rounded">
        <div class="flex justify-between items-center">
          <h2 class="text-lg font-bold">شُوهِد مؤخراً</h2>
          <button class="text-sm text-blue-500">أكثر &gt;</button>
        </div>
        <div class="mt-4 flex space-x-4 overflow-x-auto">
          <img src="https://via.placeholder.com/100" class="w-24 h-24 rounded" alt="product" />
          <img src="https://via.placeholder.com/100" class="w-24 h-24 rounded" alt="product" />
          <img src="https://via.placeholder.com/100" class="w-24 h-24 rounded" alt="product" />
        </div>
      </section>

    </main>
    <main class="flex-2 p-6 space-y-6">
      <!-- Header Section -->
      <section class="bg-white shadow p-4 rounded">
        <div class="flex items-center justify-between">
          <div>
            <h2 class="text-lg font-bold">مرحباً، mhmdh7550</h2>
            <p class="text-sm text-gray-500">S0 🌟</p>
          </div>
          <button class="bg-orange-100 text-orange-600 px-4 py-2 rounded">انضم الآن</button>
        </div>
        <div class="mt-4 grid grid-cols-4 gap-4">
          <div class="text-center">
            <p class="text-gray-500">كوبونات</p>
            <p class="text-lg font-bold">***</p>
          </div>
          <div class="text-center">
            <p class="text-gray-500">نقاط</p>
            <p class="text-lg font-bold">***</p>
          </div>
          <div class="text-center">
            <p class="text-gray-500">محفظة</p>
            <p class="text-lg font-bold">بطاقة</p>
          </div>
        </div>
      </section>

      <!-- Customer Service -->
      <section class="bg-white shadow p-4 rounded">
        <h2 class="text-lg font-bold mb-4">خدمة العملاء</h2>
        <div class="grid grid-cols-2 gap-4">
          <button class="bg-gray-100 p-4 rounded flex items-center space-x-2">
            📝 <span>سجلات الخدمة</span>
          </button>
          <button class="bg-gray-100 p-4 rounded flex items-center space-x-2">
            📧 <span>رسائلي</span>
          </button>
        </div>
      </section>

      <!-- Wishlist -->
      <section class="bg-white shadow p-4 rounded">
        <div class="flex justify-between items-center">
          <h2 class="text-lg font-bold">قائمة الإرادة</h2>
          <button class="text-sm text-blue-500">0 منتج &gt;</button>
        </div>
      </section>

      <!-- Orders -->
      <section class="bg-white shadow p-4 rounded">
        <h2 class="text-lg font-bold mb-4">طلبي</h2>
        <div class="grid grid-cols-4 gap-4 text-center">
          <div>
            <p class="text-gray-500">غير مدفوع</p>
            <p class="text-lg font-bold">0</p>
          </div>
          <div>
            <p class="text-gray-500">قيد التجهيز</p>
            <p class="text-lg font-bold">0</p>
          </div>
          <div>
            <p class="text-gray-500">تم الشحن</p>
            <p class="text-lg font-bold">0</p>
          </div>
          <div>
            <p class="text-gray-500">المنتجات المسترجعة</p>
            <p class="text-lg font-bold">0</p>
          </div>
        </div>
      </section>

      <!-- Recently Viewed -->
      <section class="bg-white shadow p-4 rounded">
        <div class="flex justify-between items-center">
          <h2 class="text-lg font-bold">شُوهِد مؤخراً</h2>
          <button class="text-sm text-blue-500">أكثر &gt;</button>
        </div>
        <div class="mt-4 flex space-x-4 overflow-x-auto">
          <img src="https://via.placeholder.com/100" class="w-24 h-24 rounded" alt="product" />
          <img src="https://via.placeholder.com/100" class="w-24 h-24 rounded" alt="product" />
          <img src="https://via.placeholder.com/100" class="w-24 h-24 rounded" alt="product" />
        </div>
      </section>

    </main>
  </div>
</template>

<script setup>
// البيانات يمكن أن تكون ديناميكية لاحقاً باستخدام API
</script>

<style>
/* أضف تخصيصات إضافية عند الحاجة */
</style>


<!-- myrequest 3 -->
<template>
  <div class="grid grid-cols-12 gap-4 min-h-screen bg-gray-100">
    <!-- Right Sidebar -->
    <aside class="col-span-2 bg-white shadow p-4">
      <h2 class="text-lg font-bold mb-4">المركز الشخصي</h2>
      <ul class="space-y-4">
        <!-- حسابي -->
        <li>
          <div class="flex justify-between items-center cursor-pointer" @click="toggleSection('account')">
            <h3 class="font-semibold text-gray-700">حسابي</h3>
            <span>{{ sections.account ? '-' : '+' }}</span>
          </div>
          <ul v-if="sections.account" class="mt-2 space-y-2 text-gray-600 text-sm">
            <li>
              <button class="flex items-center space-x-2 hover:text-blue-500">
                <span>🏅</span> <span>Shein Club</span>
              </button>
            </li>
            <li>
              <button class="flex items-center space-x-2 hover:text-blue-500">
                <span>⭐</span> <span>VIP شي إن</span>
              </button>
            </li>
            <li>
              <button class="flex items-center space-x-2 hover:text-blue-500">
                <span>📍</span> <span>ملفي الشخصي</span>
              </button>
            </li>
            <li>
              <button class="flex items-center space-x-2 hover:text-blue-500">
                <span>💳</span> <span>خيارات الدفع</span>
              </button>
            </li>
            <li>
              <button class="flex items-center space-x-2 hover:text-blue-500">
                <span>📏</span> <span>القياسات الخاصة بي</span>
              </button>
            </li>
            <li>
              <button class="flex items-center space-x-2 hover:text-blue-500">
                <span>🔧</span> <span>إدارة حسابي</span>
              </button>
            </li>
          </ul>
        </li>

        <!-- ممتلكاتي -->
        <li>
          <div class="flex justify-between items-center cursor-pointer" @click="toggleSection('properties')">
            <h3 class="font-semibold text-gray-700">ممتلكاتي</h3>
            <span>{{ sections.properties ? '-' : '+' }}</span>
          </div>
          <ul v-if="sections.properties" class="mt-2 space-y-2 text-gray-600 text-sm">
            <li>عنصر ممتلكاتي 1</li>
            <li>عنصر ممتلكاتي 2</li>
          </ul>
        </li>

        <!-- طلبي -->
        <li>
          <div class="flex justify-between items-center cursor-pointer" @click="toggleSection('orders')">
            <h3 class="font-semibold text-gray-700">طلبي</h3>
            <span>{{ sections.orders ? '-' : '+' }}</span>
          </div>
          <ul v-if="sections.orders" class="mt-2 space-y-2 text-gray-600 text-sm">
            <li>طلب 1</li>
            <li>طلب 2</li>
          </ul>
        </li>

        <!-- إضافة المزيد من الأقسام -->
      </ul>
    </aside>

    <!-- باقي الصفحة -->
    <main class="col-span-10 bg-white shadow p-6">
      <!-- المحتوى هنا -->
      <h1>محتوى الصفحة الرئيسية</h1>
    </main>
  </div>
</template>

<script setup>
import { reactive } from 'vue';

// حالة الأقسام المفتوحة/المغلقة
const sections = reactive({
  account: false,
  properties: false,
  orders: false,
});

// دالة تبديل حالة القسم
const toggleSection = (section) => {
  sections[section] = !sections[section];
};
</script>

<style>
/* تخصيصات إضافية */
</style>


 <!-- Right Sidebar -->
 <aside class="col-span-3 bg-white  p-4 ">
  <h2 class="text-lg font-bold mb-4">المركز الشخصي</h2>
  <ul class="space-y-4">
    <li>
      <h3 class="font-semibold text-gray-700">حسابي</h3>
      <ul class="mt-2 space-y-2 text-gray-600 text-sm">
        <li>
          <button class="flex items-center space-x-2 hover:text-blue-500">
            <span>🏅</span> <span>Shein Club</span>
          </button>
        </li>
        <li>
          <button class="flex items-center space-x-2 hover:text-blue-500">
            <span>⭐</span> <span>VIP شي إن</span>
          </button>
        </li>
        <li>
          <button class="flex items-center space-x-2 hover:text-blue-500">
            <span>📍</span> <span>ملفي الشخصي</span>
          </button>
        </li>
        <li>
          <button class="flex items-center space-x-2 hover:text-blue-500">
            <span>💳</span> <span>خيارات الدفع</span>
          </button>
        </li>
        <li>
          <button class="flex items-center space-x-2 hover:text-blue-500">
            <span>📏</span> <span>القياسات الخاصة بي</span>
          </button>
        </li>
        <li>
          <button class="flex items-center space-x-2 hover:text-blue-500">
            <span>🔧</span> <span>إدارة حسابي</span>
          </button>
        </li>
      </ul>
    </li>
    <li>
      <button class="flex justify-between w-full p-2 hover:bg-gray-100">ممتلكاتي <span>+</span></button>
    </li>
    <li>
      <button class="flex justify-between w-full p-2 hover:bg-gray-100">طلبي <span>+</span></button>
    </li>
    <li>
      <button class="flex justify-between w-full p-2 hover:bg-gray-100">اهتمامي <span>+</span></button>
    </li>
    <li>
      <button class="flex justify-between w-full p-2 hover:bg-gray-100">خدمة العملاء <span>+</span></button>
    </li>
    <li>
      <button class="flex justify-between w-full p-2 hover:bg-gray-100">السياسات <span>+</span></button>
    </li>
    <li>
      <button class="flex justify-between w-full p-2 hover:bg-gray-100">تسجيل الخروج <span>+</span></button>
    </li>
  </ul>
</aside>









// google map main

<template>
  <div
    v-if="props.isOpen"
    class="fixed inset-0 flex items-center justify-center z-50"
  >
    <div
      class="flex flex-col items-center h-full md:max-h-[600px] p-2 bg-gray-200 w-full max-w-2xl"
    >
      <div class="flex justify-end items-center">
        <button
          @click="close"
          class="text-primary-900 text-[20px] hover:text-black"
        >
          &times;
        </button>
      </div>
      <!-- الخريطة -->
      <div class="w-full h-4/5">
        <GoogleMap
          :center="mapCenter"
          :zoom="zoom"
          :options="mapOptions"
          class="h-full w-full"
          @click="onMapClick"
        >
          <Marker
            v-for="(marker, index) in markers"
            :key="index"
            :position="marker"
            :clickable="true"
            :draggable="true"
            @click="showInfoWindow(index, marker) , onMarkerClick(marker)"
          />
           <!-- نافذة المعلومات -->
          <InfoWindow
            v-if="infoWindow.visible"
            :position="infoWindow.position"
            @closeclick="infoWindow.visible = false"
          >
            <div>
              <p>Latitude: {{ infoWindow.position.lat }}</p>
              <p>Longitude: {{ infoWindow.position.lng }}</p>
            </div>
          </InfoWindow>
        </GoogleMap>
      </div>

      <!-- أزرار التحكم -->
      <div class="flex space-x-4 mt-4">
        <button
          class="px-4 py-2 bg-primary-900 text-white rounded"
          @click="ConfirmLanLat"
        >
          حفظ
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, defineEmits, reactive } from 'vue'
import { GoogleMap, Marker ,InfoWindow} from 'vue3-google-map'

const props = defineProps({
  isOpen: {
    type: Boolean,
    required: true,
  },
})

const mapCenter = reactive({ lat: 15.369445, lng: 44.191006 })
const markers = reactive([{ lat: 15.369445, lng: 44.191006 }])
const zoom = ref(12)

const infoWindow = reactive({
  visible: false,
  position: { lat: 0, lng: 0 },
});

const showInfoWindow = (index, marker) => {
  infoWindow.position = marker;
  infoWindow.visible = true;
}

const latitude = ref(null)
const longitude = ref(null)

const onMapClick = event => {
  const latLng = event.latLng
  latitude.value = latLng.lat()
  longitude.value = latLng.lng()
  markers.push({ lat: latLng.lat(), lng: latLng.lng() })
}

const onMarkerClick = marker => {
  alert(`Marker clicked at: ${marker.lat}, ${marker.lng}`)
}

// const mapOptions = reactive({});

// const mapOptions = reactive({
//   styles: [
//     {
//       elementType: 'geometry',
//       stylers: [{ color: '#ffffff' }],
//     },
//     {
//       elementType: 'labels.text.stroke',
//       stylers: [{ color: '#ffffff' }],
//     },
//     {
//       elementType: 'labels.text.fill',
//       stylers: [{ color: '#000000' }],
//     },
//   ],
// });

const mapOptions = reactive({
  styles: [
    {
      elementType: 'geometry',
      stylers: [{ color: '#ebe3cd' }],
    },
    {
      elementType: 'labels.text.fill',
      stylers: [{ color: '#523735' }],
    },
    {
      elementType: 'labels.text.stroke',
      stylers: [{ color: '#f5f1e6' }],
    },
    {
      featureType: 'administrative',
      elementType: 'geometry.stroke',
      stylers: [{ color: '#c9b2a6' }],
    },
    {
      featureType: 'landscape.man_made',
      elementType: 'geometry',
      stylers: [{ color: '#f0f0f0' }],
    },
    {
      featureType: 'road',
      elementType: 'geometry',
      stylers: [{ color: '#ffffff' }],
    },
    {
      featureType: 'water',
      elementType: 'geometry',
      stylers: [{ color: '#aaddff' }],
    },
  ],
})



const emit = defineEmits(['close'])
const ConfirmLanLat = () => {
  localStorage.setItem('long', longitude.value)
  localStorage.setItem('lat', latitude.value)

  emit('close')
}

const close = () => {
  emit('close')
}
</script>

<style>

</style>



// google maps city and منطقه  with key

<template>
  <div
    v-if="props.isOpen"
    class="fixed inset-0 flex items-center justify-center z-50"
  >
    <div
      class="flex flex-col items-center h-full md:max-h-[600px] p-2 bg-gray-200 w-full max-w-2xl"
    >
      <div class="flex justify-end items-center">
        <button
          @click="close"
          class="text-primary-900 text-[20px] hover:text-black"
        >
          &times;
        </button>
      </div>
      <!-- الخريطة -->
      <div class="w-full h-4/5">
        <GoogleMap
          :center="mapCenter"
          :zoom="zoom"
          :options="mapOptions"
          class="h-full w-full"
          @click="onMapClick"
        >
          <Marker
            v-for="(marker, index) in markers"
            :key="index"
            :position="marker"
            :clickable="true"
            :draggable="true"
            @click="showInfoWindow(index, marker)"
          />
          <!-- نافذة المعلومات -->
          <InfoWindow
            v-if="infoWindow.visible"
            :position="infoWindow.position"
            @closeclick="infoWindow.visible = false"
          >
            <div>
              <p>Latitude: {{ infoWindow.position.lat }}</p>
              <p>Longitude: {{ infoWindow.position.lng }}</p>
            </div>
          </InfoWindow>
        </GoogleMap>
      </div>

      <!-- أزرار التحكم -->
      <div class="flex space-x-4 mt-4">
        <button
          class="px-4 py-2 bg-primary-900 text-white rounded"
          @click="ConfirmLanLat"
        >
          حفظ
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, defineEmits, reactive } from 'vue'
import { GoogleMap, Marker, InfoWindow } from 'vue3-google-map'

const props = defineProps({
  isOpen: {
    type: Boolean,
    required: true,
  },
})

const mapCenter = reactive({ lat: 15.369445, lng: 44.191006 })
const markers = reactive([{ lat: 15.369445, lng: 44.191006 }])
const zoom = ref(12)

const infoWindow = reactive({
  visible: false,
  position: { lat: 0, lng: 0 },
})

const latitude = ref(null)
const longitude = ref(null)
const city = ref(null)
const region = ref(null)

const showInfoWindow = (index, marker) => {
  infoWindow.position = marker
  infoWindow.visible = true
}

const onMapClick = async event => {
  const latLng = event.latLng
  latitude.value = latLng.lat()
  longitude.value = latLng.lng()
  markers.push({ lat: latLng.lat(), lng: latLng.lng() })

  // استدعاء API للحصول على اسم المدينة والمنطقة
  await fetchAddress(latLng.lat(), latLng.lng())

}

const fetchAddress = async (lat, lng) => {
  const apiKey = 'YOUR_GOOGLE_MAPS_API_KEY' // ضع مفتاح Google Maps API الخاص بك هنا
  const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${apiKey}`

  try {
    const response = await fetch(url)
    const data = await response.json()

    if (data.results && data.results.length > 0) {
      const addressComponents = data.results[0].address_components

      // استخراج المدينة والمنطقة
      city.value = addressComponents.find(component =>
        component.types.includes('locality')
      )?.long_name
      region.value = addressComponents.find(component =>
        component.types.includes('administrative_area_level_1')
      )?.long_name
    }
  } catch (error) {
    console.error('Error fetching address:', error)
  }
}

const emit = defineEmits(['close'])

const ConfirmLanLat = () => {
  // تخزين الإحداثيات والمدينة والمنطقة في localStorage
  localStorage.setItem('latitude', latitude.value)
  localStorage.setItem('longitude', longitude.value)
  localStorage.setItem('city', city.value || 'Unknown')
  localStorage.setItem('region', region.value || 'Unknown')

  emit('close')
}

const close = () => {
  emit('close')
}

const mapOptions = reactive({
  styles: [
    {
      elementType: 'geometry',
      stylers: [{ color: '#ebe3cd' }],
    },
    {
      elementType: 'labels.text.fill',
      stylers: [{ color: '#523735' }],
    },
    {
      elementType: 'labels.text.stroke',
      stylers: [{ color: '#f5f1e6' }],
    },
    {
      featureType: 'administrative',
      elementType: 'geometry.stroke',
      stylers: [{ color: '#c9b2a6' }],
    },
    {
      featureType: 'landscape.man_made',
      elementType: 'geometry',
      stylers: [{ color: '#f0f0f0' }],
    },
    {
      featureType: 'road',
      elementType: 'geometry',
      stylers: [{ color: '#ffffff' }],
    },
    {
      featureType: 'water',
      elementType: 'geometry',
      stylers: [{ color: '#aaddff' }],
    },
  ],
})
</script>

<style></style>





/// recomend page



<template>
  <div class="mx-auto pl-2 pr-2">
    <div v-if="initialLoading" class="flex justify-center items-center mt-10">
      <div
        class="w-8 h-8 border-4 border-primary-900 border-t-transparent rounded-full animate-spin"
      ></div>
      <span class="ml-4 text-primary-900">جاري تحميل المنتجات...</span>
    </div>


    <div v-else class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-1">
      <div
        v-for="product in storeSecion.getProducts"
        :key="product.id"
        class="p-1 mt-4 "
        :class="[hoverId === product.id && isHover ?'border shadow ' :'p-2']"
      >
        <RouterLink :to="`/product/${product.id}`">
          <div
            class="cursor-pointe w-[full] h-[200px] md:h-[350px] border"
            @mouseenter="onhover(product.id)"
            @mouseleave="isHover = false"
          >
            <img
              v-if="product.main_imags != null"
              :src="
                hoverId === product.id &&
                isHover &&
                product.main_imags[1]?.image
                  ? product.main_imags[1]?.image
                  : product.main_imags[0]?.image
              "
              alt="no image"
              class="w-full h-full object-cover transition duration-300 ease-in-out"
            />
          </div>
          <h3 class="font-semibold text-xs md:text-sm mt-1">
            {{ product.name }}
          </h3>
        </RouterLink>
        <div class="mt-1">
          <div class="flex items-center">
            <span class="flex text-yellow-500">
              <i>
                <img src="/src/assets/images/star.svg" class="w-3 md:w-4"
              /></i>
              <i>
                <img src="/src/assets/images/star.svg" class="w-3 md:w-4"
              /></i>
              <i>
                <img src="/src/assets/images/star.svg" class="w-3 md:w-4"
              /></i>
              <i>
                <img src="/src/assets/images/star.svg" class="w-3 md:w-4"
              /></i>
            </span>
            <p class="text-[8px] md:text-[10px] mr-2">(+1000)</p>
          </div>
        </div>

        <div class="flex items-center justify-between">
          <div class="flex gap-2 items-center">
            <p class="font-sembold text-primary-900 text-[10px] md:text-[15px]">
              {{ product.base_price }}
            </p>
            <div class="border border-primary-900">
              <p class="text-[8px] md:text-[10px] text-primary-900">%50-</p>
            </div>
          </div>
          <div
            @click="openDialog(product.id)"
            class="cursor-pointer w-8 md:w-10 flex items-center justify-center border border-primary-900 rounded-full"
          >
            <svg
              class="h-4 w-4 md:h-5 md:w-5"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 2H3.74C4.82 2 5.67 2.93 5.58 4L4.75 13.96C4.71759 14.3459 4.76569 14.7342 4.89123 15.1005C5.01678 15.4669 5.21705 15.8031 5.47934 16.0879C5.74163 16.3728 6.06023 16.6001 6.41495 16.7553C6.76967 16.9106 7.15278 16.9905 7.54 16.99H18.19C19.63 16.99 20.89 15.81 21 14.38L21.54 6.88C21.66 5.22 20.4 3.87 18.73 3.87H5.82"
                stroke="#8a1538"
                stroke-width="2"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                opacity="0.4"
                d="M9 8H21M16.25 22C16.5815 22 16.8995 21.8683 17.1339 21.6339C17.3683 21.3995 17.5 21.0815 17.5 20.75C17.5 20.4185 17.3683 20.1005 17.1339 19.8661C16.8995 19.6317 16.5815 19.5 16.25 19.5C15.9185 19.5 15.6005 19.6317 15.3661 19.8661C15.1317 20.1005 15 20.4185 15 20.75C15 21.0815 15.1317 21.3995 15.3661 21.6339C15.6005 21.8683 15.9185 22 16.25 22ZM8.25 22C8.58152 22 8.89946 21.8683 9.13388 21.6339C9.3683 21.3995 9.5 21.0815 9.5 20.75C9.5 20.4185 9.3683 20.1005 9.13388 19.8661C8.89946 19.6317 8.58152 19.5 8.25 19.5C7.91848 19.5 7.60054 19.6317 7.36612 19.8661C7.1317 20.1005 7 20.4185 7 20.75C7 21.0815 7.1317 21.3995 7.36612 21.6339C7.60054 21.8683 7.91848 22 8.25 22Z"
                stroke="#8a1538"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>

    <DialogAddToCart
      v-if="filteredData != null"
      :IdProduct="filteredData"
      :is-open="isDialogOpen"
      @close="closeDialog"
    />
    <!-- مؤشر التحميل -->
    <div
      v-if="loadingMore && !initialLoading"
      class="flex justify-center items-center mt-4"
    >
      <div
        class="w-8 h-8 border-4 border-primary-900 border-t-transparent rounded-full animate-spin"
      ></div>
      <span class="ml-4 text-primary-900">جاري تحميل المزيد...</span>
    </div>
    <!-- مراقبة العنصر الأخير -->
    <div ref="loadMoreRef" class="h-10"></div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import DialogAddToCart from '../DialogAddToCart.vue'
import { useIntersectionObserver } from '@vueuse/core'
const props = defineProps({
  IdSection: {
    type: Number,
  },
})
import { useSectionsStore } from '@/stores/section'
const storeSecion = useSectionsStore()

const isDialogOpen = ref(false)
const filteredData = ref(null)

import { useRouter } from 'vue-router'
import { useAuthStore } from '@/stores/auth'
const authStore = useAuthStore()
const router = useRouter()
const openDialog = id => {
  if (!authStore.isAuthenticated) {
    alert('يرجى تسجيل الدخول لإضافة منتجات إلى السلة.')
    router.push('/user/login')
    return
  }

  isDialogOpen.value = true
  filteredData.value = id
}

const closeDialog = () => {
  isDialogOpen.value = false
  filteredData.value = null
}

const isHover = ref(false)
const hoverId = ref(null)
const onhover = id => {
  isHover.value = true
  hoverId.value = id
}

const filteredData2 = ref({
  sectionId: null,
})

if (props.IdSection != null) {
  filteredData2.value.sectionId = props.IdSection
}

const sectionId = ref(null)
const changeSection = async newSectionId => {
  sectionId.value = newSectionId
  initialLoading.value = true
  await storeSecion.changeSection(sectionId.value) // تغيير القسم في Store
  initialLoading.value = false
}
const initialLoading = ref(false)
const loadingMore = ref(false)

const loadMoreProducts = async () => {
  if (loadingMore.value || storeSecion.loading || !storeSecion.hasMore) return
  try {
    loadingMore.value = true
    await storeSecion.fetchMoreProducts(filteredData2)
  } catch (error) {
    console.error('خطأ أثناء تحميل المزيد من المنتجات:', error)
  } finally {
    loadingMore.value = false
  }
}

// مراقبة العنصر الأخير
const loadMoreRef = ref(null)
useIntersectionObserver(
  loadMoreRef,
  ([{ isIntersecting }]) => {
    if (isIntersecting && !initialLoading.value) {
      loadMoreProducts() // جلب المزيد عند رؤية العنصر الأخير
    }
  },
  { threshold: 0.5 },
)

onMounted(() => {
  storeSecion.loadFromLocalStorage(props.IdSection)
  changeSection(props.IdSection) // قسم افتراضي، يمكن تغييره حسب الحاجة
})
</script>
<style scoped>
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.custom-spinner {
  animation: spin 1s linear infinite;
}
</style>





// update carte ====================================

<template>
    <div
    v-if="props.isOpen"
    class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
  >
    <!-- Dialog Container -->
    <div
      class="bg-white w-full max-w-5xl  gap-5 overflow-y-auto custom-scroll   max-h-[600px] h-full  shadow-lg p-2"
    >
      <!-- Dialog Header -->
      <div class="flex justify-end  items-center ">
        <button
          @click="close"
          class="text-primary-900 text-[20px] hover:text-black"
        >
          &times;
        </button>
      </div>

      <!-- Dialog Content -->
      <div>
        <div v-if="storeCart.loading">
          <LoaderDatacomp :isLoader="storeCart.loading" />
        </div>
        <div v-else-if="storeCart.error">{{ storeCart.error }}</div>
        <div v-else-if="storeCart.productDetails">
          <div class="mx-auto grid grid-cols-1 lg:grid-cols-12 px-5">

               <!-- product image  -->
            <div class="col-span-6 ">
              <!-- product image  -->
                <div class="flex gap-2">
                  <div class="block gap-5">
                    <div class="overflow-x-auto">
                      <!-- الصور الرئيسية -->

                        <div v-if="isMainSelected">
                          <div v-for="(image,index) in mainColor.images" :key="index" >
                            <img

                              :src="image.image"
                               @mouseover="showImageInSwiper(index)"
                              alt="Main Product Image"
                              class="w-12 h-12  md:w-16 md:h-20  my-3   cursor-pointer border-2 border-transparent hover:border-gray-500"
                            />
                          </div>
                        </div>

                        <!-- الصور الفرعية -->
                          <div v-else>
                            <div  v-for="(image,index) in selectedColorImages" :key="index">
                              <img
                                :src="image.image"
                                @mouseover="showImageInSwiper(index)"
                                alt="Sub Product Image"
                                class="w-12 h-12  md:w-16 md:h-20   my-3  shadow cursor-pointer border-2 border-transparent hover:border-gray-500"
                              />
                            </div>
                          </div>

                    </div>
                  </div>

                  <div>
                    <swiper
                    :modules="[Navigation, Pagination]"
                    :slides-per-view="1"
                    :space-between="10"
                    navigation
                    pagination
                    :class="{'rounded-lg custom-swiper border h-[250px] w-[300px] md:w-[400px] md:h-[550px]':storedLanguage == 'ar' , 'rounded-lg custom-swiper2 border w-[700px] h-[900px]':storedLanguage == 'en'}"
                    @swiper="setSwiperInstance"
                  >
                    <swiper-slide v-for="(image, index) in selectedColorImages" :key="index">
                      <img
                        :src="image.image"
                        alt="Product Image"
                        class="w-full h-full rounded-lg "
                      />
                    </swiper-slide>
                  </swiper>

                  </div>
                </div>
            </div>

            <div class="col-span-6 ">
              <!-- الاسم والسعر -->
              <div class="w-full h-44  ">

                <div class="flex items-center justify-between">
                  <p  class="text-md font-medium">
                    {{ storeCart.productDetails.description }}
                  </p>

                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2 9.98V9C2 4 4 2 9 2H15C20 2 22 4 22 9V15C22 20 20 22 15 22H14"
                      stroke="#292D32"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M13 11.0005L18.01 5.98047H14"
                      stroke="#292D32"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M18.0098 5.98047V9.99047"
                      stroke="#292D32"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M11 16.15V18.85C11 21.1 10.1 22 7.85 22H5.15C2.9 22 2 21.1 2 18.85V16.15C2 13.9 2.9 13 5.15 13H7.85C10.1 13 11 13.9 11 16.15Z"
                      stroke="#292D32"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>

                <div class="  mt-3">
                  <p class="text-sm text-gray-400">12684532486586453218451</p>
                </div>

                <div class="mt-3">
                  <div class="flex items-center gap-1">
                    <span class="flex text-yellow-500">
                      <i> <img class="w-4" src="/src/assets/images/star.svg" /></i>
                      <i> <img class="w-4" src="/src/assets/images/star.svg" /></i>
                      <i> <img class="w-4" src="/src/assets/images/star.svg" /></i>
                      <i> <img class="w-4" src="/src/assets/images/star.svg" /></i>
                      <i> <img class="w-4" src="/src/assets/images/star.svg" /></i>
                    </span>
                    <h1 class="font-medium text-xs text-yellow-600">
                      {{ $t('Customer Reviews') }}
                    </h1>
                  </div>
                </div>

                <div class="flex items-center gap-2 mt-3">
                  <p  class="text-xl text-orange-700 font-semibold">
                    {{ storeCart.productDetails.currency}}{{ storeCart.productDetails.base_price }}
                  </p>
                  <div class="h-5 px-2 flex items-center justify-center bg-black">
                    <p   class="text-xs text-white">
                      {{ storeCart.productDetails.discount_price }}-
                    </p>
                  </div>
                </div>

                <div class="flex items-center gap-1 mt-3 bg-amber-100">
                  <p class="text-sm font-semibold text-amber-600">
                    رقم 7 الافضل مبيعا
                  </p>
                  <p class="text-sm text-amber-600">في فساتين نوم بطباعه ازهلر</p>
                </div>
               </div>

                <!-- المقاس وزر الاضافة -->
              <div class="border-t-2 mb-5">
                <div class="mb-1 mt-5">
                  <!-- colors -->
                    <div class="pb-5">
                      <h3 class="text-md font-medium">{{ $t('Color: Multicolor') }}</h3>
                      <ul class="space-y-5 mt-5">
                        <li>
                          <div class="grid grid-cols-7 gap-3">
                            <div
                              v-for="(color, index) in storeCart.getproductColors"
                              :key="index"
                            >
                            <div
                              :key="color.color_id"
                              @click="changeColor(index),toggleColor(color.color_id)"
                              class="w-10 h-10 rounded-full border-2 cursor-pointer"
                              :style="{ backgroundColor: color.color_hex }"
                              :class="{ 'border-blue-500': selectedColorIndex === index }"
                            ></div>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>

                  <div v-if="storeCart.productDetails.size_type_id" class="flex items-center gap-1 mb-5 mt-5">
                    <h3 class="text-lg font-semibold">{{ $t('Size') }}</h3>
                    <div >
                      <button
                        class="text-[#979797]  h-[25px] border border-gray-900 bg-gray-50 font-medium rounded-full text-[14px] px-3 text-center "
                        type="button"
                      >
                        <p class="text-black">{{ storeCart.productDetails.size_type_name }}</p>

                      </button>
                    </div>
                  </div>

                  <!-- الاحجام -->
                  <div class="">
                    <button
                        v-for="(size, index) in storeCart.getproductSizes"
                      :key="index"
                      :class="{
                        'py-1 cursor-pointer px-7 m-2  border rounded-full bg-gray-100':
                          tempidSize === size.size_type_id,
                        'py-1 cursor-pointer px-7  border m-2 rounded-full hover:bg-gray-100':
                          tempidSize !== size.size_type_id,
                      }"
                      @click="onclickSize(size.size_type_id)"
                    >
                      {{ size.size_type_name }}
                    </button>
                  </div>

                  <!-- مرجع المقاس -->
                  <div class="mt-5 h-10">
                    <div
                      @click="openDialog"
                      class="flex items-center gap-1 hover:underline"
                    >
                      <img class="cursor-pointer" src="/src/assets/images/cart.svg" />
                      <p class="text-blue-800 cursor-pointer">
                        {{ $t('Size Reference') }}
                      </p>
                    </div>
                    <!-- Dialog Component -->
                    <DialogComp
                      :isOpen="isDialogOpen"
                      title="Confirmation"
                      @close="closeDialog"
                      @confirm="handleConfirm"
                    >
                      <p>Are you sure you want to proceed with this action?</p>
                    </DialogComp>
                  </div>
                </div>

                <!-- addToCart -->
                <div class="flex items-center gap-1">
                  <button
                    @click="updateToCart"

                    class="max-w-[350px] w-full bg-primary-900 text-white py-3 text-lg font-bold hover:bg-primary-800 transition"
                  >
                    <span v-if="storeCart.loading" class="loader mr-2"></span>
                        <span>{{
                          storeCart.loading ? 'جارٍ التحقق...' : $t('updat cart')
                        }}</span>
                  </button>
                  <div
                    class="w-[80px] py-4 rounded-full border flex items-center justify-center"
                  >
                    <img class="w-10" src="/src/assets/images/heart.svg" />
                  </div>
                </div>
                <p class="text-sm">
                  {{ $t('Earn up to 3 GN points calculated at checkout.') }}
                </p>
              </div>

              <div class="flex items-center mb-5">
                <RouterLink :to="`/product/${storeCart.productDetails.id}`">
                    <div class="flex items-center">
                      <h1 class="text-gray-500 font-medium"> {{$t('View Full Details')}}</h1>
                      <svg  :class="storedLanguage == 'en' ? 'hidden' : ''"  width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M15.0001 19.92L8.48009 13.4C7.71009 12.63 7.71009 11.37 8.48009 10.6L15.0001 4.07996" stroke="gray" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                      </svg>

                      <svg :class="storedLanguage == 'ar' ? 'hidden' : ''" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8.90991 19.92L15.4299 13.4C16.1999 12.63 16.1999 11.37 15.4299 10.6L8.90991 4.07996" stroke="gray" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                      </svg>
                    </div>
                  </RouterLink>
              </div>
            </div>

          </div>
        </div>
        <div v-else>
        <span>no data</span>
      </div>

      </div>



    </div>
  </div>
</template>

<script setup>
import { defineProps, defineEmits,ref ,onMounted} from "vue";
import DialogComp from "./DialogComp.vue";
import LoaderDatacomp from "./LoaderDatacomp.vue";
const storedLanguage = localStorage.getItem("language");
import { useCartStore } from '@/stores/cart'
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/swiper-bundle.css";
const storeCart = useCartStore()

// Props
const props = defineProps({
  isOpen: {
    type: Boolean,
    required: true,
  },
  IdProduct:{
    type:Number
  },
  IdCart:{
    type:Number
  }
});


const filteredData = ref({
  cart_id:null,
  product_id:  null,
  color_id: null,
  size_id: null,
  quantity: 1,
})

const tempidSize = ref(null)
const onclickSize = id => {
  if(id){
    filteredData.value.size_id = id
  if (tempidSize.value === id) {
    tempidSize.value = null
  } else {
    tempidSize.value = id
  }
  }

}

const tempidColor = ref(null)
const toggleColor = id => {

  if(id){
    filteredData.value.color_id = id
  if (tempidColor.value === id) {
    tempidColor.value = null
  } else {
    tempidColor.value = id
  }
  }

}

const isDialogOpen = ref(false)

const openDialog = () => {
  isDialogOpen.value = true
}

const closeDialog = () => {
  isDialogOpen.value = false
}



const updateToCart = async() => {
  if(props.IdProduct != null){
    filteredData.value.product_id = props.IdProduct
  }
  if(props.IdCart  != null){
    filteredData.value.cart_id = props.IdCart
  }


    const updatecart12 = await storeCart.updateCart(
    filteredData.value.cart_id,
    filteredData.value.product_id,
    filteredData.value.color_id,
    filteredData.value.size_id,
    filteredData.value.quantity,
  );


  if (updatecart12) {
      alert('تمت تحديث المنتج !')
      window.location.reload();
      close()
  } else {
    alert(storeCart.error)
    window.location.reload();
      close()
  }

};



const mainColor = ref({});
const selectedColorIndex = ref(null);
const selectedColorImages = ref([]);
const selectedImage = ref(null);
const isMainSelected = ref(true);

const swiperInstance = ref(null);
// ربط مثيل Swiper عند الإنشاء
const setSwiperInstance = (swiper) => {
  swiperInstance.value = swiper;
};

// عرض الصورة في السلايدر عند تمرير الماوس على صورة مصغرة
const showImageInSwiper = (index) => {
  if (swiperInstance.value) {
    swiperInstance.value.slideTo(index); // التنقل إلى الصورة المحددة
  }
};

// تغيير اللون وتحديث الصور
const changeColor = (index) => {
  isMainSelected.value = false;
  selectedColorIndex.value = index;

  const color = storeCart.getproductColors[index];
  selectedColorImages.value = color.images || [];
  selectedImage.value = color.images[0]?.image || null;
};

onMounted(async() => {
  if(props.isOpen === true){
    await storeCart.fetchProductDetailsByIdForCart(props.IdProduct)
     // تعيين اللون الرئيسي
      mainColor.value =
      storeCart.getproductColors.find((color) => color.is_main === 1) || {};
      selectedImage.value = mainColor.value.images?.[0]?.image || null;

    // تعيين الصور الفرعية للون الأول كافتراضي
      if (storeCart.getproductColors.length > 0) {
        changeColor(0);
      }

  }

})




// Emits
const emit = defineEmits(["close"]);

// Close the dialog
const close = () => {
  emit("close");
};




</script>


<style scoped>

/* swiper 1 arabic =============================================================== */
/* تخصيص أزرار التنقل */
.custom-swiper :deep(.swiper-button-next),
.custom-swiper :deep(.swiper-button-prev) {
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.3s ease;
}

.custom-swiper :deep(.swiper-button-next):hover,
.custom-swiper :deep(.swiper-button-prev):hover {
  background-color: rgba(0, 0, 0, 0.8);
  color: #8a1538;
}

.custom-swiper :deep(.swiper-button-next)::after,
.custom-swiper :deep(.swiper-button-prev)::after {
  font-size: 20px;
  font-weight: bold;
}

/* مواضع الأزرار */
.custom-swiper :deep(.swiper-button-next) {
  left: 0px;
  right: auto;
  margin-left: 10px;
}

.custom-swiper :deep(.swiper-button-prev) {
  right:0px;
  left: auto;
  margin-right: 10px;
}

/* تخصيص النقاط (Pagination) */
.custom-swiper :deep(.swiper-pagination-bullet) {
  background-color: rgba(0, 0, 0, 0.3); /* لون النقاط */
  width: 10px;
  height: 10px;
  opacity: 1;
}

.custom-swiper :deep(.swiper-pagination-bullet-active) {
  background-color: #8a1538; /* لون النقطة النشطة */
  width: 12px;
  height: 12px;
}


/* swiper 2 english =============================================================== */
/* تخصيص أزرار التنقل */
.custom-swiper2 :deep(.swiper-button-next),
.custom-swiper2 :deep(.swiper-button-prev) {
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.3s ease;
}

.custom-swiper2 :deep(.swiper-button-next):hover,
.custom-swiper2 :deep(.swiper-button-prev):hover {
  background-color: rgba(0, 0, 0, 0.8);
  color: #8a1538;
}

.custom-swiper2 :deep(.swiper-button-next)::after,
.custom-swiper2 :deep(.swiper-button-prev)::after {
  font-size: 20px;
  font-weight: bold;
}

/* مواضع الأزرار */
.custom-swiper2 :deep(.swiper-button-next) {
  right:0px;
  left: auto;
  margin-right: 10px;

}

.custom-swiper2 :deep(.swiper-button-prev) {
  left: 0px;
  right: auto;
  margin-left: 10px;
}

/* تخصيص النقاط (Pagination) */
.custom-swiper2 :deep(.swiper-pagination-bullet) {
  background-color: rgba(0, 0, 0, 0.3); /* لون النقاط */
  width: 10px;
  height: 10px;
  opacity: 1;
}

.custom-swiper2 :deep(.swiper-pagination-bullet-active) {
  background-color: #8a1538; /* لون النقطة النشطة */
  width: 12px;
  height: 12px;
}


</style>
//==================================================================================




// naif list 1 and list 2 =============================================

//list 1

<script setup>
import List2 from './List2.vue';

defineProps({
  items: {
    type: Array,
  },
})
</script>

<template>
  <div v-for="item in items">
    {{ item.name }}

    <div v-if="item.children?.length" class="ms-3" style="padding-left: 2px;" >
      <List2 :items="item?.children" />
    </div>
  </div>
</template>


// list 2

<script setup>
import List from './List.vue';

defineProps({
  items: {
    type: Array,
  },
})
</script>

<template>
  <div v-for="item in items">
    {{ item.name }}

    <div v-if="item.children?.length">
      <List :items="item?.children" />
    </div>
  </div>
</template>


// in app

 <!-- <List
  :items="[
      {
        name: 'test',
        children: [
          {
            name: 'test',
            children: [
              {
                name: 'test',
                children: [
                  {
                    name: 'test',
                    children: [
                      {
                        name: 'test',
                        children: [
                          {
                            name: 'test 2',
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    ]"
  /> -->

<!-- <List :items="item"/> -->


//=============================================================





// ===================================== header phone

<template>
  <div class="relative">
    <!-- Header -->
    <header class="bg-white shadow-md sticky top-0 z-50">
      <div class="container mx-auto px-4 py-2 flex items-center justify-between">
        <!-- Logo -->
        <div class="flex items-center space-x-2">
          <img src="/public/jeeeeylogo3.jpg" alt="Shein Logo" class="h-8" />
          <span class="font-bold text-lg hidden md:block">SHEIN</span>
        </div>

        <!-- Search Bar -->
        <div class="flex-1 mx-4 hidden md:block">
          <div class="relative">
            <input
              type="text"
              placeholder="Search for items..."
              class="w-full px-4 py-2 border rounded-full focus:outline-none focus:ring focus:ring-gray-300"
            />
            <button class="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-5 h-5"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M21 21l-4.35-4.35M15.75 10.5a5.25 5.25 0 11-10.5 0 5.25 5.25 0 0110.5 0z"
                />
              </svg>
            </button>
          </div>
        </div>

        <!-- Icons -->
        <div class="flex items-center space-x-4">
          <!-- Profile Icon -->
          <button class="text-gray-600 hover:text-gray-800">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15.75 9A3.75 3.75 0 1112 5.25 3.75 3.75 0 0115.75 9zm0 0c0 2.25-1.5 6.75-3.75 6.75S8.25 11.25 8.25 9m7.5 0a3.75 3.75 0 00-7.5 0"
              />
            </svg>
          </button>

          <!-- Cart Icon -->
          <button class="relative text-gray-600 hover:text-gray-800">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6.75 6.75h10.5m-10.5 0c0-1.5 1.5-3 3-3s3 1.5 3 3h10.5m-13.5 0a2.25 2.25 0 00-2.25 2.25v9.75c0 1.5 1.5 3 3 3h9c1.5 0 3-1.5 3-3v-9.75A2.25 2.25 0 0016.5 6.75m-1.5 9h.008v.008H15m-6 0h.008v.008H9"
              />
            </svg>
            <span class="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full px-1">
              2
            </span>
          </button>
        </div>
      </div>
    </header>

    <!-- Swiper Section -->
    <section>
      <SwiperPhoneComp/>
    </section>
  </div>
</template>

<script setup>
import SwiperPhoneComp from './SwiperPhoneComp.vue';
</script>



// 2 phone header


<template>
  <div>
    <!-- Header -->
    <header
      :class="[
        'sticky top-0 z-50 transition-all duration-300',
        isScrolled ? 'bg-red-500 shadow-md' : 'bg-cover bg-center',
      ]"
      :style="!isScrolled ? { backgroundImage: `url(${headerImage})` } : {}"
    >
      <div class="container mx-auto px-4 py-4 flex items-center justify-between">
        <!-- Logo -->
        <div class="flex items-center space-x-2">
          <img src="/public/jeeeeylogo3.jpg" alt="Shein Logo" class="h-8" />
          <span class="font-bold text-lg hidden md:block text-white" :class="{ 'text-black': isScrolled }">SHEIN</span>
        </div>

        <!-- Icons -->
        <div class="flex items-center space-x-4">
          <!-- Profile Icon -->
          <button class="text-white hover:text-gray-300" :class="{ 'text-gray-600 hover:text-gray-800': isScrolled }">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15.75 9A3.75 3.75 0 1112 5.25 3.75 3.75 0 0115.75 9zm0 0c0 2.25-1.5 6.75-3.75 6.75S8.25 11.25 8.25 9m7.5 0a3.75 3.75 0 00-7.5 0"
              />
            </svg>
          </button>

          <!-- Cart Icon -->
          <button class="relative text-white hover:text-gray-300" :class="{ 'text-gray-600 hover:text-gray-800': isScrolled }">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6.75 6.75h10.5m-10.5 0c0-1.5 1.5-3 3-3s3 1.5 3 3h10.5m-13.5 0a2.25 2.25 0 00-2.25 2.25v9.75c0 1.5 1.5 3 3 3h9c1.5 0 3-1.5 3-3v-9.75A2.25 2.25 0 0016.5 6.75m-1.5 9h.008v.008H15m-6 0h.008v.008H9"
              />
            </svg>
            <span class="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full px-1">2</span>
          </button>
        </div>
      </div>
    </header>

    <!-- Content -->
    <div class="h-[500px] bg-gray-100">
      <SwiperPhoneComp/>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import SwiperPhoneComp from './SwiperPhoneComp.vue';
// صورة الخلفية
const headerImage = '/header-image.jpg';

// حالة التمرير
const isScrolled = ref(false);

// تحديث حالة التمرير
const handleScroll = () => {
  const scrollPosition = window.scrollY;
  isScrolled.value = scrollPosition > 200; // تغيير الحالة عند تجاوز 200px
};

// إضافة وإزالة مستمع التمرير
onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<style scoped>
/* ارتفاع الصورة */
header {
  height: 300px;
}
</style>



//phone


<template>
  <div class="mt-4">
    <div>
      <ul class="space-y-5 ">
        <div v-if=" storeSection.loading">
          <LoaderDatacomp :is-loader="storeSection.loading"/>
         </div>
        <li v-else-if="storeSection.getSubSections && storeSection.getSubSections.length">

          <div v-if="storeSection.subsections[0].has_sub == 'true'">
              <ul
                class="flex gap-4  items-center justify-center scrollable-list overflow-x-auto text-[15px] shadow  font-sans"
              >
                <li
                v-for="(subsection, index) in storeSection.getSubSections"
                  :key="index"
                  @click="onclickSubSection(index)"
                  :class="[
                      tempSubSection === index
                        ? ' text-primary-900 mb-2 text-center rounded-lg cursor-pointer   transition-all duration-200'
                        : 'mb-2 text-center rounded-lg cursor-pointer text-gray-700  transition-all duration-200',''
                    ]"

                >
                  {{ subsection.name }}
                      <div
                      :class="{
                          'bg-primary-900 h-1 w-15 mt-2':
                          tempSubSection === index,
                          'hidden':
                          tempSubSection !== index,
                        }"
                      ></div>
                </li>

              </ul>

              <div v-if="storeSection.subsections[0].has_sub == 'true'"
                class="  grid grid-rows-3 overflow-x-auto w-full md:hidden   custom-scroll  gap-1 mt-4"
                style="grid-template-columns: repeat(10, minmax(80px, 1fr));"
              >
                <div
                  v-for="(category, index) in storeSection.getSubSections[listCategories].categories"
                  :key="index"

                  class="bg-white flex flex-col items-center"
                >
                  <img
                    :src="category.image !=null ?category.image : '/public/jeeeylogo.jpg'"
                    :alt="category.name"
                      @click="toggleChildren(category.id)"
                      class="w-14 md:w-24 rounded-full h-14  object-cover bg-gray-50 transition-transform duration-200 hover:scale-105 hover:shadow"
                  />
                  <h3   @click="toggleChildren(category.id)" class="text-center mt-2 text-[10px]  font-sans text-gray-800">
                    {{ category.name }}
                  </h3>
                </div>
              </div>

          </div>
          <!-- <div class="w-full h-[245px]  text-center" v-else>
            no data
        </div> -->



          <div v-if="storeSection.subsections[0].has_sub == 'false'"
            class="  grid grid-rows-3 overflow-x-auto w-full md:hidden   custom-scroll  gap-1"
            style="grid-template-columns: repeat(10, minmax(80px, 1fr));"
          >
            <div
              v-for="(category, index) in storeSection.getSubSections[0].categories"
              :key="index"

              class="bg-white flex flex-col items-center"
            >
              <img
                :src="category.image !=null ?category.image : '/public/jeeeylogo.jpg'"
                :alt="category.name"
                  @click="toggleChildren(category.id)"
                  class="w-14 md:w-24 rounded-full h-14  object-cover bg-gray-50 transition-transform duration-200 hover:scale-105 hover:shadow"
              />
              <h3   @click="toggleChildren(category.id)" class="text-center mt-2 text-[10px]  font-sans text-gray-800">
                {{ category.name }}
              </h3>
            </div>
          </div>
          <!-- <div class="w-full h-[245px]  text-center" v-else>
            no data
        </div> -->

        </li>
        <div class="w-full h-[245px]  text-center" v-else>
            no data
        </div>
      </ul>

    </div>

  </div>

</template>

<script setup>
import LoaderDatacomp from '@/components/LoaderDatacomp.vue';
import { useSectionsPhoneStore } from '@/stores/sectionsphone'
import {ref} from 'vue'
const storeSection = useSectionsPhoneStore();
const listCategories = ref(0)

const tempSubSection = ref(null)

const onclickSubSection = (index)=>{

  if(index){
    listCategories.value = index
    if(tempSubSection.value  == index){
      tempSubSection.value = null
    }else{
      tempSubSection.value = index
    }
  }

}

  // const filteredData = ref({
  //     sectionId: 1,
  //     page: 1,
  //     perPage: 70,
  //   });

    // onMounted(() => {
    //   storeCategories.fetchSections(filteredData);
    // });

    // const toggleChildren = id => {
    //   if (id) {
    //     filteredData.value.categoryId = id
    //   }
    //   else {
    //   alert("hghghg")
    //   }
    // }

// onMounted(async() => {
//   await storeSection.fetchSubSectionBySectionID(filteredData)
// });


</script>

<style>
.custom-scroll::-webkit-scrollbar {
  width: 0px;
  height: 0px;
  opacity: 0;
}
.custom-scroll:hover::-webkit-scrollbar,
.custom-scroll:active::-webkit-scrollbar {
  opacity: 0;
}

.custom-scroll::-webkit-scrollbar-track {
  background: transparent;
}
.custom-scroll::-webkit-scrollbar-thumb {
  background-color: rgba(0, 0, 0, 0.4);
  border-radius: 4px;

}
</style>




// sidebar

  <!-- <div >
    <div v-if="isOpen"  class="fixed  border h-[70%] inset-0  overflow-y-auto   bg-opacity-50 z-40 ">
    <div class="w-full bg-white p-5 z-50">

      <div class="grid grid-cols-12 ">

      <div class="col-span-6  text-right ">
        <div>
          <span class="pr-5 text-[12px] font-sans">تسوق حسب الفئات</span>
        </div>

      </div>

      <div class="col-span-4 text-right pl-10 pr-10  border-s-2 ">
        <div class=" flex justify-end pb-3">
          <span class="pr-5 text-[12px] font-sans">تسوق حسب الفئات</span>
          <div>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M22 8.27V4.23C22 2.64 21.36 2 19.77 2H15.73C14.14 2 13.5 2.64 13.5 4.23V8.27C13.5 9.86 14.14 10.5 15.73 10.5H19.77C21.36 10.5 22 9.86 22 8.27Z" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M10.5 8.52V3.98C10.5 2.57 9.86 2 8.27 2H4.23C2.64 2 2 2.57 2 3.98V8.51C2 9.93 2.64 10.49 4.23 10.49H8.27C9.86 10.5 10.5 9.93 10.5 8.52Z" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M10.5 19.77V15.73C10.5 14.14 9.86 13.5 8.27 13.5H4.23C2.64 13.5 2 14.14 2 15.73V19.77C2 21.36 2.64 22 4.23 22H8.27C9.86 22 10.5 21.36 10.5 19.77Z" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path opacity="0.4" d="M15 15.5H21" stroke="#292D32" stroke-width="1.5" stroke-linecap="round"/>
            <path opacity="0.4" d="M15 19.5H21" stroke="#292D32" stroke-width="1.5" stroke-linecap="round"/>
            </svg>
          </div>
        </div>

        <div class=" bg-yellow-200 overflow-y-auto">

          <div class="flex gap-8 ">

            <div class="w-[100px]  grid grid-rows-1 items-center justify-center h-[110px] bg-green-200 cursor-pointer">
            <div class="">
             <img src="/public/logogeey.svg" class="w-20 h-20 rounded-full bg-red-200 " alt="Avatar of Jonathan Reinink" />
             <span class="bg-blue-200 mt-10">Users</span>
            </div>
          </div>

          <div class="w-[100px]  grid grid-rows-1 items-center justify-center h-[110px] bg-green-200 cursor-pointer">
            <div class="">
             <img src="/public/logogeey.svg" class="w-20 h-20 rounded-full bg-red-200 " alt="Avatar of Jonathan Reinink" />
             <span class="bg-blue-200 mt-10">Users</span>
            </div>
          </div>

          <div class="w-[100px]  grid grid-rows-1 items-center justify-center h-[110px] bg-green-200 cursor-pointer">
            <div class="">
             <img src="/public/logogeey.svg" class="w-20 h-20 rounded-full bg-red-200 " alt="Avatar of Jonathan Reinink" />
             <span class="bg-blue-200 mt-10">Users</span>
            </div>
          </div>


          <div class="w-[100px]  grid grid-rows-1 items-center justify-center h-[110px] bg-green-200 cursor-pointer">
            <div class="">
             <img src="/public/logogeey.svg" class="w-20 h-20 rounded-full bg-red-200 " alt="Avatar of Jonathan Reinink" />
             <span class="bg-blue-200 ">Users</span>
            </div>
          </div>

          </div>

          <div class="grid grid-cols-1  gap-5 p-2">
              <div class="grid grid-rows-2 items-center justify-center  bg-white shadow-md  w-[80px] overflow-hidden">
                <div>
                  <img src="/public/logogeey.svg" alt="Card Image" class="w-20 rounded-full bg-red-500 h-20 object-cover" />
                </div>
              <div class="p-4 bg-blue-500">
                <h3 class="text-[12px] font-semibold ">عنوان </h3>
              </div>

            </div>

          </div>


        </div>



      </div>


      <div class="col-span-2   border-s-2">
        <ul class=" text-gray-700 text-[12px]   font-sans">
        <li
          v-for="(item, index) in list"
          :key="index"
          class="cursor-pointer flex-shrink-0 flex items-center pl-10 p-2 justify-between hover:text-black  hover:bg-gray-100 h-10"
        >
        <div class="">
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="font-bold">
                <path d="M15.0001 19.92L8.48009 13.4C7.71009 12.63 7.71009 11.37 8.48009 10.6L15.0001 4.07996" stroke="gray" stroke-width="4" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
          </div>
          {{ item.name }}

        </li>
      </ul>
      </div>


      </div>




    </div>
  </div>
</div> -->
