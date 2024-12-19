<template>

<div v-if="isORNot" class="relative  bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow h-32">
    <img :src="product.image" alt="Product" class="w-full h-32 relative object-cover"/>
    <div class="absolute inset-0  pr-4 pl-4 ">
      <div class="bg-gray-100 rounded-full block  h-4 w-12 ">
        <p class="text-primary-400 text-[10px] text-center mt-24">{{ product.price }} $</p>
        <p class="text-[10px] text-gray-600 font-bold text-center">{{ product.name }}</p>
      </div>
    </div>
  </div>

  <div v-if="!isORNot" class="relative  bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow h-32">
    <img :src="product.image" alt="Product" class="w-full h-32 relative object-cover"/>
    <div class="absolute inset-0  pr-4 pl-4">
      <div class="bg-white rounded-full  h-4 w-12  ">
        <p class="text-primary-400  text-[10px] text-center mt-24">{{ product.price }} $</p>
        <p class="text-[10px] text-gray-600 font-bold text-center">{{ product.name }}</p>
      </div>
    </div>
  </div>

</template>

<script setup>
import { defineProps} from 'vue'

defineProps({
  product: {
    type: Object,


  },

  isORNot: {
    type: Boolean,

  },

});

</script>

<style scoped>
/* Tailwind styles are used */
</style>
