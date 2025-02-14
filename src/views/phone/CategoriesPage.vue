<template>
  <div class="relative">
    <!-- Header ثابت -->
    <header
      class="fixed top-0 left-0 w-full z-50  transition-all duration-300 bg-white shadow"
    >

    <div class="grid grid-cols-1 container mx-auto  p-2">
      <div class="flex items-center gap-2  ">

        <!-- sms icon -->
        <div class="w-7 h-7">
          <div>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M17 20.5H7C4 20.5 2 19 2 15.5V8.5C2 5 4 3.5 7 3.5H17C20 3.5 22 5 22 8.5V15.5C22 19 20 20.5 17 20.5Z" stroke="#8a1538" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
              <path opacity="0.4" d="M17 9L13.87 11.5C12.84 12.32 11.15 12.32 10.12 11.5L7 9" stroke="#8a1538" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>



        </div>
        <!-- calender icon -->
        <div  class="w-7 h-7 ">
          <div >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12.4945 16.5H12.5035" stroke="#8a1538" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M8 2V5" stroke="#8a1538" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M16 2V5" stroke="#8a1538" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M3.5 9.08997H20.5" stroke="#8a1538" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M21 8.5V17C21 20 19.5 22 16 22H8C4.5 22 3 20 3 17V8.5C3 5.5 4.5 3.5 8 3.5H16C19.5 3.5 21 5.5 21 8.5Z" stroke="#8a1538" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M11.9955 13.7H12.0045" stroke="#8a1538" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M8.29431 13.7H8.30329" stroke="#8a1538" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M8.29431 16.7H8.30329" stroke="#8a1538" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>

        </div>

        <!-- search -->
        <div  class="w-full h-7 ">
          <SearchComp :isScrolled="true" />
        </div>

        <!-- favorate icon -->
        <div  class="w-7 h-7 ">
          <div>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12.62 20.812C12.28 20.932 11.72 20.932 11.38 20.812C8.48 19.822 2 15.692 2 8.69199C2 5.60199 4.49 3.10199 7.56 3.10199C9.38 3.10199 10.99 3.98199 12 5.34199C12.5138 4.64787 13.183 4.08372 13.954 3.69473C14.725 3.30575 15.5764 3.10275 16.44 3.10199C19.51 3.10199 22 5.60199 22 8.69199C22 15.692 15.52 19.822 12.62 20.812Z" stroke="#8a1538" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
        </div>
      </div>

      <!-- list section  and menu icon-->
      <div class="flex items-center justify-between gap-2 mt-2 ">

          <!-- list section -->
          <div class="w-full  flex items-center overflow-x-auto custom-scroll">
              <ul
                class="flex item-center justify-center gap-2   text-sm  font-sans"
              >
                <li
                  v-for="(section, index) in storeSecion.getSections"
                  :key="index"
                  @click="onClickSubsection(section.id)"
                  :class="{
                  'text-primary-900 border-b-2 font-semibold border-primary-900': activeSectionId === section.id,
                  'text-black': activeSectionId !== section.id
                }"
                class="p-2 text-center  cursor-pointer transition-all duration-200"
                >
                  {{ section.name }}
                </li>
              </ul>
          </div>

      </div>

    </div>

    </header>

    <!-- محتوى الصفحة -->
    <div class="mt-20 mb-14 ">
      <div class="grid grid-cols-12 ">

        <!-- list sidebar -->
        <div class="col-span-4   border-e-2 overflow-y-auto  w-full h-screen p-2 bg-gray-50 custom-scroll " >
          <ul  class=" text-gray-700 text-[12px] font-sans">
        <li
          v-for="(category, index) in storeSecion.getSubSections[0]?.categories"
          :key="index"
          @click="onClickCategory(category.id)"
          class="cursor-pointer  flex items-center   justify-between hover:text-black  hover:bg-gray-100 h-10 transition-all duration-200"
          >
          <p> {{ category.name }} </p>
        </li>
      </ul>
        </div>


        <!-- list sub category -->
        <div class="col-span-8 pt-5   border-s-2  overflow-y-auto h-[440px]  custom-scroll">


        <div class="">
          <div class="">
            <ul class="space-y-2 ">
             <li >
              <div  v-if="!storeSecion.loading"  class=" w-full  grid grid-cols-3 gap-2">
                <div
                  v-for="(subcategory, index) in  storeSecion.getSubCategories"
                  :key="index"
                   @click="onClickSubCategory(subcategory)"
                  class="bg-white flex flex-col items-center "
                >
                  <img :src="subcategory.image ? subcategory.image :'/logogeey.svg'" :alt="subcategory.name" class="w-12 text-center rounded-full h-12 object-cover bg-gray-50  transition-transform duration-200 hover:scale-105 hover:shadow">
                  <h3 class="text-center mt-2 text-xs  font-sans text-gray-800">{{ subcategory.name }}</h3>
                </div>
              </div>
              <LoaderDatacomp :isLoader="storeSecion.loading"/>
             </li>

            </ul>
          </div>
        </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script setup>
import { ref, onMounted,defineAsyncComponent } from "vue";
import { useSectionsPhoneStore } from '@/stores/sectionsphone'
import SearchComp from "../../components/SearchComp.vue";
import { useRouter } from 'vue-router';
const LoaderDatacomp = defineAsyncComponent(() => import('@/components/LoaderDatacomp.vue'));

const router = useRouter();

const activeSectionId = ref(null);
const storeSecion = useSectionsPhoneStore();
const filteredData = ref({
  sectionId:1,
  page: 1,
  perPage: 20,
  filter:0
});


const filteredData2 = ref({
  categoryId:1,
  page: 1,
  perPage: 20,
  filter:0
});


const onClickSubsection = async(id) =>{
  activeSectionId.value = id;
  filteredData.value.sectionId = id
   await storeSecion.fetchSubSectionBySectionID(filteredData);
}

const onClickCategory = async(id) =>{
  filteredData2.value.categoryId = id
  await storeSecion.fetchSubCategoryByCategoryID(filteredData2)
}

const onClickSubCategory = (subcategory)=>{
  router.push({ path: `/phone/recommend`, query: { q: encodeURIComponent(null) ,id: encodeURIComponent(subcategory.id) ,name: encodeURIComponent(subcategory.name)} })

}

// إضافة وإزالة مستمع التمرير
onMounted(async() => {
   await storeSecion.fetchSections(filteredData);
   await storeSecion.fetchSubSectionBySectionID(filteredData)

});


</script>

<style scoped>

header {
  height: 80px;
}
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




