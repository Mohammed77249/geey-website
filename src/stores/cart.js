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
  }),
  getters: {
    getallCarts: state => state.allCarts,
    getcartDetails: state => state.cartDetails,

    getproductDetails: state => state.productDetails,
    getproductColors: state => state.totalProductsDetails.productColors || [],
    getproductSizes: state => state.totalProductsDetails.productSizes || [],
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
        this.error = error.response.data.message || 'خطأ أثناء جلب الفئات'
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
        this.error = error.response.data.message || 'خطأ أثناء جلب الفئات'
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

    async creatCart(data) {
      this.loading = true
      this.error = null

      try {
        const response = await axiosIns.post('carts/store', {
          product_id: data.value.product_id,
          color_id: data.value.color_id,
          size_id: data.value.size_id,
          quantity: data.value.quantity,
        });
        if(response){
          this.cartDetails = response.data
          alert(response.data + 'fjfj')

          return true
        }else{
          return false;
        }

      } catch (err) {
        this.error = err.response.data.original.message || 'خطأ أثناء الانشاء '
        return false
      } finally {
        this.loading = false
      }
    },

    async updateCart(cart_id, product_id, color_id, size_id, quantity) {
      this.loading = true
      this.error = null
      try {
        const response = await axiosIns.post(`carts/update/${cart_id}`, {
          product_id,
          color_id,
          size_id,
          quantity,
        })
        this.cartDetails = response.data
        return true
      } catch (err) {
        this.error = err.response.data.message || 'خطأ أثناء تحديث البيانات'
        return false
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
        this.error = err.response.data.message || 'خطأ أثناء  الحذف'
        return false
      } finally {
        this.loading = false
      }
    },
  },
})
