<template>
  <!-- <div >
  <div v-if="isOpen"  class="fixed  border h-[70%] inset-0  overflow-y-auto   bg-opacity-50 z-40 ">
    <div class="w-full bg-white p-5 z-50">

      <div class="grid grid-cols-12 ">

      <div class="col-span-6  text-right ">
        <div>
          <span class="pr-5 text-[12px] font-sans">تسوق حسب الفئات</span>
        </div>

      </div>

      <div class="col-span-4 text-right pl-10 pr-10  border-s-2 ">
        <div class=" flex justify-end pb-3">
          <span class="pr-5 text-[12px] font-sans">تسوق حسب الفئات</span>
          <div>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M22 8.27V4.23C22 2.64 21.36 2 19.77 2H15.73C14.14 2 13.5 2.64 13.5 4.23V8.27C13.5 9.86 14.14 10.5 15.73 10.5H19.77C21.36 10.5 22 9.86 22 8.27Z" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M10.5 8.52V3.98C10.5 2.57 9.86 2 8.27 2H4.23C2.64 2 2 2.57 2 3.98V8.51C2 9.93 2.64 10.49 4.23 10.49H8.27C9.86 10.5 10.5 9.93 10.5 8.52Z" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M10.5 19.77V15.73C10.5 14.14 9.86 13.5 8.27 13.5H4.23C2.64 13.5 2 14.14 2 15.73V19.77C2 21.36 2.64 22 4.23 22H8.27C9.86 22 10.5 21.36 10.5 19.77Z" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path opacity="0.4" d="M15 15.5H21" stroke="#292D32" stroke-width="1.5" stroke-linecap="round"/>
            <path opacity="0.4" d="M15 19.5H21" stroke="#292D32" stroke-width="1.5" stroke-linecap="round"/>
            </svg>
          </div>
        </div>

        <div class=" bg-yellow-200 overflow-y-auto">

          <div class="flex gap-8 ">

            <div class="w-[100px]  grid grid-rows-1 items-center justify-center h-[110px] bg-green-200 cursor-pointer">
            <div class="">
             <img src="/public/logogeey.svg" class="w-20 h-20 rounded-full bg-red-200 " alt="Avatar of Jonathan Reinink" />
             <span class="bg-blue-200 mt-10">Users</span>
            </div>
          </div>

          <div class="w-[100px]  grid grid-rows-1 items-center justify-center h-[110px] bg-green-200 cursor-pointer">
            <div class="">
             <img src="/public/logogeey.svg" class="w-20 h-20 rounded-full bg-red-200 " alt="Avatar of Jonathan Reinink" />
             <span class="bg-blue-200 mt-10">Users</span>
            </div>
          </div>

          <div class="w-[100px]  grid grid-rows-1 items-center justify-center h-[110px] bg-green-200 cursor-pointer">
            <div class="">
             <img src="/public/logogeey.svg" class="w-20 h-20 rounded-full bg-red-200 " alt="Avatar of Jonathan Reinink" />
             <span class="bg-blue-200 mt-10">Users</span>
            </div>
          </div>


          <div class="w-[100px]  grid grid-rows-1 items-center justify-center h-[110px] bg-green-200 cursor-pointer">
            <div class="">
             <img src="/public/logogeey.svg" class="w-20 h-20 rounded-full bg-red-200 " alt="Avatar of Jonathan Reinink" />
             <span class="bg-blue-200 ">Users</span>
            </div>
          </div>

          </div>

          <div class="grid grid-cols-1  gap-5 p-2">
              <div class="grid grid-rows-2 items-center justify-center  bg-white shadow-md  w-[80px] overflow-hidden">
                <div>
                  <img src="/public/logogeey.svg" alt="Card Image" class="w-20 rounded-full bg-red-500 h-20 object-cover" />
                </div>
              <div class="p-4 bg-blue-500">
                <h3 class="text-[12px] font-semibold ">عنوان </h3>
              </div>

            </div>

          </div>


        </div>



      </div>


      <div class="col-span-2   border-s-2">
        <ul class=" text-gray-700 text-[12px]   font-sans">
        <li
          v-for="(item, index) in list"
          :key="index"
          class="cursor-pointer flex-shrink-0 flex items-center pl-10 p-2 justify-between hover:text-black  hover:bg-gray-100 h-10"
        >
        <div class="">
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="font-bold">
                <path d="M15.0001 19.92L8.48009 13.4C7.71009 12.63 7.71009 11.37 8.48009 10.6L15.0001 4.07996" stroke="gray" stroke-width="4" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
          </div>
          {{ item.name }}

        </li>
      </ul>
      </div>


      </div>




    </div>
  </div>
