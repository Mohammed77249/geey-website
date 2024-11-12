<template>
  <div class="mt-5 bg-pink-100 h-96 mb-10 rounded-md">

    <div class="flex justify-between p-5">
      <h1>عرض المزيد</h1>
      <h1>عروض كبرى</h1>

    </div>

    <div>
      <div class="grid grid-cols-12 mt-5 gap-5 bg-[#CA5BE533] rtl rounded-md">
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 gap-1 p-2 ">
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
