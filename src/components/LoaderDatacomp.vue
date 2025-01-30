<!-- Loader.vue -->
<template>
  <div v-if="isLoader" class="flex justify-center items-center h-full w-[100%] ">
    <div class="animate-spin rounded-full border-t-4 border-primary-900 w-16 h-16 ">
      </div>
   <span class="ml-4 text-primary-900">جاري تحميل ...</span>
  </div>
</template>

<script setup>
defineProps({
  isLoader: {
    type: Boolean,
    default: false,

  },

});
</script>

<style scoped>
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.custom-spinner {
  animation: spin 1s linear infinite;
}
</style>
