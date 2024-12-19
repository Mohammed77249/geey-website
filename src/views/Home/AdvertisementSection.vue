<template>
  <div class="grid grid-cols-12 md:mt-5 gap-1 p-2 sm:p-0 sm:gap-5">

    <div class="col-span-12 md:col-span-3 bg-[#be58d733]  hidden rounded-md md:block ">
      <div>
        <h1 class="p-2">{{ $t('The most important trends') }}</h1>
        <div class="grid grid-cols-3 gap-1 p-2">
          <ProductCard :isORNot="true" v-for="product in products2" :key="product.id" :product="product" />
        </div>
      </div>
    </div>



    <div class="col-span-12 md:col-span-6  w-full h-80 sm:max-h-68  overflow rounded-md">
       <SwiperComp/>
    </div>

    <div class=" col-span-12 md:col-span-3  bg-pink-200  rounded-md hidden md:block">
      <h1 class="p-2 text-primary-900 font-semibold">{{ $t('Low prices') }}</h1>
      <div class="grid grid-cols-3   gap-1 p-2">
      <ProductCard :isORNot="false" v-for="product in products" :key="product.id" :product="product" />
    </div>
    </div>



  </div>

  </template>

  <script setup>
import SwiperComp from '@/components/HomeComponent/SwiperComp.vue';
import ProductCard from '@/components/ProductCard.vue';
import {ref } from 'vue'
const products =ref([
        { id: 1, name: 'Dress', price: 99.99, image: '/src/assets/images/products/92265483-9E7E-4FC3-A355-16CCA677C11C.svg' },
        { id: 2, name: 'T-Shirt', price: 49.99, image: '/src/assets/images/Placeholder_01.svg' },
        { id: 3, name: 'Jeans', price: 79.99, image: '/src/assets/images/Placeholder_01 (1).svg' },
        { id: 4, name: 'Dress', price: 99.99, image: '/src/assets/images/products/Image (1).svg'},
        { id: 5, name: 'T-Shirt', price: 49.99, image: '/src/assets/images/products/Image (2).svg'},
        { id: 6, name: 'Jeans', price: 79.99, image: '/src/assets/images/products/Image (3).svg' },
        // Add more products as needed
      ]);

      const products2 = ref([
        { id: 1, name: 'Dress', price: 99.99, image: '/src/assets/images/products/Image (4).svg' },
        { id: 2, name: 'T-Shirt', price: 49.99, image: '/src/assets/images/products/Image.svg' },
        { id: 3, name: 'Jeans', price: 79.99, image: '/src/assets/images/products/Mockup.svg' },
        { id: 4, name: 'Dress', price: 99.99, image: '/src/assets/images/products/Placeholder_01 (2).svg'},
        { id: 5, name: 'T-Shirt', price: 49.99, image: '/src/assets/images/products/Placeholder_01 (3).svg'},
        { id: 6, name: 'Jeans', price: 79.99, image: '/src/assets/images/products/Rectangle 1113 (1).svg' },
        // Add more products as needed
      ]);


  </script>
