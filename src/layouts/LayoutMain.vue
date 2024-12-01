<template>
    <div  class="flex flex-col min-h-screen">
    <header v-if="!hideHeaderFooter " v-show="authStore.isAuthenticated" class="">
      <HeaderComp />
    </header>
    <main class="flex-grow">
      <slot />
    </main>
    <footer v-if="!hideHeaderFooter" v-show="authStore.isAuthenticated" class="mt-auto">
      <FooterComp/>
    </footer>
  </div>

</template>

<script setup>
import FooterComp from '@/components/FooterComp.vue';
import HeaderComp from '@/components/HeaderComp.vue';
import { useAuthStore } from '@/stores/auth'
import { useRoute } from "vue-router";
import { computed } from 'vue';
const authStore = useAuthStore();
const route = useRoute();
const hideHeaderFooter = computed(() => route.meta.hideHeaderFooter);


</script>
