<template>
  <div class="px-32 min-h-screen">
    <div v-if="storeProduct.loading">Loading product details...</div>
    <div v-else-if="storeProduct.error">{{ storeProduct.error }}</div>
    <!-- العنوان -->
    <div class="py-4 border-b">
      <div class="container mx-auto px-4">
        <h1
          v-if="storeProduct.getproductDetails"
          class="text-gray-400 font-normal"
        >
          {{ $t('Home') }} /
          {{ storeProduct.getproductDetails.category_name }} /
          {{ storeProduct.getproductDetails.name }}
        </h1>
      </div>
    </div>

    <div
      v-if="storeProduct.getproductDetails"
      class="container mx-auto grid grid-cols-1 lg:grid-cols-12"
    >
      <!-- product image  -->
      <div class="col-span-8 px-5">
        <div class="flex gap-2">
          <div class="block gap-5">
            <div class="overflow-x-auto">
               <!-- الصور الرئيسية -->
                <div v-if="isMainSelected">
                  <div v-for="(image,index) in mainColor.images" :key="index" >
                    <img

                      :src="image.image"
                     @mouseover="showImageInSwiper(index)"
                      alt="Main Product Image"
                       class="w-20 h-20  my-3   cursor-pointer border-2 border-transparent hover:border-gray-500"
                    />
                  </div>
                </div>

                <!-- الصور الفرعية -->
                  <div v-else>
                    <div  v-for="(image,index) in selectedColorImages" :key="index">
                      <img
                        :src="image.image"
                     @mouseover="showImageInSwiper(index)"
                        alt="Sub Product Image"
                        class="w-20 h-20   my-3   cursor-pointer border-2 border-transparent hover:border-gray-500"
                      />
                    </div>
                  </div>

            </div>
          </div>

          <div>
            <swiper
            :modules="[Navigation, Pagination]"
            :slides-per-view="1"
            :space-between="10"
            navigation
            pagination
            :class="{'rounded-lg custom-swiper border w-[700px] h-[900px]':storedLanguage == 'ar' , 'rounded-lg custom-swiper2 border w-[700px] h-[900px]':storedLanguage == 'en'}"
             @swiper="setSwiperInstance"
          >
            <swiper-slide v-for="(image, index) in selectedColorImages" :key="index">
              <img
                :src="image.image"
                alt="Product Image"
                class="w-full h-full rounded-lg "
              />
            </swiper-slide>
          </swiper>

          </div>
        </div>

        <div class="mt-10 mb-10">
          <div class="mb-5">
            <div class="flex items-center justify-between mb-5">
              <h1 class="font-semibold text-xl">
                {{ $t('Customer Reviews') }}
              </h1>
              <RouterLink :to="`/product/${filteredData2.productID}/comments`">
                <div class="flex items-center">
                  <h1 class="text-gray-500 font-medium">
                    {{ $t('Full opinions') }}
                  </h1>

                  <svg
                    :class="storedLanguage == 'en' ? 'hidden' : ''"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15.0001 19.92L8.48009 13.4C7.71009 12.63 7.71009 11.37 8.48009 10.6L15.0001 4.07996"
                      stroke="gray"
                      stroke-width="1.5"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>

                  <svg
                    :class="storedLanguage == 'ar' ? 'hidden' : ''"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.90991 19.92L15.4299 13.4C16.1999 12.63 16.1999 11.37 15.4299 10.6L8.90991 4.07996"
                      stroke="gray"
                      stroke-width="1.5"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
              </RouterLink>
            </div>

            <HeaderCommentsComp :isMain="true" />
          </div>

          <!-- comments -->
          <CommentComp :commentList="listContentComment" />
          <CommentComp :commentList="listContentComment" />
          <CommentComp :commentList="listContentComment" />

          <div>
            <RouterLink :to="`/product/${productId}/comments`">
              <div class="flex items-center justify-center gap-1">
                <h1 class="font-semibold text-sm">
                  {{ $t('View all customer reviews') }}
                </h1>
                <img
                  :class="storedLanguage == 'en' ? 'hidden' : ''"
                  class="w-[20px]"
                  src="/src/assets/images/arrow-left.svg"
                />
                <img
                  :class="storedLanguage == 'ar' ? 'hidden' : ''"
                  class="w-[20px]"
                  src="/src/assets/images/arrow-right.svg"
                />
              </div>
            </RouterLink>
          </div>
        </div>
      </div>

      <!-- product details  -->
      <div class="col-span-4">
        <!-- الاسم والسعر -->
        <div class="w-full h-28 mb-5">
          <div class="flex items-center justify-between">
            <p class="text-sm font-medium">
              {{ storeProduct.getproductDetails.description }}
            </p>

            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 9.98V9C2 4 4 2 9 2H15C20 2 22 4 22 9V15C22 20 20 22 15 22H14"
                stroke="#292D32"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M13 11.0005L18.01 5.98047H14"
                stroke="#292D32"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M18.0098 5.98047V9.99047"
                stroke="#292D32"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M11 16.15V18.85C11 21.1 10.1 22 7.85 22H5.15C2.9 22 2 21.1 2 18.85V16.15C2 13.9 2.9 13 5.15 13H7.85C10.1 13 11 13.9 11 16.15Z"
                stroke="#292D32"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>

          <div class="flex items-center gap-1">
            <p class="text-[10px] text-gray-400">12684532486586453218451</p>
            <div class="flex items-center gap-1">
              <span class="flex text-yellow-500">
                <i> <img class="w-3" src="/src/assets/images/star.svg" /></i>
                <i> <img class="w-3" src="/src/assets/images/star.svg" /></i>
                <i> <img class="w-3" src="/src/assets/images/star.svg" /></i>
                <i> <img class="w-3" src="/src/assets/images/star.svg" /></i>
                <i> <img class="w-3" src="/src/assets/images/star.svg" /></i>
              </span>
              <h1 class="font-medium text-[10px] text-yellow-600">
                {{ $t('Customer Reviews') }}
              </h1>
            </div>
          </div>
          <div>
            <span class="text-sm bg-purple-400 w-20 text-white">{{
              $t('Fashion Trends')
            }}</span>
          </div>
          <div class="flex items-center gap-2">
            <p class="text-lg text-orange-700">
              {{ storeProduct.getproductDetails.currency
              }}{{ storeProduct.getproductDetails.base_price }}
            </p>
            <div class="h-5 px-2 flex items-center justify-center bg-black">
              <p class="text-xs text-white">
                {{ storeProduct.getproductDetails.discount_price }}-
              </p>
            </div>
          </div>

          <div class="flex items-center gap-1 bg-amber-100">
            <p class="text-sm font-semibold text-amber-600">
              رقم 7 الافضل مبيعا
            </p>
            <p class="text-xs text-amber-600">في فساتين نوم بطباعه ازهلر</p>
          </div>
        </div>

        <!-- المقاس وزر الاضافة -->
        <div class="border-t-2 mb-5">
          <div class="mb-1">
            <!-- colors -->
            <div class="pb-5">
              <h3 class="text-md font-medium">{{ $t('Color: Multicolor') }}</h3>
              <ul class="space-y-5 mt-5">
                <li>
                  <div class="grid grid-cols-7 gap-3">
                    <div
                      v-for="(color, index) in storeProduct.getproductColors"
                      :key="index"
                    >
                    <div
                      :key="color.color_id"
                      @click="changeColor(index),toggleColor(color.color_id)"
                      class="w-10 h-10 rounded-full border-2 cursor-pointer"
                      :style="{ backgroundColor: color.color_hex }"
                      :class="{ 'border-blue-500': selectedColorIndex === index }"
                    ></div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>

            <div class="flex items-center gap-1 mb-5 mt-5">
              <h3 class="text-lg font-semibold">{{ $t('Size') }}</h3>
              <div ref="dropDownSize">
                <button
                  class="text-[#979797] h-[25px] border border-gray-900 bg-gray-50 font-medium rounded-full text-[14px] px-3 text-center flex items-center gap-1"
                  type="button"
                >
                  {{ $t('Size') }}
                  <p class="text-black">
                    {{ storeProduct.getproductDetails.size_type_name}}
                  </p>
                </button>
              </div>
            </div>

            <!-- الاحجام -->
            <div class="flex gap-1">
              <div
                v-for="(size, index) in storeProduct.getproductSizes"
                :key="index"
              >
                <button
                  :class="{
                    'py-1 cursor-pointer px-7 border rounded-full bg-gray-100':
                      tempidSize === size.size_type_id,
                    'py-1 cursor-pointer px-7 border rounded-full hover:bg-gray-100':
                      tempidSize != size.size_type_id,
                  }"
                  @click="onclickSize(size.size_type_id)"
                >
                  {{ size.size_type_name }}
                </button>
              </div>
            </div>

            <!-- مرجع المقاس -->
            <div class="mt-5 h-10">
              <div
                @click="openDialog"
                class="flex items-center gap-1 hover:underline"
              >
                <img class="cursor-pointer" src="/src/assets/images/cart.svg" />
                <p class="text-blue-800 cursor-pointer">
                  {{ $t('Size Reference') }}
                </p>
              </div>
              <!-- Dialog Component -->
              <DialogComp
                :isOpen="isDialogOpen"
                title="Confirmation"
                @close="closeDialog"
                @confirm="handleConfirm"
              >
                <p>Are you sure you want to proceed with this action?</p>
              </DialogComp>
            </div>
          </div>
          <!-- addToCart -->
          <div class="flex items-center gap-1">
            <button
              @click="addToCart"
              class="max-w-[350px] w-full bg-primary-900 text-white py-3 text-lg font-bold hover:bg-primary-800 transition"
            >
              <span v-if="storeCart.loading" class="loader mr-2"></span>
              <span>{{
                storeCart.loading ? 'جارٍ التحقق...' : $t('add to cart')
              }}</span>
            </button>
            <div
              class="w-[80px] py-3 rounded-full border flex items-center justify-center"
            >
              <img class="w-10" src="/src/assets/images/heart.svg" />
            </div>
          </div>
          <p class="text-sm">
            {{ $t('Earn up to 3 GN points calculated at checkout.') }}
          </p>
        </div>

        <!-- شحن مجاني  -->
        <div class="bg-gray-100 w-full h-72 mb-5 p-5">
          <div class="mb-3">
            <div class="flex items-center gap-1">
              <img src="/src/assets/images/truck-fast.svg" />
              <p class="font-semibold">{{ $t('Free shipping') }}</p>
              <img
                class="w-4 h-5"
                src="/src/assets/images/message-question.svg"
              />
            </div>

            <div class="pr-7">
              <p class="text-sm text-gray-600">
                {{ $t('Free express shipping on orders over SR334.50') }}
              </p>
              <p class="text-sm text-gray-600">
                {{ $t('Possible delivery date is 11/28/2024-11/26/2024') }}
              </p>
            </div>
          </div>

          <div class="mb-3">
            <div class="flex items-center gap-1">
              <img src="/src/assets/images/dollar-square.svg" />
              <p class="font-semibold">
                {{ $t('Payment service upon receipt') }}
              </p>
              <img
                class="w-4 h-5"
                src="/src/assets/images/message-question.svg"
              />
            </div>
            <div class="pr-7">
              <p class="text-sm text-gray-600">{{ $t('To know more') }}</p>
            </div>
          </div>

          <div class="mb-3">
            <div class="flex items-center gap-1">
              <img src="/src/assets/images/clipboard-export.svg" />
              <p class="font-semibold">{{ $t('Return policy') }}</p>
              <img
                class="w-4 h-5"
                src="/src/assets/images/message-question.svg"
              />
            </div>
            <div class="pr-7">
              <p class="text-sm text-gray-600">{{ $t('To know more') }}</p>
            </div>
          </div>

          <div class="mb-3">
            <div class="flex items-center justify-between">
              <div class="flex items-center gap-1">
                <img src="/src/assets/images/shield-security.svg" />
                <p class="font-semibold">{{ $t('Secure shopping') }}</p>
                <img
                  class="w-4 h-5"
                  src="/src/assets/images/message-question.svg"
                />
              </div>
              <p placeholder="<1/2>"></p>
            </div>
            <div class="pr-5 mt-2 flex items-center gap-1">
              <div class="flex items-center">
                <img class="w-4" src="/src/assets/images/copy-success.svg" />
                <p class="text-xs text-gray-600">
                  {{ $t('Secure payment methods') }}
                </p>
              </div>
              <div class="flex">
                <img class="w-4" src="/src/assets/images/copy-success.svg" />
                <p class="text-xs text-gray-600">{{ $t('Safe shipping') }}</p>
              </div>
              <div class="flex">
                <img class="w-4" src="/src/assets/images/copy-success.svg" />
                <p class="text-xs text-gray-600">
                  {{ $t('Customer service') }}
                </p>
              </div>

              <div class="flex">
                <img class="w-4" src="/src/assets/images/copy-success.svg" />
                <p class="text-xs text-gray-600">
                  {{ $t('Privacy protection') }}
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- الوصف و .... -->
        <div class="w-full mb-5 mt-10">
          <!-- الوصف -->
          <div>
            <div class="flex items-center justify-between">
              <p class="font-bold text-[15px]">{{ $t('Description') }}</p>
              <button
                type="button"
                @click="
                  isDropdowenDescriptionVisable = !isDropdowenDescriptionVisable
                "
              >
                <svg
                  v-if="!isDropdowenDescriptionVisable"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6 12H18"
                    stroke="#292D32"
                    stroke-width="4"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M12 18V6"
                    stroke="#292D32"
                    stroke-width="4"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <svg
                  v-if="isDropdowenDescriptionVisable"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6 12H18"
                    stroke="#292D32"
                    stroke-width="4"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
            </div>

            <DescriptionComp
              :types="storeProduct.getproductDescriptionDetails"
              :isDropdowenVisable="isDropdowenDescriptionVisable"
            />
          </div>

          <!-- المقاس -->
          <div>
            <div class="flex items-center justify-between py-5">
              <p class="font-bold text-[15px]">{{ $t('Size & Fit') }}</p>
              <button
                type="button"
                @click="isDropdowenSize2Visable = !isDropdowenSize2Visable"
              >
                <svg
                  v-if="!isDropdowenSize2Visable"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6 12H18"
                    stroke="#292D32"
                    stroke-width="4"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M12 18V6"
                    stroke="#292D32"
                    stroke-width="4"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <svg
                  v-if="isDropdowenSize2Visable"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6 12H18"
                    stroke="#292D32"
                    stroke-width="4"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
            </div>
            <SizeProDetailsComp
              :types="types"
              :isDropdowenVisable="isDropdowenSize2Visable"
            />
          </div>

          <!-- حول المتجر -->
          <div>
            <div class="flex items-center justify-between py-5">
              <p class="font-bold text-[15px]">{{ $t('About Store') }}</p>
              <button
                type="button"
                @click="
                  isDropdowenAboutStoreVisable = !isDropdowenAboutStoreVisable
                "
              >
                <svg
                  v-if="!isDropdowenAboutStoreVisable"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6 12H18"
                    stroke="#292D32"
                    stroke-width="4"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M12 18V6"
                    stroke="#292D32"
                    stroke-width="4"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <svg
                  v-if="isDropdowenAboutStoreVisable"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6 12H18"
                    stroke="#292D32"
                    stroke-width="4"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
            </div>
            <AboutStoreComp
              :types="types"
              :isDropdowenVisable="isDropdowenAboutStoreVisable"
            />
          </div>
        </div>
      </div>
    </div>

    <!-- more product-->
    <div class="bg-white py-8 mb-10">
      <div class="container mx-auto px-4">
        <h3 class="text-xl font-bold mb-4">{{ $t('What others look at') }}</h3>
        <div>
          <MoreProductDetailsComp />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted,  } from 'vue'