</div> -->

  <div v-if="isOpen"  :class="{'invisible md:visible bg-white absolute  left-0 w-screen z-50 ':storedLanguage =='ar','invisible md:visible bg-white  absolute right-0 w-screen z-50 ':storedLanguage =='en'}" >
    <div class=" border  h-[450px] ">

      <div @mouseleave="!isOpen" class="grid grid-cols-12 ">
        <!-- list of item -->
      <div class="col-span-3 md:col-span-2 border-s-2 overflow-y-auto   h-[440px] p-4  custom-scroll " >
        <ul  class="space-y-2 text-gray-700 text-[12px] font-sans">
        <li
            v-for="(section, index) in storeSecion.getSections"
          :key="index"
          @mouseenter="handleMouseEnter(index)"
          @mouseleave="handleMouseLeave"
          @mouseover="getID(section.id)"
          :class="{'bg-gray-100 text-black': hoveredIndex === index}"
          class="cursor-pointer flex-shrink-0 flex items-center pl-10 p-2 justify-between hover:text-black  hover:bg-gray-100 h-10 transition-all duration-200"
          :ref="setItemRef"
          >
          <p > {{ section.name }} </p>
          <!-- <p v-if="storedLanguage == 'ar'"> {{ section.name_ar }} </p> -->
            <!-- <p v-if="storedLanguage == 'en'"> {{ section.name_en }} </p> -->
          <div class="">
            <svg v-if="storedLanguage == 'en'" width="10" height="10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="font-bold">
            <path d="M8.90991 19.92L15.4299 13.4C16.1999 12.63 16.1999 11.37 15.4299 10.6L8.90991 4.07996" stroke="gray" stroke-width="4" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>

              <svg v-if="storedLanguage == 'ar'" width="10" height="10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="font-bold">
                <path d="M15.0001 19.92L8.48009 13.4C7.71009 12.63 7.71009 11.37 8.48009 10.6L15.0001 4.07996" stroke="gray" stroke-width="4" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
          </div>

        </li>
      </ul>
      </div>


        <!-- list of card 1 -->
        <div class="col-span-4  pl-10 pr-10  border-s-2  overflow-y-auto h-[440px] p-4 custom-scroll">
          <div class=" flex">
            <div>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M22 8.27V4.23C22 2.64 21.36 2 19.77 2H15.73C14.14 2 13.5 2.64 13.5 4.23V8.27C13.5 9.86 14.14 10.5 15.73 10.5H19.77C21.36 10.5 22 9.86 22 8.27Z" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M10.5 8.52V3.98C10.5 2.57 9.86 2 8.27 2H4.23C2.64 2 2 2.57 2 3.98V8.51C2 9.93 2.64 10.49 4.23 10.49H8.27C9.86 10.5 10.5 9.93 10.5 8.52Z" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M10.5 19.77V15.73C10.5 14.14 9.86 13.5 8.27 13.5H4.23C2.64 13.5 2 14.14 2 15.73V19.77C2 21.36 2.64 22 4.23 22H8.27C9.86 22 10.5 21.36 10.5 19.77Z" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path opacity="0.4" d="M15 15.5H21" stroke="#292D32" stroke-width="1.5" stroke-linecap="round"/>
              <path opacity="0.4" d="M15 19.5H21" stroke="#292D32" stroke-width="1.5" stroke-linecap="round"/>
              </svg>
            </div>
            <span class="px-3 text-[12px] font-sans">{{ $t('Shop by categories') }} </span>

          </div>

        <div class="">
          <div class="">
            <ul class="space-y-2 ">
             <li >
              <div  v-if="!storeSecion.loading"  class=" w-full pt-4 grid grid-cols-2 sm:grid-cols-3  gap-8">
                <div class="flex flex-col items-center">
              <div class="w-20  flex  justify-center items-center rounded-full h-20 object-cover bg-gray-50  transition-transform duration-200 hover:scale-105 hover:shadow">
                <img src="../assets/images/element-plus.svg" alt="no image" class="w-10  h-10 ">
              </div>
                <h3 class="text-center mt-2 text-[12px] font-sans text-gray-800">{{ $t('View all') }}</h3>
                </div>


                <div
                  v-for="(subsection, index) in  storeSecion.getSubSections"
                  :key="index"
                  class="bg-white flex flex-col items-center "
                >
                  <img src="/public/logogeey.svg" :alt="subsection.name" class="w-20 text-center rounded-full h-20 object-cover bg-gray-50  transition-transform duration-200 hover:scale-105 hover:shadow">
                  <h3 class="text-center mt-2 text-[12px]  font-sans text-gray-800">{{ subsection.name }}</h3>
                </div>


              </div>
              <LoaderDatacomp :isLoader="storeSecion.loading"/>
             </li>

            </ul>
          </div>
        </div>
      </div>

       <!-- list of card 2 -->
       <div class="col-span-5 md:col-span-6  overflow-y-auto  h-[440px] w-full p-4  custom-scroll">
          <div>
            <span class="p-5 text-[12px] font-sans">{{ $t('Shop by size') }}</span>
          </div>
          <div class="overflow-y-auto">
          <div>
            <ul class="space-y-2 ">
             <li v-if="!storeSecion.loading">
              <div class="bg-white  p-5 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-7  gap-6">
            <div class=" flex flex-col items-center">
              <div class="w-20 flex justify-center items-center rounded-full h-20 object-cover bg-gray-50  transition-transform duration-200 hover:scale-105 hover:shadow">
                <img src="../assets/images/element-plus.svg" alt="no image" class="w-10  h-10 ">
              </div>
                <h3 class="text-center mt-2 text-[12px] font-sans text-gray-800">{{ $t('View all') }}</h3>
              </div>

                <div
                  v-for="(product, index) in storeSecion.getProducts"
                  :key="index"
                  class="bg-white  flex flex-col items-center"
                >
                  <img src="/public/logogeey.svg" :alt="product.name" class="w-20 rounded-full h-20 object-cover bg-gray-50  transition-transform duration-200 hover:scale-105 hover:shadow">
                  <h3 class="text-center mt-2 text-[12px]  font-sans text-gray-800">{{ product.name_ar }}</h3>
                </div>
              </div>
             </li>
             <LoaderDatacomp :isLoader="storeSecion.loading"/>
            </ul>
          </div>
        </div>

        </div>

    </div>

  </div>
  </div>
