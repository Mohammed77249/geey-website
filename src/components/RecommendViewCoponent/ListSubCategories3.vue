<template>
  <div>
    <div>
      <div id="dropdownTop" class="">
        <ul class="text-sm text-gray-700" aria-labelledby="dropdownTopButton">
          <li
            v-for="(status, index) in statuses.id"
            :key="index"
            class="space-y-2"
          >
            <div v-for="(item, itemIndex) in status" :key="itemIndex">
              <div class="flex items-center justify-between">
                <div>
                  <input
                    type="radio"
                    :value="status.id"
                    :checked="selectedCategories === status.id"
                    @click="toggleSelection(status.id)"
                    class="ml-2 rounded border-gray-300 text-black focus:ring-black"
                  />
                  <label class="cursor-pointer text-[10px]"
                    >{{ item.name }}
                  </label>
                </div>

                <div v-if="item.has_children">
                  <button type="button" @click="toggleGrandchildren(item.id)">
                    <svg
                      v-if="item.id === tempid"
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

                    <svg
                      v-else
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
                  </button>
                </div>
              </div>

              <div v-if="item.has_children" class="px-5">
                <ListSubCategories2
                  v-if="item.id === tempid"
                  :statuses="storeCategory.getSubCategories"
                />
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useCategoriesStore } from '@/stores/category'

import ListSubCategories2 from './ListSubCategories2.vue';
const storeCategory = useCategoriesStore()

defineProps({
  statuses: {
    type: [],
    default: [],
  },
})

const selectedCategories = ref(null)
const toggleSelection = (id)=> {
  selectedCategories.value = selectedCategories.value === id ? null : id;
};

const filteredData = ref({
  categoryId: null,
  page: 1,
  perPage: 10,
})
const tempid = ref(null)
const toggleGrandchildren = childId => {
  filteredData.value.categoryId = childId
  if (tempid.value === childId) {
    tempid.value = null
  } else {
    tempid.value = childId
  }

  storeCategory.fetchSubCategoryByCategoryID(filteredData)
};
</script>
