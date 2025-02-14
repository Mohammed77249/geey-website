import { defineStore } from 'pinia';
import axiosIns from '@/plugins/axios';

export const useSectionsPhoneStore = defineStore('sectionsphone', {
  state: () => ({
    sections:[],
    subsections:[],
    categories: [],
    subcategories: [],
    product_Filter_SubSection:[],
    bannerImage:[],
    products:[],
    totalProducts: {
      currentPage: 1,
      totalItems: null,
      totalPages: null,
    },
    productDetails: null,
    showLoadingMessage: false,
    page:1,
    perPage: 10,
    hasMore:true,
    loading: false,
    error: null,


  }),
  getters: {
    getSections: state => state.sections,
    getSubSections: state => state.subsections,
    getSubCategories: state => state.subcategories || [],
    getProducts: state => state.products,
    getCategories: state => state.categories,
    getBannerImage : state => state.bannerImage,
    getProducts_MainPageMoreSells:state => state.product_Filter_SubSection,

    },
  actions: {

    // onlay section
    async fetchSections(data) {
      this.loading = true;
      this.error = null;
      try {
        const response = await axiosIns.get(`sections?page=${data.value.page}&perPage=${data.value.perPage}`);
        this.sections =  response.data.sections
        this.categories_Main =  response.data.categories
      } catch (error) {
        this.error = 'خطأ أثناء جلب الاقسام';
        alert(error(error));
        this.loading = false;
      } finally {
        this.loading = false;
      }
    },

     // banners
     async fetchGetBanner(data) {
      const filter = 2
      this.loading = true;
      this.error = null;


      try {
        const response = await axiosIns.get(`sections/${data.value.sectionId}?page=${data.value.page}&perPage=${data.value.perPage}&filter=${filter}`);
        this.bannerImage = response.data.panner_images
      } catch (error) {
        this.error = error+ 'خطأ أثناء جلب الفئات';
      } finally {
        this.loading = false;
      }
    },
    //========


    async fetchSubSectionBySectionID(data) {
      this.loading = true;
      this.error = null;
      try {
        const response = await axiosIns.get(`sections/${data.value.sectionId}?page=${data.value.page}&perPage=${data.value.perPage}&filter=${data.value.filter}`);
        if(response.data.sections[0].has_sub == "false"){
            // this.subsections =  response.data.sections;
            // this.categories =  response.data.sections[0].categories;
            this.subsections =  response.data.sections;
            // this.products =  response.data.products.data;
            // this.totalProducts.currentPage = response.data.products.current_page
            // this.totalProducts.totalItems = response.data.products.total
            // this.totalProducts.totalPages = response.data.products.last_page
        }else{
          this.subsections =  response.data.sections;
          this.products =  response.data.products.data;
          this.totalProducts.currentPage = response.data.products.current_page
          this.totalProducts.totalItems = response.data.products.total
          this.totalProducts.totalPages = response.data.products.last_page
        }

      } catch (error) {
        this.error = error+ 'خطأ أثناء جلب الفئات';
      } finally {
        this.loading = false;
      }
    },


    // products for main page moreSells
    async fetchProductForMainPageFilter(data) {

      if ( !this.hasMore) return;

      this.showLoadingMessage = true;
      this.error = null;
      try {
        const response = await axiosIns.get(`/sections/${data.value.sectionId}?page=${this.page}&perPage=${this.perPage}&filter=${data.value.filter}`);
        // تأخير عرض المنتجات لمدة ثانيتين
        setTimeout(() => {
          // إضافة المنتجات الجديدة إلى القائمة
          this.product_Filter_SubSection.push(...response.data.products.data);

          // تحقق مما إذا كان هناك المزيد من المنتجات
          if (response.data.products.data.length < this.perPage) {
            this.hasMore = false;
          } else {
            this.page++;
          }

          // إخفاء رسالة تحميل المزيد
          this.showLoadingMessage = false;
        }, 1000);

      } catch (error) {
        this.error = error+ 'خطأ أثناء جلب الاقسام';
        this.loading = false;
      } finally {
        this.loading = false;
      }
    },
    resetProductsMain() {
      this.product_Filter_SubSection = [];
      this.page = 1;
      this.hasMore = true;
      this.loading = false;
      this.showLoadingMessage = false;
      this.error = null;
    },
    //=============================

    async fetchSubCategoryByCategoryID(data) {
      const filter = 0
      this.loading = true
      this.error = null

      try {
        const response = await axiosIns.get(`categories/${data.value.categoryId}?page=${data.value.page}&perPage=${data.value.perPage}&filter=${filter}` )
        if( response.data.categories != null){
        this.subcategories = response.data.categories

      }
        // this.products = response.data.products.data
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








  },
});
