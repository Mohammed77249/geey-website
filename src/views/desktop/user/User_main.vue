<template>
  <div>
    <div class="grid grid-cols-12 gap-2">
            <div class="col-span-12 lg:col-span-12">
              <section class="p-4 rounded bg-white mb-10">
                <div class="flex items-center justify-between">
                  <div class="flex gap-3">
                    <h2 class="text-md font-bold">مرحباً، mhmdh7550</h2>
                    <p class="text-xs text-gray-500">S0 🌟</p>
                  </div>
                  <div class="flex items-center gap-2">
                    <button class="text-[12px] text-gray-500 font-medium">
                      <RouterLink to="/desktop/user/myaccount">  ملفي الشخصي</RouterLink>

                    </button>
                    <svg
                      width="15"
                      height="10"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M15.0001 19.92L8.48009 13.4C7.71009 12.63 7.71009 11.37 8.48009 10.6L15.0001 4.07996"
                        stroke="gray"
                        stroke-width="3"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                </div>

                <!-- <div class="mt-4 grid grid-cols-3 gap-4 text-center">
                  <div class="space-y-3">
                    <p class="text-xs font-bold">***</p>
                    <p class="text-gray-600">كوبونات</p>
                  </div>
                  <div class="space-y-3">
                    <p class="text-xs font-bold">***</p>
                    <p class="text-gray-600">نقاط</p>
                  </div>
                  <div class="space-y-3">
                    <p class="text-xs font-bold">***</p>
                    <p class="text-gray-600">بطاقة هديه</p>
                  </div>
                </div> -->

              </section>
              <!-- Orders -->
              <section class="bg-white p-4 rounded">
                <div class="flex items-center justify-between mb-5">
                  <h2 class="text-md font-bold mb-4">طلبي</h2>
                  <div class="flex items-center gap-2">
                    <button class="text-[12px] text-gray-500 font-medium">
                      <RouterLink to="/desktop/user/myorder">الاراء الكاملة</RouterLink>
                    </button>
                    <svg
                      width="15"
                      height="10"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M15.0001 19.92L8.48009 13.4C7.71009 12.63 7.71009 11.37 8.48009 10.6L15.0001 4.07996"
                        stroke="gray"
                        stroke-width="3"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                </div>

                <div class="grid grid-cols-5 gap-2 p-2 text-center">
                  <div>
                    <p class="text-gray-500"> كل الطلبات</p>
                    <p class="text-lg font-bold">{{ orderStore.allOrders.length}}</p>
                  </div>
                  <div>
                    <p class="text-gray-500">قيد التجهيز</p>
                    <p class="text-lg font-bold">{{ EfficientprocessingOrders.length }}</p>
                  </div>
                  <div>
                    <p class="text-gray-500">تم الموافقه</p>
                    <p class="text-lg font-bold">{{ approvedOrders.length }}</p>
                  </div>
                  <div>
                    <p class="text-gray-500">تم التوصيل</p>
                    <p class="text-lg font-bold">{{ shopedOrders.length }}</p>
                  </div>
                  <div>
                    <p class="text-gray-500">تعليق</p>
                    <p class="text-lg font-bold">0</p>
                  </div>
                  <!-- <div>
                    <p class="text-gray-500">المنتجات المسترجعة</p>
                    <p class="text-lg font-bold">0</p>
                  </div> -->
                </div>
                <!-- <div class="w-full h-52 bg-gray-100 flex items-center justify-center">

                  <span>فارغ</span>

                </div> -->
              </section>
            </div>

            <!-- Left Sidebar -->
            <!-- <div class="col-span-12 lg:col-span-4 space-y-4">

              <section class="bg-white p-4 rounded">
                <h2 class="text-md font-bold mb-4">خدمة العملاء</h2>
                <div class="grid grid-cols-2 gap-4">
                  <button
                    class="bg-gray-100 p-4 rounded flex items-center gap-2"
                  >
                    📝 <span class="text-sm">سجلات الخدمة</span>
                  </button>
                  <button
                    class="bg-gray-100 p-4 rounded flex items-center gap-2"
                  >
                    📧 <span class="text-sm">رسائلي</span>
                  </button>
                </div>
              </section>


              <section class="bg-white p-4 rounded">
                <div class="flex justify-between items-center">
                  <h2 class="text-md font-bold">قائمة الإرادة</h2>
                  <button class="text-sm text-gray-500">0 منتج &gt;</button>
                </div>
              </section>

              <section class="bg-white p-4 rounded">
                <div class="flex justify-between items-center">
                  <h2 class="text-md font-bold">متابع</h2>
                  <button class="text-sm text-gray-500">0 منتج &gt;</button>
                </div>
              </section>


              <section class="bg-white p-4 rounded">
                <div class="flex justify-between items-center">
                  <h2 class="text-md font-bold">شُوهِد مؤخراً</h2>
                  <button class="text-sm text-gray-500">أكثر &gt;</button>
                </div>
                <div class="mt-4 flex gap-2 p-2 overflow-x-auto custom-scroll">
                  <img
                    src="https://via.placeholder.com/100"
                    class="w-24 h-24 rounded"
                    alt="product"
                  />
                  <img
                    src="https://via.placeholder.com/100"
                    class="w-24 h-24 rounded"
                    alt="product"
                  />
                  <img
                    src="https://via.placeholder.com/100"
                    class="w-24 h-24 rounded"
                    alt="product"
                  />
                </div>
              </section>
            </div> -->

          </div>

  </div>
</template>
<script setup>
import { useConfirmOrders } from '@/stores/confirmorder.js';
import {  ref ,onMounted} from 'vue';
const orderStore = useConfirmOrders();

const filteredData = ref({
  page: 1,
  perPage: 10,
})

const approvedOrders = ref([]);
const EfficientprocessingOrders = ref([]);
const shopedOrders = ref([]);

onMounted(async() => {
 await orderStore.fetchAllOrders(filteredData)

 approvedOrders.value = orderStore.getAllOrders.filter(order => order.status.id == 2)
 EfficientprocessingOrders.value = orderStore.getAllOrders.filter(order => order.status.id == 3);
 shopedOrders.value = orderStore.getAllOrders.filter(order => order.status.id == 6);
})
</script>

<style>
.custom-scroll::-webkit-scrollbar {
  width: 5px;
  opacity: 0;
}
.custom-scroll:hover::-webkit-scrollbar,
.custom-scroll:active::-webkit-scrollbar {
  opacity: 1;
}

.custom-scroll::-webkit-scrollbar-track {
  background: transparent;
}
.custom-scroll::-webkit-scrollbar-thumb {
  background-color: rgba(0, 0, 0, 0.4);
  border-radius: 4px;
}
</style>
