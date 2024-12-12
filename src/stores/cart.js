import { defineStore } from 'pinia'
import axiosIns from '@/plugins/axios'
export const useCartStore = defineStore('cart', {
  state: () => ({
    allCarts: [],
    cartDetails: [],
    productDetails: null,
    totalProductsDetails: {
      productColors: null,
      productSizes: null,
      productDescriptionDetails: null,
    },

    loading: false,
    error: null,
    isCheckoutEnabled: false,
  }),
  getters: {
    getallCarts: state => state.allCarts,
    getcartDetails: state => state.cartDetails,
    getproductDetails: state => state.productDetails || [],
    getproductColors: state => state.totalProductsDetails.productColors || [],
    getproductSizes: state => state.totalProductsDetails.productSizes || [],

    totalItems(state) {
      return state.allCarts.reduce((acc, item) => acc + item.quantity, 0);
    },
    totalPrice(state) {
      return state.allCarts.reduce((acc, item) => acc + item.product_price * item.quantity, 0);
    },
    totalDiscount(state) {
      return state.totalPrice * 0.1; // خصم 10%
    },
    finalPrice(state) {
      return state.totalPrice - state.totalDiscount;
    },

    enableCheckout() {
      this.isCheckoutEnabled = true;
    },

  },
  actions: {
    async fetchProductDetailsByIdForCart(data) {
      this.loading = true
      this.error = null
      try {
        const response = await axiosIns.get(
          `product_data/${data.value.productID}?`,
        )
        this.productDetails = response.data.product
        this.totalProductsDetails.productColors =
          response.data.product.product_colors
        this.totalProductsDetails.productSizes =
          response.data.product.size_type_details
      } catch (error) {
        this.error = error.response.data || 'خطأ أثناء جلب الفئات'
      } finally {
        this.loading = false
      }
    },

    async fetchAllProductsInCart() {
      this.loading = true
      this.error = null
      try {
        const response = await axiosIns.get(`carts?`)
        this.allCarts = response.data
      } catch (error) {
        this.error = error.response.data || 'خطأ أثناء جلب الفئات'
        console.error(error)
      } finally {
        this.loading = false
      }
    },

    async fetchProductsInCartByID(data) {
      this.loading = true
      this.error = null
      try {
        const response = await axiosIns.get(`carts/${data.value.cartID}`)
        this.cartDetails = response.data
      } catch (error) {
        this.error = error.response.data || 'خطأ أثناء جلب المنتجات'
        console.error(error)
      } finally {
        this.loading = false
      }
    },

    async creatCart(product_id, color_id, size_id, quantity) {
      this.loading = true
      this.error = null
      const formData = new FormData()
      formData.append('product_id', product_id)
      formData.append('color_id', color_id)
      formData.append('size_id', size_id)
      formData.append('quantity', quantity)

      try {
        const response = await axiosIns.post('carts/store', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        })

        if (response.data.original) {
          this.productMessage = response.data.original.message
        } else {
          this.cartDetails = response.data
        }
        return true
      } catch (err) {
        this.error = err + 'حدث خطأ غير متوقع، يرجى المحاولة لاحقًا'

        return false
      } finally {
        this.loading = false
      }
    },

    async updateCart(cart_id, product_id, color_id, size_id, quantity) {
      this.loading = true
      this.error = null
      const formData = new FormData()
      formData.append('product_id', product_id)
      formData.append('color_id', color_id)
      formData.append('size_id', size_id)
      formData.append('quantity', quantity)
      try {
        const response = await axiosIns.post(`carts/update/${cart_id}`,formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        })

          this.cartDetails = response.data

        return true
      } catch (err) {
        this.error = err + 'حدث خطأ غير متوقع، يرجى المحاولة لاحقًا'
        return false;

      } finally {
        this.loading = false
      }
    },

    async deleteCart(cart_id) {
      this.loading = true
      this.error = null
      try {
        const response = await axiosIns.post(`carts/delete/${cart_id}`)
        this.cartDetails = response.data
        return true
      } catch (err) {
        this.error = err + 'خطأ أثناء  الحذف'
        return false
      } finally {
        this.loading = false
      }
    },
  },
})
