<template>
  <div class="mt-4">
    <div>
      <ul class="space-y-5">
        <!-- Loader Component -->
        <div v-if="storeSection.loading">
          <LoaderDatacomp :is-loader="storeSection.loading" />
        </div>

        <!-- Subsections Rendering -->
        <li v-else-if="storeSection.getSubSections && storeSection.getSubSections.length">
          <!-- Sections with subcategories -->
          <div v-if="storeSection.subsections && storeSection.subsections.length && storeSection.subsections[0].has_sub === 'true'">
            <ul
              class="flex gap-4 items-center justify-center scrollable-list overflow-x-auto text-[15px] shadow font-sans"
            >
              <li
                v-for="(subsection, index) in storeSection.getSubSections"
                :key="index"
                @click="onclickSubSection(index)"
                :class="[
                  tempSubSection === index
                    ? 'text-primary-900 mb-2 text-center rounded-lg cursor-pointer transition-all duration-200'
                    : 'mb-2 text-center rounded-lg cursor-pointer text-gray-700 transition-all duration-200'
                ]"
              >
                {{ subsection.name }}
                <div
                  :class="{
                    'bg-primary-900 h-[2px] w-15 mt-1': tempSubSection === index,
                    hidden: tempSubSection !== index,
                  }"
                ></div>
              </li>
            </ul>

            <!-- Categories inside subsections -->
            <!-- <div
              class="grid grid-rows-3 overflow-x-auto w-full md:hidden custom-scroll gap-1 mt-4"
              style="grid-template-columns: repeat(10, minmax(80px, 1fr));"
              v-for="(category, index) in storeSection.getSubSections[listCategories]?.categories || []"
              :key="index"
            >
              <div class="bg-white flex flex-col items-center">
                <img
                  :src="category.image ? category.image : '/jeeeylogo.jpg'"
                  :alt="category.name"
                  @click="toggleChildren(category.id)"
                  class="w-14 md:w-24 rounded-full h-14 object-cover bg-gray-50 transition-transform duration-200 hover:scale-105 hover:shadow"
                />
                <h3
                  @click="toggleChildren(category.id)"
                  class="text-center mt-2 text-[10px] font-sans text-gray-800"
                >
                  {{ category.name }}
                </h3>
              </div>
            </div> -->
            <div
            class="grid grid-rows-3 overflow-x-auto w-full md:hidden custom-scroll gap-1"
            style="grid-template-columns: repeat(10, minmax(80px, 1fr));"
          >
            <div
              v-for="(category, index) in storeSection.getSubSections[listCategories]?.categories || []"
              :key="index"
              class="bg-white flex flex-col items-center"
            >
              <img
                :src="category.image ? category.image : '/jeeeylogo.jpg'"
                :alt="category.name"
                @click="toggleChildren(category.id)"
                class="w-14 md:w-24 rounded-full h-14 object-cover bg-gray-50 transition-transform duration-200 hover:scale-105 hover:shadow"
              />
              <h3
                @click="toggleChildren(category.id)"
                class="text-center mt-2 text-[10px] font-sans text-gray-800"
              >
                {{ category.name }}
              </h3>
            </div>
          </div>

          </div>


          <!-- Sections without subcategories -->
          <div
            v-if="storeSection.subsections && storeSection.subsections.length && storeSection.subsections[0].has_sub === 'false'"
            class="grid grid-rows-3 overflow-x-auto w-full md:hidden custom-scroll gap-1"
            style="grid-template-columns: repeat(10, minmax(80px, 1fr));"
          >
            <div
              v-for="(category, index) in storeSection.getSubSections[0]?.categories || []"
              :key="index"
              class="bg-white flex flex-col items-center"
            >
              <img
                :src="category.image ? category.image : '/jeeeylogo.jpg'"
                :alt="category.name"
                @click="toggleChildren(category.id)"
                class="w-14 md:w-24 rounded-full h-14 object-cover bg-gray-50 transition-transform duration-200 hover:scale-105 hover:shadow"
              />
              <h3
                @click="toggleChildren(category.id)"
                class="text-center mt-2 text-[10px] font-sans text-gray-800"
              >
                {{ category.name }}
              </h3>
            </div>
          </div>
        </li>

        <!-- No data available -->
        <div class="w-full h-[245px] text-center" v-else>
          <p>لا توجد بيانات</p>
        </div>
      </ul>
    </div>
  </div>
</template>

<script setup>
const LoaderDatacomp = defineAsyncComponent(() => import('@/components/LoaderDatacomp.vue'));
import { useSectionsPhoneStore } from '@/stores/sectionsphone';
import { ref,defineAsyncComponent } from 'vue';

const storeSection = useSectionsPhoneStore();
const listCategories = ref(0);
const tempSubSection = ref(0);

const onclickSubSection = (index) => {
  if (index !== undefined && index !== null) {
    listCategories.value = index;
    tempSubSection.value = tempSubSection.value === index ? null : index;
  }
};

const toggleChildren = (id) => {
  if (id) {
    console.log('Category ID:', id);
    // Add logic to handle child categories
  }
};

// onMounted(async () => {
//   try {
//     await storeSection.fetchSections();
//     await storeSection.fetchSubSectionBySectionID();
//   } catch (error) {
//     console.error('Error fetching sections or subsections:', error);
//   }
// });
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
