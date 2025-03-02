<template>
  <div class="bg-gray-50 h-screen">
    <!-- header -->
    <div class="fixed inset-0  bg-white p-2 shadow h-20">

      <div class="grid grid-cols-12 mt-1 items-center justify-between">
        <!-- back button -->
          <div @click="goBack"  class="col-span-3">

              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8.90991 19.92L15.4299 13.4C16.1999 12.63 16.1999 11.37 15.4299 10.6L8.90991 4.07996" stroke="#8a1538" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>

          </div>
          <div class=" col-span-6 text-sm font-bold text-center">
          الطلبات
          </div>
      </div>

      <!-- list  -->
      <div class="max-w-md  flex items-center overflow-y-auto custom-scroll">
        <div class="flex  items-center justify-center  h-12  " >
          <button @click="taggleActiveAllRequest"
            :class="[
            onclickALlRequests
              ? ' text-primary-900'
              : ' text-gray-600 ',
              'w-16  h-8  cursor-pointer'
            ]">
            <span class="text-xs md:text-sm  lg:text-md   font-semibold "> {{ $t("All orders") }}</span>
            <div class="flex items-center justify-center">
              <div
                :class="[
                  onclickALlRequests ? 'bg-primary-900' : 'bg-black hidden',
                  ' h-[2px] w-16  ',
                ]"
              ></div>
            </div>

          </button>

          <button @click="taggleActiveNotPay"
            :class="[
            onclickNotPay
              ? ' text-primary-900'
              : ' text-gray-600  ',
              'w-16 h-8   cursor-pointer'
            ]">
            <span class="text-xs md:text-sm  lg:text-md    font-semibold ">{{ $t("Approved") }}  </span>
            <div class="flex items-center justify-center">
              <div
                :class="[
                  onclickNotPay ? 'bg-primary-900' : 'bg-black hidden',
                  ' h-[2px] w-16  ',
                ]"
              ></div>
            </div>

          </button>

          <button @click="taggleActiveEfficientprocessing"
            :class="[
            onclickEfficientprocessing
              ? ' text-primary-900'
              : ' text-gray-600  ',
              'w-16 h-8   cursor-pointer'
            ]">
            <span class="text-xs md:text-sm  lg:text-md  font-semibold "> {{ $t("In preparation") }}  </span>
            <div class="flex items-center justify-center">
              <div
                :class="[
                  onclickEfficientprocessing ? 'bg-primary-900' : 'bg-black hidden',
                  ' h-[2px]  w-16 ',
                ]"
              ></div>
            </div>

          </button>

          <button @click="taggleActiveShipped"
            :class="[
            onclickShipped
              ? ' text-primary-900'
              : ' text-gray-600  ',
              'w-16 h-8   cursor-pointer'
            ]">
            <span class="text-xs md:text-sm  lg:text-md  font-semibold ">  {{ $t("Delivered") }}   </span>
            <div class="flex items-center justify-center">
              <div
                :class="[
                  onclickShipped ? 'bg-primary-900' : 'bg-black hidden',
                  ' h-[2px] w-16  ',
                ]"
              ></div>
            </div>

          </button>

          <button @click="taggleActiveComment"
            :class="[
            onclickComment
              ? ' text-primary-900'
              : ' text-gray-600  ',
              'w-16 h-8   cursor-pointer'
            ]">
            <span class="text-xs md:text-sm  lg:text-md    font-semibold "> {{ $t("comment") }}  </span>
            <div class="flex items-center justify-center">
              <div
                :class="[
                  onclickComment ? 'bg-primary-900' : 'bg-black hidden',
                  ' h-[2px] w-16   ',
                ]"
              ></div>
            </div>

          </button>

          <button @click="taggleActiveReturnedproducts"
            :class="[
            onclickReturnedproducts
              ? ' text-primary-900'
              : ' text-gray-600  ',
              'w-28  h-8   cursor-pointer'
            ]">
            <span class="text-xs md:text-sm  lg:text-md   font-semibold "> المنتجات المسترجعه  </span>
            <div class="flex items-center justify-center">
              <div
                :class="[
                  onclickReturnedproducts ? 'bg-primary-900' : 'bg-black hidden',
                  ' h-[2px]  w-28    ',
                ]"
              ></div>
            </div>

          </button>

          </div>
      </div>

    </div>

    <!-- Main content -->
    <div class="mt-20">
      <main class="">
      <div class="grid grid-cols-1 ">
        <!-- قائمة الطلبات -->
        <div>


          <!-- all  request -->
          <div v-if="onclickALlRequests" class="grid grid-cols-1 gap-1 w-full   ">
            <div v-for="(order, index) in orderStore.getAllOrders"
              :key="index"
              @click="GoToOrederDetails(order)"
                class=" mt-1"
              >
              <div class="border  bg-white shadow p-3">
                <div class="flex items-center gap-2 mb-2">
                  <div class="rounded-full w-4 h-4 " :style="['background-color:#' + order.status.color + '']"></div>
                  <p class="font-semibold text-xs"> {{ order.status.name }}</p>
                </div>

                <div  class="flex items-center  gap-2 mb-2 cursor-pointer">
                  <h3 class="font-semibold   text-xs "> {{ $t("order number") }}: </h3>
                  <span class="text-gray-500 font-semibold   text-xs ">{{ order.trx_id }} # </span>
                </div>


                <div class=" flex items-center gap-5   overflow-x-auto ">
                  <div class=""  v-for="(product, index) in order.order_products" :key="index">
                    <div class="w-[120px] h-[140px] ">

                      <img :src="product.image !='https:\/\/jeeey-dashboard.najaz.in\/storage' ? product.image :'/jeeeeylogo3.jpg'"  alt="" class=" h-full rounded-lg border   object-contain " />

                    </div>
                  </div>
                </div>
                <div class="flex items-center  gap-2 mt-2">
                  <h3 class="font-semibold  text text-xs "> {{ $t("Number of products") }}: {{ order.total_products }} </h3>
                  <h3 class="font-semibold  text-primary-900 text-xs ">  {{ $t("Total price") }}: {{ order.total }} </h3>
                  <p class=" text-[8px] text-primary-900 "> {{ currency?currency:'YER' }} </p>


                </div>

                <div>

                </div>
              </div>
            </div>
          </div>

          <!-- accepted -->
          <div v-if="onclickNotPay" class="grid grid-cols-1 gap-1 w-full ">
            <div v-for="(order, index) in approvedOrders"
              :key="index"
               @click="GoToOrederDetails(order)"
                class=" mt-1"
              >
              <div class="border  bg-white shadow p-3">
                <div class="flex items-center gap-2 mb-2">
                  <div class="rounded-full w-4 h-4 " :style="['background-color:#' + order.status.color + '']"></div>
                  <p class="font-semibold text-xs"> {{ order.status.name }}</p>
                </div>
                <div  class="flex items-center  gap-2 mb-2 cursor-pointer">
                  <h3 class="font-semibold   text-xs "> رقم الطلب : </h3>
                  <span class="text-gray-500 font-semibold   text-xs ">{{ order.trx_id }} # </span>
                </div>


                <div class=" flex items-center gap-5   overflow-x-auto ">
                  <div class=""  v-for="(product, index) in order.order_products" :key="index">
                    <div class="w-[130px] h-[150px] ">
                      <img :src="product.image !='https:\/\/jeeey-dashboard.najaz.in\/storage' ? product.image :'/jeeeeylogo3.jpg'"  alt="" class=" h-full rounded-lg border   object-contain " />
                    </div>
                  </div>
                </div>
                <div class="flex items-center  gap-2 mt-2">
                  <h3 class="font-semibold  text text-xs ">  عدد المنتجات : {{ order.total_products }} </h3>
                  <h3 class="font-semibold  text-primary-900 text-xs ">  السعر الاجمالي : {{ order.total }}  </h3>
                  <p class=" text-[8px] text-primary-900 "> {{ currency?currency:'YER' }} </p>

                </div>

                <!-- <div class="flex items-center gap-3 mt-2">
                  <button type="button" class="border rounded-sm h-10 w-24 text-sm ">
                    الغاء الطلبية
                  </button>

                  <button type="button" class="border rounded-sm h-10 w-24 text-sm">
                    التتبع
                  </button>

                  <button type="button" class="bg-primary-900 rounded-sm h-10 w-24 text-white text-sm">
                    تعديل العنوان
                  </button>
                </div> -->

                <div>

                </div>
              </div>
            </div>
          </div>

          <!-- قيد التجهيز -->
          <div v-if="onclickEfficientprocessing" class="grid grid-cols-1 gap-1  w-full ">
            <div v-for="(order, index) in EfficientprocessingOrders"
              :key="index"
               @click="GoToOrederDetails(order)"
                class="mt-1"
              >
              <div class="border  bg-white shadow p-3">
                <div class="flex items-center gap-2 mb-2">
                  <div class="rounded-full w-4 h-4 " :style="['background-color:#' + order.status.color + '']"></div>
                  <p class="font-semibold text-xs"> {{ order.status.name }}</p>
                </div>
                <div  class="flex items-center  gap-2 mb-2 cursor-pointer">
                  <h3 class="font-semibold   text-xs "> رقم الطلب : </h3>
                  <span class="text-gray-500 font-semibold   text-sm ">{{ order.trx_id }} # </span>
                </div>


                <div class=" flex items-center gap-5   overflow-x-auto ">
                  <div class=""  v-for="(product, index) in order.order_products" :key="index">
                    <div class="w-[130px] h-[150px] ">
                      <img :src="product.image !='https:\/\/jeeey-dashboard.najaz.in\/storage' ? product.image :'/jeeeeylogo3.jpg'"  alt="" class=" h-full rounded-lg border   object-contain " />
                    </div>
                  </div>
                </div>
                <div class="flex items-center  gap-2 mt-2">
                  <h3 class="font-semibold  text text-xs ">  عدد المنتجات : {{ order.total_products }} </h3>
                  <h3 class="font-semibold  text-primary-900 text-xs ">  السعر الاجمالي : {{ order.total }}  </h3>
                  <p class=" text-[8px] text-primary-900 "> {{ currency?currency:'YER' }} </p>

                </div>

                <!-- <div class="flex items-center gap-3 mt-2">
                  <button type="button" class="border rounded-sm h-10 w-24 text-sm ">
                    الغاء الطلبية
                  </button>

                  <button type="button" class="border rounded-sm h-10 w-24 text-sm">
                    التتبع
                  </button>

                  <button type="button" class="bg-primary-900 rounded-sm h-10 w-24 text-white text-sm">
                    تعديل العنوان
                  </button>
                </div> -->

                <div>

                </div>
              </div>
            </div>
          </div>


          <!--  تم التوصيل -->
          <div v-if="onclickShipped" class="grid grid-cols-1 gap-1 w-full ">
            <div v-for="(order, index) in shopedOrders"
              :key="index"
                class="mt-1"
                @click="GoToOrederDetails(order)"
              >
              <div class="border  bg-white shadow p-3">
                <div class="flex items-center gap-2 mb-2">
                  <div class="rounded-full w-4 h-4 " :style="['background-color:#' + order.status.color + '']"></div>
                  <p class="font-semibold text-xs"> {{ order.status.name }}</p>
                </div>
                <RouterLink :to="`/phone/user/myorder/${order.id}`">
                <div  class="flex items-center  gap-2 mb-2 cursor-pointer">
                  <h3 class="font-semibold   text-xs "> رقم الطلب : </h3>
                  <span class="text-gray-500 font-semibold   text-xs ">{{ order.trx_id }} # </span>
                </div>
              </RouterLink>


                <div class=" flex items-center gap-5   overflow-x-auto ">
                  <div class=""  v-for="(product, index) in order.order_products" :key="index">
                    <div class="w-[130px] h-[150px] ">
                      <img :src="product.image !='https:\/\/jeeey-dashboard.najaz.in\/storage' ? product.image :'/jeeeeylogo3.jpg'"  alt="" class=" h-full rounded-lg border   object-contain " />
                    </div>
                  </div>
                </div>
                <div class="flex items-center  gap-2 mt-2">
                  <h3 class="font-semibold  text text-xs ">  عدد المنتجات : {{ order.total_products }} </h3>
                  <h3 class="font-semibold  text-primary-900 text-xs">  السعر الاجمالي : {{ order.total }} </h3>
                  <p class=" text-[8px] text-primary-900 "> {{ currency?currency:'YER' }} </p>


                </div>

                <!-- <div class="flex items-center gap-3 mt-2">
                  <button type="button" class="border rounded-sm h-10 w-24 text-sm ">
                    الغاء الطلبية
                  </button>

                  <button type="button" class="border rounded-sm h-10 w-24 text-sm">
                    التتبع
                  </button>

                  <button type="button" class="bg-primary-900 rounded-sm h-10 w-24 text-white text-sm">
                    تعديل العنوان
                  </button>
                </div> -->

                <div>

                </div>
              </div>
            </div>
          </div>


        </div>


      </div>
    </main>
    </div>
  </div>
