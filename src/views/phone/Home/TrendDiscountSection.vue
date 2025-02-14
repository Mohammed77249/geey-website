<template>
  <div class="grid grid-cols-12  gap-2 p-2  ">

    <div class="col-span-6  bg-white  shadow border rounded-md  ">
      <div>
        <div class="flex items-center justify-between">
          <h1 class="p-1 text-[13px] text-gray-700 ">{{ $t('The most important trends') }}</h1>
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15.0001 19.92L8.48009 13.4C7.71009 12.63 7.71009 11.37 8.48009 10.6L15.0001 4.07996" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>

        <div class="grid grid-cols-2 gap-1 ">
          <div v-for="product in products2" :key="product.id" class="p-1 ">
          <div
            class="cursor-pointer w-[80px]  h-[120px] "
          >
            <img
             :src="product.image"
              alt=""
              class="w-full h-full object-cover transition rounded-lg duration-300 ease-in-out"
            />
          </div>
          <p class="font-sembold text-primary-500 text-xs">{{ product.price }} ر.ي</p>
        </div>
        </div>
      </div>
    </div>


    <div class=" col-span-6 bg-white  shadow border rounded-md  ">
      <div class="flex items-center justify-between">
          <h1 class="p-1 text-[13px] text-gray-700 ">{{ $t('Low prices') }}</h1>
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15.0001 19.92L8.48009 13.4C7.71009 12.63 7.71009 11.37 8.48009 10.6L15.0001 4.07996" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
      <div class="grid grid-cols-2   gap-1 p-2">
        <div v-for="product in products" :key="product.id" class="p-1 ">
          <div
            class="cursor-pointer w-[80px]  h-[120px]"
          >
            <img
             :src="product.image"
              alt=""
              class="w-full h-full object-cover transition rounded-lg duration-300 ease-in-out"
            />
          </div>
          <p class="font-sembold text-primary-500 text-xs">{{ product.price }} ر.ي</p>
        </div>
    </div>
    </div>



  </div>

  </template>

  <script setup>
import {ref } from 'vue'
const products =ref([
        { id: 1, name: 'Dress', price: 99.99, image: '/src/assets/images/products/92265483-9E7E-4FC3-A355-16CCA677C11C.svg' },
        { id: 2, name: 'T-Shirt', price: 49.99, image: '/src/assets/images/Placeholder_01.svg' },
        // Add more products as needed
      ]);

      const products2 = ref([
        { id: 1, name: 'Dress', price: 99.99, image: '/src/assets/images/products/Image (4).svg' },
        { id: 2, name: 'T-Shirt', price: 49.99, image: '/src/assets/images/products/Image.svg' },
        // Add more products as needed
      ]);


  </script>
