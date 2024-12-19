<template>
  <div class="relative max-w-lg mx-auto p-2">
    <!-- شريط البحث -->
    <div class="flex items-center  overflow-hidden">
      <input
        v-model="query"
        @input="handleSearch"
        type="text"
       class="w-full pr-10 pl-4 py-2 text-gray-700 border border-primary-900 bg-[#F6F6F6] focus:outline-none focus:border-gray-900 "
        :placeholder="$t('Search for products...')"
      />
      <button
        @click="handleSearch"
        class="px-2  w-10 text-gray-400  py-2 cursor-pointer bg-primary-900  transition"
      >
            <svg
              width="25"
              height="25"
              class="text-gray-400   cursor-pointer"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.33331 13.3333C10.647 13.3333 13.3333 10.647 13.3333 7.33331C13.3333 4.0196 10.647 1.33331 7.33331 1.33331C4.0196 1.33331 1.33331 4.0196 1.33331 7.33331C1.33331 10.647 4.0196 13.3333 7.33331 13.3333Z"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M12.6199 13.7932C12.9733 14.8599 13.7799 14.9665 14.3999 14.0332C14.9666 13.1799 14.5933 12.4799 13.5666 12.4799C12.8066 12.4732 12.3799 13.0665 12.6199 13.7932Z"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
      </button>
    </div>

    <!-- قائمة النتائج -->
    <ul
      v-if="results.length && query"
      class="absolute z-10 w-full bg-white border border-gray-300 rounded-lg shadow-lg mt-2 max-h-60 overflow-y-auto"
    >
      <li
        v-for="(result, index) in results"
        :key="index"
        class="px-4 py-2 hover:bg-gray-100 cursor-pointer"
        @click="selectResult(result)"
      >
        {{ result.name }}
      </li>
    </ul>

    <!-- رسالة عدم وجود نتائج -->
    <p
      v-if="!results.length && query"
      class=" absolute z-10  text-center w-full bg-white border border-gray-300 rounded-lg shadow-lg  max-h-60 h-full text-gray-500 mt-2"
    >
      لا توجد نتائج مطابقة لبحثك.
    </p>
  </div>
</template>
<script setup>
import { ref } from "vue";

const query = ref(""); // نص البحث الذي يدخله المستخدم
const results = ref([]); // قائمة النتائج

// قائمة المنتجات الافتراضية (محاكاة بيانات)
const products = [
  { name: "فستان أنيق" },
  { name: "قميص رجالي" },
  { name: "سروال جينز" },
  { name: "حذاء رياضي" },
  { name: "جاكيت شتوي" },
  { name: "نظارة شمسية" },
];

// دالة البحث
const handleSearch = () => {
  if (query.value) {
    results.value = products.filter((product) =>
      product.name.includes(query.value)
    );
  } else {
    results.value = [];
  }
};

// عند اختيار نتيجة
const selectResult = (result) => {
  alert(`تم اختيار: ${result.name}`);
  query.value = ""; // إعادة تعيين النص
  results.value = []; // إخفاء القائمة
};
</script>