</template>

<script setup>
import {  ref ,onMounted} from 'vue';
import { useConfirmOrders } from '@/stores/confirmorder.js';
import { useRouter } from 'vue-router';
const router = useRouter();
const goBack = () => {
  router.back();
};


const GoToOrederDetails = (order)=>{
  router.push({ path: `/phone/user/myorder`, query: { id: encodeURIComponent(order.id) } })

}
const orderStore = useConfirmOrders();
const filteredData = ref({
  page: 1,
  perPage: 100,
})


const currency = localStorage.getItem('currency');



const approvedOrders = ref([]);
const EfficientprocessingOrders = ref([]);
const shopedOrders = ref([]);


const onclickALlRequests = ref(true)
const onclickNotPay = ref(false)
const onclickEfficientprocessing = ref(false)
const onclickShipped = ref(false)
const onclickComment = ref(false);
const onclickReturnedproducts = ref(false)

const taggleActiveAllRequest = () => {
  onclickALlRequests.value =  true
  onclickNotPay.value =  false
  onclickEfficientprocessing.value =  false
  onclickShipped.value = false
  onclickComment.value =false
  onclickReturnedproducts.value =false

}

const taggleActiveNotPay = () => {
  onclickALlRequests.value =  false
  onclickNotPay.value =  true
  onclickEfficientprocessing.value =  false
  onclickShipped.value = false
  onclickComment.value =false
  onclickReturnedproducts.value =false

}

