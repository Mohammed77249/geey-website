<template>
  <footer class="bg-gray-50 text-white text-sm">
    <div class="container mx-auto px-20 py-8">
      <div class="grid grid-cols-1 md:grid-cols-12 gap-8 mt-10 pb-8 rtl">

        <div class="col-span-6 w-full ">
          <div class="grid grid-cols-6 gap-1">
            <div class="col-span-2  w-full">
              <div>
                <h3 class="text-xs text-black font-medium mb-4">معلومات الشركة</h3>
                <ul class="space-y-2 text-[10px] text-gray-500">
                  <li><a href="#" class="hover:underline hover:text-black">حول جي</a></li>
                  <li><a href="#" class="hover:underline hover:text-black">اتصل بنا</a></li>
                  <li><a href="#" class="hover:underline hover:text-black">كن اعضاءنا</a></li>
                  <li><a href="#" class="hover:underline hover:text-black">لوق ازياء</a></li>
                  <li><a href="#" class="hover:underline hover:text-black">مسؤولية اجتماعية</a></li>
                  <li><a href="#" class="hover:underline hover:text-black">وضائف</a></li>
                </ul>
              </div>
            </div>
            <div class="col-span-2 w-full">
              <div>
                <h3 class="text-xs text-black font-medium mb-4">مركز & مساعدة</h3>
                <ul class="space-y-2 text-[10px] text-gray-500 ">
                  <li><a href="#" class="hover:underline hover:text-black"> كيفية الطلب</a></li>
                  <li><a href="#" class="hover:underline hover:text-black"> معلومات الشحن</a></li>
                  <li><a href="#" class="hover:underline hover:text-black"> المنتجات المسترجعة</a></li>
                  <li><a href="#" class="hover:underline hover:text-black"> استرداد المبلغ</a></li>
                  <li><a href="#" class="hover:underline hover:text-black"> مرجع المقاس</a></li>
                  <li><a href="#" class="hover:underline hover:text-black">الاسئلة المتكررة</a></li>
                  <li><a href="#" class="hover:underline hover:text-black"> جي VIP</a></li>
                  <li><a href="#" class="hover:underline hover:text-black"> كيفية تتبع طلبك</a></li>
                </ul>
              </div>
            </div>

            <div class="col-span-2  w-full">
              <div>
                <h3 class="text-xs text-black font-medium mb-4">خدمة الزبائن</h3>
                <ul class="space-y-2 text-[10px] text-gray-500">
                  <li><a href="#" class="hover:underline hover:text-black"> طريقة الدفع</a></li>
                  <li><a href="#" class="hover:underline hover:text-black"> الدفع عند الاستلام</a></li>
                  <li><a href="#" class="hover:underline hover:text-black"> بطاقة هدية</a></li>
                  <li><a href="#" class="hover:underline hover:text-black"> برنامج كسب النقاط</a></li>
                </ul>
              </div>
            </div>

          </div>
        </div>

        <div class="col-span-6 w-full ">

          <div class="grid grid-cols-6 gap-1 mb-6">

            <!-- follow us -->
            <div class="col-span-3">
              <h3 class="text-xs text-black font-semibold mb-4">تابعنا على</h3>
              <div class="flex gap-5">
                <a href="#" class="text-gray-900 hover:text-white">
                  <img src="/src/assets/images/bootsrap.svg" alt="App Store" class="w-7 text-black" />
                </a>
                <a href="#" class="text-gray-900 hover:text-white">
                  <img src="/src/assets/images/facebook.svg" alt="App Store" class="w-7 text-black" />
                </a>
                <a href="#" class="text-gray-900 hover:text-white">
                  <img src="/src/assets/images/google-play.svg" alt="App Store" class="w-7 text-black" />
                </a>
                <a href="#" class="text-gray-900 hover:text-white">
                  <img src="/src/assets/images/snapchat.svg" alt="App Store" class="w-7 text-black" />
                </a>
                <a href="#" class="text-gray-900 hover:text-white">
                  <img src="/src/assets/images/whatsapp.svg" alt="App Store" class="w-7 text-black" />
                </a>
                <a href="#" class="text-gray-900 hover:text-white">
                  <img src="/src/assets/images/youtube.svg" alt="App Store" class="w-7 text-black" />
                </a>
              </div>
            </div>

            <!-- dowenload app -->
            <div class="col-span-3">
              <h3 class="text-xs text-black font-semibold ">App</h3>
                <div class="flex gap-5  mt-4">
                  <a href="#">
                    <img src="/src/assets/images/android.svg" alt="Google Play" class="w-7 text-black" />
                  </a>
                  <a href="#">
                    <img src="/src/assets/images/apple.svg" alt="App Store" class="w-7 text-black" />
                  </a>
                </div>
            </div>

        </div>

        <!-- input buttom -->
          <div>
          <p class="mb-4 text-gray-400">اشترك مع جي لتصلك الاخبار الموضة</p>
          <form class="flex items-center">
            <input
              type="email"
              placeholder="ادخل البريد الالكتروني"
              class="flex-grow px-4 py-3 border border-gray-300 text-black"
            />
            <button
              type="submit"
              class="bg-black text-white px-4 py-3 hover:bg-gray-800"
            >
              اشتراك
            </button>
          </form>
          <form class="flex items-center mt-8">
            <input
              type="email"
              placeholder="حساب الواتساب"
              class="flex-grow px-4 py-3 border border-gray-300  text-black"
            />
            <button
              type="submit"
              class="bg-black text-white px-4 py-3 hover:bg-gray-800"
            >
              اشتراك
            </button>
          </form>
          </div>
        </div>

      </div>

      <div class="w-full text-black mt-20 grid grid-cols-12 gap-8">
        <div class="col-span-6 w-full  rtl ">
          <p class="text-xs text-black font-medium mb-2">تقبل</p>
          <div class="px-2 flex gap-2">
            <img src="/src/assets/images/ads1.svg" class="w-16" />
            <img src="/src/assets/images/ads2.svg" class="w-16 h-8" />
            <img src="/src/assets/images/ads1.svg" class="w-16" />
            <img src="/src/assets/images/ads2.svg" class="w-16 h-8" />
            <img src="/src/assets/images/ads1.svg" class="w-16" />
            <img src="/src/assets/images/ads2.svg" class="w-16 h-8" />

          </div>
        </div>

        <div class="col-span-6 w-full   rtl">
          <div class="text-gray-800 ">
            &copy; 2024 Jeey. All rights reserved.
          </div>
          <div class="text-gray-900 underline ">
            سياسة الخصوصية     سياسة الخصوصية
          </div>
          <div class="text-gray-800 ">
            سياسة الخصوصية
          </div>

        </div>

      </div>

    </div>
  </footer>
</template>

<script setup>

</script>


