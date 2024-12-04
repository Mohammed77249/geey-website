import { defineStore } from 'pinia';
import axiosIns from '@/plugins/axios';

export const useSectionsStore = defineStore('sections', {
  state: () => ({
    sections:[],
    allsections:[],
    subsections: [],
    categories: [],
    subcategories: [],
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
    getSections: state => state.sections,
    getSubSections: state => state.subsections,
    getAllSections: state => state.allsections,
    getProducts: state => state.products,
    getCategories: state => state.categories,
    },
  actions: {

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

    async fetchAllSections(data) {
      this.loading = true;
      this.error = null;
      try {
        const response = await axiosIns.get(`categories/section?page=${data.value.page}&perPage=${data.value.perPage}`);
        this.allsections = response.data.sections;
        this.categories = response.data.categories;
        this.products = response.data.products.data;
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

    async fetchSubSectionBySectionID(data) {
      this.loading = true;
      this.error = null;

      try {
        const response = await axiosIns.get(`categories/section/${data.value.sectionId}?page=${data.value.page}&perPage=${data.value.perPage}`);
        this.subsections = response.data.sections;
        this.sections.forEach(section => {
          if (section.categories && section.categories.length > 0) {
            this.categories.push(...section.categories);
          }
        });

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


    // async fetchCategories(data) {
    //   this.loading = true;
    //   this.error = null;
    //   try {
    //     const response = await axiosIns.get(`categories?page=${data.value.page}&perPage=${data.value.perPage}`);
    //     this.categories = response.data.categories;
    //     this.products = response.data.products.data;
    //     this.totalProducts.currentPage = response.data.products.current_page
    //     this.totalProducts.totalItems = response.data.products.total
    //     this.totalProducts.totalPages = response.data.products.last_page

    //   } catch (error) {
    //     this.error = 'خطأ أثناء جلب الفئات';
    //     console.error(error);
    //   } finally {
    //     this.loading = false;
    //   }
    // },

  },
});
