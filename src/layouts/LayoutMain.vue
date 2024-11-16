<template>
    <div  class="flex flex-col min-h-screen">
    <header v-show="authStore.isAuthenticated" class="">
      <HeaderComp />
    </header>
    <main class="flex-grow ">
      <slot />
    </main>
    <footer v-show="authStore.isAuthenticated" class="mt-auto">
      <FooterComp/>
    </footer>
  </div>

</template>

<script setup>
import FooterComp from '@/components/FooterComp.vue';
import HeaderComp from '@/components/HeaderComp.vue';
import { useAuthStore } from '@/stores/auth'
const authStore = useAuthStore();
</script>
