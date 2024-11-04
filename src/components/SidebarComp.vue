

<template>
  <div v-if="isOpen"  class="fixed top-40 inset-0 bg-gray-800 bg-opacity-50 z-40 flex overflow-auto">
    <div class="w-full h-[50%] bg-gray-50 p-5 z-50 ">

      <ul class="mt-4 space-y-3 text-gray-700 text-right">
        <li
          v-for="(item, index) in list"
          :key="index"
          class="cursor-pointer hover:text-black"
        >
          {{ item.name }}
        </li>
      </ul>
    </div>

  </div>
</template>

<script setup>
import { defineProps } from 'vue'


defineProps({
  isOpen: {
    type: Boolean,
    default: false,
    required: true
  },
  list:{
    type: [],
    default:[],
  }

});






</script>
