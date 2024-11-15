<template>
    <div class="flex flex-col min-h-screen">
    <header class="">
      <HeaderComp />
    </header>
    <main class="flex-grow p-4">
      <slot />
    </main>
    <footer class="mt-auto">
      <FooterComp/>
    </footer>
  </div>

</template>

<script setup>
import FooterComp from '@/components/FooterComp.vue';
import HeaderComp from '@/components/HeaderComp.vue';
</script>
