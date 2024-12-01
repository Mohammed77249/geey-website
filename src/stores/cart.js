import { defineStore } from 'pinia';
export const useCartStore = defineStore("cart", {
  state: () => ({
    items: [], // مصفوفة العناصر في السلة
  }),
  getters: {
    totalItems: (state) => state.items.length,
  },
});
