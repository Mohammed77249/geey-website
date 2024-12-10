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
                v-for="status in statuses"
                :key="status.id"
                class=" space-y-2 "
              >
                <div class="flex items-center justify-between">
                  <div>
                    <input
                    type="radio"
                     :value="status.id"
                     :checked="selectedCategories === status.id"
                      @click="toggleSelection(status.id)"
                    class=" ml-2 rounded border-gray-300 text-black  focus:ring-black"

                  />
                    <label @click="toggleIdeForProduct(status.id)" class="cursor-pointer  text-[10px]">{{ status.name }} 1</label>
                  </div>

                  <div  v-if="status.has_sub ">
                    <button
                      type="button"
                      @click="toggleChildren(status.id)"
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

                 <div v-if="status.has_sub"  class="px-5">
                   <List2Comp v-if="status.id === tempid "  :statuses="status.categories"  />
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

const selectedCategories = ref(null)
const toggleSelection = (id)=> {
  selectedCategories.value = selectedCategories.value === id ? null : id;
};


const tempid = ref(null);

const toggleChildren = (id)=>{
  if (tempid.value === id) {
    tempid.value = null;

  } else {
    tempid.value = id;
  }
};

const toggleIdeForProduct = (id) =>{
  localStorage.setItem("CategotyId",id)
};



</script>
