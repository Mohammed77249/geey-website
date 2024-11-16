
<template>
  <div class="mx-auto pl-2 pr-2  ">

    <div class="grid grid-cols-2 md:grid-cols-3  lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-1 ">
    <div
      v-for="product in products"
      :key="product.id"
      class="p-1 mt-4"
    >
    <div class="cursor-pointer w-[full] h-[280px]" @mouseenter="onhover(product.id)" @mouseleave="isHover = false"  >
      <img :src="hoverId === product.id && isHover ? product.images[1] : product.images[0] "  alt="" class="w-full h-full object-cover transition duration-300 ease-in-out" />
    </div>

      <h3 class="font-semibold rtl text text-sm mt-1">{{ product.name }}</h3>

    <div class="flex items-center justify-between">
      <div class="cursor-pointer w-10 flex items-center justify-center border border-black rounded-full">
        <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"

            >
              <path
                d="M2 2H3.74C4.82 2 5.67 2.93 5.58 4L4.75 13.96C4.71759 14.3459 4.76569 14.7342 4.89123 15.1005C5.01678 15.4669 5.21705 15.8031 5.47934 16.0879C5.74163 16.3728 6.06023 16.6001 6.41495 16.7553C6.76967 16.9106 7.15278 16.9905 7.54 16.99H18.19C19.63 16.99 20.89 15.81 21 14.38L21.54 6.88C21.66 5.22 20.4 3.87 18.73 3.87H5.82"
                stroke="#000000"
                stroke-width="2"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                opacity="0.4"
                d="M9 8H21M16.25 22C16.5815 22 16.8995 21.8683 17.1339 21.6339C17.3683 21.3995 17.5 21.0815 17.5 20.75C17.5 20.4185 17.3683 20.1005 17.1339 19.8661C16.8995 19.6317 16.5815 19.5 16.25 19.5C15.9185 19.5 15.6005 19.6317 15.3661 19.8661C15.1317 20.1005 15 20.4185 15 20.75C15 21.0815 15.1317 21.3995 15.3661 21.6339C15.6005 21.8683 15.9185 22 16.25 22ZM8.25 22C8.58152 22 8.89946 21.8683 9.13388 21.6339C9.3683 21.3995 9.5 21.0815 9.5 20.75C9.5 20.4185 9.3683 20.1005 9.13388 19.8661C8.89946 19.6317 8.58152 19.5 8.25 19.5C7.91848 19.5 7.60054 19.6317 7.36612 19.8661C7.1317 20.1005 7 20.4185 7 20.75C7 21.0815 7.1317 21.3995 7.36612 21.6339C7.60054 21.8683 7.91848 22 8.25 22Z"
                stroke="#000000"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
        </svg>
      </div>
      <div class="flex gap-2  items-center ">
        <div class="border border-primary-400 ">
         <p class=" text-[10px] text-primary-400 "> %50- </p>
        </div>
        <p class="font-sembold text-primary-400">{{ product.price }}</p>

      </div>

    </div>

    </div>
  </div>


  </div>


</template>

<script setup>
import { ref } from 'vue';


const isHover = ref();
const hoverId = ref(null);

const onhover = (id)=>{
  isHover.value = true;

  hoverId.value= id;

}

const products = [
        { id: 1, name: 'منتج 1', price: 'ر.س 50', images:[ '/src/assets/images/products/92265483-9E7E-4FC3-A355-16CCA677C11C.svg', '/src/assets/images/Placeholder_01 (1).svg'  ],},
        { id: 2, name: 'منتج 2', price: 'ر.س 60',images:[ '/src/assets/images/products/Image (1).svg', '/src/assets/images/Placeholder_01 (1).svg'  ],},
        { id: 3, name: 'منتج 3', price: 'ر.س 70', images:[ '/src/assets/images/products/Image (2).svg', '/src/assets/images/Placeholder_01 (1).svg' ],},
        { id: 4, name: 'منتج 3', price: 'ر.س 70',images:[ '/src/assets/images/products/Image (3).svg', '/src/assets/images/Placeholder_01 (1).svg'  ],},
        { id: 5, name: 'منتج 3', price: 'ر.س 70', images:[ '/src/assets/images/products/Image (4).svg', '/src/assets/images/Placeholder_01 (1).svg'  ],},
        { id: 6, name: 'منتج 3', price: 'ر.س 70', images:[ '/src/assets/images/products/Image.svg', '/src/assets/images/Placeholder_01 (1).svg'  ],},
        { id: 7, name: 'منتج 3', price: 'ر.س 70', images:[ '/src/assets/images/products/Mockup.svg', '/src/assets/images/Placeholder_01 (1).svg'  ],},
        { id: 8, name: 'منتج 3', price: 'ر.س 70', images:[ '/src/assets/images/products/Placeholder_01 (2).svg', '/src/assets/images/Placeholder_01 (1).svg'  ],},
        { id: 9, name: 'منتج 3', price: 'ر.س 70', images:[ '/src/assets/images/products/Placeholder_01 (3).svg', '/src/assets/images/Placeholder_01 (1).svg'  ],},
        { id: 10, name: 'منتج 3', price: 'ر.س 70', images:[ '/src/assets/images/products/Placeholder_01 (4).svg', '/src/assets/images/Placeholder_01 (1).svg'  ],},
        { id: 11, name: 'منتج 3', price: 'ر.س 70', images:[ '/src/assets/images/products/Placeholder_01 (5).svg', '/src/assets/images/Placeholder_01 (1).svg'  ],},
        { id: 12, name: 'منتج 3', price: 'ر.س 70', images:[ '/src/assets/images/products/Rectangle 1113 (1).svg', '/src/assets/images/Placeholder_01 (1).svg'  ],},
        { id: 13, name: 'منتج 3', price: 'ر.س 70', images:[ '/src/assets/images/products/Rectangle 1253.svg', '/src/assets/images/Placeholder_01 (1).svg'  ],},
        { id: 14, name: 'منتج 3', price: 'ر.س 70', images:[ '/src/assets/images/products/Rectangle 56.svg', '/src/assets/images/Placeholder_01 (1).svg'  ],},
        { id: 15, name: 'منتج 3', price: 'ر.س 70', images:[ '/src/assets/images/products/Rectangle 72 (1).svg', '/src/assets/images/Placeholder_01 (1).svg'  ],},
        { id: 16, name: 'منتج 3', price: 'ر.س 70', images:[ '/src/assets/images/products/unsplash_VpqI6WX6sEs.svg', '/src/assets/images/Placeholder_01 (1).svg'  ],},
        { id: 17, name: 'منتج 3', price: 'ر.س 70', images:[ '/src/assets/images/products/Rectangle 75.svg', '/src/assets/images/Placeholder_01 (1).svg'  ],},
        { id: 18, name: 'منتج 3', price: 'ر.س 70', images:[ '/src/assets/images/products/unsplash_DyhiB_wFifk.svg', '/src/assets/images/Placeholder_01 (1).svg'  ],},

      ];

</script>
