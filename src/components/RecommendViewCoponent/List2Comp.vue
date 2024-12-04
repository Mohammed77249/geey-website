<template>
  <div>
    <div>
      <div id="dropdownTop" class="mb-2" v-if="isDropdowenVisable">
        <ul class="text-sm text-gray-700" aria-labelledby="dropdownTopButton">
          <li
            v-for="(status, index) in statuses"
            :key="index"
            class="space-y-2"
          >

                <div class="flex items-center justify-between">
                  <div>
                    <input
                    type="radio"
                    value="false"
                    v-model="selectedCategories"
                    class=" ml-2 rounded border-gray-300 text-black  focus:ring-black"
                  />
                    <label class="cursor-pointer  text-[10px]">{{ status.name }}</label>
                  </div>

                  <div  v-if="status.has_children ">
                    <button
                      type="button"
                      @click="
                        isDropdowenCategoryVisable = !isDropdowenCategoryVisable"
                    >
                      <svg
                        v-if="!isDropdowenCategoryVisable"
                        width="15"
                        height="15"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6 12H18"
                          stroke="#292D32"
                          stroke-width="4"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M12 18V6"
                          stroke="#292D32"
                          stroke-width="4"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>

                      <svg
                        v-if="isDropdowenCategoryVisable"
                        width="15"
                        height="15"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6 12H18"
                          stroke="#292D32"
                          stroke-width="4"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </button>

                  </div>

                </div>


                <div class="flex items-center justify-between pr-5">
                    <div v-for="(category, index) in storeCategory.getSubCategories"
                    :key="index">
                      <input
                      type="radio"
                      value="false"
                      v-model="selectedCategories"
                      class=" ml-2 rounded border-gray-300 text-black  focus:ring-black"
                    />
                      <label class="cursor-pointer text-[10px]">{{ category.name }}</label>
                    </div>

                    <!-- <div  v-if="status.has_children ">
                      <button
                        type="button"
                        @click="
                          isDropdowenCategoryVisable = !isDropdowenCategoryVisable"
                      >
                        <svg
                          v-if="!isDropdowenCategoryVisable"
                          width="15"
                          height="15"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M6 12H18"
                            stroke="#292D32"
                            stroke-width="4"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M12 18V6"
                            stroke="#292D32"
                            stroke-width="4"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>

                        <svg
                          v-if="isDropdowenCategoryVisable"
                          width="15"
                          height="15"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M6 12H18"
                            stroke="#292D32"
                            stroke-width="4"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </button>

                    </div> -->

                </div>

                <!-- <div v-if="status.has_children" class="px-5">
                   <ListCategory1 :statuses="storeCategory.getSubCategories" :isDropdowenVisable="isDropdowenCategoryVisable"/>
                </div> -->


          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useCategoriesStore } from '@/stores/category'
import { onMounted, ref } from 'vue'
import ListCategory1 from './ListCategory1.vue';
const storeCategory = useCategoriesStore()
const isDropdowenCategoryVisable = ref(false);
defineProps({
  isDropdowenVisable: {
    type: Boolean,
    default: false,
    required: true,
  },

  statuses: {
    type: [],
    default: [],
  },
})
const filteredData = ref({
  categoryId: 26,
  page: 1,
  perPage: 10,
});

onMounted(() => {
  storeCategory.fetchSubCategoryByCategoryID(filteredData)
})



</script>
