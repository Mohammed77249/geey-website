<template>
  <div class="mt-5">
    <div>
      <ul class="space-y-5">
        <li>
          <div
            class=" p-5 grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7  rtl gap-6"
          >
            <div
              v-for="(section, index) in storeAllSection.getAllSections"
              :key="index"
              class="bg-white flex flex-col items-center"
            >  <RouterLink :to="`/recommend/${section.id}/${section.name}`">
              <img
                src="/src/assets/images/Big Sale Banner.svg"
                :alt="section.name"
                class="w-32 rounded-full h-32 object-cover bg-gray-50 transition-transform duration-200 hover:scale-105 hover:shadow"
              />
              <h3 class="text-center mt-2 text-[20px] font-sans text-gray-800">
                {{ section.name }}
              </h3>
            </RouterLink>
            </div>
          </div>
        </li>
        <!-- <LoaderComp  :is-loader="storeAllSection.loading"/> -->
         <LoaderDatacomp :is-loader="storeAllSection.loading"/>
      </ul>

    </div>

  </div>
</template>

<script setup>


import LoaderDatacomp from '@/components/LoaderDatacomp.vue';
import { useSectionsStore } from '@/stores/section'
import {ref,onMounted } from 'vue'
const storeAllSection = useSectionsStore();

const filteredData = ref({
      page: 1,
      perPage: 20,
    });

    onMounted(() => {
      storeAllSection.fetchAllSections(filteredData);
    });

// const categories = [
//   { name: 'الأزياء النسائية', image: '/src/assets/images/Big Sale Banner.svg' },
//   { name: 'الأزياء الرجالية', image: '/public/logogeey.svg' },
//   { name: 'الأطفال', image: '/src/assets/images/products/92265483-9E7E-4FC3-A355-16CCA677C11C.svg' },
//   { name: 'الإكسسوارات', image: '/src/assets/images/products/Image (1).svg' },
//   { name: 'الأحذية', image: '/src/assets/images/products/Image (2).svg' },
//   { name: 'الحقائب', image: '/src/assets/images/products/Image (3).svg' },
//   { name: 'الأزياء النسائية', image: '/src/assets/images/products/Image (4).svg' },
//   { name: 'الأزياء الرجالية', image: '/src/assets/images/products/Image.svg' },
//   { name: 'الأطفال', image: '/src/assets/images/products/Mockup.svg' },
//   { name: 'الإكسسوارات', image: '/src/assets/images/products/Placeholder_01 (2).svg' },
//   { name: 'الأحذية', image: '/src/assets/images/products/Placeholder_01 (3).svg' },
//   { name: 'الحقائب', image: '/src/assets/images/products/Placeholder_01 (4).svg' },
//   { name: 'الأزياء النسائية', image: '/src/assets/images/products/Placeholder_01 (5).svg' },
//   { name: 'الأزياء الرجالية', image: '/src/assets/images/products/Rectangle 1113 (1).svg' },
//   { name: 'الأطفال', image: '/src/assets/images/products/Rectangle 1253.svg' },
//   { name: 'الإكسسوارات', image: '/src/assets/images/products/Rectangle 56.svg' },
//   { name: 'الأحذية', image: '/src/assets/images/products/Rectangle 72 (1).svg' },
//   { name: 'الحقائب', image: '/src/assets/images/products/Rectangle 75.svg' },
//   { name: 'الأزياء النسائية', image: '/src/assets/images/products/unsplash_DyhiB_wFifk.svg' },
//   { name: 'الأزياء الرجالية', image: '/src/assets/images/products/unsplash_jsgby4-zj44.svg' },
//   { name: 'الأطفال', image: '/src/assets/images/products/unsplash_VpqI6WX6sEs.svg' },
// ];

</script>
