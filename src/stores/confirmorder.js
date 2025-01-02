import { defineStore } from 'pinia';
import axiosIns from '@/plugins/axios';

export const useConfirmOrders = defineStore('ConfirmOrders', {
  state: () => ({
    deliveryTypes:[],
    paymentMethods:[],
    userAddresses: [],
    myOrder:null,
    allOrders:[],
    totalOrders: {
      currentPage: 1,
      totalItems: null,
      totalPages: null,
    },
    loading: false,
    error: null,

  }),
  getters: {
    getDeliveryTypes: state => state.deliveryTypes,
    getPaymentMethods: state => state.paymentMethods,
    getUserAddresses: state => state.userAddresses,
    getAllOrders: state => state.allOrders,
    },
  actions: {


    async fetchAllOrders(data) {
      this.loading = true;
      this.error = null;
      try {
        const response = await axiosIns.get(`orders?page=${data.value.page}&perPage=${data.value.perPage}`);
        this.allOrders =  response.data.data;
        this.totalProducts.currentPage = response.data.current_page
        this.totalProducts.totalItems = response.data.total
        this.totalProducts.totalPages = response.data.products.last_page
      } catch (error) {
        this.error = error+ 'خطأ أثناء جلب الاقسام';
        this.loading = false;
      } finally {
        this.loading = false;
      }
    },

    async fetchDataOrders() {
      this.loading = true;
      this.error = null;
      try {
        const response = await axiosIns.get(`orders/get_order_data`);
        this.deliveryTypes =  response.data.delivery_types;
        this.paymentMethods =  response.data.payment_methods;
        this.userAddresses =  response.data.user_addresses;

      } catch (error) {
        this.error = 'خطأ أثناء جلب الاقسام';
        alert(error(error));
        this.loading = false;
      } finally {
        this.loading = false;
      }
    },

    async creatOrder(data) {
      this.loading = true
      this.error = null
      const formData = new FormData()
      formData.append('products', data.products)
      formData.append('address_id', data.address_id)
      formData.append('payment_id', data.payment_id)
      formData.append('delivery_type_id', data.delivery_type_id)
      formData.append('note', data.unit_price)
      formData.append('unit_price', data.unit_price)
      formData.append('phone_number', data.phone_number)

      try {
        const response = await axiosIns.post('orders/store', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });

        this.myOrder =response.data
        return true
      } catch (err) {
        this.error = err + 'حدث خطأ غير متوقع، يرجى المحاولة لاحقًا'
        return false
      } finally {
        this.loading = false
      }
    },

  },
});
