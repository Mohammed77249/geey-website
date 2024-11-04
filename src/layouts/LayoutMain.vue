<template>
  <div class="flex">
    <!-- <Sidebar /> -->
    <div class="flex-1">
      <HeaderComp />
      <ProductGrid />
    </div>
  </div>
</template>

<script setup>
// import Sidebar from '../components/SidebarComp.vue';
import ProductGrid from '../components/ProductGrid.vue';
import HeaderComp from '@/components/HeaderComp.vue';

</script>
