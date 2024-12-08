import { defineStore } from 'pinia'
import axiosIns from '@/plugins/axios'

export const useProductStore = defineStore('useProductStore', {
  state: () => ({
    allproduct:[],
    totalProducts: {
      currentPage: null,
      totalItems: null,
      totalPages: null,
    },
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

    getproductDetails: (state) => state.productDetails,
    getproductColors: (state) => state.totalProductsDetails.productColors || [],
    getproductSizes: (state) => state.totalProductsDetails.productSizes || [],
    getproductDescriptionDetails: (state) => state.totalProductsDetails.productDescriptionDetails || [],

  },
  actions: {
    async fetchAllProducts() {
      this.loading = true
      this.error = null
      try {
        const response = await axiosIns.get(`products?`,)
        this.allproduct = response.data
        this.totalProducts.currentPage = response.data.products.current_page
        this.totalProducts.totalItems = response.data.products.total
        this.totalProducts.totalPages = response.data.products.last_page
      } catch (error) {
        this.error = 'خطأ أثناء جلب الفئات'
        console.error(error)
      } finally {
        this.loading = false
      }
    },

    async fetchProductDetailsById(data) {
      this.loading = true
      this.error = null
      try {
        const response = await axiosIns.get(`products/show/${data.value.productID}?`)
        this.productDetails =  response.data.product;
        this.totalProductsDetails.productColors = response.data.product.product_colors;
        this.totalProductsDetails.productDescriptionDetails = response.data.product.product_details;
        this.totalProductsDetails.productSizes = response.data.product.size_type_details;

      } catch (error) {
        this.error = error+ 'خطأ أثناء جلب الفئات'
         alert(error+"dsjkn")
      } finally {
        this.loading = false
      }
    },

  },
})
