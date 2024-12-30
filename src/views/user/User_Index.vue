<template>
  <div class="min-h-screen bg-gray-50">
    <div class="py-5 px-5 lg:px-20">
      <h1 class="mb-10 text-sm text-gray-500 font-medium">
        الصفحه الرئيسيه/ المركز الشخصي
      </h1>
      <div class="grid grid-cols-12 gap-2">
        <!-- Right Sidebar -->
        <aside class="col-span-3 bg-white p-4">
          <h2 class="text-lg font-bold mb-4">المركز الشخصي</h2>
          <ul class="space-y-5">
            <!-- حسابي -->
            <li>
              <div
                class="flex justify-between items-center cursor-pointer"
                @click="toggleSection('account')"
              >
                <h3 class="font-bold text-md text-black">حسابي</h3>
                <span class="font-bold text-lg">{{
                  sections.account ? '-' : '+'
                }}</span>
              </div>
              <ul
                v-if="sections.account"
                class="mt-2 space-y-3 p-4 text-gray-600 text-sm"
              >
                <li>
                  <button
                    class="flex items-center gap-2 space-x-2 hover:text-black cursor-pointer"
                  >
                    <span>🏅</span> <span class="font-medium">Jeeey Club</span>
                  </button>
                </li>
                <li>
                  <button
                    class="flex items-center gap-2 space-x-2 hover:text-black cursor-pointer"
                  >
                    <span>⭐</span> <span class="font-medium">VIP جي</span>
                  </button>
                </li>
                <li>
                  <button
                    class="flex items-center gap-2 space-x-2 hover:text-black cursor-pointer"
                  >
                    <span>📍</span>
                    <span class="font-medium">ملفي الشخصي </span>
                  </button>
                </li>
                <li>
                  <button
                    class="flex items-center gap-2 space-x-2 hover:text-black cursor-pointer"
                  >
                    <span>💳</span>
                    <span class="font-medium">خيارات الدفع</span>
                  </button>
                </li>
                <li>
                  <button
                    class="flex items-center gap-2 space-x-2 hover:text-black cursor-pointer"
                  >
                    <span>📏</span>
                    <span class="font-medium">القياسات الخاصة بي</span>
                  </button>
                </li>
                <li>
                  <button
                    class="flex items-center gap-2 space-x-2 hover:text-black cursor-pointer"
                  >
                    <span>🔧</span>
                    <span class="font-medium"> إدارة حسابي</span>
                  </button>
                </li>
              </ul>
            </li>

            <!-- ممتلكاتي -->
            <li>
              <div
                class="flex justify-between items-center cursor-pointer"
                @click="toggleSection('properties')"
              >
                <h3 class="font-bold text-md text-black">ممتلكاتي</h3>
                <span class="font-bold text-lg">{{
                  sections.properties ? '-' : '+'
                }}</span>
              </div>
              <ul
                v-if="sections.properties"
                class="mt-2 space-y-3 text-gray-600 text-sm p-4"
              >
                <li>
                  <button
                    class="flex items-center gap-2 space-x-2 hover:text-black cursor-pointer"
                  >
                    <span>🏅</span> <span class="font-medium">كوبوناتي</span>
                  </button>
                </li>
                <li>
                  <button
                    class="flex items-center gap-2 space-x-2 hover:text-black cursor-pointer"
                  >
                    <span>🏅</span> <span class="font-medium">نقاطي</span>
                  </button>
                </li>
                <li>
                  <button
                    class="flex items-center gap-2 space-x-2 hover:text-black cursor-pointer"
                  >
                    <span>🏅</span> <span class="font-medium">محفظتي</span>
                  </button>
                </li>
                <li>
                  <button
                    class="flex items-center gap-2 space-x-2 hover:text-black cursor-pointer"
                  >
                    <span>🏅</span> <span class="font-medium">بطاقه هديه</span>
                  </button>
                </li>
              </ul>
            </li>

            <!-- طلبي -->
            <li>
              <div
                class="flex justify-between items-center cursor-pointer"
                @click="toggleSection('orders')"
              >
                <h3 class="font-bold text-md text-black">طلبي</h3>
                <span class="font-bold text-lg">{{
                  sections.orders ? '-' : '+'
                }}</span>
              </div>
              <ul
                v-if="sections.orders"
                class="mt-2 space-y-3 p-4 text-gray-600 text-sm"
              >
                <li>
                  <button
                    class="flex items-center gap-2 space-x-2 hover:text-black cursor-pointer"
                  >
                    <span>🏅</span>
                    <span class="font-medium">جميع الطلبات</span>
                  </button>
                </li>
                <li>
                  <button
                    class="flex items-center gap-2 space-x-2 hover:text-black cursor-pointer"
                  >
                    <span>🏅</span>
                    <span class="font-medium"> طلبات غير مدفوعه</span>
                  </button>
                </li>
                <li>
                  <button
                    class="flex items-center gap-2 space-x-2 hover:text-black cursor-pointer"
                  >
                    <span>🏅</span>
                    <span class="font-medium"> طلبات قيد التجهيز</span>
                  </button>
                </li>
                <li>
                  <button
                    class="flex items-center gap-2 space-x-2 hover:text-black cursor-pointer"
                  >
                    <span>🏅</span>
                    <span class="font-medium"> طلبات مشحونه</span>
                  </button>
                </li>
                <li>
                  <button
                    class="flex items-center gap-2 space-x-2 hover:text-black cursor-pointer"
                  >
                    <span>🏅</span>
                    <span class="font-medium"> طلبات التقييم</span>
                  </button>
                </li>
                <li>
                  <button
                    class="flex items-center gap-2 space-x-2 hover:text-black cursor-pointer"
                  >
                    <span>🏅</span>
                    <span class="font-medium"> طلبات الارجاع</span>
                  </button>
                </li>
              </ul>
            </li>

            <!-- اهتمامي -->
            <li>
              <div
                class="flex justify-between items-center cursor-pointer"
                @click="toggleSection('favorites')"
              >
                <h3 class="font-bold text-md text-black">اهتمامي</h3>
                <span class="font-bold text-lg">{{
                  sections.favorites ? '-' : '+'
                }}</span>
              </div>
              <ul
                v-if="sections.favorites"
                class="mt-2 space-y-3 p-4 text-gray-600 text-sm"
              >
                <li>
                  <button
                    class="flex items-center gap-2 space-x-2 hover:text-black cursor-pointer"
                  >
                    <span>🏅</span> <span class="font-medium"> قائمه الحب</span>
                  </button>
                </li>
                <li>
                  <button
                    class="flex items-center gap-2 space-x-2 hover:text-black cursor-pointer"
                  >
                    <span>🏅</span> <span class="font-medium"> شوهد مؤخرا</span>
                  </button>
                </li>
                <li>
                  <button
                    class="flex items-center gap-2 space-x-2 hover:text-black cursor-pointer"
                  >
                    <span>🏅</span> <span class="font-medium"> متابع</span>
                  </button>
                </li>
              </ul>
            </li>

            <!-- خدمة العملاء -->
            <li>
              <div
                class="flex justify-between items-center cursor-pointer"
                @click="toggleSection('customerService')"
              >
                <h3 class="font-bold text-md text-black">خدمة العملاء</h3>
                <span class="font-bold text-lg">{{
                  sections.customerService ? '-' : '+'
                }}</span>
              </div>
              <ul
                v-if="sections.customerService"
                class="mt-2 space-y-3 p-4 text-gray-600 text-sm"
              >
                <li>
                  <button
                    class="flex items-center gap-2 space-x-2 hover:text-black cursor-pointer"
                  >
                    <span>🏅</span> <span class="font-medium">رسائلي </span>
                  </button>
                </li>
                <li>
                  <button
                    class="flex items-center gap-2 space-x-2 hover:text-black cursor-pointer"
                  >
                    <span>🏅</span>
                    <span class="font-medium">سجلات الخدمة</span>
                  </button>
                </li>
              </ul>
            </li>

            <!-- خدمات اخرى -->
            <li>
              <div
                class="flex justify-between items-center cursor-pointer"
                @click="toggleSection('otherServices')"
              >
                <h3 class="font-bold text-md text-black">خدمات اخرى</h3>
                <span class="font-bold text-lg">{{
                  sections.otherServices ? '-' : '+'
                }}</span>
              </div>
              <ul
                v-if="sections.otherServices"
                class="mt-2 space-y-3 p-4 text-gray-600 text-sm"
              >
                <li>
                  <button
                    class="flex items-center gap-2 space-x-2 hover:text-black cursor-pointer"
                  >
                    <span>🏅</span>
                    <span class="font-medium"> تجربه الازياء المجانيه</span>
                  </button>
                </li>
                <li>
                  <button
                    class="flex items-center gap-2 space-x-2 hover:text-black cursor-pointer"
                  >
                    <span>🏅</span>
                    <span class="font-medium"> مركز استطلاعات الراي</span>
                  </button>
                </li>
                <li>
                  <button
                    class="flex items-center gap-2 space-x-2 hover:text-black cursor-pointer"
                  >
                    <span>🏅</span>
                    <span class="font-medium"> شاركوا واكسبوا</span>
                  </button>
                </li>
                <li>
                  <button
                    class="flex items-center gap-2 space-x-2 hover:text-black cursor-pointer"
                  >
                    <span>🏅</span>
                    <span class="font-medium"> جهات الاتصال المفضله</span>
                  </button>
                </li>
              </ul>
            </li>

            <!-- السياسات -->
            <li>
              <div
                class="flex justify-between items-center cursor-pointer"
                @click="toggleSection('policies')"
              >
                <h3 class="font-bold text-md text-black">السياسات</h3>
                <span class="font-bold text-lg">{{
                  sections.policies ? '-' : '+'
                }}</span>
              </div>
              <ul
                v-if="sections.policies"
                class="mt-2 space-y-3 p-4 text-gray-600 text-sm"
              >
                <li>
                  <button
                    class="flex items-center gap-2 space-x-2 hover:text-black cursor-pointer"
                  >
                    <span>🏅</span>
                    <span class="font-medium"> معلومات الشحن</span>
                  </button>
                </li>
                <li>
                  <button
                    class="flex items-center gap-2 space-x-2 hover:text-black cursor-pointer"
                  >
                    <span>🏅</span>
                    <span class="font-medium">سياسه الارجاع </span>
                  </button>
                </li>
                <li>
                  <button
                    class="flex items-center gap-2 space-x-2 hover:text-black cursor-pointer"
                  >
                    <span>🏅</span>
                    <span class="font-medium"> سياسه الخصوصيه</span>
                  </button>
                </li>
              </ul>
            </li>

            <!-- تسجيل الخروج -->
            <li>
              <div
                class="flex justify-between items-center cursor-pointer"
                @click="toggleSection('logout')"
              >
                <h3 class="font-bold text-md text-black">تسجيل الخروج</h3>
              </div>
            </li>
          </ul>
        </aside>

        <!-- Center Content -->
        <main class="col-span-9">
          <div class="grid grid-cols-12 gap-2">
            <div class="col-span-12 lg:col-span-8">
              <!-- Header Section  class="p-4 rounded bg-gradient-to-r from-orange-50 to-white"> -->
              <section class="p-4 rounded bg-white mb-10">
                <div class="flex items-center justify-between">
                  <div class="flex gap-3">
                    <h2 class="text-md font-bold">مرحباً، mhmdh7550</h2>
                    <p class="text-xs text-gray-500">S0 🌟</p>
                  </div>
                  <div class="flex items-center gap-2">
                    <button class="text-[12px] text-gray-500 font-medium">
                      ملفي الشخصي
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
                <div class="mt-4 grid grid-cols-3 gap-4 text-center">
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
                </div>
              </section>
              <!-- Orders -->
              <section class="bg-white p-4 rounded">
                <div class="flex items-center justify-between mb-5">
                  <h2 class="text-md font-bold mb-4">طلبي</h2>
                  <div class="flex items-center gap-2">
                    <button class="text-[12px] text-gray-500 font-medium">
                      الاراء الكاملة
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
                    <p class="text-gray-500">غير مدفوع</p>
                    <p class="text-lg font-bold">0</p>
                  </div>
                  <div>
                    <p class="text-gray-500">قيد التجهيز</p>
                    <p class="text-lg font-bold">0</p>
                  </div>
                  <div>
                    <p class="text-gray-500">تم الشحن</p>
                    <p class="text-lg font-bold">0</p>
                  </div>
                  <div>
                    <p class="text-gray-500">تعليق</p>
                    <p class="text-lg font-bold">0</p>
                  </div>
                  <div>
                    <p class="text-gray-500">المنتجات المسترجعة</p>
                    <p class="text-lg font-bold">0</p>
                  </div>
                </div>
                <div class="w-full h-52 bg-gray-100 flex items-center justify-center">

                  <span>فارغ</span>

                </div>
              </section>
            </div>

            <!-- Left Sidebar -->
            <div class="col-span-12 lg:col-span-4 space-y-4">
              <!-- Customer Service -->
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

              <!-- Wishlist -->
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

              <!-- Recently Viewed -->
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
            </div>
          </div>
        </main>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue'

// حالة الأقسام المفتوحة/المغلقة
const sections = reactive({
  account: true,
  properties: false,
  orders: false,
  favorites: false,
  customerService: false,
  otherServices: false,
  policies: false,
  logout: false,
})

// دالة تبديل حالة القسم
const toggleSection = section => {
  sections[section] = !sections[section]
};
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
