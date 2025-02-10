<template>
  <div class="bg-gray-50 min-h-screen">
    <!-- شريط البحث -->
    <div class="flex items-center justify-between gap-4 p-2 border-b bg-white">
      <!-- أيقونة الرجوع -->
      <div @click="goBack" class="cursor-pointer">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8.90991 19.92L15.4299 13.4C16.1999 12.63 16.1999 11.37 15.4299 10.6L8.90991 4.07996" stroke="#8a1538" stroke-width="4" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </div>

      <!-- حقل البحث -->
      <div class="relative text-sm font-bold text-center w-full">
        <div class="flex items-center overflow-hidden">
          <input
            type="text"
            v-model="searchQuery"
            @input="handleSearch"
            @keydown.enter="saveSearchQuery"
            placeholder="ابحث هنا..."
            class="w-full flex px-4 py-2 border border-primary-900 rounded focus:outline-none focus:border-primary-900"
          >
          <button class="px-2 absolute left-2 flex items-center justify-center w-12 bg-primary-900 py-2 cursor-pointer rounded-full">
            <svg
              width="16"
              height="16"
              class="text-white"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.33331 13.3333C10.647 13.3333 13.3333 10.647 13.3333 7.33331C13.3333 4.0196 10.647 1.33331 7.33331 1.33331C4.0196 1.33331 1.33331 4.0196 1.33331 7.33331C1.33331 10.647 4.0196 13.3333 7.33331 13.3333Z"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M12.6199 13.7932C12.9733 14.8599 13.7799 14.9665 14.3999 14.0332C14.9666 13.1799 14.5933 12.4799 13.5666 12.4799C12.8066 12.4732 12.3799 13.0665 12.6199 13.7932Z"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- سجل البحث -->
    <div class="p-4 bg-white">
      <div class="flex items-center justify-between mb-4">
        <h2 class="text-sm font-semibold">البحث الأخير</h2>
        <button @click="clearSearchHistory" class="text-primary-900 text-sm">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21 5.97998C17.67 5.64998 14.32 5.47998 10.98 5.47998C9 5.47998 7.02 5.57998 5.04 5.77998L3 5.97998" stroke="#8a1538" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path opacity="0.34" d="M8.5 4.97L8.72 3.66C8.88 2.71 9 2 10.69 2H13.31C15 2 15.13 2.75 15.28 3.67L15.5 4.97" stroke="#8a1538" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M18.85 9.14001L18.2 19.21C18.09 20.78 18 22 15.21 22H8.79C6 22 5.91 20.78 5.8 19.21L5.15 9.14001" stroke="#8a1538" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path opacity="0.34" d="M10.33 16.5H13.66" stroke="#8a1538" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path opacity="0.34" d="M9.5 12.5H14.5" stroke="#8a1538" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
        </button>
      </div>

      <div v-if="searchHistory.length === 0" class=" text-xs text-gray-500 text-center py-4">
        لا يوجد سجل بحث
      </div>

      <div class="flex flex-wrap gap-2">
        <div
          v-for="(item, index) in searchHistory"
          :key="index"
          class="flex items-center border rounded-full px-2 py-1"
        >
          <span  @click="goToRecommendPage(item)" class="text-xs">{{ item }}</span>
          <button
            @click="removeSearchItem(index),goToRecommendPage(item)"

            class="mr-2 text-gray-500 hover:text-gray-700"
          >
            ×
          </button>
        </div>
      </div>
    </div>

    <!-- نتائج البحث -->
    <div class="p-4 bg-white">
      <h2 class="text-sm font-semibold mb-4">نتائج البحث</h2>

      <div v-if="allResults.length === 0" class="text-gray-500 text-center py-4 text-xs">
        لا توجد نتائج
      </div>

      <ul v-else class="space-y-2">
        <li
          v-for="(category, index) in allResults"
          :key="index"
          class="p-2 border-b hover:bg-gray-50"
        >
        <RouterLink :to="`/phone/recommend/${category.id}/${category.name}`">
          <div class="flex items-center gap-3">
            <svg
              width="16"
              height="16"
              class="text-gray-400"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.33331 13.3333C10.647 13.3333 13.3333 10.647 13.3333 7.33331C13.3333 4.0196 10.647 1.33331 7.33331 1.33331C4.0196 1.33331 1.33331 4.0196 1.33331 7.33331C1.33331 10.647 4.0196 13.3333 7.33331 13.3333Z"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M12.6199 13.7932C12.9733 14.8599 13.7799 14.9665 14.3999 14.0332C14.9666 13.1799 14.5933 12.4799 13.5666 12.4799C12.8066 12.4732 12.3799 13.0665 12.6199 13.7932Z"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <span class="text-xs">{{ category.name }}</span>
          </div>
        </RouterLink>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { useCategoriesStore } from '@/stores/category.js';

const router = useRouter();
const storeCategory = useCategoriesStore();

const searchQuery = ref('');
const searchHistory = ref([]);
const allResults = ref([]);

// تحميل سجل البحث عند التحميل
onMounted(() => {
  const savedHistory = localStorage.getItem('searchHistory');
  if (savedHistory) {
    searchHistory.value = JSON.parse(savedHistory);
  }
});

// حفظ البحث في السجل
const saveSearchQuery = async () => {

  const query = searchQuery.value.trim();
  if (query) {
    // تجنب التكرار
    if (!searchHistory.value.includes(searchQuery.value)) {
      searchHistory.value.unshift(searchQuery.value);

      // الحفاظ على أقصى 10 عمليات بحث
      if (searchHistory.value.length > 10) {
        searchHistory.value.pop();
      }

      router.push({ path: `/phone/recommend`, query: { q: encodeURIComponent(query) } })
      localStorage.setItem('searchHistory', JSON.stringify(searchHistory.value));
    }
    await executeSearch();
  }else{
    alert('يرجى إدخال كلمة البحث')
    return
  }
};

const goToRecommendPage = (item)=>{
  router.push({ path: `/phone/recommend`, query: { q: encodeURIComponent(item) } })
}

// تنفيذ البحث
const executeSearch = async () => {
  if (searchQuery.value) {
    await storeCategory.fetchCategoryByNameSearch(searchQuery.value);
    allResults.value = storeCategory.getCategoriesForName || [];
  } else {
    allResults.value = [];
  }
};

// مسح سجل البحث
const clearSearchHistory = () => {
  searchHistory.value = [];
  localStorage.removeItem('searchHistory');
};

// حذف عنصر من السجل
const removeSearchItem = (index) => {
  searchHistory.value.splice(index, 1);
  localStorage.setItem('searchHistory', JSON.stringify(searchHistory.value));
};

// البحث أثناء الكتابة
const handleSearch = debounce(async () => {
  await executeSearch();
}, 300);

// دالة الرجوع
const goBack = () => {
  router.back();
};

// دالة تأخير للبحث
function debounce(fn, delay) {
  let timeout;
  return function(...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => fn.apply(this, args), delay);
  };
}
</script>

<style>
/* تخصيصات التمرير */
::-webkit-scrollbar {
  width: 6px;
}

::-webkit-scrollbar-track {
  background: #f1f1f1;
}

::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 3px;
}

::-webkit-scrollbar-thumb:hover {
  background: #555;
}
</style>