import CommentComp from '../components/Comments/CommentComp.vue'
import HeaderCommentsComp from '../components/Comments/HeaderComentsComp.vue'
import { useRoute } from 'vue-router'
import DialogComp from '@/components/DialogComp.vue'
import DescriptionComp from '@/components/ProductDetailsComponent/DescriptionComp.vue'
import SizeProDetailsComp from '@/components/ProductDetailsComponent/SizeProDetailsComp.vue'
import AboutStoreComp from '@/components/ProductDetailsComponent/AboutStoreComp.vue'
import MoreProductDetailsComp from '@/components/ProductDetailsComponent/MoreProductDetailsComp.vue'
import { useProductStore } from '@/stores/product'
import { useCartStore } from '@/stores/cart'
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/swiper-bundle.css";

const route = useRoute()
const storeProduct = useProductStore()
const storeCart = useCartStore()


const filteredData2 = ref({
  productID: null,
  product_id: null,
  color_id: null,
  size_id: null,
  quantity: 1,
})
const id = route.params.id
if (id != null) {
  filteredData2.value.productID = id
  filteredData2.value.product_id = id
}

const isDropdowenDescriptionVisable = ref(false)
const isDropdowenSize2Visable = ref(false)
const isDropdowenAboutStoreVisable = ref(false)
const storedLanguage = localStorage.getItem('language')


