import { defineStore } from 'pinia';
import axiosIns from '@/plugins/axios';

export const useSectionsStore = defineStore('sections', {
  state: () => ({
    sections:[],
    allsections:[],
    subsections:[],
    productFormAllSection:[],
    categories: [],
    categories_Main: [],
    subcategories: [],
    subcategory_Colors:[],
    subcategory_Sizes:[],
    products:[],
    products_main:[],
    product_Filter_SubSection:[],
    totalProducts: {
      currentPage: 1,
      totalItems: null,
      totalPages: null,
    },
    productDetails: null,
    loading: false,
    error: null,
    page:1,
    perPage: 10,
    hasMore:true,
    showLoadingMessage: false,
    currentSectionId: null,
    currentSubSectionId:null,

  }),
  getters: {
    getSections: state => state.sections,
    getSubSections: state => state.subsections,
    getSubCategories: state => state.subcategories || [],

    getSubCategoryColors:state => state.subcategory_Colors,
    getSubCategorySizes:state => state.subcategory_Sizes,


    getProducts: state => state.products,
    getAllProductsFromAllSection: state => state.productFormAllSection,
    getCategories: state => state.categories,
    getCategoriesMain: state => state.categories_Main,
    getProducts_Main:state => state.products_main,
    getProducts_MainPageMoreSells:state => state.product_Filter_SubSection,



    getAllSections: state => state.allsections,
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
        this.categories_Main =  response.data.categories
        this.products_main = response.data.products.data


      } catch (error) {
        this.error = 'خطأ أثناء جلب الاقسام';
        alert(error(error));
        this.loading = false;
      } finally {
        this.loading = false;
      }
    },

    async fetchSubSectionBySectionID(data) {
      const filter = 0
      this.loading = true;
      this.error = null;
      try {
        const response = await axiosIns.get(`sections/${data.value.sectionId}?page=${data.value.page}&perPage=${data.value.perPage}&filter=${filter}`);

        if(response.data.sections[0].has_sub == "false"){
          if(data.value.noProduct && data.value.noProduct == "no")
          {
            this.categories =  response.data.sections[0].categories;
          this.subsections =  response.data.sections;
          }else{
            this.categories =  response.data.sections[0].categories;
            this.subsections =  response.data.sections;
            this.products =  response.data.products.data;
            this.totalProducts.currentPage = response.data.products.current_page
            this.totalProducts.totalItems = response.data.products.total
            this.totalProducts.totalPages = response.data.products.last_page
          }

        }else{
          this.subsections =  response.data.sections;
          this.categories = response.data.categories;
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

        // this.product_Filter_SubSection = response.data.products.data;
        // this.totalProducts.currentPage = response.data.products.current_page;
        // this.totalProducts.totalItems = response.data.products.total;
        // this.totalProducts.totalPages = response.data.products.last_page;
      } catch (error) {
        this.error = 'خطأ أثناء جلب الاقسام';
        alert(error(error));
        this.loading = false;
      } finally {
        this.loading = false;
      }
    },
    resetProducts() {
      this.product_Filter_SubSection = [];
      this.page = 1;
      this.hasMore = true;
      this.loading = false;
      this.showLoadingMessage = false;
      this.error = null;
    },


    async fetchSubCategoryByCategoryID(data) {
      const filter = 0
      this.loading = true
      this.error = null

      try {
        const response = await axiosIns.get(`categories/${data.value.categoryId}?page=${data.value.page}&perPage=${data.value.perPage}&filter=${filter}` )
        if( response.data.categories != null){
        this.subcategories = response.data.categories

      }
        this.subcategory_Sizes = response.data.sizes
        this.subcategory_Colors =  response.data.colors

        // this.products = response.data.products.data
        // this.totalProducts.currentPage = response.data.products.current_page
        // this.totalProducts.totalItems = response.data.products.total
        // this.totalProducts.totalPages = response.data.products.last_page
      } catch (error) {
        this.error = 'خطأ أثناء جلب الفئات'
        console.error(error)
      } finally {
        this.loading = false
      }
    },


    async fetchProductsFilterBySubcategry2(data) {

      this.loading = true
      this.error = null
      try {
        const response = await axiosIns.get(`products_filter/${data.value.categoryId}`,
          {
            params: { page: data.value.page ,perPage:data.value.perPage ,size:data.value.sizes ,price:data.value.price ,color:data.value.colors,category:data.value.categoryChild },
          }
         );


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

    async fetchProductsFilterBySubcategry(data) {
      if (this.loading || !this.hasMore) return;
      this.loading = true;
      this.showLoadingMessage = true;
      this.error = null;
      // this.loading = true
      // this.error = null
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

        // this.products = response.data.products.data
        // this.totalProducts.currentPage = response.data.products.current_page
        // this.totalProducts.totalItems = response.data.products.total
        // this.totalProducts.totalPages = response.data.products.last_page

      } catch (error) {
        this.error = 'خطأ أثناء جلب الفئات'
        console.error(error)

      } finally {
        this.loading = false
      }
    },
    resetProducts2() {
      this.product = [];
      this.page = 1;
      this.hasMore = true;
      this.loading = false;
      this.showLoadingMessage = false;
      this.error = null;
    },





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





    // async fetchSubSectionBySectionID(data) {
    //   if (this.loading) return; // منع استدعاءات متكررة أثناء التحميل
    //   if (this.totalProducts.currentPage >= this.totalProducts.totalPages) return; // لا مزيد من الصفحات

    //   this.loading = true;
    //   this.error = null;

    //   try {
    //     const response = await axiosIns.get(
    //       `categories/section/${data.value.sectionId}?page=${data.value.page}&perPage=${data.value.perPage}`
    //     );

    //     // تحديث الفئات أو الأقسام الفرعية
    //     if (response.data.sections[0].has_sub === "false") {
    //       this.categories = response.data.sections[0].categories;
    //     } else {
    //       this.subsections = response.data.sections;
    //     }

    //     // دمج المنتجات الجديدة مع المنتجات الحالية
    //     this.products = [...this.products, ...response.data.products.data];

    //     // تحديث معلومات المنتجات
    //     this.totalProducts.currentPage = response.data.products.current_page;
    //     this.totalProducts.totalItems = response.data.products.total;
    //     this.totalProducts.totalPages = response.data.products.last_page;
    //   } catch (error) {
    //     this.error = 'خطأ أثناء جلب الفئات: ' + error.message;
    //   } finally {
    //     this.loading = false;
    //   }
    // },

    // async fetchSubCategoryByCategoryID(data) {
    //   if (this.loading) return; // منع استدعاءات متكررة أثناء التحميل
    //   if (this.totalProducts.currentPage >= this.totalProducts.totalPages) return; // لا مزيد من الصفحات

    //   this.loading = true;
    //   this.error = null;

    //   try {
    //     const response = await axiosIns.get(
    //       `categories/${data.value.categoryId}?page=${data.value.page}&perPage=${data.value.perPage}`
    //     );

    //     // تحديث الفئات الفرعية
    //     this.subcategories = response.data.categories;

    //     // دمج المنتجات الجديدة مع المنتجات الحالية
    //     this.products = [...this.products, ...response.data.products.data];

    //     // تحديث معلومات المنتجات
    //     this.totalProducts.currentPage = response.data.products.current_page;
    //     this.totalProducts.totalItems = response.data.products.total;
    //     this.totalProducts.totalPages = response.data.products.last_page;
    //   } catch (error) {
    //     this.error = 'خطأ أثناء جلب الفئات: ' + error.message;
    //     console.error(error);
    //   } finally {
    //     this.loading = false;
    //   }
    // },








    // async changeSection(sectionId) {
    //   if (this.currentSectionId === sectionId) return // إذا كان القسم الحالي نفسه
    //   this.currentSectionId = sectionId

    //   // التحقق إذا كانت البيانات موجودة في LocalStorage
    //   const storedData = JSON.parse(localStorage.getItem(`section_${ sectionId}`))
    //   if (storedData) {
    //     // استرجاع البيانات من LocalStorage
    //     this.products = storedData.products
    //     this.subsections = storedData.subsections || []
    //     this.page = storedData.page
    //     this.hasMore = storedData.hasMore
    //   } else {
    //     // تفريغ البيانات وتحميلها من API
    //     this.products = []
    //     this.subsections = []
    //     this.page = 1
    //     this.hasMore = true
    //     // await this.fetchSubSectionBySectionID()
    //   }

    //   // // جلب البيانات من API وتحديث LocalStorage
    //   await this.refreshData()

    // },

    // get subsections for section Id  && categories && product




    // async fetchSubSectionBySectionID2() {
    //   if (this.loading || !this.hasMore) return;
    //   this.loading = true;
    //   this.error = null;
    //   // alert('جلب البيانات: الصفحة', this.page)
    //   try {
    //     const response = await axiosIns.get(`categories/section/${this.currentSectionId}?page=${this.page}&perPage=${this.perPage}`);

    //     this.subsections =  response.data.sections ||this.subsections  ;
    //     this.products =  response.data.products.data;
    //     this.totalProducts.currentPage = response.data.products.current_page
    //     this.totalProducts.totalItems = response.data.products.total
    //     this.totalProducts.totalPages = response.data.products.last_page
    //     this.page++
    //     this.hasMore = true

    //     // حفظ البيانات في LocalStorage
    //     this.saveToLocalStorage()
    //   } catch (error) {
    //     this.error = error+ 'خطأ أثناء جلب الفئات';
    //   } finally {
    //     this.loading = false;
    //   }
    // },


    // async fetchMoreProducts() {
    //   if (this.loading || !this.hasMore) return
    //   this.loading = true

    //   try {
    //     const response = await axiosIns.get(`categories/section/${this.currentSectionId}?page=${this.page}&perPage=${this.perPage}`);

    //     const datapro = response.data.products.data;
    //     if (datapro.length) {
    //       this.products.push(...datapro)
    //       this.totalProducts.currentPage = response.data.products.current_page
    //       this.totalProducts.totalItems = response.data.products.total
    //       this.totalProducts.totalPages = response.data.products.last_page
    //       this.page++
    //       this.saveToLocalStorage()
    //     } else {
    //       this.hasMore = false // لا يوجد المزيد
    //       this.saveToLocalStorage()
    //     }

    //   } catch (error) {
    //     console.error('خطأ أثناء تحميل المزيد من المنتجات:', error)
    //   } finally {
    //     this.loading = false
    //   }
    // },

    // تحديث البيانات عند إعادة تحميل الصفحة
    // async refreshData() {
    //   this.loading = true
    //   try {
    //     const response = await axiosIns.get(`categories/section/${this.currentSectionId}?page=${this.page}&perPage=${this.perPage}`);

    //     this.subsections =  response.data.sections ;
    //     this.products =  response.data.products.data;
    //     this.totalProducts.currentPage = response.data.products.current_page
    //     this.totalProducts.totalItems = response.data.products.total
    //     this.totalProducts.totalPages = response.data.products.last_page
    //     this.page = 2
    //     this.hasMore = true

    //     // تحديث LocalStorage
    //     this.saveToLocalStorage()
    //   } catch (error) {
    //     console.error('خطأ أثناء تحديث البيانات:', error)
    //   }
    // },


        // حفظ البيانات في LocalStorage
        // saveToLocalStorage() {
        //   const sectionData = {
        //     products: this.products,
        //     subsections: this.subsections || [],
        //     page: this.page,
        //     hasMore: this.hasMore,
        //   }
        //   localStorage.setItem(`section_${this.currentSectionId}`, JSON.stringify(sectionData))
        // },

          // استرجاع البيانات عند إعادة تحميل الصفحة
          // loadFromLocalStorage(sectionId) {
          //   const storedData = JSON.parse(localStorage.getItem(`section_${sectionId}`))
          //   if (storedData) {
          //     this.products = storedData.products
          //     this.subsections = storedData.subsections
          //     this.page = storedData.page
          //     this.hasMore = storedData.hasMore
          //     this.currentSectionId = sectionId
          //   }
          // },



    //get categories && products for subsection
    // async fetchCategoriesAndProducetsForSubsetion(data) {
    //   this.loading = true;
    //   this.error = null;

    //   try {
    //     const response = await axiosIns.get(`categories/get_subsection/${data.value.subSectionId}?page=${data.value.page}&perPage=${data.value.perPage}`);
    //     this.categories = response.data.categories;
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





    // async fetchCategoriesAndProducetsForSubsetion(data) {
    //   this.loading = true;
    //   this.error = null;

    //   try {
    //     const response = await axiosIns.get(
    //       `categories/get_subsection/${data.value.subSectionId}?page=${data.value.page}&perPage=${data.value.perPage}`
    //     );

    //     // إضافة الفئات إلى القائمة categories
    //     if (response.data.categories) {
    //       this.categories = [...this.categories, response.data.categories];
    //     }

    //     // إضافة المنتجات إلى القائمة products
    //     if (response.data.products && response.data.products.data) {
    //       this.products = [...this.products, ...response.data.products.data];
    //     }

    //     // تحديث بيانات المنتجات الإجمالية
    //     this.totalProducts.currentPage = response.data.products.current_page;
    //     this.totalProducts.totalItems = response.data.products.total;
    //     this.totalProducts.totalPages = response.data.products.last_page;

    //     // التحقق إذا كان هناك المزيد من المنتجات
    //     this.hasMore = this.totalProducts.currentPage < this.totalProducts.totalPages;
    //   } catch (error) {
    //     this.error = "خطأ أثناء جلب الفئات";
    //     console.error("خطأ أثناء جلب البيانات:", error);
    //     alert(error.message);
    //   } finally {
    //     this.loading = false;
    //   }
    // },





    // async fetchSubCategoryByCategoryID(data) {
    //   this.loading = true
    //   this.error = null

    //   try {
    //     const response = await axiosIns.get(`categories/${data.value.categoryId}?page=${data.value.page}&perPage=${data.value.perPage}` )

    //     this.subcategories = response.data.categories
    //     this.products = response.data.products.data
    //     this.totalProducts.currentPage = response.data.products.current_page
    //     this.totalProducts.totalItems = response.data.products.total
    //     this.totalProducts.totalPages = response.data.products.last_page
    //   } catch (error) {
    //     this.error = 'خطأ أثناء جلب الفئات'
    //     console.error(error)
    //   } finally {
    //     this.loading = false
    //   }
    // },



  },
});
