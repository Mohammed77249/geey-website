<template>
  <div class="grid grid-cols-12 mt-5 gap-1 p-2 sm:p-0 sm:gap-5">

    <div class="col-span-3 rtl bg-[#F0DA97]  rounded-md ">
      <h1 class="p-2">اسعار منخفظة</h1>
      <div class="grid grid-cols-3   gap-1 p-2">
      <ProductCard v-for="product in products" :key="product.id" :product="product" />
    </div>
    </div>

    <div class="col-span-6 w-full h-80 sm:max-h-68  overflow-hidden   bg-blue-500 rounded-md">
      <img src="/src/assets/images/Big Sale Banner.svg" class="object-cover w-full h-80 sm:h-full rounded" />
    </div>

    <div class="col-span-3 bg-[#CA5BE533]  rtl rounded-md">
      <div>
        <h1 class="p-2">اهم الترندات</h1>
        <div class="grid grid-cols-3 gap-1 p-2">
      <ProductCard v-for="product in products" :key="product.id" :product="product" />
    </div>
      </div>
    </div>




  </div>




  </template>

  <script setup>

import ProductCard from '../ProductCard.vue';

const products = [
        { id: 1, name: 'Dress', price: 99.99, image: '/src/assets/Big Sale Banner.svg' },
        { id: 2, name: 'T-Shirt', price: 49.99, image: '/images/tshirt.jpg' },
        { id: 3, name: 'Jeans', price: 79.99, image: '/images/jeans.jpg' },
        { id: 4, name: 'Dress', price: 99.99, image: '/src/assets/Big Sale Banner.svg' },
        { id: 5, name: 'T-Shirt', price: 49.99, image: '/images/tshirt.jpg' },
        { id: 6, name: 'Jeans', price: 79.99, image: '/images/jeans.jpg' },
        // Add more products as needed
      ];


  </script>
