<template>
  <div class="container mx-auto px-6 py-12">
    <h2 class="text-2xl font-bold mb-6">Shopping Cart</h2>
    <div v-if="cartItems.length > 0">
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-8">
        <div v-for="item in cartItems" :key="item.id" class="bg-white p-4 shadow-md rounded-lg">
          <img :src="item.image" alt="Product" class="w-32 h-32 object-cover"/>
          <div class="flex flex-col justify-between">
            <h3 class="text-lg font-semibold text-gray-800">{{ item.name }}</h3>
            <p class="text-gray-600">$ {{ item.price }}</p>
            <button @click="removeFromCart(item.id)" class="text-red-500 hover:text-red-700">Remove</button>
          </div>
        </div>
      </div>
      <div class="mt-8">
        <div class="flex justify-between items-center">
          <span class="font-semibold text-xl">Total: $ {{ totalPrice }}</span>
          <button class="bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600">Checkout</button>
        </div>
      </div>
    </div>
    <div v-else>
      <p>Your cart is empty.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Cart",
  data() {
    return {
      cartItems: [
        { id: 1, name: 'Dress', price: 99.99, image: '/images/dress.jpg' },
        { id: 2, name: 'T-Shirt', price: 49.99, image: '/images/tshirt.jpg' },
      ]
    }
  },
  computed: {
    totalPrice() {
      return this.cartItems.reduce((total, item) => total + item.price, 0).toFixed(2);
    }
  },
  methods: {
    removeFromCart(itemId) {
      this.cartItems = this.cartItems.filter(item => item.id !== itemId);
    }
  }
}
</script>

<style scoped>
/* Tailwind styles */
</style>
