import { defineStore } from 'pinia'
import axiosIns from '@/plugins/axios'
export const useCurrenciesStore = defineStore('favorite', {
  state: () => ({
    allCurrencies: [],
    loading: false,
    error: null,
    Messagefavorite:null,
  }),
  getters: {
    getAllCurrencies: state => state.allCurrencies,

  },
  actions: {

    async fetchAllCurrencies() {
      this.loading = true
      this.error = null
      try {
        const response = await axiosIns.get(`currencies`)
        this.allCurrencies = response.data

      } catch (error) {
        this.error = error+ 'خطأ أثناء جلب الفئات'
      } finally {
        this.loading = false
      }
    },









  },
})
