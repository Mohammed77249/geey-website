<!-- Loader.vue -->
<template>
  <div v-if="isLoader" class="flex justify-center items-center h-full w-[100%]  bg-gray-100">
    <div class="animate-spin rounded-full border-t-4 border-blue-500 w-16 h-16">
      </div>
      <span>    Loading product details...</span>
  </div>
</template>

<script setup>
import { defineProps} from 'vue'
defineProps({
  isLoader: {
    type: Boolean,
    default: false,

  },

});
</script>
