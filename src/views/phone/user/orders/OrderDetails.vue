<template>
  <div class="bg-gray-100 h-screen">
    <!-- header -->
    <div class="fixed inset-0  bg-white p-2 shadow h-16">

      <div class="grid grid-cols-12 items-center justify-between">
        <!-- back button -->
          <div class="col-span-3">
            <RouterLink to="/phone/user/myorders">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8.90991 19.92L15.4299 13.4C16.1999 12.63 16.1999 11.37 15.4299 10.6L8.90991 4.07996" stroke="#8a1538" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </RouterLink>
          </div>
          <div class=" col-span-6 text-lg font-bold text-center">
          تفاصيل الطلب
          </div>
      </div>
      </div>


      <!-- main content -->
    <div class="mt-16">
      <div class="grid grid-cols-1 mt-5  p-4 gap-2 ">
        <div v-if="orderStore.loading">
            loadinfd
        </div>

        <div v-if="order">
          <div  class="">
            <div class="p-1 mt-4 shadow bg-white py-2">
                  <div  class="flex items-center  gap-2 mb-2 cursor-pointer">
                    <h3 class="font-semibold   text-sm ">  {{ $t("order number") }} : </h3>
                    <span class="text-gray-500 font-semibold   text-sm ">{{ order.trx_id }} # </span>
                  </div>
            </div>

                <div class="p-1 mt-4 shadow bg-white">
                  <div class="flex items-center gap-2 mb-2">
                  <span  class="font-semibold   text-sm ">   {{ $t("Request status") }}: </span>
                    <div class="rounded-full w-5 h-5 " :style="['background-color:#' + order.status.color + '']"></div>
                    <p class="font-semibold text-sm"> {{ order.status.name }}</p>
                  </div>

                <span class="font-semibold   text-sm mb-5 ">{{ $t("Products") }}:</span>

                  <div class="mt-2">
                    <div class=""  v-for="(product, index) in order.order_products" :key="index">
                      <div class="grid grid-cols-12">
                        <div class="col-span-4 mb-5 ">
                          <div class="w-[100px] h-[100px] ">
                            <img :src="product.image"  alt="no image" class="w-full h-full rounded-lg border   object-cover " />
                          </div>
                        </div>

                        <div class="col-span-8">
                          <div class="flex items-center  gap-5 mt-5">
                            <span class="text-sm" >   {{ $t("Quantity") }} :  {{ product.quantity }} </span>
                            <span class="text-sm "> {{ $t("measuring") }} : {{ product.measuring_value }}</span>
                          </div>
                        </div>

                      </div>

                    </div>
                  </div>

                  <div>

                  </div>
                </div>
          </div>

        </div>


        <div v-if="order" class="">

            <div class="bg-white  shadow p-4">
            <h2 class="font-semibold text-lg mb-4"> {{ $t("Payment details") }}: </h2>
            <div class="text-sm">
              <div class="flex justify-between py-2">
                <span>  {{ $t("Total products") }}:</span>
                <span> {{ order.products_total }} </span>
              </div>
              <div class="flex justify-between py-2">
                <span> {{ $t("Delivery cost") }}: </span>
                <span> YER {{ order.delivery_total }}</span>
              </div>
              <div class="flex justify-between py-2">
                <span>{{ $t("Discount") }}:</span>
                <span>- YER {{ order.discount }} </span>
              </div>
              <div class="border-t my-4"></div>
              <div class="flex justify-between font-semibold text-lg">
                <span>{{ $t("Total") }}:</span>
                <span class="text-primary-900"> YER {{ order.total  }}</span>
              </div>
            </div>
          </div>



        </div>

      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import { useConfirmOrders } from '@/stores/confirmorder.js';
const orderStore = useConfirmOrders();
const route = useRoute();
const orderId = route.params.id;
const order = ref(null)

onMounted(async() => {
 await orderStore.fetchDataOrderByOrderId(orderId);
 order.value =  orderStore.getDetailsOrder;
});

</script>



