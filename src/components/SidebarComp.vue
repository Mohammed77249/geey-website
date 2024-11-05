

<template>
<div @mouseover=" showhoever()"  @mouseleave=" hideSidebar()">
  <div v-if="isOpen"   class="fixed top-28 border h-[70%] inset-0 overflow-y-auto  bg-opacity-50 z-40 flex  ">
    <div class="w-full  bg-white p-5 z-50 ">
      <ul class="space-y-3 text-gray-700 text-right">
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
  },
  showhoever:{
    type:Function
  }

});


</script>
