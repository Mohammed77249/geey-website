<template>
  <div>
    <HeaderComp />
    <main class="container mx-auto">
      <slot />
    </main>
     <FooterComp/>
    </div>
</template>

<script setup>
import FooterComp from '@/components/FooterComp.vue';
import HeaderComp from '@/components/HeaderComp.vue';
</script>
