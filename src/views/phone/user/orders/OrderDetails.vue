<template>
  <div class="bg-gray-50 h-screen">
    <!-- header -->
    <div class="fixed inset-0  bg-white p-2 shadow h-12">

      <div class="grid grid-cols-12 mt-1 items-center justify-between">
        <!-- back button -->
          <div @click="goBack"  class="col-span-3">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8.90991 19.92L15.4299 13.4C16.1999 12.63 16.1999 11.37 15.4299 10.6L8.90991 4.07996" stroke="#8a1538" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
          </div>
          <div class=" col-span-6 text-sm font-bold text-center">
          تفاصيل الطلب
          </div>
      </div>
      </div>


      <!-- main content -->
    <div class="mt-12">
      <div class="grid grid-cols-1 pt-2 gap-2 ">
        <div v-if="orderStore.loading" class="mt-20">
          <LoaderDatacomp :isLoader="orderStore.loading"/>

        </div>

        <div v-if="order">
          <div  class="">
            <div class="px-2 mt-4 shadow  bg-white py-2">
                  <div  class="flex items-center  gap-2 mb-2 cursor-pointer">
                    <h3 class="font-semibold   text-xs ">  {{ $t("order number") }} : </h3>
                    <span class="text-gray-500 font-semibold   text-xs ">{{ order.trx_id }} # </span>
                  </div>
            </div>

            <div class="px-2 mt-3 shadow bg-white py-3">
                  <div  class="flex items-center justify-between  gap-2 mb-2 cursor-pointer">
                    <h3 class="font-semibold   text-xs ">  وقت الشحن : </h3>
                    <span class="text-gray-500 font-semibold   text-xs ">{{ order.date }} # </span>
                  </div>
            </div>

                    <div class=" shadow bg-white mt-3  "  v-for="(product, index) in order.order_products" :key="index">
                      <div class="grid grid-cols-12 p-2 mt-2 mb-3">
                        <div class="col-span-4  ">
                          <div class="w-[100px] h-[120px] ">
                            <img :src="product.image !='https:\/\/jeeey-dashboard.najaz.in\/storage' ? product.image :'/jeeeeylogo3.jpg'" alt="no image" class="w-full h-full rounded-lg border  object-contain " />
                          </div>
                        </div>

                        <div class="col-span-4 ">
                          <span>{{ product.name }}</span>
                          <div class="flex-col items-center  gap-5 ">
                            <span class="text-xs" >   {{ $t("Quantity") }} :  {{ product.quantity }} </span>
                          </div>
                          <div class="text-xs mt-1">
                            <span class="text-xs "> {{ $t("measuring") }} : {{ product.measuring_value }}</span>
                          </div>
                          <div v-if="product.hex_code" class="text-xs mt-1 flex">
                            <span class="text-xs  "> {{ $t("Color") }} :
                            </span>
                            <div class="w-3 h-3 rounded-full flex items-center justify-center mt-[2px] mx-1" :style="{ backgroundColor: product.hex_code }" ></div>
                            <span>{{ product.color_name }}</span>
                          </div>
                        </div>

                        <div class="col-span-4">
                          <div @click="GoToOrederComments(product)" class="flex items-center gap-1 justify-end">
                            <button  class="text-xs text-primary-900  font-semibold">
                                اراء
                            </button>

                          <svg v-if="storedLanguage == 'ar'" width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M15.0001 19.92L8.48009 13.4C7.71009 12.63 7.71009 11.37 8.48009 10.6L15.0001 4.07996" stroke="#8a1538" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                          </svg>

                          <svg v-if="storedLanguage == 'en'" width="15" height="15" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.90991 19.92L15.4299 13.4C16.1999 12.63 16.1999 11.37 15.4299 10.6L8.90991 4.07996" stroke="#8a1538" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                          </svg>
                          </div>
                        </div>

                      </div>

                    </div>

          </div>

        </div>


        <div v-if="order" class="">

            <div class="bg-white  shadow p-4">
            <h2 class="font-semibold text-sm mb-4"> {{ $t("Payment details") }}: </h2>
            <div class="text-xs">
              <div class="flex justify-between py-2">
                <span>  {{ $t("Total products") }}:</span>
                <span> {{ order.products_total }} </span>
              </div>
              <div class="flex justify-between py-2">
                <span> {{ $t("Delivery cost") }}: </span>
                <span class="text-xs"> YER {{ order.delivery_total }}</span>
              </div>
              <div class="flex justify-between py-2">
                <span class="text-xs">{{ $t("Discount") }}:</span>
                <span class="text-xs">- YER {{ order.discount }} </span>
              </div>
              <div class="border-t my-4"></div>
              <div class="flex justify-between font-semibold text-lg">
                <span class="text-sm">{{ $t("Total") }}:</span>
                <span class="text-primary-900 text-sm"> YER {{ order.total  }}</span>
              </div>
            </div>
          </div>



        </div>

      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref,defineAsyncComponent } from "vue";
import { useRoute } from "vue-router";
import { useConfirmOrders } from '@/stores/confirmorder.js';
const LoaderDatacomp = defineAsyncComponent(() => import('@/components/LoaderDatacomp.vue'));
import { useRouter } from 'vue-router';
const router = useRouter();
const orderStore = useConfirmOrders();
const route = useRoute();
const orderId = ref();
const order = ref(null)
const storedLanguage = localStorage.getItem("language");

const goBack = () => {
  router.back();
};

const GoToOrederComments = (product)=>{
  router.push({ path: `/phone/user/myorder/comments`, query: {  id: encodeURIComponent(product.id)  } })

}


onMounted(async() => {
  orderId.value = decodeURIComponent(route.query.id || '')
  if(orderId.value){
    await orderStore.fetchDataOrderByOrderId(orderId.value);
    order.value =  orderStore.getDetailsOrder;
  }

});

</script>



