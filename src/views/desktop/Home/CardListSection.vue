<template>
  <div class="mt-5">
    <div>
      <ul class="space-y-5">
        <div v-if=" storeSection.loading">
          <LoaderDatacomp :is-loader="storeSection.loading"/>
         </div>
        <li v-else-if="storeSection.getCategoriesMain">
          <div
            class=" p-5  grid grid-rows-3 w-full custom-scroll  overflow-x-auto  gap-6"
            style="grid-template-columns: repeat(10, minmax(80px, 1fr));"
          >
            <div
              v-for="(category, index) in storeSection.getCategoriesMain"
              :key="index"

              class="bg-white flex flex-col items-center"
            >  <RouterLink :to="`/desktop/recommend/${category.category_level}/${category.id}/${category.name}`">
              <img
                :src="category.image !=null ?category.image : '/jeeeylogo.jpg'"
                :alt="category.name"
                class="w-20 md:w-24 rounded-full h-20 md:h-24 object-cover bg-gray-50 transition-transform duration-200 hover:scale-105 hover:shadow"
              />
              <h3    class="text-center mt-2 text-[12px] md:text-[15px] font-sans text-gray-800">
                {{ category.name }}
              </h3>
            </RouterLink>
            </div>
          </div>
        </li>
        <div v-else>
            no data
        </div>
      </ul>
    </div>

  </div>
</template>

<script setup>
import { useSectionsStore } from '@/stores/section'
import {ref,onMounted,defineAsyncComponent } from 'vue'
const LoaderDatacomp = defineAsyncComponent(() => import('@/components/LoaderDatacomp.vue'));

const storeSection = useSectionsStore();
const filteredData = ref({
      sectionId: 1,
      page: 1,
      perPage: 10,
    });

onMounted(() => {
  storeSection.fetchCategoriesInHomeByMinSection(filteredData);

});

</script>

<style>
.custom-scroll::-webkit-scrollbar {
  width: 5px;
  height: 5px;
  opacity: 0;
}
.custom-scroll:hover::-webkit-scrollbar,
.custom-scroll:active::-webkit-scrollbar {
  opacity: 1;
}

.custom-scroll::-webkit-scrollbar-track {
  background: transparent;
}
.custom-scroll::-webkit-scrollbar-thumb {
  background-color: rgba(0, 0, 0, 0.4);
  border-radius: 4px;

}
</style>
