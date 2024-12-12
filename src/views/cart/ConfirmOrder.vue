<template>
  <div >
    <div class="container mx-auto grid grid-cols-3 gap-4 mb-5">

      <!-- القسم الأيمن: عنوان الشحن -->
       <div class="col-span-2">
        <div class=" bg-white shadow  p-3">
          <h2 class="text-lg font-bold text-gray-800 mb-4">عنوان الشحن</h2>
          <form class="space-y-4">
            <!-- الصف الأول: الموقع  -->
              <div >
                <label class="block text-sm font-semibold text-gray-600 mb-2">الموقع *</label>
                <select
                  class="w-full border py-4 border-gray-300  p-2 text-sm  focus:outline-none focus:ring-0 focus:ring-black focus:border-black focus:border-[1px]"
                >
                  <option>اختر موقعك</option>
                  <option>السعودية</option>
                  <option>البحرين</option>
                </select>
              </div>
              <!-- الاسماء -->
            <div class="grid grid-cols-2 gap-4">
              <div>
                <label class="block text-sm font-semibold text-gray-600 mb-2">الاسم *</label>
                <input
                  type="text"
                  placeholder="الاسم"
                  class="w-full border border-gray-300 py-4 p-2 text-sm focus:outline-none focus:ring-0 focus:ring-black focus:border-black focus:border-[1px]"
                />
              </div>

              <div>
                <label class="block text-sm font-semibold text-gray-600 mb-2">اسم العائلة *</label>
                <input
                  type="text"
                  placeholder="الاسم"
                  class="w-full border border-gray-300 py-4 p-2 text-sm focus:outline-none focus:ring-0 focus:ring-black focus:border-black focus:border-[1px]"
                />
              </div>

            </div>
            <!-- الصف الثاني: أرقام الهواتف -->
              <div>
                <label class="block text-sm font-semibold text-gray-600 mb-2">رقم الهاتف *</label>
                <input
                  type="text"
                  placeholder="BH +973"
                  class="w-full border border-gray-300 py-4  p-2 text-sm focus:outline-none focus:ring-0 focus:ring-black focus:border-black focus:border-[1px]"
                />
              </div>

            <!--رقم الهاتف البديل (اختياري)  -->
              <div>
                <label class="block text-sm font-semibold text-gray-600 mb-2">
                  رقم الهاتف البديل (اختياري)
                </label>
                <input
                  type="text"
                  placeholder="BH +973"
                  class="w-full border border-gray-300 py-4  p-2 text-sm focus:outline-none focus:ring-0 focus:ring-black focus:border-black focus:border-[1px]"
                />
              </div>
            <!-- المدينة -->
            <div>
              <label class="block text-sm font-semibold text-gray-600 mb-2">المدينة *</label>
              <input
                type="text"
                placeholder="فضلًا اختر الدولة / المحافظة"
                class="w-full border border-gray-300 py-4 p-2 text-sm focus:outline-none focus:ring-0 focus:ring-black focus:border-black focus:border-[1px]"
              />
            </div>
            <!-- المنطقة -->
            <div>
              <label class="block text-sm font-semibold text-gray-600 mb-2">المنطقة *</label>
              <input
                type="text"
                placeholder="المنطقة "
                class="w-full border border-gray-300 py-4 p-2 text-sm focus:outline-none focus:ring-0 focus:ring-black focus:border-black focus:border-[1px]"
              />
            </div>

            <!-- الشارع -->
            <div>
              <label class="block text-sm font-semibold text-gray-600 mb-2">الشارع *</label>
              <input
                type="text"
                placeholder="اسم الشارع \ رقم الشارع"
                class="w-full border border-gray-300 py-4 p-2 text-sm focus:outline-none focus:ring-0 focus:ring-black focus:border-black focus:border-[1px]"
              />
            </div>

            <!-- تفاصيل العنوان -->
            <div>
              <label class="block text-sm font-semibold text-gray-600 mb-2">تفاصيل العنوان *</label>
              <textarea
                placeholder="المنطقة. المبنى.الوحدة.رقم المنزل. اسم الشركة . الخ"
                class="w-full border border-gray-300  p-2 text-sm focus:outline-none focus:ring-0 focus:ring-black focus:border-black focus:border-[1px]"
                rows="3"
              ></textarea>
            </div>
            <!-- المعالم الرئيسية -->
            <div>
              <label class="block text-sm font-semibold text-gray-600 mb-2">المعالم الرئيسية</label>
              <textarea
                placeholder="معلم قريب (اختياري)"
                class="w-full border border-gray-300  p-2 text-sm focus:outline-none focus:ring-0 focus:ring-black focus:border-black focus:border-[1px]"
                rows="3"
              ></textarea>
            </div>

              <!-- رمز البريد -->
              <div>
              <label class="block text-sm font-semibold text-gray-600 mb-2">رمز البريد  *</label>
              <input
                type="email"
                placeholder="رمز البريد"
                class="w-full border border-gray-300 py-4 p-2 text-sm focus:outline-none focus:ring-0 focus:ring-black focus:border-black focus:border-[1px]"
              />
            </div>

            <!-- الامان والخصوصية -->
            <div>
              <div class="flex items-center gap-5">
                <div class="flex items-center gap-1">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path opacity="0.4" d="M6 10V8C6 4.69 7 2 12 2C17 2 18 4.69 18 8V10" stroke="green" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M17 22H7C3 22 2 21 2 17V15C2 11 3 10 7 10H17C21 10 22 11 22 15V17C22 21 21 22 17 22Z" stroke="green" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  <path opacity="0.4" d="M15.9965 16H16.0054" stroke="green" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  <path opacity="0.4" d="M11.9955 16H12.0045" stroke="green" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  <path opacity="0.4" d="M7.99451 16H8.00349" stroke="green" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                  <span class="text-[14px] text-green-700  font-medium">الامان والخصوصية </span>
                </div>
              </div>
              <div>
                <span class="text-[13px] text-gray-500  font-normal">نحافظ على معايير الصناعة المادية والتقنية والإدارية لحماية معلوماتك الشخصية.</span>
              </div>

            </div>

            <!-- زر الحفظ -->
            <button
              type="submit"
              class="w-full bg-primary-900 text-white py-5 font-semibold  text-sm"
            >
              حفظ
            </button>
          </form>


        </div>

        <div class="w-full  mt-10 bg-white p-3">

          <div class="flex items-center justify-between ">
            <span class="text-[16px] font-semibold">تفاصيل الطلب</span>

            <div class="flex items-center gap-2">
              <button class="text-[16px]  font-semibold">
              عرض منتج واحد
            </button>
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15.0001 19.92L8.48009 13.4C7.71009 12.63 7.71009 11.37 8.48009 10.6L15.0001 4.07996" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            </div>
          </div>
          <div class=" p-2 w-full h-52 ">
            <div class="bg-gray-100 h-full">
              <div v-for="(item,index) in storeCart.getallCarts" :key="index">

                <div class="w-28 h-32 p-2">
                  <img
                    src="/src/assets/images/products/Image (1).svg"
                    alt="Product Image"
                    class="w-full h-full object-cover"
                  />
                  <div class="mt-1 flex justify-between ">
                    <span class="text-sm text-black font-medium">SR500</span>
                    <span class="text-sm text-black font-medium">%10</span>
                  </div>
                    <div class="mt-2 flex justify-center">
                      <div class="flex items-center  ">
                        <button
                          class="bg-white border border-gray-400 hover:border-black px-2 py-[1px] text-black rounded-s-full"
                          @click="decrementQuantity(index)"
                        >
                          -
                        </button>
                        <span class="font-semibold border-y  bg-white text-center border-gray-400 w-5 h-7 ">{{ item.quantity }}</span>
                        <button
                          class="bg-white border border-gray-400 hover:border-black px-2 py-[1px]  rounded-e-full text-black"
                          @click="incrementQuantity(index)"
                        >
                          +
                        </button>
                      </div>
                    </div>




                </div>

              </div>

            </div>
          </div>


        </div>
      </div>

      <!-- القسم الأيسر: ملخص الطلب -->
      <div class="col-span-1 h-screen">
        <div class="bg-white shadow  p-4">
              <!-- عنوان القسم -->
            <h2 class="text-lg font-bold text-gray-800 mb-4">ملخص الطلب</h2>
            <!-- تفاصيل الأسعار -->
            <div class="space-y-2">
              <div class="flex justify-between text-sm text-gray-500">
                <span>سعر الوحدة:</span>
                <span class="line-through text-gray-400">SR32.00</span>
              </div>
              <div class="flex justify-between text-sm text-gray-500">
                <span>إجمالي المنتج:</span>
                <span class="text-red-500 font-semibold">SR27.20</span>
              </div>
            </div>
        </div>

        <!-- نقاط المكافآت -->
        <div class="mt-4 p-4 bg-white shadow  flex items-center text-sm text-yellow-700">
          <p>🎉 لديك <span class="font-semibold">7 نقاط مكافأة</span></p>
        </div>
        <!-- Shein Club -->
        <div class="mt-4 bg-yellow-50 p-4 text-sm">
          <p class="font-bold text-green-700 mb-1">Jeey Club</p>
          <p>تكلفة الانضمام: <span class="text-red-500 font-bold">SR99.99</span></p>
          <p class="text-xs text-gray-500 mt-1">
            من خلال الانضمام، ستوافق على <span class="text-blue-500 underline">الشروط والأحكام</span>
          </p>
        </div>
        <div class="mt-4 bg-white shadow p-4">
           <!-- رمز القسيمة -->
            <div class="mt-4">
              <label class="block text-md font-semibold text-black mb-2">رمز القسيمة</label>
              <div class="flex items-center space-x-2 rtl:space-x-reverse">
                <input
                disabled
                  type="text"
                  placeholder="أدخل الرمز"
                  class="w-full border border-gray-300 py-3 p-2 text-sm focus:ring focus:ring-indigo-500"
                />
                <button disabled class="bg-white border border-black  px-4 py-3  text-sm font-semibold text-black hover:bg-gray-50">
                  تقديم
                </button>
              </div>
            </div>

            <!-- بطاقة هدية -->
            <div class="mt-4">
              <label class="block text-md font-semibold text-black mb-2">بطاقة هدية</label>
              <div class="flex items-center space-x-2 rtl:space-x-reverse">
                <input
                disabled
                  type="text"
                  placeholder="رقم البطاقة"
                  class="w-full border border-gray-300  p-2 py-3 text-sm focus:ring focus:ring-indigo-500"
                />
                <button disabled class="bg-white border border-black  px-4 py-3  text-sm font-semibold text-black hover:bg-gray-50">
                  تقديم
                </button>
              </div>
            </div>

            <!-- زر تأكيد الطلب -->
            <button
            disabled class="mt-6 w-full bg-primary-900 text-white py-4  font-semibold hover:bg-primary-800 text-sm"
            >
              تأكيد الطلب
            </button>

        </div>
      </div>
    </div>


  </div>
</template>

<script setup>
import { useCartStore } from '@/stores/cart'
const storeCart = useCartStore()

</script>


