<template>
  <div class="min-h-screen  bg-white p-4">

    <header class="bg-white shadow p-4">
      <h1 class="text-md md:text-xl font-bold text-gray-800 text-center">{{ $t("Order details") }}  </h1>
    </header>

    <div class="grid grid-cols-12 mt-5  p-4 gap-2 ">
      <div v-if="orderStore.loading">
          loadinfd
        </div>
      <div class="col-span-7  shadow bg-white">
        <div v-if="order"
                class="p-1 mt-4"
              >
              <div class="">
                <div class="flex items-center gap-2 mb-2">
                 <span  class="font-semibold   text-sm ">   {{ $t("Request status") }}: </span>
                  <div class="rounded-full w-5 h-5 " :style="['background-color:#' + order.status.color + '']"></div>
                  <p class="font-semibold text-sm"> {{ order.status.name }}</p>
                </div>
                <RouterLink :to="`/desktop/user/myoreder/${order.id}`">
                <div  class="flex items-center  gap-2 mb-2 cursor-pointer">
                  <h3 class="font-semibold   text-sm ">  {{ $t("order number") }} : </h3>
                  <span class="text-gray-500 font-semibold   text-sm ">{{ order.trx_id }} # </span>
                </div>
              </RouterLink>

              <span class="font-semibold   text-sm mb-5 ">{{ $t("Products") }}:</span>

                <div class="mt-2">
                  <div class=""  v-for="(product, index) in order.order_products" :key="index">
                    <div class="grid grid-cols-12">
                      <div class="col-span-4 mb-5 ">
                        <div class="w-[150px] h-[100px] ">
                          <img :src="product.image"  alt="no image" class="w-full h-full rounded-lg border   object-cover " />
                        </div>
                      </div>

                      <div class="col-span-8">
                        <div class="flex items-center  gap-5 mt-5">
                          <span class="text-sm" >   {{ $t("Quantity") }} :  {{ product.quantity }} </span>
                          <span class="text-sm "> {{ $t("measuring") }} : {{ product.size_value }}</span>
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


      <div v-if="order" class="col-span-5">

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


