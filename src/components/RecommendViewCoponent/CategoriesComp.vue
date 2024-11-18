<template>
<div>
      <div>
        <div
            id="dropdownTop"
           class="mt-5"
            v-if="isDropdowenVisable"
          >
            <ul class="py-2 text-sm text-gray-700" aria-labelledby="dropdownTopButton">
              <li
                v-for="(status, index) in statuses"
                :key="index"
                class="flex items-center justify-between space-y-4 "
              >
              <div>
              <input
                type="radio"
                :value="status"
                v-model="selectedCategories"
                class=" ml-2 rounded border-gray-300 text-black  focus:ring-black"
              />
                <label class="cursor-pointer  text-[10px]">{{ status }}</label>
              </div>
              <svg  width="13" height="15" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path  d="M6 12H18" stroke="gray" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M12 18V6" stroke="gray" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              </li>
            </ul>
        </div>
      </div>
</div>
</template>

<script setup>
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

</script>
