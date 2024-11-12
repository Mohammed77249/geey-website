<template>
  <div class="container mx-auto px-6 py-12">
    <h2 class="text-2xl font-bold mb-6">Products</h2>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
      <ProductCard v-for="product in products" :key="product.id" :product="product" />
    </div>
  </div>
</template>

<script>
import ProductCard from '@/components/ProductCard.vue'

export default {
  name: "ProductList",
  components: {
    ProductCard
  },
  data() {
    return {
      products: [
        { id: 1, name: 'Dress', price: 99.99, image: '/images/dress.jpg' },
        { id: 2, name: 'T-Shirt', price: 49.99, image: '/images/tshirt.jpg' },
        { id: 3, name: 'Jeans', price: 79.99, image: '/images/jeans.jpg' },
        // Add more products as needed
      ]
    }
  }
}
</script>

<style scoped>
/* Tailwind classes are applied */
</style>