const listContentComment = ref([
  {
    title: 'حجم التمثال',
    subtitle: 'us 30/EUR 65',
  },
  {
    title: 'خصر ',
    subtitle: 'cm/23 in 59',
  },
  {
    title: 'طول',
    subtitle: 'cm/62 in 165',
  },
  {
    title: 'الوزن',
    subtitle: 'kg/130 lbs 70',
  },
  {
    title: 'الوركين',
    subtitle: 'cm/30 in 80',
  },
  {
    title: 'المقاس العام',
    subtitle: 'مناسب',
  },
  {
    title: 'لون',
    subtitle: 'زمغدجي',
  },
  {
    title: 'مقاس',
    subtitle: 'XL',
  },
])

const tempidSize = ref(null)
const onclickSize = id => {
  if(id){
    filteredData2.value.size_id = id
  if (tempidSize.value === id) {
    tempidSize.value = null
  } else {
    tempidSize.value = id
  }
  }
}

const tempidColor = ref(null)
const toggleColor = id => {
  if(id){
    filteredData2.value.color_id = id
    if (tempidColor.value === id) {
    tempidColor.value = null
  } else {
    tempidColor.value = id
  }
  }

}

const addToCart = async () => {
  if(filteredData2.value.color_id === null ){
    alert("ادخ اللون ")
  }else if(filteredData2.value.size_id === null){
    alert("ادخل المقاس")
  }
  else{
  const addcart = await storeCart.creatCart(
    filteredData2.value.product_id,
    filteredData2.value.color_id,
    filteredData2.value.size_id,
    filteredData2.value.quantity,
  )

  if (addcart) {
    if (storeCart.getcartProductMessage != null) {
      alert(storeCart.getcartProductMessage)


    } else {
      alert('تمت إضافة المنتج إلى السلة!')


    }
  } else {
    alert(storeCart.error)


  }

}
}


