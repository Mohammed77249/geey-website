
<template>
  <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
    <div
      v-for="product in products"
      :key="product.id"
      class="border p-4 rounded-lg shadow-sm hover:shadow-lg"
    >
      <img :src="product.image" alt="" class="w-full h-48 object-cover rounded-lg" />
      <h3 class="font-semibold text-lg mt-2">{{ product.name }}</h3>
      <p class="text-gray-600">{{ product.price }}</p>
      <button class="mt-2 w-full bg-blue-500 text-white py-2 rounded-lg">أضف إلى السلة</button>
    </div>
  </div>
</template>

<script setup>

 const products = [
        { id: 1, name: 'منتج 1', price: 'ر.س 50', image: 'https://via.placeholder.com/150' },
        { id: 2, name: 'منتج 2', price: 'ر.س 60', image: 'https://via.placeholder.com/150' },
        { id: 3, name: 'منتج 3', price: 'ر.س 70', image: 'https://via.placeholder.com/150' },
      ]

</script>
