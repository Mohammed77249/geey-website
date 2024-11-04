<template>
  <header class="bg-white shadow-md">
    <div
      class="flex items-center justify-between py-3 px-6 max-w-screen mx-auto"
    >
      <!-- links -->
      <div class="flex space-x-6">
        <div class="cursor-pointer text-gray-700 hover:text-gray-900">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M5.121 11a4 4 0 117.757 2.828 4 4 0 01-2.829 7.757A4 4 0 115.12 11zm4.88 7l3.02 3.021a5 5 0 007.073-7.071L11.002 9H5.121"
            />
          </svg>
        </div>
        <div class="relative cursor-pointer text-gray-700 hover:text-gray-900">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M3 3h2l.32 1.28a3.5 3.5 0 003.68 2.72H17a3.5 3.5 0 003.5-3.5H7.32A1.5 1.5 0 015.82 1H2.5a1.5 1.5 0 00-1.5 1.5v2a1.5 1.5 0 001.5 1.5h15.5"
            />
          </svg>
          <span
            class="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center"
          >
            0
          </span>
        </div>
      </div>

      <!-- search input -->
      <div class="relative mx-6 flex-1 max-w-xl">
        <input
          type="text"
          placeholder="...البحث عن المنتجات"
          class="w-full pr-10 pl-4 py-2 text-gray-700 border bg-[#F6F6F6] focus:outline-none focus:border-gray-400 text-right"
        />

        <svg
          width="16"
          height="16"
          class="absolute top-1/2 transform -translate-y-1/2 left-0 h-full w-10 text-gray-400 cursor-pointer bg-black"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.33331 13.3333C10.647 13.3333 13.3333 10.647 13.3333 7.33331C13.3333 4.0196 10.647 1.33331 7.33331 1.33331C4.0196 1.33331 1.33331 4.0196 1.33331 7.33331C1.33331 10.647 4.0196 13.3333 7.33331 13.3333Z"
            stroke="white"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            opacity="0.4"
            d="M12.6199 13.7932C12.9733 14.8599 13.7799 14.9665 14.3999 14.0332C14.9666 13.1799 14.5933 12.4799 13.5666 12.4799C12.8066 12.4732 12.3799 13.0665 12.6199 13.7932Z"
            stroke="white"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>

      <!-- logo-->
      <div class="flex items-center space-x-2 cursor-pointer">
        <span class="text-2xl 2xl:text-5xl font-bold text-gray-800">Geey</span>
        <img
          src="../assets/logogeey.svg"
          alt="SHEIN"
          class="h-8 w-8 2xl:h-16 2xl:w-20"
        />
      </div>
    </div>

    <!-- list of items-->
    <nav class="py-2 px-6">
      <ul class="flex justify-center space-x-8 text-gray-600 font-sans ">
        <li
          v-for="(item, index) in menuItems"
          :key="index"
          @mouseover=" showSidebar()"
          @mouseleave=" hideSidebar()"
          class="cursor-pointer hover:text-black"
        >
          {{ item.name }}
        </li>
      </ul>
      <SidebarComp :isOpen="isSidebarOpen" :list="menuItems" />
    </nav>

  </header>
</template>

<script setup>
import SidebarComp from './SidebarComp.vue';
import { ref } from 'vue';
const isSidebarOpen = ref(false)
const menuItems = [
        { name: 'الملابس النسائية' },
        { name: 'الملابس الرجالية' },
        { name: 'الأطفال' },
        { name: 'الإكسسوارات' },
        { name: 'الجديد', },
        { name: 'التخفيضات' },
        { name: 'الأحذية' },
        { name: 'الحقائب' },
        { name: 'فساتين' },
        { name: 'قمصان' },
        { name: 'بناطيل' },
        { name: 'جاكيتات' },
        { name: 'ملابس رياضية' },
        { name: 'المنزل والمطبخ ' },
        { name: 'ملابس السهرة ' },
        { name: 'إلكترونيات' },
        { name: 'الالعاب' },
        { name: 'اجهزة' },
        { name: 'السيارات' },
        { name: 'مستلزمات الحيوانات' },
        { name: 'الكل' },


]

const showSidebar = () => {
  isSidebarOpen.value = true;
};
const hideSidebar = () => {
  isSidebarOpen.value = false;
};



</script>
