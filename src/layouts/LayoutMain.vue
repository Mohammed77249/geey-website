<template>
  <div class="flex">

    <div class="flex-1">
      <HeaderComp />
      <!-- <NothingG/> -->
     <RouterView/>
     

    </div>
  </div>
</template>

<script setup>

//import NothingG from '@/components/NothingG.vue';
// import ProductGrid from '../components/ProductGrid.vue';
import HeaderComp from '@/components/HeaderComp.vue';

</script>