// متغيرات الحالة
const mainColor = ref({});
const selectedColorIndex = ref(null);
const selectedColorImages = ref([]);
const selectedImage = ref(null);
const isMainSelected = ref(true);

const swiperInstance = ref(null);
// ربط مثيل Swiper عند الإنشاء
const setSwiperInstance = (swiper) => {
  swiperInstance.value = swiper;
};

// عرض الصورة في السلايدر عند تمرير الماوس على صورة مصغرة
const showImageInSwiper = (index) => {
  if (swiperInstance.value) {
    swiperInstance.value.slideTo(index); // التنقل إلى الصورة المحددة
  }
};

// تغيير اللون وتحديث الصور
const changeColor = (index) => {
  isMainSelected.value = false;
  selectedColorIndex.value = index;

  const color = storeProduct.getproductColors[index];
  selectedColorImages.value = color.images || [];
  selectedImage.value = color.images[0]?.image || null;
};


const dropDownSize = ref(null)
const isDropdowenSizeVisable = ref(false)
const closeDropdowenSize = element => {
  if (!dropDownSize.value.contains(element.target)) {
    isDropdowenSizeVisable.value = false
  }
}
onMounted(async() => {
  window.addEventListener('click', closeDropdowenSize)
 await storeProduct.fetchProductDetailsById(filteredData2)


   // تعيين اللون الرئيسي
   mainColor.value =
   storeProduct.getproductColors.find((color) => color.is_main === 1) || {};
  selectedImage.value = mainColor.value.images?.[0]?.image || null;

  // تعيين الصور الفرعية للون الأول كافتراضي
  if (storeProduct.getproductColors.length > 0) {
    changeColor(0);
  }

})


