<template>
  <div>
        <div>
          <div>

              <ul class="text-sm text-gray-700">
                <li
                  v-for="subCategory in subCategories"
                  :key="subCategory.id"
                  class=" space-y-2 "
                >
                <div  class="flex items-center  justify-between">
                    <div>
                      <input
                      type="radio"
                      :value="subCategory.id"
                      :checked="selectedCategories === subCategory.id"
                      @click="toggleGrandchildren(subCategory.id)"
                      class=" ml-2 rounded border-gray-300 text-black  focus:ring-black"
                    />
                      <label class="cursor-pointer text-[8px]  md:text-[10px]"  @click="toggleGrandchildren(subCategory.id)">{{ subCategory.name }}</label>
                    </div>

                    <div  v-if="subCategory.has_children ">
                    <button
                      type="button"
                      @click="toggleGrandchildren(subCategory.id)"
                    >

                    <svg
                      v-if="subCategory.id === tempid"
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6 12H18"
                          stroke="#292D32"
                          stroke-width="3"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>

                      <svg
                      v-else
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6 12H18"
                          stroke="#292D32"
                          stroke-width="3"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M12 18V6"
                          stroke="#292D32"
                          stroke-width="3"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>


                    </button>

                  </div>

                  </div>

                  <div v-if="subCategory.has_children "  class="pr-2">
                    <ListSubCategories2 v-if="subCategory.id === tempid " :id="subCategory.id" :subCategories="storeCategory.getSubCategories" />
                  </div>

                </li>
              </ul>

          </div>
        </div>
  </div>
  </template>

  <script setup>
  import { ref } from 'vue'
import { useSectionsStore } from '@/stores/section'
import ListSubCategories2 from './ListSubCategories2.vue';
const storeSecion = useSectionsStore()

  defineProps({
    subCategories: {
      type: [],
      default: [],

    },
  });

  const filteredData = ref({
  categoryId: null,
  page: 1,
  perPage: 10,
});


const selectedCategories = ref(null)

const tempid = ref(null);

const toggleGrandchildren = (childId) => {

  if (tempid.value === childId) {
    tempid.value = null;
    selectedCategories.value = null

  } else {
    tempid.value = childId;
    filteredData.value.categoryId = childId
    selectedCategories.value = childId
    storeSecion.fetchSubCategoryByCategoryID(filteredData)
  }
};

  </script>
