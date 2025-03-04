import { defineStore } from 'pinia'
import axiosIns from '@/plugins/axios'
export const useFavoriteStore = defineStore('favorite', {
  state: () => ({
    productsInFavorite: [],
    productsInList:[],
    allLists:[],
    loading: false,
    error: null,
    Messagefavorite:null,
  }),
  getters: {
    getProductsInFavorite: state => state.productsInFavorite,
    getAllListsInFavorite: state => state.allLists,
    getProductsInList: state => state.productsInList,


  },
  actions: {

    async fetchProductInfavorite() {
      this.loading = true
      this.error = null
      try {
        const response = await axiosIns.get(`favorite/products`)
        this.productsInFavorite = response.data.data

      } catch (error) {
        this.error = error+ 'خطأ أثناء جلب الفئات'
      } finally {
        this.loading = false
      }
    },

    async fetchAllListsfavorite() {
      this.loading = true
      this.error = null
      try {
        const response = await axiosIns.get(`favorite/lists_images`)
        this.allLists = response.data




      } catch (error) {
        this.error = error+ 'خطأ أثناء جلب القوائم'
      } finally {
        this.loading = false
      }
    },

    async fetchProductInList(data) {
      this.loading = true
      this.error = null

      try {
        const response = await axiosIns.get(`favorite/get_products_by_list`,{
          params: {
            list_id: data
          }
        });
        this.productsInList = response.data

      } catch (error) {
        this.error = error+ 'خطأ أثناء جلب الفئات'

      } finally {
        this.loading = false
      }
    },




    async addProductToFavorite(product_id) {
      this.loading = true
      this.error = null
      const formData = new FormData()
      formData.append('product_id', product_id)

      try {
        const response = await axiosIns.post('favorite/store', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        })
        this.Messagefavorite = response.data;
        if (response.data) {
          return true
        }

      } catch (err) {
        this.error = err + 'حدث خطأ غير متوقع، يرجى المحاولة لاحقًا'

        return false
      } finally {
        this.loading = false
      }
    },


     async deleteProductFavorite(selectedfavIds) {
      this.loading = true
      this.error = null


      try {
        const response = await axiosIns.delete(`favorite/delete_favorite_products`,{
          data: {
            product_ids: selectedfavIds
          },
          headers: {
            'Content-Type': 'application/json',
          }
        })
        this.Messagefavorite = response.data.message;
        return true
      } catch (err) {
        this.error = err + 'خطأ أثناء  الحذف'
        return false
      } finally {
        this.loading = false
      }
    },

    async deleteListProductFavorite(selectedProductsIds,ListId) {
      this.loading = true
      this.error = null

      try {
        const response = await axiosIns.delete(`favorite/delete_list_products`,{
          data: {
            list_id:ListId,
            product_ids: selectedProductsIds

          },
          headers: {
            'Content-Type': 'application/json',
          }
        })
        this.Messagefavorite = response.data.message;
        return true
      } catch (err) {
        this.error = err + 'خطأ أثناء  الحذف'
        return false
      } finally {
        this.loading = false
      }
    },


    async deleteListWithItsProducts(listId) {
      this.loading = true
      this.error = null


      try {
        const response = await axiosIns.delete(`favorite/delete_all_list_products`,{
          data: {
            list_id: listId
          },
          headers: {
            'Content-Type': 'application/json',
          }
        })
        this.Messagefavorite = response.data.message;
        return true
      } catch (err) {
        this.error = err + 'خطأ أثناء  الحذف'
        return false
      } finally {
        this.loading = false
      }
    },


    async storeList(listName) {
      this.loading = true
      this.error = null

      try {
        const response = await axiosIns.post(
          'favorite/store_list',
          { list_name: listName },
          {
            headers: {
              'Content-Type': 'application/json',

            }
          }
        );

        this.Messagefavorite = response.data;
        return true
      } catch (err) {
        this.error = err + 'خطأ أثناء  التخزين'
        return false
      } finally {
        this.loading = false
      }
    },



    async updateList(listName ,listId) {
      this.loading = true
      this.error = null

      try {
        const response = await axiosIns.put(
          'favorite/update_list',
          {
            list_id: listId,
            list_name: listName
          },
          {
            headers: {
              'Content-Type': 'application/json',
            }
          }
        );


        this.Messagefavorite = response.data.message;
        return true
      } catch (err) {
        this.error = err + 'خطأ أثناء  التعديل'
        return false
      } finally {
        this.loading = false
      }
    },



  },
})
