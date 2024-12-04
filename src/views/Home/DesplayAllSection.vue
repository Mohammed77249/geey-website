<template>
  <div class="mt-5 bg-pink-100  h-full mb-10 md:mb-20 rounded-md ">

    <div class="flex justify-between p-5">
      <h1>{{ $t('Show more') }}</h1>
      <h1>{{ $t('Big offers') }}</h1>

    </div>

    <div>
      <div class="grid grid-cols-2 md:grid-cols-3  lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-1 px-5 mb-5 ">
    <div
      v-for="product in products"
      :key="product.id"
      class="p-1 mt-4"
    >
    <div class="cursor-pointer " @mouseenter="onhover(product.id)" @mouseleave="isHover = false"  >
      <img :src="hoverId === product.id && isHover ? product.images[1] : product.images[0] "  alt="" class="w-full h-full object-cover transition duration-300 ease-in-out" />
    </div>

    <p class="font-sembold text-primary-400">{{ product.price }}</p>

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
        { id: 1, name: 'Dress', price: 99.99, images:['/src/assets/images/products/Image (2).svg', '/src/assets/images/Placeholder_01 (1).svg' ]},
        { id: 2, name: 'T-Shirt', price: 49.99, images:['/src/assets/images/products/92265483-9E7E-4FC3-A355-16CCA677C11C.svg', '/src/assets/images/Placeholder_01 (1).svg'] },
        { id: 3, name: 'Jeans', price: 79.99, images:['/src/assets/images/products/Mockup.svg', '/src/assets/images/Placeholder_01 (1).svg'] },
        { id: 4, name: 'Dress', price: 99.99, images:['/src/assets/images/products/unsplash_VpqI6WX6sEs.svg', '/src/assets/images/Placeholder_01 (1).svg'] },
        { id: 5, name: 'T-Shirt', price: 49.99, images:['/src/assets/images/products/unsplash_jsgby4-zj44.svg', '/src/assets/images/Placeholder_01 (1).svg'] },
        { id: 6, name: 'Jeans', price: 79.99, images:['/src/assets/images/products/unsplash_DyhiB_wFifk.svg', '/src/assets/images/Placeholder_01 (1).svg'] },
        // Add more products as needed
      ];

</script>
