<template>


  <div class="relative max-w-lg mx-auto ">
    <RouterLink to="/phone/search">
    <!-- شريط البحث -->
    <div class="flex items-center overflow-hidden ">
      <input
        type="text"
        class="w-full  py-[2px]  text-gray-700 border  bg-gray-50  focus:outline-none focus:border-primary-900"
        :placeholder="$t('Search for products...')"
      />
      <button
        class="px-2 md:px-2 w-10 text-gray-400  py-[5px] md:py-2 cursor-pointer  transition"
         :class="isScrolled ? 'bg-primary-900' : 'bg-gray-100 md:bg-primary-900'"
      >

      <div class=" block md:hidden">
        <svg v-if="isScrolled"
          width="20"
          height="20"
          class="text-gray-400 cursor-pointer"
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
            d="M12.6199 13.7932C12.9733 14.8599 13.7799 14.9665 14.3999 14.0332C14.9666 13.1799 14.5933 12.4799 13.5666 12.4799C12.8066 12.4732 12.3799 13.0665 12.6199 13.7932Z"
            stroke="white"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>

        <svg v-else
          width="20"
          height="20"
          class="text-gray-400 cursor-pointer"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.33331 13.3333C10.647 13.3333 13.3333 10.647 13.3333 7.33331C13.3333 4.0196 10.647 1.33331 7.33331 1.33331C4.0196 1.33331 1.33331 4.0196 1.33331 7.33331C1.33331 10.647 4.0196 13.3333 7.33331 13.3333Z"
            stroke="black"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M12.6199 13.7932C12.9733 14.8599 13.7799 14.9665 14.3999 14.0332C14.9666 13.1799 14.5933 12.4799 13.5666 12.4799C12.8066 12.4732 12.3799 13.0665 12.6199 13.7932Z"
            stroke="black"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>

      </div>


      </button>
    </div>

  </RouterLink>

  </div>
</template>
<script setup>

defineProps({
  isScrolled: {
    type: Boolean,
  },

});

</script>
