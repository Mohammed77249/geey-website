<template>
    <div  class="flex flex-col min-h-screen">
    <!-- <header v-if="!hideHeaderFooter " v-show="authStore.isAuthenticated" class=""> -->
    <header v-if="!hideHeaderFooter" >
      <HeaderComp />
    </header>
    <main class="flex-grow">
      <slot />
    </main>
    <!-- <footer v-if="!hideHeaderFooter" v-show="authStore.isAuthenticated" class="mt-auto"> -->
      <footer v-if="!hideHeaderFooter"  class="mt-auto">
      <FooterComp/>
    </footer>
  </div>

</template>

<script setup>
import FooterComp from '@/components/FooterComp.vue';
import HeaderComp from '@/components/HeaderComp.vue';
import { useRoute } from "vue-router";
import { computed } from 'vue';
const route = useRoute();

const hideHeaderFooter = computed(() => route.meta.hideHeaderFooter);


</script>
