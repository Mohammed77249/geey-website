<template>
  <div
    class="mt-5 mx-2 bg-pink-50 border shadow h-[200px] rounded-lg"
  >
    <div class="flex justify-between px-2 pt-2">
      <h1 class="text-[13px] text-gray-700 ">{{ $t('Big offers') }}</h1>
      <div class="flex items-center justify-center">
        <h1 class="text-[13px] text-gray-700 ">{{ $t('Show more') }}</h1>
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M15.0001 19.92L8.48009 13.4C7.71009 12.63 7.71009 11.37 8.48009 10.6L15.0001 4.07996" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </div>

    </div>

    <div class="">
      <div
        class="flex  overflow-x-auto custom-scroll gap-1 px-5 mb-5"
      >
        <div v-for="product in products" :key="product.id" class="p-1 mt-4 ">
          <div
            class="cursor-pointer w-[100px]  h-[120px] "
            @mouseenter="onhover(product.id)"
            @mouseleave="isHover = false"
          >
            <img
              :src="
                hoverId === product.id && isHover
                  ? product.images[1]
                  : product.images[0]
              "
              alt=""
              class="w-full h-full  rounded-lg  object-cover transition duration-300 ease-in-out"
            />
          </div>

          <p class="font-sembold text-primary-500 text-xs">{{ product.price }} ر.ي</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const isHover = ref()
const hoverId = ref(null)

const onhover = id => {
  isHover.value = true

  hoverId.value = id
}
const products = ref([
  {
    id: 1,
    name: 'Dress',
    price: 99.99,
    images: [
      '/src/assets/images/products/Image (2).svg',
      '/src/assets/images/Placeholder_01 (1).svg',
    ],
  },
  {
    id: 2,
    name: 'T-Shirt',
    price: 49.99,
    images: [
      '/src/assets/images/products/92265483-9E7E-4FC3-A355-16CCA677C11C.svg',
      '/src/assets/images/Placeholder_01 (1).svg',
    ],
  },
  {
    id: 3,
    name: 'Jeans',
    price: 79.99,
    images: [
      '/src/assets/images/products/Mockup.svg',
      '/src/assets/images/Placeholder_01 (1).svg',
    ],
  },
  {
    id: 4,
    name: 'Dress',
    price: 99.99,
    images: [
      '/src/assets/images/products/unsplash_VpqI6WX6sEs.svg',
      '/src/assets/images/Placeholder_01 (1).svg',
    ],
  },
  {
    id: 5,
    name: 'T-Shirt',
    price: 49.99,
    images: [
      '/src/assets/images/products/unsplash_jsgby4-zj44.svg',
      '/src/assets/images/Placeholder_01 (1).svg',
    ],
  },
  {
    id: 6,
    name: 'Jeans',
    price: 79.99,
    images: [
      '/src/assets/images/products/unsplash_DyhiB_wFifk.svg',
      '/src/assets/images/Placeholder_01 (1).svg',
    ],
  },

  {
    id: 7,
    name: 'Dress',
    price: 99.99,
    images: [
      '/src/assets/images/products/Image (2).svg',
      '/src/assets/images/Placeholder_01 (1).svg',
    ],
  },
  {
    id: 8,
    name: 'T-Shirt',
    price: 49.99,
    images: [
      '/src/assets/images/products/92265483-9E7E-4FC3-A355-16CCA677C11C.svg',
      '/src/assets/images/Placeholder_01 (1).svg',
    ],
  },
  {
    id: 9,
    name: 'Jeans',
    price: 79.99,
    images: [
      '/src/assets/images/products/Mockup.svg',
      '/src/assets/images/Placeholder_01 (1).svg',
    ],
  },
  {
    id: 10,
    name: 'Dress',
    price: 99.99,
    images: [
      '/src/assets/images/products/unsplash_VpqI6WX6sEs.svg',
      '/src/assets/images/Placeholder_01 (1).svg',
    ],
  },
  {
    id: 11,
    name: 'T-Shirt',
    price: 49.99,
    images: [
      '/src/assets/images/products/unsplash_jsgby4-zj44.svg',
      '/src/assets/images/Placeholder_01 (1).svg',
    ],
  },
  {
    id: 12,
    name: 'Jeans',
    price: 79.99,
    images: [
      '/src/assets/images/products/unsplash_DyhiB_wFifk.svg',
      '/src/assets/images/Placeholder_01 (1).svg',
    ],
  },
  // Add more products as needed
]);
</script>


<style>
.custom-scroll::-webkit-scrollbar {
  width: 0px;
  height: 0px;
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
