import { defineStore } from 'pinia';
import axiosIns from '@/plugins/axios';

export const useAddressStore = defineStore('addresses', {
  state: () => ({
    cities:[],
    districts:[],
    alladdresses: [],


    // subsectionsforfilter: [],
    // categories: [],
    // subcategories: [],
    // products: [],
    // totalProducts: {
    //   currentPage: 1,
    //   totalItems: null,
    //   totalPages: null,
    // },
    // productDetails: null,

    loading: false,
    error: null,

  }),
  getters: {
    getCities: state => state.cities,
    getDistricts: state => state.districts,
    getAllAddresses: state => state.alladdresses,
    // getSubSectionsForFilter: state => state.subsectionsforfilter,
    // getAllSections: state => state.allsections,
    // getProducts: state => state.products,
    // getCategories: state => state.categories,
    },
  actions: {

    async fetchAllAddresses() {
      this.loading = true;
      this.error = null;
      try {
        const response = await axiosIns.get(`addresses`);
        this.alladdresses =  response.data;
      } catch (error) {
        this.error = 'خطأ أثناء جلب المدن';
        alert(error(error));
        this.loading = false;
      } finally {
        this.loading = false;
      }
    },

    async fetchCities() {
      this.loading = true;
      this.error = null;
      try {
        const response = await axiosIns.get(`cities`);
        this.cities =  response.data;
      } catch (error) {
        this.error = 'خطأ أثناء جلب المدن';
        alert(error(error));
        this.loading = false;
      } finally {
        this.loading = false;
      }
    },

    async fetchDistricts() {
      this.loading = true;
      this.error = null;
      try {
        const response = await axiosIns.get(`districts`);
        this.districts =  response.data;
      } catch (error) {
        this.error = 'خطأ أثناء جلب المديريات';
        alert(error(error));
        this.loading = false;
      } finally {
        this.loading = false;
      }
    },


    async creatAddress(data) {
      this.loading = true
      this.error = null
      const formData = new FormData()
      formData.append('city_id', data.city_id)
      formData.append('nearest_landmark', data.nearest_landmark)
      formData.append('district_id', data.district_id)
      formData.append('address', data.address)
      formData.append('lat', data.lat)
      formData.append('lng', data.lng)
      formData.append('is_default', data.is_default)

      try {
        const response = await axiosIns.post('addresses/store', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        })
        this.address = response.data
        return true
      } catch (err) {
        this.error = err + 'حدث خطأ غير متوقع، يرجى المحاولة لاحقًا'
        return false
      } finally {
        this.loading = false
      }
    },

    async updateAddress(data) {
      this.loading = true
      this.error = null
      const formData = new FormData()
      formData.append('city_id', data.city_id)
      formData.append('nearest_landmark', data.nearest_landmark)
      formData.append('district_id', data.district_id)
      formData.append('address', data.address)
      formData.append('lat', data.lat)
      formData.append('lng', data.lng)
      formData.append('is_default', data.is_default)

      try {
        const response = await axiosIns.post(`addresses/update/${data.address_id}`, formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        })
        this.address = response.data
        return true
      } catch (err) {
        this.error = err + 'حدث خطأ غير متوقع، يرجى المحاولة لاحقًا'
        return false
      } finally {
        this.loading = false
      }
    },

    async deleteAddress(address_id) {
      this.loading = true
      this.error = null
      try {
        const response = await axiosIns.post(`addresses/delete/${address_id}`)
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
});
