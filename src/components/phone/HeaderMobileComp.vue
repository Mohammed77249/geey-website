<template>
  <div class="relative">
    <!-- Header ثابت -->
    <header
      class="fixed top-0 left-0 w-full z-50 transition-all duration-300"
      :class="isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'"
    >

    <div class="grid grid-cols-1 container mx-auto  p-2">
      <div class="flex items-center gap-2  ">

        <!-- sms icon -->
        <div class="w-7 h-7">
          <div v-if="isScrolled ">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M17 20.5H7C4 20.5 2 19 2 15.5V8.5C2 5 4 3.5 7 3.5H17C20 3.5 22 5 22 8.5V15.5C22 19 20 20.5 17 20.5Z" stroke="#8a1538" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
              <path opacity="0.4" d="M17 9L13.87 11.5C12.84 12.32 11.15 12.32 10.12 11.5L7 9" stroke="#8a1538" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
          <div v-else>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M17 20.5H7C4 20.5 2 19 2 15.5V8.5C2 5 4 3.5 7 3.5H17C20 3.5 22 5 22 8.5V15.5C22 19 20 20.5 17 20.5Z" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
              <path opacity="0.4" d="M17 9L13.87 11.5C12.84 12.32 11.15 12.32 10.12 11.5L7 9" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>


        </div>
        <!-- calender icon -->
        <div  class="w-7 h-7 ">
          <div v-if="isScrolled">
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
          <div v-else>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12.4945 16.5H12.5035" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M8 2V5" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M16 2V5" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M3.5 9.08997H20.5" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M21 8.5V17C21 20 19.5 22 16 22H8C4.5 22 3 20 3 17V8.5C3 5.5 4.5 3.5 8 3.5H16C19.5 3.5 21 5.5 21 8.5Z" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M11.9955 13.7H12.0045" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M8.29431 13.7H8.30329" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M8.29431 16.7H8.30329" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>

        </div>

        <!-- search -->
        <div  class="w-full   h-7 ">

          <div v-if="isScrolled">
            <SearchPhoneComp :isScrolled="isScrolled" />
          </div>

          <div  v-if="!isScrolled" class="flex items-center justify-center gap-5">
            <span  class="text-4xl text-white ">
              Jeeey
            </span>
          </div>
        </div>

        <!-- favorate icon -->
        <div  class=" h-7 flex "
        :class="isScrolled? 'w-7' :'w-16'">
          <div>
               <!-- icon search -->
                <RouterLink to="/phone/search">
                <div :class="isScrolled?'hidden':' rounded-full h-7 w-7 flex items-center  justify-center'">
                  <div>
                    <svg  width="24" height="24" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.33331 13.3333C10.647 13.3333 13.3333 10.647 13.3333 7.33331C13.3333 4.0196 10.647 1.33331 7.33331 1.33331C4.0196 1.33331 1.33331 4.0196 1.33331 7.33331C1.33331 10.647 4.0196 13.3333 7.33331 13.3333Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path opacity="0.6" d="M12.6199 13.7932C12.9733 14.8599 13.7799 14.9665 14.3999 14.0332C14.9666 13.1799 14.5933 12.4799 13.5666 12.4799C12.8066 12.4732 12.3799 13.0665 12.6199 13.7932Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                  </div>
                </div>
                </RouterLink>
            </div>

          <div v-if="isScrolled">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12.62 20.812C12.28 20.932 11.72 20.932 11.38 20.812C8.48 19.822 2 15.692 2 8.69199C2 5.60199 4.49 3.10199 7.56 3.10199C9.38 3.10199 10.99 3.98199 12 5.34199C12.5138 4.64787 13.183 4.08372 13.954 3.69473C14.725 3.30575 15.5764 3.10275 16.44 3.10199C19.51 3.10199 22 5.60199 22 8.69199C22 15.692 15.52 19.822 12.62 20.812Z" stroke="#8a1538" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
          <div v-else>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12.62 20.812C12.28 20.932 11.72 20.932 11.38 20.812C8.48 19.822 2 15.692 2 8.69199C2 5.60199 4.49 3.10199 7.56 3.10199C9.38 3.10199 10.99 3.98199 12 5.34199C12.5138 4.64787 13.183 4.08372 13.954 3.69473C14.725 3.30575 15.5764 3.10275 16.44 3.10199C19.51 3.10199 22 5.60199 22 8.69199C22 15.692 15.52 19.822 12.62 20.812Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>

        </div>
      </div>

      <!-- list section  and menu icon-->
      <div class="flex items-center justify-between gap-2 ">

          <!-- list section -->
          <div class="max-w-md flex items-center overflow-x-auto custom-scroll">
            <ul class="flex items-center justify-center gap-2 text-[12px] font-sans">
              <li
                v-for="(section, index) in storeSecion.getSections"
                :key="index"
                @click="onClickSubsection(section.id)"
                :class="{
                  'text-primary-900 border-b-2 font-semibold border-primary-900': activeSectionId === section.id,
                  'text-white': activeSectionId !== section.id
                }"
                class="p-2 text-center  cursor-pointer transition-all duration-200"
              >
                {{ section.name }}
              </li>
            </ul>
          </div>


        <!-- menu icon -->
        <div class="">
          <RouterLink to="/phone/categories">
          <div v-if="isScrolled" >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 7H21" stroke="#8a1538" stroke-width="1.5" stroke-linecap="round"/>
              <path opacity="0.34" d="M3 12H21" stroke="#8a1538" stroke-width="1.5" stroke-linecap="round"/>
              <path d="M3 17H21" stroke="#8a1538" stroke-width="1.5" stroke-linecap="round"/>
            </svg>
          </div>
          <div v-else>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 7H21" stroke="white" stroke-width="1.5" stroke-linecap="round"/>
              <path opacity="0.34" d="M3 12H21" stroke="white" stroke-width="1.5" stroke-linecap="round"/>
              <path d="M3 17H21" stroke="white" stroke-width="1.5" stroke-linecap="round"/>
            </svg>
          </div>
        </RouterLink>
        </div>

      </div>

    </div>

    </header>

    <!-- Swiper Section -->
    <section>
      <SwiperPhoneComp/>
    </section>

    <!-- محتوى الصفحة -->
    <!-- <div class="mt-72 p-6">
      <p class="text-gray-700">
        قم بالتمرير لرؤية تأثير تغيير لون الخلفية في شريط التنقل.
      </p>
      <div class="h-[1000px] bg-gray-100 mt-8"></div>
    </div> -->

  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import { useSectionsPhoneStore } from '@/stores/sectionsphone'
import SwiperPhoneComp from './SwiperPhoneComp.vue';
import SearchPhoneComp from "@/components/phone/SearchPhoneComp.vue";

const storeSecion = useSectionsPhoneStore();


// الحالة التي ستخزن العنصر النشط
const activeSectionId = ref(null);



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

const onClickSubsection = async(id) =>{
  activeSectionId.value = id;
  filteredData.value.sectionId = id
   await storeSecion.fetchSubSectionBySectionID(filteredData)
   await storeSecion.fetchGetBanner(filteredData)
}

// إضافة وإزالة مستمع التمرير
onMounted(async() => {
   await storeSecion.fetchSections(filteredData);
   await storeSecion.fetchSubSectionBySectionID(filteredData)
   await storeSecion.fetchGetBanner(filteredData)
   activeSectionId.value = filteredData.value.sectionId;


  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<style scoped>

header {
  height: 70px;
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




