<template>
<div>
      <div>
        <div
            id="dropdownTop"
           class="mt-5"
            v-if="isDropdowenVisable"
          >
            <ul class=" text-sm text-gray-700" aria-labelledby="dropdownTopButton">
              <li
                v-for="(status, index) in statuses"
                :key="index"
                class=" space-y-2 "
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

                  <div  v-if="status.has_sub ">
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

                <div v-if="status.has_sub" class="px-5">
                   <List2Comp :statuses="status.categories" :isDropdowenVisable="isDropdowenCategoryVisable"/>
                </div>

              </li>
            </ul>

        </div>
      </div>
</div>
</template>

<script setup>
import { ref } from 'vue'
import List2Comp from './List2Comp.vue';
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
});



const isDropdowenCategoryVisable = ref(false);

</script>
