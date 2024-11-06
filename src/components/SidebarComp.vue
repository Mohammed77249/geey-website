

<template>
<div >
  <div v-if="isOpen"  class=" fixed top-32  border h-[70%] inset-0  overflow-y-auto   bg-opacity-50 z-40 ">
    <div class="w-full  bg-white p-5 z-50 overflow-x-auto scrollable-list ">

      <div class="grid grid-cols-12 ">

      <div class="col-span-6 bg-green-300 text-right ">
        mohammed
      </div>

      <div class="col-span-4 text-right ">
        mohammed
      </div>


      <div class="col-span-2  bg-red-300 text-right ">
        <ul class="space-y-3 text-gray-700">
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
