
<script setup>
import List from './List.vue';

defineProps({
  items: {
    type: Array,
  },
})
</script>

<template>
  <div v-for="item in items">
    {{ item.name }}

    <div v-if="item.children?.length">
      <List :items="item?.children" />
    </div>
  </div>
</template>
