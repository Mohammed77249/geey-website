<template>
  <div>
    <div>
      <div id="dropdownTop" class="mb-2">
        <ul class="text-sm text-gray-700" aria-labelledby="dropdownTopButton">
          <li
            v-for="status in statuses"
            :key="status.id"
            class="space-y-2"
          >

                <div class="flex items-center justify-between">
                  <div>
                    <input
                    type="radio"
                    :value="status.id"
                    :checked="selectedCategories === status.id"
                    @click="toggleSelection(status.id)"
                    class=" ml-2 rounded border-gray-300 text-black focus:ring-black"
                  />
                    <label class="cursor-pointer  text-[10px]">{{ status.name }} 2 </label>
                  </div>

                   <div  v-if="status.has_children ">
                    <button
                      type="button"
                      @click="toggleGrandchildren(status.id)"
                    >

                    <svg
                      v-if="status.id === tempid"
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

                <div v-if="status.has_children" class="pr-3">
                   <ListCategory1 v-if="status.id === tempid "  :statuses="storeCategory.getSubCategories" />
                </div>

          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useCategoriesStore } from '@/stores/category'
import { ref } from 'vue'
import ListCategory1 from './ListCategory1.vue';
const storeCategory = useCategoriesStore()

defineProps({
  statuses: {
    type: [],
    default: [],
  },
})
const filteredData = ref({
  categoryId: null,
  page: 1,
  perPage: 10,
});

const selectedCategories = ref(null)
const toggleSelection = (id)=> {
  selectedCategories.value = selectedCategories.value === id ? null : id;
};

const tempid = ref(null);
const toggleGrandchildren = (childId) => {
  filteredData.value.categoryId = childId
  if (tempid.value === childId) {
    tempid.value = null;

  } else {
    tempid.value = childId;
  }

  storeCategory.fetchSubCategoryByCategoryID(filteredData)

};



</script>