const isDialogOpen = ref(false)

const openDialog = () => {
  isDialogOpen.value = true
}

const closeDialog = () => {
  isDialogOpen.value = false
}

const handleConfirm = () => {
  alert('Action confirmed!')
  closeDialog()
};
</script>

<style scoped>

/* swiper 1 arabic =============================================================== */
/* تخصيص أزرار التنقل */
.custom-swiper :deep(.swiper-button-next),
.custom-swiper :deep(.swiper-button-prev) {
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.3s ease;
}

.custom-swiper :deep(.swiper-button-next):hover,
.custom-swiper :deep(.swiper-button-prev):hover {
  background-color: rgba(0, 0, 0, 0.8);
  color: #8a1538;
}

.custom-swiper :deep(.swiper-button-next)::after,
.custom-swiper :deep(.swiper-button-prev)::after {
  font-size: 20px;
  font-weight: bold;
}

/* مواضع الأزرار */
.custom-swiper :deep(.swiper-button-next) {
  left: 0px;
  right: auto;
  margin-left: 10px;
}

.custom-swiper :deep(.swiper-button-prev) {
  right:0px;
  left: auto;
  margin-right: 10px;
}

/* تخصيص النقاط (Pagination) */
.custom-swiper :deep(.swiper-pagination-bullet) {
  background-color: rgba(0, 0, 0, 0.3); /* لون النقاط */
  width: 12px;
  height: 12px;
  opacity: 1;
}

