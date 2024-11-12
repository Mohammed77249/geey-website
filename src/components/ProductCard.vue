<template>
  <div class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow h-32">

    <!-- <img :src="product.image" alt="Product" class="w-full h-20  object-cover"/>
    <div class="pr-4 pl-4">
      <h3 class="text-sm font-semibold text-gray-800">{{ product.name }}</h3>
      <p class="text-gray-600 mt-1">$ {{ product.price }}</p>
    </div> -->
  </div>
</template>

<script>
export default {
  name: 'ProductCard',
  props: {
    product: Object
  },
  methods: {
    addToCart() {
      // Add to cart logic here
      console.log('Product added to cart:', this.product);
    }
  }
}
</script>

<style scoped>
/* Tailwind styles are used */
</style>
