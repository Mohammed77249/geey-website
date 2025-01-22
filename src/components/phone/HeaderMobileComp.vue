<template>
  <div class="relative">
    <!-- Header ثابت -->
    <header
      class="fixed top-0 left-0 w-full z-50 transition-all duration-300"
      :class="isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'"
    >

    <div class="grid grid-cols-1 container mx-auto p-2">
      <div class="flex items-center gap-2 ">

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
        <div  class="w-full h-7 ">
          <SearchComp/>
        </div>

        <!-- favorate icon -->
        <div  class="w-7 h-7 ">
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
      <div class="flex items-center gap-2 ">

          <!-- list section -->
        <div class="w-full item-center">
          <div class="overflow-x-auto">
              <ul
                class="flex gap-2 scrollable-list overflow-x-auto text-[12px]  font-sans"
              >
                <li
                  v-for="(section, index) in storeSecion.getSections"
                  :key="index"

                 :class="isScrolled ? 'text-gray-700' : 'text-white'"
                  class=" p-2 text-center rounded-lg cursor-pointer   transition-all duration-200"
                >
                <!-- <RouterLink :to="`/desktop/recommend/${section.id}/${section.name}`"> -->
                  {{ section.name }}
                <!-- </RouterLink> -->
                </li>
              </ul>
          </div>
        </div>

        <!-- menu icon -->
        <div class="">
          <div v-if="isScrolled">
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
import { useSectionsStore } from '@/stores/section'
import SwiperPhoneComp from './SwiperPhoneComp.vue';
import SearchComp from "../SearchComp.vue";




const storeSecion = useSectionsStore();
const filteredData = ref({
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
onMounted(() => {
  storeSecion.fetchSections(filteredData);

  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<style scoped>
/* ارتفاع الهيدر لضمان ظهوره فوق المحتوى */
header {
  height: 70px;
}
</style>



