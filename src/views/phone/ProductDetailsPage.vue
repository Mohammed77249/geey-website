<template>
  <div class="relative">
    <!-- Header ثابت -->
    <header
      class="fixed top-0 left-0 w-full  z-50  transition-all duration-300"
      :class="isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'"
    >

    <div class="grid grid-cols-1 container mx-auto  p-2">
      <div class="flex items-center gap-2">

        <!-- back home icon -->
         <RouterLink to="/phone/home">
          <div
            :class="isScrolled?'w-7 h-7':'bg-gray-100 rounded-full h-7 w-7 flex items-center justify-center'">
              <div>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.90991 19.92L15.4299 13.4C16.1999 12.63 16.1999 11.37 15.4299 10.6L8.90991 4.07996" stroke="#8a1538" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
            </div>
         </RouterLink>



        <!-- search -->
        <div  class="w-full h-7 ">

          <div v-if="isScrolled">
            <SearchComp :isScrolled="isScrolled" />
          </div>
        </div>

        <!-- icon search -->
        <div :class="isScrolled?'hidden':'bg-gray-100 rounded-full h-7 w-7 flex items-center  justify-center'">
          <div>
            <svg  width="24" height="15" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.33331 13.3333C10.647 13.3333 13.3333 10.647 13.3333 7.33331C13.3333 4.0196 10.647 1.33331 7.33331 1.33331C4.0196 1.33331 1.33331 4.0196 1.33331 7.33331C1.33331 10.647 4.0196 13.3333 7.33331 13.3333Z" stroke="#8a1538" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path opacity="0.4" d="M12.6199 13.7932C12.9733 14.8599 13.7799 14.9665 14.3999 14.0332C14.9666 13.1799 14.5933 12.4799 13.5666 12.4799C12.8066 12.4732 12.3799 13.0665 12.6199 13.7932Z" stroke="#8a1538" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
        </div>

        <!-- cart icon -->
        <div  >

          <div v-if="isScrolled" class="w-7 h-7">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2 2H3.74C4.82 2 5.67 2.93 5.58 4L4.75 13.96C4.71759 14.3459 4.76569 14.7342 4.89123 15.1005C5.01678 15.4669 5.21705 15.8031 5.47934 16.0879C5.74163 16.3728 6.06023 16.6001 6.41495 16.7553C6.76967 16.9106 7.15278 16.9905 7.54 16.99H18.19C19.63 16.99 20.89 15.81 21 14.38L21.54 6.88C21.66 5.22 20.4 3.87 18.73 3.87H5.82" stroke="#8a1538" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            <path opacity="0.4" d="M9 8H21M16.25 22C16.5815 22 16.8995 21.8683 17.1339 21.6339C17.3683 21.3995 17.5 21.0815 17.5 20.75C17.5 20.4185 17.3683 20.1005 17.1339 19.8661C16.8995 19.6317 16.5815 19.5 16.25 19.5C15.9185 19.5 15.6005 19.6317 15.3661 19.8661C15.1317 20.1005 15 20.4185 15 20.75C15 21.0815 15.1317 21.3995 15.3661 21.6339C15.6005 21.8683 15.9185 22 16.25 22ZM8.25 22C8.58152 22 8.89946 21.8683 9.13388 21.6339C9.3683 21.3995 9.5 21.0815 9.5 20.75C9.5 20.4185 9.3683 20.1005 9.13388 19.8661C8.89946 19.6317 8.58152 19.5 8.25 19.5C7.91848 19.5 7.60054 19.6317 7.36612 19.8661C7.1317 20.1005 7 20.4185 7 20.75C7 21.0815 7.1317 21.3995 7.36612 21.6339C7.60054 21.8683 7.91848 22 8.25 22Z" stroke="#8a1538" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>

          <div v-if="!isScrolled" class="bg-gray-100 rounded-full h-7 w-7 flex items-center justify-center">
            <svg width="24" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2 2H3.74C4.82 2 5.67 2.93 5.58 4L4.75 13.96C4.71759 14.3459 4.76569 14.7342 4.89123 15.1005C5.01678 15.4669 5.21705 15.8031 5.47934 16.0879C5.74163 16.3728 6.06023 16.6001 6.41495 16.7553C6.76967 16.9106 7.15278 16.9905 7.54 16.99H18.19C19.63 16.99 20.89 15.81 21 14.38L21.54 6.88C21.66 5.22 20.4 3.87 18.73 3.87H5.82" stroke="#8a1538" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            <path opacity="0.4" d="M9 8H21M16.25 22C16.5815 22 16.8995 21.8683 17.1339 21.6339C17.3683 21.3995 17.5 21.0815 17.5 20.75C17.5 20.4185 17.3683 20.1005 17.1339 19.8661C16.8995 19.6317 16.5815 19.5 16.25 19.5C15.9185 19.5 15.6005 19.6317 15.3661 19.8661C15.1317 20.1005 15 20.4185 15 20.75C15 21.0815 15.1317 21.3995 15.3661 21.6339C15.6005 21.8683 15.9185 22 16.25 22ZM8.25 22C8.58152 22 8.89946 21.8683 9.13388 21.6339C9.3683 21.3995 9.5 21.0815 9.5 20.75C9.5 20.4185 9.3683 20.1005 9.13388 19.8661C8.89946 19.6317 8.58152 19.5 8.25 19.5C7.91848 19.5 7.60054 19.6317 7.36612 19.8661C7.1317 20.1005 7 20.4185 7 20.75C7 21.0815 7.1317 21.3995 7.36612 21.6339C7.60054 21.8683 7.91848 22 8.25 22Z" stroke="#8a1538" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>



        </div>

      </div>

      <!-- list button-->
        <div v-if="isScrolled" class="flex items-center justify-around mt-5">
          <div class="">
            <button
              @click="taggleActiveForYou"
              :class="[
                onclickForYou
                ? ' text-white bg-[#8a1538] py-1.5 px-3 rounded-full'
                : ' bg-gray-50 py-1.5 px-3 rounded-full text-[#252525]',
              ]"
            >
             السلع
            </button>
          </div>

          <div class="">
            <button
              @click="taggleActiveNewEnters"
              :class="[
                onclickNewEnters
                  ? ' text-white bg-[#8a1538] py-1.5 px-3 rounded-full'
                  : ' bg-gray-50 py-1.5 px-3 rounded-full text-[#252525]',
              ]"
            >
               التعليقات
            </button>
          </div>

          <div class="">
            <button
              @click="taggleActiveDiscounts"
              :class="[
                onclickDiscounts
                  ? ' text-white bg-[#8a1538] py-1.5 px-3 rounded-full'
                  : ' bg-gray-50 py-1.5 px-3 rounded-full text-[#252525]',
              ]"
            >
              التوصية
            </button>
          </div>

        </div>

    </div>

    </header>

    <!-- Swiper Section -->
    <section class="">
      <MainPageComp/>
    </section>

    <!-- محتوى الصفحة -->
    <div class="">

    </div>

  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import { useSectionsPhoneStore } from '@/stores/sectionsphone'
