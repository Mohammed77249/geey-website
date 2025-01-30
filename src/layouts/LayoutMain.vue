<!-- <template>
    <div  class="flex flex-col min-h-screen">
    <header v-if="!hideHeaderFooter" class="hidden md:block">
      <HeaderComp />
    </header>
    <header v-if="!hideHeaderFooter" class="block md:hidden">
      <HeaderMobileComp />
    </header>

    <main class="flex-grow">
      <slot />
    </main>
      <footer v-if="!hideHeaderFooter"  class="mt-auto hidden md:block">
      <FooterComp/>
    </footer>

    <footer v-if="!hideHeaderFooter" class="mt-auto block md:hidden">
      <FooterMobileComp />
    </footer>

  </div>

</template> -->

<!-- <script setup>
import FooterComp from '@/components/FooterComp.vue';
import HeaderComp from '@/components/HeaderComp.vue';
import FooterMobileComp from '@/components/phone/FooterMobileComp.vue';
import HeaderMobileComp from '@/components/phone/HeaderMobileComp.vue';
import { useRoute } from "vue-router";
import { ref, computed, onMounted } from 'vue';
const route = useRoute();

const hideHeaderFooter = computed(() => route.meta.hideHeaderFooter);
const isDesktop = ref(window.innerWidth >= 768);
onMounted(() => {
  window.addEventListener('resize', () => {
    isDesktop.value = window.innerWidth >= 768;
  });
});

</script> -->


<!-- <template>
  <div class="flex flex-col h-screen md:min-h-screen">
    <header v-if="!hideHeaderFooter">
      <HeaderComp v-if="isDesktop" />
      <HeaderMobileComp v-else />
    </header>

    <main class="pb-16  md:flex-grow">
      <slot />
    </main>

    <footer v-if="!hideHeaderFooter">
      <FooterComp v-if="isDesktop" />
      <FooterMobileComp class="fixed bottom-0 w-full" v-else />
    </footer>
  </div>
</template>

<script setup>
import FooterComp from '@/components/FooterComp.vue';
import HeaderComp from '@/components/HeaderComp.vue';
import FooterMobileComp from '@/components/phone/FooterMobileComp.vue';
import HeaderMobileComp from '@/components/phone/HeaderMobileComp.vue';
import { useRoute } from 'vue-router';
import { ref, computed, onMounted, onBeforeUnmount } from 'vue';


const route = useRoute();
const hideHeaderFooter = computed(() => route.meta.hideHeaderFooter);

const isDesktop = ref(window.innerWidth >= 768);

// const handleResize = () => {
//   isDesktop.value = window.innerWidth >= 768;
// };


// onMounted(() => {
//   window.addEventListener('resize', handleResize);
// });
// onBeforeUnmount(() => {
//   window.removeEventListener('resize', handleResize);
// });

onMounted(() => {
  const resizeListener = () => {
    const isDesktop = window.innerWidth >= 768;
    const currentPath = window.location.pathname;

    if (isDesktop && currentPath === '/phone/home') {
      window.location.replace('/desktop/home');
    } else if (!isDesktop && currentPath === '/desktop/home') {
      window.location.replace('/phone/home');
    }
  };

  window.addEventListener('resize', resizeListener);

  // تنظيف المستمع عند تدمير المكون
  onBeforeUnmount(() => {
    window.removeEventListener('resize', resizeListener);
  });
});

</script> -->


<template>
  <div class="flex flex-col h-screen md:min-h-screen">
    <!-- Header -->
    <header v-if="!hideHeaderFooter">
      <HeaderComp v-if="isDesktop" />
      <HeaderMobileComp v-else />
    </header>

    <!-- Main Content -->
    <main class=" md:flex-grow">
      <!-- <slot /> -->
      <RouterView/>
    </main>

    <!-- Footer -->
    <footer v-if="!hideHeaderFooter">
      <FooterComp v-if="isDesktop" />
      <FooterMobileComp class="fixed bottom-0 w-full" v-else />
    </footer>
  </div>
</template>

<script setup>
import { defineAsyncComponent } from 'vue';
const HeaderComp = defineAsyncComponent(() => import('@/components/HeaderComp.vue'));
const FooterComp = defineAsyncComponent(() => import('@/components/FooterComp.vue'));
const HeaderMobileComp = defineAsyncComponent(() => import('@/components/phone/HeaderMobileComp.vue'));
const FooterMobileComp = defineAsyncComponent(() => import('@/components/phone/FooterMobileComp.vue'));

import { useRoute, useRouter } from 'vue-router';
import { ref, computed, onMounted, onBeforeUnmount } from 'vue';

// Route metadata
const route = useRoute();
const router = useRouter();
const hideHeaderFooter = computed(() => route.meta.hideHeaderFooter);

// Determine device type
const isDesktop = ref(window.innerWidth >= 768);

const handleResize = () => {
  const currentPath = route.path;

  // Check device and redirect if necessary
  const desktopPath = currentPath.replace('/phone', '/desktop');
  const phonePath = currentPath.replace('/desktop', '/phone');

  isDesktop.value = window.innerWidth >= 768;

  if (isDesktop.value && currentPath.startsWith('/phone')) {
    router.replace(desktopPath);
  } else if (!isDesktop.value && currentPath.startsWith('/desktop')) {
    router.replace(phonePath);
  }
};

onMounted(() => {
  window.addEventListener('resize', handleResize);
});

onBeforeUnmount(() => {
  window.removeEventListener('resize', handleResize);
});
</script>