.custom-swiper :deep(.swiper-pagination-bullet-active) {
  background-color: #ffff; /* لون النقطة النشطة */
  width: 16px;
  height: 16px;
}


/* swiper 2 english =============================================================== */
/* تخصيص أزرار التنقل */
.custom-swiper2 :deep(.swiper-button-next),
.custom-swiper2 :deep(.swiper-button-prev) {
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.3s ease;
}

.custom-swiper2 :deep(.swiper-button-next):hover,
.custom-swiper2 :deep(.swiper-button-prev):hover {
  background-color: rgba(0, 0, 0, 0.8);
  color: #8a1538;
}

.custom-swiper2 :deep(.swiper-button-next)::after,
.custom-swiper2 :deep(.swiper-button-prev)::after {
  font-size: 20px;
  font-weight: bold;
}

/* مواضع الأزرار */
.custom-swiper2 :deep(.swiper-button-next) {
  right:0px;
  left: auto;
  margin-right: 10px;

}

.custom-swiper2 :deep(.swiper-button-prev) {
  left: 0px;
  right: auto;
  margin-left: 10px;
}

/* تخصيص النقاط (Pagination) */
.custom-swiper2 :deep(.swiper-pagination-bullet) {
  background-color: rgba(0, 0, 0, 0.3); /* لون النقاط */
  width: 12px;
  height: 12px;
  opacity: 1;
}

.custom-swiper2 :deep(.swiper-pagination-bullet-active) {
  background-color: #ffff; /* لون النقطة النشطة */
  width: 16px;
  height: 16px;
}


</style>