import SearchComp from "@/components/SearchComp.vue";
import MainPageComp from "@/components/phone/productdetails/MainPageComp.vue";

const onclickForYou = ref(true)
const onclickNewEnters = ref(false)
const onclickDiscounts = ref(false)

const taggleActiveForYou = () => {
  onclickForYou.value = true
  onclickNewEnters.value = false
  onclickDiscounts.value = false
}

const taggleActiveNewEnters = () => {
  onclickForYou.value  = false
  onclickNewEnters.value  = true
  onclickDiscounts.value = false
};

const taggleActiveDiscounts = () => {
  onclickForYou.value  = false
  onclickNewEnters.value  = false
  onclickDiscounts.value = true
};



const storeSecion = useSectionsPhoneStore();
const filteredData = ref({
  sectionId:5,
  page: 1,
  perPage: 20,
  filter:0
});


//////////////////
// متغير لتتبع التمرير
const isScrolled = ref(false);

// دالة لتحديث الخلفية عند التمرير
const handleScroll = () => {
  const threshold = 50; // ارتفاع صورة البنر
  isScrolled.value = window.scrollY > threshold;
};



// إضافة وإزالة مستمع التمرير
onMounted(async() => {
   await storeSecion.fetchSections(filteredData);
   await storeSecion.fetchSubSectionBySectionID(filteredData)
   await storeSecion.fetchGetBanner(filteredData)


  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<style scoped>

header {
  height: 100px;
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





