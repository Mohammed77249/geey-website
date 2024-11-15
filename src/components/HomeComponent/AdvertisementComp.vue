<template>
  <div class="grid grid-cols-12 mt-5 gap-1 p-2 sm:p-0 sm:gap-5">

    <div class="col-span-3 rtl bg-pink-200  rounded-md ">
      <h1 class="p-2 text-primary-900 font-semibold">اسعار منخفظة</h1>
      <div class="grid grid-cols-3   gap-1 p-2">
      <ProductCard :isORNot="false" v-for="product in products" :key="product.id" :product="product" />
    </div>
    </div>

    <div class="col-span-6 w-full h-80 sm:max-h-68  overflow-hidden    rounded-md">
       <SwiperComp/>
    </div>

    <div class="col-span-3 bg-[#be58d733]  rtl rounded-md">
      <div>
        <h1 class="p-2">اهم الترندات</h1>
        <div class="grid grid-cols-3 gap-1 p-2">
      <ProductCard :isORNot="true" v-for="product in products" :key="product.id" :product="product" />
    </div>
      </div>
    </div>




  </div>




  </template>

  <script setup>

import ProductCard from '../ProductCard.vue';
import SwiperComp from './SwiperComp.vue';

const products = [
        { id: 1, name: 'Dress', price: 99.99, image: '/src/assets/images/Placeholder_01 (1).svg' },
        { id: 2, name: 'T-Shirt', price: 49.99, image: '/src/assets/images/Placeholder_01 (1).svg' },
        { id: 3, name: 'Jeans', price: 79.99, image: '/src/assets/images/Placeholder_01 (1).svg' },
        { id: 4, name: 'Dress', price: 99.99, image: '/src/assets/images/Placeholder_01 (1).svg'},
        { id: 5, name: 'T-Shirt', price: 49.99, image: '/src/assets/images/Placeholder_01 (1).svg'},
        { id: 6, name: 'Jeans', price: 79.99, image: '/src/assets/images/Placeholder_01 (1).svg' },
        // Add more products as needed
      ];


  </script>
