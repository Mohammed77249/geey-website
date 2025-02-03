<template>
  <div class="relative max-w-lg mx-auto md:p-2">
    <!-- شريط البحث -->
    <div class="flex items-center overflow-hidden">
      <input
        v-model="searchQuery"
        @input="handleSearch"
        @keydown.enter="onEnterPressed"
        type="text"
        class="w-full md:pr-10 md:pl-4 py-[2px] md:py-2 text-gray-700 border md:border-primary-900 bg-gray-50 md:bg-[#F6F6F6] focus:outline-none focus:border-gray-900"
        :placeholder="$t('Search for products...')"
      />
      <button
        @click="handleSearch"
        class="px-2 md:px-2 w-10 text-gray-400  py-[5px] md:py-2 cursor-pointer  transition"
         :class="isScrolled ? 'bg-primary-900' : 'bg-gray-100 md:bg-primary-900'"
      >

      <div class="hidden md:block">
        <svg
          width="25"
          height="25"
          class="text-gray-400 cursor-pointer"

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

      </div>

      <div class=" block md:hidden">
        <svg v-if="isScrolled"
          width="20"
          height="20"
          class="text-gray-400 cursor-pointer"
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

        <svg v-else
          width="20"
          height="20"
          class="text-gray-400 cursor-pointer"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.33331 13.3333C10.647 13.3333 13.3333 10.647 13.3333 7.33331C13.3333 4.0196 10.647 1.33331 7.33331 1.33331C4.0196 1.33331 1.33331 4.0196 1.33331 7.33331C1.33331 10.647 4.0196 13.3333 7.33331 13.3333Z"
            stroke="black"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M12.6199 13.7932C12.9733 14.8599 13.7799 14.9665 14.3999 14.0332C14.9666 13.1799 14.5933 12.4799 13.5666 12.4799C12.8066 12.4732 12.3799 13.0665 12.6199 13.7932Z"
            stroke="black"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>

      </div>


      </button>
    </div>

    <!-- قائمة النتائج -->

    <p
      v-if="storeCategory.loading"
      class="absolute z-10 text-center w-full bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 h-full text-gray-500 mt-2"
    >
    <LoaderDatacomp :isLoader="storeCategory.loading"/>
    </p>

    <ul
      v-if="searchQuery"
      class="absolute z-10 w-full bg-white border border-gray-300 rounded-lg shadow-lg mt-2 max-h-60 overflow-y-auto"
    >

      <!-- categories -->
      <li  v-if="resultsCatedories.length >0 " >
      <div v-for="(category, index) in resultsCatedories"
        :key="index"

        @click="selectResult(category)">
        <RouterLink :to="`/desktop/recommend/${category.category_level}/${category.id}/${category.name}`">
          <div   class="px-4 py-2 hover:bg-gray-100 cursor-pointer">
            <span class="text-sm font-medium "> {{ category.name }}</span>

          </div>
        </RouterLink>
      </div>
      </li>

      <!-- product -->
      <li v-if="resultsProducts.length  > 0 ">
        <div  v-for="(product, index) in resultsProducts"
          :key="index"
          class="px-4 py-2 hover:bg-gray-100 cursor-pointer"
          @click="selectResult(product)">
          <RouterLink :to="`/desktop/product/${product.id}`">
            <div class="px-4 py-2 hover:bg-gray-100 cursor-pointer">
              <span class="text-sm font-medium"> {{ product.name }}</span>
            </div>
          </RouterLink>
        </div>
      </li>



    </ul>

    <!-- رسالة عدم وجود نتائج -->
    <p
      v-if="!resultsCatedories.length && !resultsProducts.length && searchQuery && !storeCategory.loading"
      class="absolute z-10 text-center w-full bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 h-full text-gray-500 mt-2"
    >
      لا توجد نتائج مطابقة لبحثك.
    </p>
  </div>
</template>
<script setup>
import { ref } from 'vue'
import { useCategoriesStore } from '@/stores/category.js';
import LoaderDatacomp from './LoaderDatacomp.vue';
const searchQuery = ref('')
const resultsCatedories = ref([]);
const resultsProducts = ref([]);

defineProps({
  isScrolled: {
    type: Boolean,
  },

});

const storeCategory = useCategoriesStore()

// دالة البحث
const handleSearch = async() => {
  if (searchQuery.value) {
    await storeCategory.fetchCategoryBySearch(searchQuery.value);

    if(storeCategory.getCategoriesForSearch.length > 0)
    {
      resultsCatedories.value = storeCategory.getCategoriesForSearch
    }else{
      resultsCatedories.value = []
    }
    if(storeCategory.getCategoriesForSearch.length > 0)
    {
      resultsProducts.value = storeCategory.getProductForSearch
    }else{
      resultsProducts.value = []
    }


  } else {
    resultsCatedories.value = []
    resultsProducts.value = []
  }
}


// const onEnterPressed =  async() => {
//   if (searchQuery.value) {
//     await storeCategory.fetchCategoryBySearch(searchQuery.value);
//     results.value = storeCategory.getProducts
//   } else {
//     results.value = []
//   }

// };

// عند اختيار نتيجة
const selectResult = (result) => {
  console.log(result)
  searchQuery.value = '' // إعادة تعيين النص
  resultsCatedories.value = [] // إخفاء القائمة
}
</script>
