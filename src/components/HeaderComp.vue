<template>
  <header class="bg-white shadow-md pr-10 pl-10   max-w-screen-3xl   mx-auto ">

    <div class="grid grid-cols-1">

    <div class="flex items-center justify-between ">
      <!-- links -->
      <div class="flex space-x-6">

        <div class="cursor-pointer text-gray-700 hover:text-gray-900">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <g opacity="0.4">
          <path d="M7.99961 3H8.99961C7.04961 8.84 7.04961 15.16 8.99961 21H7.99961" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M15 3C16.95 8.84 16.95 15.16 15 21" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M3 16V15C8.84 16.95 15.16 16.95 21 15V16" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M3 9.0001C8.84 7.0501 15.16 7.0501 21 9.0001" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </g>
          </svg>
        </div>

        <div class="relative cursor-pointer text-gray-700 hover:text-gray-900">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2 2H3.74C4.82 2 5.67 2.93 5.58 4L4.75 13.96C4.71759 14.3459 4.76569 14.7342 4.89123 15.1005C5.01678 15.4669 5.21705 15.8031 5.47934 16.0879C5.74163 16.3728 6.06023 16.6001 6.41495 16.7553C6.76967 16.9106 7.15278 16.9905 7.54 16.99H18.19C19.63 16.99 20.89 15.81 21 14.38L21.54 6.88C21.66 5.22 20.4 3.87 18.73 3.87H5.82" stroke="black" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            <path opacity="0.4" d="M9 8H21M16.25 22C16.5815 22 16.8995 21.8683 17.1339 21.6339C17.3683 21.3995 17.5 21.0815 17.5 20.75C17.5 20.4185 17.3683 20.1005 17.1339 19.8661C16.8995 19.6317 16.5815 19.5 16.25 19.5C15.9185 19.5 15.6005 19.6317 15.3661 19.8661C15.1317 20.1005 15 20.4185 15 20.75C15 21.0815 15.1317 21.3995 15.3661 21.6339C15.6005 21.8683 15.9185 22 16.25 22ZM8.25 22C8.58152 22 8.89946 21.8683 9.13388 21.6339C9.3683 21.3995 9.5 21.0815 9.5 20.75C9.5 20.4185 9.3683 20.1005 9.13388 19.8661C8.89946 19.6317 8.58152 19.5 8.25 19.5C7.91848 19.5 7.60054 19.6317 7.36612 19.8661C7.1317 20.1005 7 20.4185 7 20.75C7 21.0815 7.1317 21.3995 7.36612 21.6339C7.60054 21.8683 7.91848 22 8.25 22Z" stroke="black" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <span
            class="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center"
          >
            0
          </span>
        </div>

        <div class="relative cursor-pointer text-gray-700 hover:text-gray-900">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12.62 20.812C12.28 20.932 11.72 20.932 11.38 20.812C8.48 19.822 2 15.692 2 8.69199C2 5.60199 4.49 3.10199 7.56 3.10199C9.38 3.10199 10.99 3.98199 12 5.34199C12.5138 4.64787 13.183 4.08372 13.954 3.69473C14.725 3.30575 15.5764 3.10275 16.44 3.10199C19.51 3.10199 22 5.60199 22 8.69199C22 15.692 15.52 19.822 12.62 20.812Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <span
            class="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center"
          >
            0
          </span>
        </div>

        <div class="cursor-pointer text-gray-700 hover:text-gray-900">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="#292D32" xmlns="http://www.w3.org/2000/svg">
            <path opacity="0.4" d="M12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12Z" fill="#292D32"/>
            <path d="M11.9999 14.5C6.98991 14.5 2.90991 17.86 2.90991 22C2.90991 22.28 3.12991 22.5 3.40991 22.5H20.5899C20.8699 22.5 21.0899 22.28 21.0899 22C21.0899 17.86 17.0099 14.5 11.9999 14.5Z" fill="gray"/>
          </svg>
        </div>

      </div>

      <!-- search input -->
      <div class="relative mx-6 flex-1 max-w-xl ">
        <input
          type="text"
          placeholder="...البحث عن المنتجات"
          class="w-full pr-10 pl-4 py-2 text-gray-700 border bg-[#F6F6F6] focus:outline-none focus:border-gray-400 text-right"
        />
        <div class="absolute top-1/2 transform -translate-y-1/2 left-0 h-full w-10 text-gray-400 cursor-pointer bg-black">
          <svg
          width="16"
          height="16"
          class="absolute top-1/2 transform -translate-y-1/2 left-0 h-[50%] w-10 text-gray-400 cursor-pointer "
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
        <div class="mx-11 my-3">
          <svg width="22" height="22" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4.50668 14.6666H11.4933C13.3333 14.6666 14.0667 13.54 14.1533 12.1666L14.5 6.65998C14.5933 5.21998 13.4467 3.99998 12 3.99998C11.5933 3.99998 11.22 3.76665 11.0333 3.40665L10.5533 2.43998C10.2467 1.83331 9.44668 1.33331 8.76668 1.33331H7.24001C6.55334 1.33331 5.75334 1.83331 5.44668 2.43998L4.96668 3.40665C4.78001 3.76665 4.40668 3.99998 4.00001 3.99998C2.55334 3.99998 1.40668 5.21998 1.50001 6.65998L1.84668 12.1666C1.92668 13.54 2.66668 14.6666 4.50668 14.6666Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path opacity="0.4" d="M7 5.33331H9" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path opacity="0.4" d="M7.99998 12C9.19331 12 10.1666 11.0267 10.1666 9.83335C10.1666 8.64002 9.19331 7.66669 7.99998 7.66669C6.80665 7.66669 5.83331 8.64002 5.83331 9.83335C5.83331 11.0267 6.80665 12 7.99998 12Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
        </div>





      </div>

      <!-- logo-->
      <div class="flex items-center space-x-2 cursor-pointer">
        <span class="text-2xl 2xl:text-4xl font-bold text-gray-800">Geey</span>
        <img
          src="../assets/logogeey.svg"
          alt="SHEIN"
          class="h-8 w-8 2xl:h-16 2xl:w-16"
        />
      </div>

    </div>


      <div>
         <!-- list of items-->
    <nav class="flex py-2 px-5 mx-auto ">
     <ul class="flex  justify-center gap-2  scrollable-list whitespace-nowrap overflow-x-auto text-[12px]  text-gray-600 font-sans ">

        <li
          v-for="(item, index) in menuItems"
          :key="index"
          @mouseover=" showSidebar()"
          @mouseleave=" hideSidebar()"
          class="flex-shrink-0 p-2 text-center  rounded-lg cursor-pointer hover:text-black hover:bg-gray-100"
        >
          {{ item.name }}
        </li>
      </ul>

      <SidebarComp :isOpen="isSidebarOpen" :list="menuItems" :showhoever="showSidebar" />
    </nav>
      </div>

    </div>
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



