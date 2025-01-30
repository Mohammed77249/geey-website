<template>
  <div>
    <div
      v-if="isLoader"
      class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
    >
      <div class="loader"></div>
    </div>
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
.loader {
  border: 4px solid #8a1538;
  border-top: 4px solid #8a1538;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