const taggleActiveEfficientprocessing = () => {
  onclickALlRequests.value =  false
  onclickNotPay.value =  false
  onclickEfficientprocessing.value =  true
  onclickShipped.value = false
  onclickComment.value =false
  onclickReturnedproducts.value =false

}

const taggleActiveShipped = () => {
  onclickALlRequests.value =  false
  onclickNotPay.value =  false
  onclickEfficientprocessing.value =  false
  onclickShipped.value = true
  onclickComment.value =false
  onclickReturnedproducts.value =false

}

const taggleActiveComment = () => {
  onclickALlRequests.value =  false
  onclickNotPay.value =  false
  onclickEfficientprocessing.value =  false
  onclickShipped.value = false
  onclickComment.value =true
  onclickReturnedproducts.value =false

}

const taggleActiveReturnedproducts = () => {
  onclickALlRequests.value =  false
  onclickNotPay.value =  false
  onclickEfficientprocessing.value =  false
  onclickShipped.value = false
  onclickComment.value =false
  onclickReturnedproducts.value =true

}


onMounted(async() => {
 await orderStore.fetchAllOrders(filteredData)

 approvedOrders.value = orderStore.getAllOrders.filter(order => order.status.id == 2)
 EfficientprocessingOrders.value = orderStore.getAllOrders.filter(order => order.status.id == 3);
 shopedOrders.value = orderStore.getAllOrders.filter(order => order.status.id == 6);


});


</script>


<style scoped>


.custom-scroll::-webkit-scrollbar {
  width: 0px;
  height: 0px;
  opacity: 0;
}
.custom-scroll:hover::-webkit-scrollbar,
.custom-scroll:active::-webkit-scrollbar {
  opacity: 0;
}

.custom-scroll::-webkit-scrollbar-track {
  background: transparent;
}
.custom-scroll::-webkit-scrollbar-thumb {
  background-color: rgba(0, 0, 0, 0.4);
  border-radius: 4px;
}
</style>
