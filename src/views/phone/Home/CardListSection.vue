<template>
  <div class="mt-4">
    <div>
      <ul class="space-y-5 ">
        <div v-if=" storeCategories.loading">
          <LoaderDatacomp :is-loader="storeCategories.loading"/>
         </div>
        <li v-else-if="storeCategories.getCategories">
          <div
            class="  grid grid-rows-3 overflow-x-auto w-full md:hidden   custom-scroll  gap-1"
          style="grid-template-columns: repeat(10, minmax(80px, 1fr));"
          >
            <div
              v-for="(category, index) in storeCategories.getCategoriesMain"
              :key="index"

              class="bg-white flex flex-col items-center"
            >
             <!-- <RouterLink :to="`/recommend/${category.category_level}/${category.id}/${category.name}`"> -->
              <img
                :src="category.image !=null ?category.image : '/public/jeeeylogo.jpg'"
                :alt="category.name"
                  @click="toggleChildren(category.id)"
                  class="w-14 md:w-24 rounded-full h-14  object-cover bg-gray-50 transition-transform duration-200 hover:scale-105 hover:shadow"
              />
              <h3   @click="toggleChildren(category.id)" class="text-center mt-2 text-[10px]  font-sans text-gray-800">
                {{ category.name }}
              </h3>
            <!-- </RouterLink> -->
            </div>
          </div>
        </li>
        <div class="w-full h-[245px]  text-center" v-else>
            no data
        </div>
      </ul>

    </div>

  </div>

</template>

<script setup>
import LoaderDatacomp from '@/components/LoaderDatacomp.vue';
import { useSectionsStore } from '@/stores/section'
import {ref,onMounted } from 'vue'
const storeCategories = useSectionsStore();

const filteredData = ref({
  sectionId: 1,
      page: 1,
      perPage: 70,
    });

    onMounted(() => {
      storeCategories.fetchSections(filteredData);
    });

    const toggleChildren = id => {
  if (id) {
    filteredData.value.categoryId = id
  }
   else {
  alert("hghghg")
  }
}


</script>

<style>
.custom-scroll::-webkit-scrollbar {
  width: 0px;
  height: 0px;
  opacity: 0;
}
.custom-scroll:hover::-webkit-scrollbar,
.custom-scroll:active::-webkit-scrollbar {
  opacity: 0;
}

.custom-scroll::-webkit-scrollbar-track {
  background: transparent;
}
.custom-scroll::-webkit-scrollbar-thumb {
  background-color: rgba(0, 0, 0, 0.4);
  border-radius: 4px;

}
</style>
