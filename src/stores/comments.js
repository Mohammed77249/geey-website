import { defineStore } from 'pinia'
import axiosIns from '@/plugins/axios'

export const useCommentsStore = defineStore('useCommentsStore', {
  state: () => ({
    commentsForProducts: [],
    reviews:[],
    loading: false,
    error: null,
    page:1,
    perPage: 10,
  }),
  getters: {
    getCommentsForProduct: state => state.commentsForProducts,
    getReviews: state => state.reviews,


  },
  actions: {
    async fetchCommentsByProductId(productId) {
      this.loading = true
      this.error = null


      try {
        const response = await axiosIns.get(`review/product/${productId}`,
          {
            params: {  page: this.page ,perPage:this.perPage , },
          });

        this.commentsForProducts = response.data
        this.reviews =  response.data.review.data

      } catch (error) {
        this.error = 'خطأ أثناء جلب الفئات'

        console.error(error)
      } finally {
        this.loading = false
      }
    },



    async AddLikeToComment(commentId) {
      this.loading = true
      this.error = null
      try {
        await axiosIns.get(`review/like/${commentId}`);
       return true;

      } catch (error) {
        this.error = error+'خطأ أثناء جلب الفئات'
        return false
      } finally {
        this.loading = false
      }
    },


    async DisLikeComment(commentId) {
      this.loading = true
      this.error = null
      try {
        await axiosIns.get(`review/dislike/${commentId}`);
       return true;

      } catch (error) {
        this.error = error+'خطأ أثناء جلب الفئات'
        return false
      } finally {
        this.loading = false
      }
    },

    async creatComment(data) {
      this.loading = true
      this.error = null
      const formData = new FormData()
      formData.append('product_id', data.product_id)
      formData.append('order_id', data.order_id)
      formData.append('color_id', data.color_id)
      formData.append('parent_measuring_id', data.parent_measuring_id)
      formData.append('comment', data.comment),
      formData.append('value', data.rateing),
      formData.append('proportion', data.proportion)

      try {
        const response = await axiosIns.post('review', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        })

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




  },
})
