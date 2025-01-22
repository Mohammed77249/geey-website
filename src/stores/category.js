import { defineStore } from 'pinia'
import axiosIns from '@/plugins/axios'

export const useCategoriesStore = defineStore('useCategoriesStore', {
  state: () => ({
    allcategories: [],
    subcategories: [],
    categories_for_search:[],
    products: [],
    totalProducts: {
      currentPage: null,
      totalItems: null,
      totalPages: null,
    },
    productDetails: null,
    loading: false,
    error: null,
  }),
  getters: {
    getCategories: state => state.allcategories,
    getProducts: state => state.products,
    getSubCategories: state => state.subcategories,
    getTotalProducts: state => state.totalProducts,
    getProductDetails: state => state.productDetails,
    getCategoriesForSearch: state => state.categories_for_search,
  },
  actions: {
    async fetchAllCategories(data) {
      this.loading = true
      this.error = null
      try {
        const response = await axiosIns.get(
          `categories?page=${data.value.page}&perPage=${data.value.perPage}`,
        )
        this.categories = response.data.categories
        this.products = response.data.products.data
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

    async fetchSubCategoryByCategoryID(data) {
      this.loading = true
      this.error = null

      try {
        const response = await axiosIns.get(`categories/${data.value.categoryId}?page=${data.value.page}&perPage=${data.value.perPage}` )
        this.subcategories = response.data.categories
        this.products = response.data.products.data
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


    async fetchCategoryBySearch(data) {
      this.loading = true
      this.error = null

      try {
        const response = await axiosIns.get(`/categories_by_name`, {
          params: { search: data },
        });
        this.categories_for_search = response.data
      } catch (error) {
        this.error = 'خطأ أثناء جلب الفئات'
        console.error(error)
      } finally {
        this.loading = false
      }
    },

  },
})
