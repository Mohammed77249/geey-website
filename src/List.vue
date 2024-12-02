<script setup>
import List2 from './List2.vue';

defineProps({
  items: {
    type: Array,
  },
})
</script>

<template>
  <div v-for="item in items">
    {{ item.name }}

    <div v-if="item.children?.length" class="ms-3" style="padding-left: 2px;" >
      <List2 :items="item?.children" />
    </div>
  </div>
</template>
