import { defineStore } from 'pinia';
import axiosIns from '@/plugins/axios';

export const useSectionsStore = defineStore('sections', {
  state: () => ({
    sections:[],
    allsections:[],
    subsections: [],
    // subsectionsforfilter: [],
    peoductFormAllSection:[],
    categories: [],
    subcategories: [],
    products: [],
    totalProducts: {
      currentPage: 1,
      totalItems: null,
      totalPages: null,
    },
    productDetails: null,
    loading: false,
    error: null,

    lastPage: null,
    currentPage: 1,
    perPage: 10,
    hasMore: true,

  }),
  getters: {
    getSections: state => state.sections,
    getSubSections: state => state.subsections,
    getSubCategories: state => state.subcategories,
    // getSubSectionsForFilter: state => state.subsectionsforfilter,
    getAllSections: state => state.allsections,
    getProducts: state => state.products,
    getAllProductsFromAllSection: state => state.peoductFormAllSection,
    getCategories: state => state.categories,
    },
  actions: {

    // onlay section
    async fetchSections(data) {
      this.loading = true;
      this.error = null;
      try {
        const response = await axiosIns.get(`sections?page=${data.value.page}&perPage=${data.value.perPage}`);
        this.sections =  response.data;
      } catch (error) {
        this.error = 'خطأ أثناء جلب الاقسام';
        alert(error(error));
        this.loading = false;
      } finally {
        this.loading = false;
      }
    },

    // sections && categoeies && product
    async fetchAllSections(data) {
      this.loading = true;
      this.error = null;
      try {
        const response = await axiosIns.get(`categories/section?page=${data.value.page}&perPage=${data.value.perPage}`);
        this.allsections = response.data.sections;

        this.categories = response.data.categories;
        this.peoductFormAllSection = response.data.products.data;
        this.totalProducts.currentPage = response.data.products.current_page
        this.totalProducts.totalItems = response.data.products.total
        this.totalProducts.totalPages = response.data.products.last_page
      } catch (error) {
        this.error = 'خطأ أثناء جلب الاقسام';
        alert(error(error));
        this.loading = false;
      } finally {
        this.loading = false;
      }
    },

    // get subsections for section Id  && categories && product
    async fetchSubSectionBySectionID(data) {
      // if (this.loading || !this.hasMore) return;
      this.loading = true;
      this.error = null;

      try {
        const response = await axiosIns.get(`categories/section/${data.value.sectionId}?page=${data.value.page}&perPage=${data.value.perPage}`);

        this.subsections = await response.data.sections;

        // this.subsections.forEach(section => {
        //   if (section.categories && section.categories.length > 0) {
        //     this.categories.push(...section.categories);
        //   }
        // });

        // const newProducts = response.data.products.data
        // if (newProducts.length > 0) {
        //   this.products.push(...newProducts);
        //   this.totalProducts.currentPage = response.data.products.current_page
        //   this.totalProducts.totalItems = response.data.products.total
        //   this.totalProducts.totalPages = response.data.products.last_page
        //   this.page++;
        // } else {
        //   this.hasMore = false;
        // }

        // const datass = await  response.data.products;

        // تحديث البيانات
        // this.products = [...this.products, ...datass.data];
        // this.lastPage = datass.last_page || Math.ceil(datass.total / this.perPage);
        // this.currentPage++;

        // تحقق إذا انتهت جميع المنتجات
        // if (this.currentPage > this.lastPage) {
        //   this.hasMore = false;
        // }

        this.products = response.data.products.data;
        this.totalProducts.currentPage = response.data.products.current_page
        this.totalProducts.totalItems = response.data.products.total
        this.totalProducts.totalPages = response.data.products.last_page
      } catch (error) {
        this.error = 'خطأ أثناء جلب الفئات';
        alert(error(error));
      } finally {
        this.loading = false;
      }
    },


    //get categories && products for subsection
    async fetchCategoriesAndProducetsForSubsetion(data) {
      this.loading = true;
      this.error = null;

      try {
        const response = await axiosIns.get(`categories/get_subsection/${data.value.subSectionId}?page=${data.value.page}&perPage=${data.value.perPage}`);
        this.categories = response.data.categories;
        this.products = response.data.products.data
        this.totalProducts.currentPage = response.data.products.current_page
        this.totalProducts.totalItems = response.data.products.total
        this.totalProducts.totalPages = response.data.products.last_page

      } catch (error) {
        this.error = 'خطأ أثناء جلب الفئات';
        alert(error(error));
      } finally {
        this.loading = false;
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


    // async fetchSubSectionBySectionIDForfilter(data) {
    //   this.loading = true;
    //   this.error = null;

    //   try {
    //     const response = await axiosIns.get(`categories/section/${data.value.sectionId}?page=${data.value.page}&perPage=${data.value.perPage}`);
    //     this.subsectionsforfilter = response.data.sections;
    //     this.sections.forEach(section => {
    //       if (section.categories && section.categories.length > 0) {
    //         this.categories.push(...section.categories);
    //       }
    //     });
    //     this.products = response.data.products.data
    //     this.totalProducts.currentPage = response.data.products.current_page
    //     this.totalProducts.totalItems = response.data.products.total
    //     this.totalProducts.totalPages = response.data.products.last_page

    //   } catch (error) {
    //     this.error = 'خطأ أثناء جلب الفئات';
    //     alert(error(error));
    //   } finally {
    //     this.loading = false;
    //   }
    // },

  },
});
