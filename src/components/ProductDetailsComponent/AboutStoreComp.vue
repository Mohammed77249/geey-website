<template>
  <div v-if="isDropdowenVisable" class="p-5">
    <h1>about page</h1>
  </div>

</template>
<script setup>
defineProps({
  isDropdowenVisable: {
    type: Boolean,
    default: false,
    required: true,
  },

  types: {
    type: [],
    default: [],
  },
});
</script>
