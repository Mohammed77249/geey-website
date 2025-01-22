<template>
  <div class="min-h-screen bg-white">
    <header class="bg-white shadow p-4">
      <h1 class="text-md md:text-xl font-bold text-gray-800 text-center">طلباتي</h1>
    </header>
    <main class="p-4">
      <div class="grid grid-cols-1  gap-4">
        <!-- قائمة الطلبات -->
        <div>
          <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-6 items-center lg:gap-3 mb-4">

            <button @click="taggleActiveAllRequest"
              :class="[
              onclickALlRequests
                ? ' text-primary-900'
                : ' text-gray-600 ',
                'w-20 md:w-28 h-8 md:h-10 cursor-pointer'
              ]">
              <span class="text-xs md:text-sm  lg:text-md   font-semibold ">جميع الطلبات</span>
              <div class="flex items-center justify-center">
                <div
                  :class="[
                    onclickALlRequests ? 'bg-primary-900' : 'bg-black hidden',
                    ' h-[3px] w-16 md:w-24 ',
                  ]"
                ></div>
              </div>

            </button>

            <button @click="taggleActiveNotPay"
              :class="[
              onclickNotPay
                ? ' text-primary-900'
                : ' text-gray-600  ',
                'w-20 md:w-28 h-8 md:h-10  cursor-pointer'
              ]">
              <span class="text-xs md:text-sm  lg:text-md    font-semibold ">غير مدفوع </span>
              <div class="flex items-center justify-center">
                <div
                  :class="[
                    onclickNotPay ? 'bg-primary-900' : 'bg-black hidden',
                    ' h-[3px] w-16 md:w-20  ',
                  ]"
                ></div>
              </div>

            </button>

            <button @click="taggleActiveEfficientprocessing"
              :class="[
              onclickEfficientprocessing
                ? ' text-primary-900'
                : ' text-gray-600  ',
                'w-20 md:w-28 h-8 md:h-10  cursor-pointer'
              ]">
              <span class="text-xs md:text-sm  lg:text-md  font-semibold ">قيد التجهيز  </span>
              <div class="flex items-center justify-center">
                <div
                  :class="[
                    onclickEfficientprocessing ? 'bg-primary-900' : 'bg-black hidden',
                    ' h-[3px]  w-16 md:w-20   ',
                  ]"
                ></div>
              </div>

            </button>

            <button @click="taggleActiveShipped"
              :class="[
              onclickShipped
                ? ' text-primary-900'
                : ' text-gray-600  ',
                'w-20 md:w-28 h-8 md:h-10  cursor-pointer'
              ]">
              <span class="text-xs md:text-sm  lg:text-md  font-semibold "> تم الشحن   </span>
              <div class="flex items-center justify-center">
                <div
                  :class="[
                    onclickShipped ? 'bg-primary-900' : 'bg-black hidden',
                    ' h-[3px] w-16 md:w-20 ',
                  ]"
                ></div>
              </div>

            </button>

            <button @click="taggleActiveComment"
              :class="[
              onclickComment
                ? ' text-primary-900'
                : ' text-gray-600  ',
                'w-20 md:w-28 h-8 md:h-10  cursor-pointer'
              ]">
              <span class="text-xs md:text-sm  lg:text-md    font-semibold "> تعليق  </span>
              <div class="flex items-center justify-center">
                <div
                  :class="[
                    onclickComment ? 'bg-primary-900' : 'bg-black hidden',
                    ' h-[3px] w-16 md:w-20  ',
                  ]"
                ></div>
              </div>

            </button>

            <button @click="taggleActiveReturnedproducts"
              :class="[
              onclickReturnedproducts
                ? ' text-primary-900'
                : ' text-gray-600  ',
                'w-28 md:w-40 h-8 md:h-10  cursor-pointer'
              ]">
               <span class="text-xs md:text-sm  lg:text-md   font-semibold "> المنتجات المسترجعه  </span>
              <div class="flex items-center justify-center">
                <div
                  :class="[
                    onclickReturnedproducts ? 'bg-primary-900' : 'bg-black hidden',
                    ' h-[3px]  w-28 md:w-36   ',
                  ]"
                ></div>
              </div>

            </button>

          </div>

          <div class="grid grid-cols-1 gap-1 w-full ">
            <div v-for="(order, index) in orderStore.getAllOrders"
              :key="index"
                class="p-1 mt-4"
              >
              <div class="border  bg-white shadow p-3">
                <div class="flex items-center gap-2 mb-2">
                  <div class="rounded-full w-5 h-5 " :style="['background-color:' + order.status.color + '']"></div>
                  <p class="font-semibold text-sm"> {{ order.status.name }}</p>
                </div>
                <RouterLink :to="`/desktop/user/myorder/${order.id}`">
                <div  class="flex items-center  gap-2 mb-2 cursor-pointer">
                  <h3 class="font-semibold   text-sm "> رقم الطلب : </h3>
                  <span class="text-gray-500 font-semibold   text-sm ">{{ order.trx_id }} # </span>
                </div>
              </RouterLink>


                <div class=" flex items-center gap-5   overflow-x-auto ">
                  <div class=""  v-for="(product, index) in order.order_products" :key="index">
                    <div class="w-[150px] h-[150px] ">
                      <img :src="product.image"  alt="no image" class="w-full h-full rounded-lg border   object-cover " />
                    </div>
                  </div>
                </div>
                <div class="flex items-center  gap-2 mt-2">
                  <h3 class="font-semibold  text text-sm ">  عدد المنتجات : {{ order.total_products }} </h3>
                  <h3 class="font-semibold  text-primary-900 text-sm ">  السعر الاجمالي : {{ order.total }} ري </h3>
                </div>

                <div class="flex items-center gap-3 mt-2">
                  <button type="button" class="border rounded-sm h-10 w-24 text-sm ">
                    الغاء الطلبية
                  </button>

                  <button type="button" class="border rounded-sm h-10 w-24 text-sm">
                    التتبع
                  </button>

                  <button type="button" class="bg-primary-900 rounded-sm h-10 w-24 text-white text-sm">
                    تعديل العنوان
                  </button>
                </div>



                <div>

                </div>
              </div>
            </div>
          </div>

          <!-- <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1 ">
          <div v-for="order in orders" :key="order.id" class="mb-4">
            <div
              class="bg-white shadow-md rounded-lg p-4 cursor-pointer hover:shadow-lg flex items-center"
              @click="selectOrder(order)"
            >
              <img
                :src="order.image"
                alt="Product Image"
                class="w-16 h-16 rounded-md object-cover mr-4"
              />
              <div>
                <h3 class="text-lg font-medium">طلب رقم: {{ order.number }}</h3>
                <p class="text-gray-600">تاريخ الطلب: {{ order.date }}</p>
                <p :class="{
                    'text-green-500': order.status === 'تم التوصيل',
                    'text-yellow-500': order.status === 'قيد الشحن'
                  }"
                >
                  {{ order.status }}
                </p>
              </div>
            </div>
          </div>
          </div> -->
        </div>

        <!-- تفاصيل الطلب -->
        <!-- <div v-if="selectedOrder" class="bg-white shadow-md rounded-lg p-4">
          <h2 class="text-lg font-semibold mb-4">تفاصيل الطلب</h2>
          <img
            :src="selectedOrder.image"
            alt="Product Image"
            class="w-48 h-48 rounded-md object-cover mx-auto mb-4"
          />
          <p><strong>رقم الطلب:</strong> {{ selectedOrder.number }}</p>
          <p><strong>الحالة:</strong> {{ selectedOrder.status }}</p>
          <p><strong>تاريخ الطلب:</strong> {{ selectedOrder.date }}</p>
          <p><strong>السعر الإجمالي:</strong> {{ selectedOrder.total }} ريال</p>
          <button
            class="mt-4 bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
            @click="clearSelection"
          >
            إغلاق التفاصيل
          </button>
        </div> -->
      </div>
    </main>
  </div>
