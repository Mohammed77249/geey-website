<template>
  <div>
    <HeaderComp />
    <main class="">
      <slot />
    </main>
     <FooterComp/>
    </div>
</template>

<script setup>
import FooterComp from '@/components/FooterComp.vue';
import HeaderComp from '@/components/HeaderComp.vue';
</script>
