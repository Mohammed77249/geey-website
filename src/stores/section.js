import { defineStore } from 'pinia';
import axiosIns from '@/plugins/axios';

export const useSectionsStore = defineStore('sections', {
  state: () => ({
    sections:JSON.parse(localStorage.getItem("sections")) || [],
    allsections:JSON.parse(localStorage.getItem("allsections")) || [],
    subsections:[],
    productFormAllSection:[],
    categories: [],
    subcategories: [],
    products:[],
    totalProducts: {
      currentPage: 1,
      totalItems: null,
      totalPages: null,
    },
    productDetails: null,
    loading: false,
    error: null,
    page:[],
    perPage: 10,
    hasMore:true,
    currentSectionId: null,
    currentSubSectionId:null,

  }),
  getters: {
    getSections: state => state.sections,
    getSubSections: state => state.subsections || [],
    getSubCategories: state => state.subcategories,
    getAllSections: state => state.allsections,
    getProducts: state => state.products,
    getAllProductsFromAllSection: state => state.productFormAllSection,
    getCategories: state => state.categories,
    },
  actions: {

    // onlay section
    async fetchSections(data) {
      if (this.sections.length > 0) return;
      this.loading = true;
      this.error = null;
      try {
        const response = await axiosIns.get(`sections?page=${data.value.page}&perPage=${data.value.perPage}`);
        const data1 =  response.data
        this.sections = data1;
        localStorage.setItem("sections", JSON.stringify(data1));
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

      if (this.allsections.length > 0) return;
      this.loading = true;
      this.error = null;
      try {
        const response = await axiosIns.get(`categories/section?page=${data.value.page}&perPage=${data.value.perPage}`);
        const data1 = response.data.sections
        this.allsections = data1;
        localStorage.setItem("allsections", JSON.stringify(data1));
        this.categories = response.data.categories;
        this.productFormAllSection = response.data.products.data;
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

    async changeSection(sectionId) {
      if (this.currentSectionId === sectionId) return // إذا كان القسم الحالي نفسه
      this.currentSectionId = sectionId

      // التحقق إذا كانت البيانات موجودة في LocalStorage
      const storedData = JSON.parse(localStorage.getItem(`section_${ sectionId}`))
      if (storedData) {
        // استرجاع البيانات من LocalStorage
        this.products = storedData.products
        this.subsections = storedData.subsections || []
        this.page = storedData.page
        this.hasMore = storedData.hasMore
      } else {
        // تفريغ البيانات وتحميلها من API
        this.products = []
        this.subsections = []
        this.page = 1
        this.hasMore = true
        // await this.fetchSubSectionBySectionID()
      }

      // // جلب البيانات من API وتحديث LocalStorage
      await this.refreshData()

    },

    // get subsections for section Id  && categories && product
    async fetchSubSectionBySectionID() {
      if (this.loading || !this.hasMore) return;
      this.loading = true;
      this.error = null;
      // alert('جلب البيانات: الصفحة', this.page)
      try {
        const response = await axiosIns.get(`categories/section/${this.currentSectionId}?page=${this.page}&perPage=${this.perPage}`);

        this.subsections =  response.data.sections ||this.subsections  ;
        this.products =  response.data.products.data;
        this.totalProducts.currentPage = response.data.products.current_page
        this.totalProducts.totalItems = response.data.products.total
        this.totalProducts.totalPages = response.data.products.last_page
        this.page++
        this.hasMore = true

        // حفظ البيانات في LocalStorage
        this.saveToLocalStorage()
      } catch (error) {
        this.error = error+ 'خطأ أثناء جلب الفئات';
      } finally {
        this.loading = false;
      }
    },


    async fetchMoreProducts() {
      if (this.loading || !this.hasMore) return
      this.loading = true

      try {
        const response = await axiosIns.get(`categories/section/${this.currentSectionId}?page=${this.page}&perPage=${this.perPage}`);

        const datapro = response.data.products.data;
        if (datapro.length) {
          this.products.push(...datapro)
          this.totalProducts.currentPage = response.data.products.current_page
          this.totalProducts.totalItems = response.data.products.total
          this.totalProducts.totalPages = response.data.products.last_page
          this.page++
          this.saveToLocalStorage()
        } else {
          this.hasMore = false // لا يوجد المزيد
          this.saveToLocalStorage()
        }

      } catch (error) {
        console.error('خطأ أثناء تحميل المزيد من المنتجات:', error)
      } finally {
        this.loading = false
      }
    },

    // تحديث البيانات عند إعادة تحميل الصفحة
    async refreshData() {
      this.loading = true
      try {
        const response = await axiosIns.get(`categories/section/${this.currentSectionId}?page=${this.page}&perPage=${this.perPage}`);

        this.subsections =  response.data.sections ;
        this.products =  response.data.products.data;
        this.totalProducts.currentPage = response.data.products.current_page
        this.totalProducts.totalItems = response.data.products.total
        this.totalProducts.totalPages = response.data.products.last_page
        this.page = 2
        this.hasMore = true

        // تحديث LocalStorage
        this.saveToLocalStorage()
      } catch (error) {
        console.error('خطأ أثناء تحديث البيانات:', error)
      }
    },


        // حفظ البيانات في LocalStorage
        saveToLocalStorage() {
          const sectionData = {
            products: this.products,
            subsections: this.subsections || [],
            page: this.page,
            hasMore: this.hasMore,
          }
          localStorage.setItem(`section_${this.currentSectionId}`, JSON.stringify(sectionData))
        },

          // استرجاع البيانات عند إعادة تحميل الصفحة
          loadFromLocalStorage(sectionId) {
            const storedData = JSON.parse(localStorage.getItem(`section_${sectionId}`))
            if (storedData) {
              this.products = storedData.products
              this.subsections = storedData.subsections
              this.page = storedData.page
              this.hasMore = storedData.hasMore
              this.currentSectionId = sectionId
            }
          },



          // async changeSubSection(subsectionId) {
          //   if (this.currentSubSectionId === subsectionId) return
          //   this.currentSubSectionId = subsectionId

          //   // تحقق من وجود البيانات في LocalStorage
          //   const storedData = JSON.parse(localStorage.getItem(`subsection${subsectionId}`))
          //   if (storedData) {
          //     this.subsections = storedData.subsections
          //     this.products = storedData.products
          //   } else {
          //     this.subsections = []
          //     this.products = []
          //     await this.fetchCategoriesAndProducetsForSubsetion(subsectionId)
          //   }
          // },

    //get categories && products for subsection
    async fetchCategoriesAndProducetsForSubsetion(data) {
      this.loading = true;
      this.error = null;

      // this.selectedSubSection = data.value.subSectionId
      // this.categories = []
      // this.products = []

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
