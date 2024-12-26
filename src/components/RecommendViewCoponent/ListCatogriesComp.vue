<template>
  <div>
    <div>
      <div id="dropdownTop" class="mb-2">
        <ul class="text-sm text-gray-700" aria-labelledby="dropdownTopButton">
          <li
            v-for="category in categories"
            :key="category.id"
            class="space-y-2"
          >
                <div class="flex items-center justify-between">
                  <div>
                    <input
                    type="radio"
                    :value="category.id"
                    :checked="selectedcategory === category.id"
                    @click="toggleGrandchildren(category.id)"
                    class=" ml-2 rounded border-gray-300 text-black focus:ring-black"
                  />
                    <label @click="toggleGrandchildren(category.id)" class="cursor-pointer  text-[10px]">{{ category.name }}</label>
                  </div>

                   <div  v-if="category.has_children ">
                    <button
                      type="button"
                      @click="toggleGrandchildren(category.id)"
                    >

                    <svg
                      v-if="category.id === tempid"
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

                <div v-if="category.has_children" class="pr-3">
                   <ListSubCategories1 v-if="category.id === tempid "  :subCategories="storeSecion.getSubCategories" />
                </div>

          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useSectionsStore } from '@/stores/section'
import { ref } from 'vue'
import ListSubCategories1 from './ListSubCategories1.vue';
const storeSecion = useSectionsStore()

defineProps({
  categories: {
    type: [],
    default: [],
  },
})
const filteredData = ref({
  categoryId: null,
  page: 1,
  perPage: 10,
});

const selectedcategory = ref(null)
const tempid = ref(null);
const toggleGrandchildren = (id) => {
  if (tempid.value == id) {
    tempid.value = null;
    selectedcategory.value = null
  } else {
    tempid.value = id;
    selectedcategory.value = id
    filteredData.value.categoryId = id;
    storeSecion.fetchSubCategoryByCategoryID(filteredData)
  }

};



</script>
