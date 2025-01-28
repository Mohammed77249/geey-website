import { defineStore } from 'pinia';
import axiosIns from '@/plugins/axios';

export const useSectionsStore = defineStore('sections', {
  state: () => ({
    sections:[],
    categories_Main: [],
    bannerImage:[],
    product_Filter_SubSection:[],
    subsections:[],
    categories: [],
    subcategories: [],
    subcategory_Colors:[],
    subcategory_Sizes:[],
    products:[],


    totalProducts: {
      currentPage: 1,
      totalItems: null,
      totalPages: null,
    },
    productDetails: null,
    loading: false,
    error: null,
    page:1,
    perPage: 4,
    hasMore:true,
    showLoadingMessage: false,
    currentSectionId: null,
    currentSubSectionId:null,




    // not used
    allsections:[],
    productFormAllSection:[],
    products_main:[],

  }),
  getters: {
    getSections: state => state.sections,
    getCategoriesMain: state => state.categories_Main,
    getBannerImage : state => state.bannerImage,
    getProducts_MainPageMoreSells:state => state.product_Filter_SubSection,
    getSubSections: state => state.subsections,
    getCategories: state => state.categories,


    getSubCategories: state => state.subcategories || [],

    getSubCategoryColors:state => state.subcategory_Colors,
    getSubCategorySizes:state => state.subcategory_Sizes,
    getProducts: state => state.products,

    // not used
    getAllSections: state => state.allsections,
    getAllProductsFromAllSection: state => state.productFormAllSection,
    getProducts_Main:state => state.products_main,
    },
  actions: {

    // onlay section
    async fetchSections(data) {
      this.loading = true;
      this.error = null;
      const filter = 0
      try {
        const response = await axiosIns.get(`sections?page=${data.value.page}&perPage=${data.value.perPage}&filter=${filter}`);
        this.sections =  response.data.sections
      } catch (error) {
        this.error = error+'خطأ أثناء جلب الاقسام';

        this.loading = false;
      } finally {
        this.loading = false;
      }
    },


    // fetch categories for home
    async fetchCategoriesInHomeByMinSection(data) {
      const filter = 0
      this.loading = true;
      this.error = null;
      try {
        const response = await axiosIns.get(`sections/${data.value.sectionId}?page=${data.value.page}&perPage=${data.value.perPage}&filter=${filter}`);
          this.categories_Main = response.data.sections[0].categories;;
      } catch (error) {
        this.error = error+ 'خطأ أثناء جلب الفئات';
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


    // products for main page moreSells
    async fetchProductForMainPageFilter(data) {

      if (this.loading || !this.hasMore) return;
      this.loading = true;
      this.showLoadingMessage = true;
      this.error = null;
      try {
        const response = await axiosIns.get(`/sections?page=${this.page}&perPage=${this.perPage}&filter=${data.value.filter}`);
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


     // fetch subsections
     async fetchSubSectionBySectionID(data) {
      const filter = 0
      this.loading = true;
      this.error = null;
      try {
        const response = await axiosIns.get(`sections/${data.value.sectionId}?page=${data.value.page}&perPage=${data.value.perPage}&filter=${filter}`);

        if(response.data.sections[0].has_sub == "false"){
          this.categories =  response.data.sections[0].categories;
          this.subsections =  response.data.sections;
        }else{
          this.subsections =  response.data.sections;
          this.categories = response.data.categories;
        }

        this.subcategory_Sizes = []
        this.subcategory_Colors =  []

      } catch (error) {
        this.error = error+ 'خطأ أثناء جلب الفئات';
      } finally {
        this.loading = false;
      }
    },

    async fetchProductForSubSectionrecommedn(data) {
      const filter = 0

      if (this.loading || !this.hasMore) return;
      this.loading = true;
      this.showLoadingMessage = true;
      this.error = null;

      try {
        const response = await axiosIns.get(`/sections/${data.value.sectionId}?page=${this.page}&perPage=${this.perPage}&filter=${filter}`);
        setTimeout(() => {
          this.products.push(...response.data.products.data);
          if (response.data.products.data.length < this.perPage) {
            this.hasMore = false;
          } else {
            this.page++;
          }
          this.showLoadingMessage = false;
        }, 1000);

      } catch (error) {
        this.error = error+ 'خطأ أثناء جلب الاقسام';
        this.loading = false;
      } finally {
        this.loading = false;
      }
    },


    //===========================




 // fetch subcategories
    async fetchSubCategoryByCategoryID(data) {
      const filter = 0
      this.loading = true
      this.error = null
      try {
        const response = await axiosIns.get(`categories/${data.value.categoryId}?page=${data.value.page}&perPage=${data.value.perPage}&filter=${filter}` )
        if( response.data.categories.length>0){
        this.subcategories = response.data.categories

      }
        this.subcategory_Sizes = response.data.sizes
        this.subcategory_Colors =  response.data.colors

      } catch (error) {
        this.error = error+'خطأ أثناء جلب الفئات'

      } finally {
        this.loading = false
      }
    },

    async fetchProductsFilterBySubcategry(data) {

      if (this.loading || !this.hasMore) return;
      this.loading = true;
      this.showLoadingMessage = true;
      this.error = null;
      try {
        const response = await axiosIns.get(`products_filter/${data.value.categoryId}`,
          {
            params: { page: this.page ,perPage:this.perPage ,size:data.value.sizes ,price:data.value.price ,color:data.value.colors,category:data.value.categoryChild },
          }
         );

          // تأخير عرض المنتجات لمدة ثانيتين
        setTimeout(() => {
          // إضافة المنتجات الجديدة إلى القائمة
           this.products.push(...response.data.products.data);

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
        this.error = 'خطأ أثناء جلب الفئات'
        console.error(error)

      } finally {
        this.loading = false
      }
    },
    resetProducts() {
      this.products = [];
      this.page = 1;
      this.hasMore = true;
      this.loading = false;
      this.showLoadingMessage = false;
      this.error = null;
      this.subcategory_Colors=[],
      this.subcategory_Sizes=[],
      this.subcategories = []
    },

    resetProductsCatPage() {
      this.products = [];
      this.page = 1;
      this.hasMore = true;
      this.loading = false;
      this.showLoadingMessage = false;
      this.error = null;
    },
    //============================


    // not used
    async fetchAllSections(data) {
      const filter = 0
      if (this.allsections.length > 0) return;
      this.loading = true;
      this.error = null;
      try {
        const response = await axiosIns.get(`categories/section?page=${data.value.page}&perPage=${data.value.perPage}&filter=${filter}`);
        this.allsections = response.data.sections
        this.categories = response.data.categories;
        this.productFormAllSection = response.data.products.data;
        this.totalProducts.currentPage = response.data.products.current_page;
        this.totalProducts.totalItems = response.data.products.total;
        this.totalProducts.totalPages = response.data.products.last_page;
      } catch (error) {
        this.error = 'خطأ أثناء جلب الاقسام';
        alert(error(error));
        this.loading = false;
      } finally {
        this.loading = false;
      }
    },





  },
});
