<template>
  <div class="min-h-screen bg-gray-50">
    <div class="py-5 px-5 lg:px-20">
      <h1 class="mb-10 text-sm text-gray-500 font-medium">
        الصفحه الرئيسيه/ المركز الشخصي
      </h1>
      <div class="grid grid-cols-12 gap-2">
        <!-- Right Sidebar -->
        <aside class="col-span-4 md:col-span-3 bg-white p-4">
          <span class="text-xs md:text-lg font-bold mb-4">المركز الشخصي</span>
          <ul class="space-y-5">
            <!-- حسابي -->
            <li>
              <div
                class="flex justify-between items-center cursor-pointer"
                @click="toggleSection('account')"
              >
                <span class="font-bold text-black text-xs md:text-[16px] ">حسابي</span>
                <span class="font-bold text-lg">{{
                  sections.account ? '-' : '+'
                }}</span>
              </div>
              <ul
                v-if="sections.account"
                class="mt-2 space-y-3  text-gray-600 text-sm"
              >
                <li>
                  <button
                    class="flex items-center gap-2 space-x-2 hover:text-black cursor-pointer"
                  >
                    <span>🏅</span> <span class="text-xs md:text-sm font-medium">Jeeey Club</span>
                  </button>
                </li>
                <li>
                  <button
                    class="flex items-center gap-2 space-x-2 hover:text-black cursor-pointer"
                  >
                    <span>⭐</span> <span class=" text-xs md:text-sm font-medium">VIP جي</span>
                  </button>
                </li>
                <li>
                  <button
                    class="flex items-center gap-2 space-x-2 hover:text-black cursor-pointer"
                  >
                    <span>📍</span>
                    <RouterLink to="/my_profile"><span class=" text-xs md:text-sm font-medium">ملفي الشخصي </span></RouterLink>

                  </button>
                </li>
                <li>
                  <button
                    class="flex items-center gap-2 space-x-2 hover:text-black cursor-pointer"
                  >
                    <span>📍</span>
                    <RouterLink to="/desktop/user/myaddresses"><span class=" text-xs md:text-sm font-medium"> دفتر العناوين </span></RouterLink>

                  </button>
                </li>
                <li>
                  <button
                    class="flex items-center gap-2 space-x-2 hover:text-black cursor-pointer"
                  >
                    <span>💳</span>
                    <span class="font-medium text-xs md:text-sm">خيارات الدفع</span>
                  </button>
                </li>
                <li>
                  <button
                    class="flex items-center gap-2 space-x-2 hover:text-black cursor-pointer"
                  >
                    <span>📏</span>
                    <span class="font-medium text-xs md:text-sm">القياسات الخاصة بي</span>
                  </button>
                </li>
                <li>
                  <button
                    class="flex items-center gap-2 space-x-2 hover:text-black cursor-pointer"
                  >
                    <span>🔧</span>
                    <span class="font-medium text-xs md:text-sm"> إدارة حسابي</span>
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
                <h3 class="font-bold text-xs md:text-[16px]  text-black">ممتلكاتي</h3>
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
                    <span>🏅</span> <span class="text-xs md:text-sm  font-medium">كوبوناتي</span>
                  </button>
                </li>
                <li>
                  <button
                    class="flex items-center gap-2 space-x-2 hover:text-black cursor-pointer"
                  >
                    <span>🏅</span> <span class="text-xs md:text-sm  font-medium">نقاطي</span>
                  </button>
                </li>
                <li>
                  <button
                    class="flex items-center gap-2 space-x-2 hover:text-black cursor-pointer"
                  >
                    <span>🏅</span> <span class="text-xs md:text-sm  font-medium">محفظتي</span>
                  </button>
                </li>
                <li>
                  <button
                    class="flex items-center gap-2 space-x-2 hover:text-black cursor-pointer"
                  >
                    <span>🏅</span> <span class=" text-xs md:text-sm  font-medium">بطاقه هديه</span>
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
                <h3 class="font-bold text-xs md:text-[16px]  text-black">طلبي</h3>
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
                    <RouterLink to="/desktop/user/myorder">
                      <span class="font-medium text-xs md:text-sm ">جميع الطلبات</span>
                    </RouterLink>

                  </button>
                </li>
                <li>
                  <button
                    class="flex items-center gap-2 space-x-2 hover:text-black cursor-pointer"
                  >
                    <span>🏅</span>
                    <span class="font-medium text-xs md:text-sm "> طلبات غير مدفوعه</span>
                  </button>
                </li>
                <li>
                  <button
                    class="flex items-center gap-2 space-x-2 hover:text-black cursor-pointer"
                  >
                    <span>🏅</span>
                    <span class="font-medium text-xs md:text-sm "> طلبات قيد التجهيز</span>
                  </button>
                </li>
                <li>
                  <button
                    class="flex items-center gap-2 space-x-2 hover:text-black cursor-pointer"
                  >
                    <span>🏅</span>
                    <span class="font-medium text-xs md:text-sm "> طلبات مشحونه</span>
                  </button>
                </li>
                <li>
                  <button
                    class="flex items-center gap-2 space-x-2 hover:text-black cursor-pointer"
                  >
                    <span>🏅</span>
                    <span class="font-medium text-xs md:text-sm "> طلبات التقييم</span>
                  </button>
                </li>
                <li>
                  <button
                    class="flex items-center gap-2 space-x-2 hover:text-black cursor-pointer"
                  >
                    <span>🏅</span>
                    <span class="font-medium text-xs md:text-sm "> طلبات الارجاع</span>
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
                <h3 class="font-bold text-xs md:text-[16px]  text-black">اهتمامي</h3>
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
                    <span>🏅</span> <span class="text-xs md:text-sm  font-medium"> قائمه الحب</span>
                  </button>
                </li>
                <li>
                  <button
                    class="flex items-center gap-2 space-x-2 hover:text-black cursor-pointer"
                  >
                    <span>🏅</span> <span class="text-xs md:text-sm  font-medium"> شوهد مؤخرا</span>
                  </button>
                </li>
                <li>
                  <button
                    class="flex items-center gap-2 space-x-2 hover:text-black cursor-pointer"
                  >
                    <span>🏅</span> <span class="font-medium text-xs md:text-sm "> متابع</span>
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
                <h3 class="font-bold text-xs md:text-[16px]  text-black">خدمة العملاء</h3>
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
                    <span>🏅</span> <span class="font-medium text-xs md:text-sm ">رسائلي </span>
                  </button>
                </li>
                <li>
                  <button
                    class="flex items-center gap-2 space-x-2 hover:text-black cursor-pointer"
                  >
                    <span>🏅</span>
                    <span class="font-medium text-xs md:text-sm ">سجلات الخدمة</span>
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
                <h3 class="font-bold text-xs md:text-[16px]  text-black">خدمات اخرى</h3>
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
                    <span class="font-medium text-xs md:text-sm "> تجربه الازياء المجانيه</span>
                  </button>
                </li>
                <li>
                  <button
                    class="flex items-center gap-2 space-x-2 hover:text-black cursor-pointer"
                  >
                    <span>🏅</span>
                    <span class="font-medium text-xs md:text-sm "> مركز استطلاعات الراي</span>
                  </button>
                </li>
                <li>
                  <button
                    class="flex items-center gap-2 space-x-2 hover:text-black cursor-pointer"
                  >
                    <span>🏅</span>
                    <span class="font-medium text-xs md:text-sm "> شاركوا واكسبوا</span>
                  </button>
                </li>
                <li>
                  <button
                    class="flex items-center gap-2 space-x-2 hover:text-black cursor-pointer"
                  >
                    <span>🏅</span>
                    <span class="font-medium text-xs md:text-sm "> جهات الاتصال المفضله</span>
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
                <h3 class="font-bold text-xs md:text-[16px]  text-black">السياسات</h3>
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
                    <span class="font-medium text-xs md:text-sm "> معلومات الشحن</span>
                  </button>
                </li>
                <li>
                  <button
                    class="flex items-center gap-2 space-x-2 hover:text-black cursor-pointer"
                  >
                    <span>🏅</span>
                    <span class="font-medium text-xs md:text-sm ">سياسه الارجاع </span>
                  </button>
                </li>
                <li>
                  <button
                    class="flex items-center gap-2 space-x-2 hover:text-black cursor-pointer"
                  >
                    <span>🏅</span>
                    <span class="font-medium text-xs md:text-sm "> سياسه الخصوصيه</span>
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
        <main class="col-span-8 md:col-span-9">
          <RouterView />
        </main>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import { RouterView } from 'vue-router'
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
