
<template>
  <div class="mx-auto px-2  ">

  <div class="grid grid-cols-2 md:grid-cols-3  lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-1 ">
    <div
      v-for="product in SectionStore.getProducts_MainPageMoreSells"
      :key="product.id"
      class="p-1 mt-4"
    >

    <RouterLink :to="`/phone/product/${product.id}`">
      <div class="cursor-pointer w-[full] h-[200px] " @mouseenter="onhover(product.id)" @mouseleave="isHover = false"  >
      <img v-if="product.main_imags != null && product.main_imags.length > 0 "
              :src="
                hoverId === product.id &&
                isHover &&
                product.main_imags[1]?.image
                  ? product.main_imags[1]?.image
                  : product.main_imags[0]?.image
              "  alt="" class="w-full h-full  transition duration-300 ease-in-out"
              />

              <img v-else
              src="/jeeeylogo.jpg"  alt="" class="w-full h-full  transition duration-300 ease-in-out"
              />

      </div>

      <h3 class="font-semibold rtl text text-xs mt-1">{{ product.name }}</h3>
    </RouterLink>
    <div class="mt-1">
          <div class="flex items-center">
            <span class="flex text-yellow-500">
              <i>
                <img src="/src/assets/images/star.svg" class="w-3 "
              /></i>
              <i>
                <img src="/src/assets/images/star.svg" class="w-3 "
              /></i>
              <i>
                <img src="/src/assets/images/star.svg" class="w-3 "
              /></i>
              <i>
                <img src="/src/assets/images/star.svg" class="w-3"
              /></i>
            </span>
            <!-- <p class="text-[8px] md:text-[10px] mr-2">(+1000)</p> -->
          </div>
        </div>

    <div class="flex items-center justify-between">
      <div class="flex gap-2 items-center ">
        <p class="font-sembold text-primary-900 text-xs">{{ product.base_price }}</p>
        <!-- <div class="border border-primary-900">
         <p class=" text-[10px] text-primary-900 "> %50- </p>
        </div> -->

      </div>
      <div @click="openDialog(product.id)" class="cursor-pointer w-8 flex items-center justify-center border border-primary-900 rounded-full">
        <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"

            >
              <path
                d="M2 2H3.74C4.82 2 5.67 2.93 5.58 4L4.75 13.96C4.71759 14.3459 4.76569 14.7342 4.89123 15.1005C5.01678 15.4669 5.21705 15.8031 5.47934 16.0879C5.74163 16.3728 6.06023 16.6001 6.41495 16.7553C6.76967 16.9106 7.15278 16.9905 7.54 16.99H18.19C19.63 16.99 20.89 15.81 21 14.38L21.54 6.88C21.66 5.22 20.4 3.87 18.73 3.87H5.82"
                stroke="#8a1538"
                stroke-width="2"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                opacity="0.4"
                d="M9 8H21M16.25 22C16.5815 22 16.8995 21.8683 17.1339 21.6339C17.3683 21.3995 17.5 21.0815 17.5 20.75C17.5 20.4185 17.3683 20.1005 17.1339 19.8661C16.8995 19.6317 16.5815 19.5 16.25 19.5C15.9185 19.5 15.6005 19.6317 15.3661 19.8661C15.1317 20.1005 15 20.4185 15 20.75C15 21.0815 15.1317 21.3995 15.3661 21.6339C15.6005 21.8683 15.9185 22 16.25 22ZM8.25 22C8.58152 22 8.89946 21.8683 9.13388 21.6339C9.3683 21.3995 9.5 21.0815 9.5 20.75C9.5 20.4185 9.3683 20.1005 9.13388 19.8661C8.89946 19.6317 8.58152 19.5 8.25 19.5C7.91848 19.5 7.60054 19.6317 7.36612 19.8661C7.1317 20.1005 7 20.4185 7 20.75C7 21.0815 7.1317 21.3995 7.36612 21.6339C7.60054 21.8683 7.91848 22 8.25 22Z"
                stroke="#8a1538"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
        </svg>
      </div>

    </div>



  </div>

    </div>

       <!-- رسالة تحميل المزيد -->
       <div v-if="SectionStore.showLoadingMessage" class="mt-4">
      <LoaderDatacomp :is-loader="SectionStore.showLoadingMessage"/>
    </div>

     <!-- رسالة انتهاء التحميل -->
     <div v-if="!SectionStore.hasMore && !SectionStore.loading" class="text-center mt-4">
      <p>لا توجد منتجات إضافية.</p>
    </div>

    <!-- عنصر مراقبة نهاية الصفحة -->
    <div ref="loadMoreTrigger" class="h-1"></div>
  </div>
  <DialogAddToCart  v-if="filteredData != null"   :-id-product="filteredData"  :is-open="isDialogOpen"  @close="closeDialog"  />


</template>

<script setup>
import { ref, onMounted,defineAsyncComponent } from 'vue';
const DialogAddToCart = defineAsyncComponent(() => import('@/components/phone/DialogAddToCartComp.vue'));
const isDialogOpen = ref(false)
const filteredData = ref(null)
const LoaderDatacomp = defineAsyncComponent(() => import('@/components/LoaderDatacomp.vue'));
import { useRouter } from 'vue-router';
import { useAuthStore } from '@/stores/auth';
import { useSectionsStore } from '@/stores/section';
import { useIntersectionObserver } from '@vueuse/core';
const authStore = useAuthStore();
const SectionStore = useSectionsStore();
const router = useRouter();
const openDialog = (id) => {
  if (!authStore.isAuthenticated) {
    router.push('/phone/login');
    return;
  }
  isDialogOpen.value = true
  filteredData.value = id;
}

const closeDialog = () => {
  isDialogOpen.value = false
  filteredData.value = null;
}

const isHover = ref();
const hoverId = ref(null);

const onhover = (id)=>{
  isHover.value = true;
  hoverId.value= id;
};

const filteredData2 = ref({
      sectionId:1,
      page: 1,
      perPage: 20,
      filter:3
});

const loadMoreTrigger = ref(null);
// استخدام IntersectionObserver لمراقبة نهاية الصفحة
useIntersectionObserver(
  loadMoreTrigger,
  ([{ isIntersecting }]) => {
    if (isIntersecting) {
      SectionStore.fetchProductForMainPageFilter(filteredData2);
    }
  },
  { threshold: 0.5 }
);

// جلب أول مجموعة من المنتجات عند التركيب
onMounted(() => {
  SectionStore.resetProductsMain();
  SectionStore.fetchProductForMainPageFilter(filteredData2);
});

</script>