</template>

<script setup>
import { defineProps,ref,onMounted ,onBeforeUnmount} from 'vue'
import { useSectionsStore } from '@/stores/section'
import LoaderDatacomp from './LoaderDatacomp.vue';
const storedLanguage = localStorage.getItem("language");
const storeSecion = useSectionsStore();

defineProps({
  isOpen: {
    type: Boolean,
    required: true
  },


});

  const getID = (id) =>{
    filteredData.value.sectionId = id
    // storeSecion.fetchSubSectionBySectionID(filteredData);

  }


    const hoveredIndex = ref(null);
    let intervalId;
    const updateHoveredIndex = () => {
      const newIndex = localStorage.getItem("hoveredIndex");
      hoveredIndex.value = newIndex !== null ? parseInt(newIndex) : null;


    };

    onMounted(() => {
      updateHoveredIndex();
      intervalId = setInterval(updateHoveredIndex, 500);
      storeSecion.fetchSections(filteredData);
      storeSecion.fetchSubSectionBySectionID(filteredData);
      // storeSecion.fetchSubSectionBySectionID(filteredData);

    });

    onBeforeUnmount(() => {
      clearInterval(intervalId);
    });


    const handleMouseEnter = index => {
      localStorage.setItem('hoveredIndex2', index)
    }

    const handleMouseLeave = () => {
      localStorage.removeItem('hoveredIndex2')
    };


    const filteredData = ref({
      sectionId: 1,
      page: 1,
      perPage: 70,
    });


</script>

<style>
.custom-scroll::-webkit-scrollbar {
  width: 5px;
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