</template>

<script setup>
import {  ref ,onMounted} from 'vue';
import { useConfirmOrders } from '@/stores/confirmorder.js';

const orderStore = useConfirmOrders();
const filteredData = ref({
  page: 1,
  perPage: 10,
})

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
})

// قائمة الطلبات مع الصور
// const orders = reactive([
//   {
//     id: 1,
//     number: '12345',
//     status: 'تم التوصيل',
//     date: '2023-12-31',
//     total: 150.0,
//     image: 'https://via.placeholder.com/150?text=Product+1', // رابط الصورة
//   },
//   {
//     id: 2,
//     number: '67890',
//     status: 'قيد الشحن',
//     date: '2023-12-29',
//     total: 200.0,
//     image: 'https://via.placeholder.com/150?text=Product+2', // رابط الصورة
//   },
//   {
//     id: 3,
//     number: '11223',
//     status: 'تم الإلغاء',
//     date: '2023-12-28',
//     total: 120.0,
//     image: 'https://via.placeholder.com/150?text=Product+3', // رابط الصورة
//   },
// ]);

// الطلب المحدد
// const selectedOrder = ref(null);

// اختيار طلب لعرض التفاصيل
// function selectOrder(order) {
//   selectedOrder.value = order;
// }

// إغلاق التفاصيل
// function clearSelection() {
//   selectedOrder.value = null;
// }
</script>
