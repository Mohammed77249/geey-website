<template>
  <div class="bg-gray-100 min-h-screen">
    <!-- حقل البحث -->
    <div class="flex items-center justify-between p-4 border-b bg-white">
      <div class="flex items-center space-x-2">
        <!-- أيقونة البحث -->
        <button @click="goBack" class="ml-2 text-gray-600">
        <span class="material-icons">back</span>
      </button>
        <!-- حقل البحث -->
        <input
          type="text"
          v-model="searchQuery"
          @focus="openSearchPage"
          placeholder="ابحث هنا..."
          class="p-2 border rounded w-full"
        />
      </div>
      <!-- زر الحذف -->
      <button @click="clearSearch" class="ml-2 text-gray-600">
        <span class="material-icons">delete</span>
      </button>
    </div>

    <!-- العناوين والفلاتر -->
    <div class="p-4">
      <h2 class="text-lg font-semibold mb-2">البحث الاخير</h2>
      <div class="flex flex-wrap gap-2">
        <button
          v-for="(filter, index) in filters"
          :key="index"
          @click="applyFilter(filter)"
          class="px-4 py-2 bg-gray-200 rounded-full text-sm hover:bg-gray-300 focus:outline-none"
        >
          {{ filter }}
        </button>
      </div>
    </div>

    <!-- النتائج -->
    <div class="p-4">
      <h2 class="text-lg font-semibold mb-2">نتائج البحث</h2>
      <div v-if="filteredResults.length === 0">
        <p>لا توجد نتائج للبحث...</p>
      </div>
      <ul>
        <li
          v-for="(result, index) in filteredResults"
          :key="index"
          class="p-2 border-b text-gray-700"
        >
          {{ result }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue';
import { useRouter } from 'vue-router';
const router = useRouter();
const goBack = () => {
  router.back();
};

const searchQuery = ref(''); // النص المدخل في حقل البحث
const filters = ref(['فستان مشجر', 'فساتين', 'فساتين متجر']); // الفلاتر المتاحة
const allResults = ref(['فستان مشجر 1', 'فساتين أنيقة', 'فساتين متجر جديد', 'فساتين فاخرة']);
const filteredResults = ref(allResults.value);

// دالة لتصفية النتائج بناءً على البحث
const applyFilter = (filter) => {
  searchQuery.value = filter; // وضع الفلتر كاستعلام البحث
  filteredResults.value = allResults.value.filter((result) =>
    result.toLowerCase().includes(filter.toLowerCase())
  );
};

// دالة لتصفية النتائج بناءً على نص البحث
watch(searchQuery, () => {
  filteredResults.value = allResults.value.filter((result) =>
    result.toLowerCase().includes(searchQuery.value.toLowerCase())
  );
});

// دالة لمسح نص البحث
const clearSearch = () => {
  searchQuery.value = '';
  filteredResults.value = allResults.value;
};

// دالة لفتح صفحة البحث
const openSearchPage = () => {
  // هنا يمكننا إضافة أي منطق لفتح نافذة أو صفحة البحث
};
</script>

<style scoped>
/* يمكنك تخصيص هذه الأنماط حسب الحاجة */
.material-icons {
  font-size: 24px;
}
</style>
