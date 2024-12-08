import { defineStore } from 'pinia';
export const useCartStore = defineStore("cart", {
  state: () => ({
    items: [], 
  }),
  getters: {
    totalItems: (state) => state.items.length,
  },
});
