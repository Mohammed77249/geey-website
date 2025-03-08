<template>
  <div class="">
    <div v-if="storeProduct.loading" class="mt-20"><LoaderComp :isLoader="storeProduct.loading"/></div>
    <div v-else-if="storeProduct.error">{{ storeProduct.error }}</div>
    <div
      v-else-if="storeProduct.getproductDetails"
      class="container mx-auto grid grid-cols-1"
    >
      <!-- product image  -->
        <div class="">

          <div v-if="storeProduct.getproductDetails.color_has_imgs == false">
            <swiper
            :modules="[Navigation, Pagination]"
            :slides-per-view="1"
            :space-between="10"
            navigation
            pagination
            :class="{'custom-swiper border w-screen h-[400px] md:hidden mb-5':storedLanguage == 'ar' , 'rounded-lg custom-swiper2 border w-screen h-[400px] md:hidden mb-5':storedLanguage == 'en'}"
             @swiper="setSwiperInstance"
          >

            <swiper-slide v-for="(image, index) in storeProduct.getproductDetails.all_images" :key="index">
              <img
                :src="image.image"
                alt="Product Image"
                class="w-full h-full rounded-lg "
              />
            </swiper-slide>
          </swiper>

          </div>

          <div v-else>
            <swiper
            :modules="[Navigation, Pagination]"
            :slides-per-view="1"
            :space-between="10"
            navigation
            pagination
            :class="{'custom-swiper border w-screen h-[400px]  mb-5 md:hidden':storedLanguage == 'ar' , 'rounded-lg custom-swiper2 border  w-screen h-[400px]  mb-5 md:hidden':storedLanguage == 'en'}"
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


      <!-- product details  -->
      <div class="col-span-5  px-5 mb-20 ">
        <!-- الاسم والسعر -->
        <div class="w-full  mb-5">
          <div class="flex items-center justify-between">
            <p class="text-sm  font-medium">
              {{ storeProduct.getproductDetails.name }}
            </p>

          </div>
          <div class="mb-3">
            <p class="text-[10px]  font-medium">
            {{ storeProduct.getproductDetails.description }}
            </p>

          </div>

          <!-- <div class="flex items-center gap-1 md:block">
            <p class="text-[10px] text-gray-400">12684532486586453218451</p>
            <div class="flex items-center gap-1 ">
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
          </div> -->

          <!-- <div>
            <span class="text-sm bg-purple-400 w-20 text-white">{{
              $t('Fashion Trends')
            }}</span>
          </div> -->
          <div class="flex items-center gap-2">

            <p v-if="storeProduct.getproductDetails.price_options_type ==  'by_color_and_measuring' " class="text-lg text-primary-900">
              {{ searchedOption  ? searchedOption.price : storeProduct.getproductDetails.base_price }}
            </p>

            <p v-else-if="storeProduct.getproductDetails.price_options_type ==  'by_color' " class="text-lg text-primary-900">
              {{ priceColor != null ? priceColor : storeProduct.getproductDetails.base_price }}
            </p>

            <p v-else-if="storeProduct.getproductDetails.price_options_type ==  'by_measuring' " class="text-lg text-primary-900">
              {{ priceSize != null ? priceSize : storeProduct.getproductDetails.base_price }}
            </p>

            <p v-else class="text-lg text-primary-900">
              {{  storeProduct.getproductDetails.base_price }}
            </p>

            <!-- discount -->
            <p class=" text-[8px] text-primary-900 "> {{ currency?currency:'YER' }} </p>
            <!-- <div class="h-5 px-2 flex items-center justify-center bg-black">
              <p class="text-xs text-white">
                {{ storeProduct.getproductDetails.discount_price }}-
              </p>
            </div> -->
          </div>


          <!--               رقم 7 الافضل مبيعا -->
          <!-- <div class="flex items-center gap-1 bg-amber-100">
            <p class="text-sm font-semibold text-amber-600">
              رقم 7 الافضل مبيعا
            </p>
            <p class="text-xs text-amber-600">في فساتين نوم بطباعه ازهلر</p>
          </div> -->
        </div>

        <!-- المقاس وزر الاضافة -->
        <div class=" mb-5">
          <div class="mb-1">
            <!-- colors -->
            <div class="pb-5">
              <h3 class="text-lg font-semibold">{{ $t('الالوان:') }}</h3>
              <ul class="space-y-5 mt-5">
                <li>
                  <div class="grid grid-cols-7 gap-3">
                    <div
                      v-for="(color, index) in storeProduct.getproductColors"
                      :key="index"
                       :class="{ 'border-primary-900': selectedColorIndex === index }"
                        class="w-10 h-10 rounded-full border-2 cursor-pointer flex items-center justify-center"
                    >
                    <div
                      :key="color.id"
                      @click="changeColor(index),toggleColor(color)"
                      class="rounded-full h-8 w-8 "
                      :style="{ backgroundColor: color.hex_code }"
                    ></div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>

            <div class="flex items-center gap-1 mb-5 mt-5">
              <h3 class="text-lg font-semibold">{{ $t('Size') }}</h3>
              <div>
                <button
                  class="text-[#979797] h-[25px] border border-gray-900 bg-gray-50 font-medium rounded-full text-[14px] px-3 text-center flex items-center gap-1"
                  type="button"
                >
                  {{ $t('Size') }}
                  <p v-if=" storeProduct.getproductDetails.measuring_type == 'size'" class="text-black">
                      size
                  </p>
                  <p v-if=" storeProduct.getproductDetails.measuring_type == 'unit'" class="text-black">
                    unit
                  </p>
                </button>
              </div>
            </div>

            <!-- الاحجام -->
            <div v-if="color_sizes != null && storeProduct.getproductDetails.color_has_sizes " class="grid xl:grid-cols-4 md:grid-cols-3 grid-cols-4 gap-2">
                <div
                v-for="(size, index) in color_sizes"
                :key="index"
              >
                <button
                  :class="{
                    'py-1 cursor-pointer px-5   border rounded-full bg-gray-100':
                      tempidSize === size.id,
                    'py-1 cursor-pointer px-5 border  rounded-full hover:bg-gray-100':
                      tempidSize !== size.id,
                  }"
                  @click="onclickSize(size)"
                >
                  {{ size.measuring_value }}
                </button>
              </div>

            </div>

            <div v-else class="grid xl:grid-cols-4 md:grid-cols-3 grid-cols-4 gap-2">
              <div
                v-for="(size, index) in storeProduct.getproductSizes"
                :key="index"
              >
                <button
                  :class="{
                    'py-1 cursor-pointer px-5   border rounded-full bg-gray-100':
                      tempidSize === size.id,
                    'py-1 cursor-pointer px-5 border  rounded-full hover:bg-gray-100':
                      tempidSize !== size.id,
                  }"
                  @click="onclickSize(size)"
                >
                  {{ size.measuring_value }}
                </button>
              </div>
            </div>


            <!-- مرجع المقاس -->
            <!-- <div class="mt-5 h-10">
              <div
                @click="openDialog"
                class="flex items-center gap-1 hover:underline"
              >
                <img class="cursor-pointer" src="/src/assets/images/cart.svg" />
                <p class="text-blue-800 cursor-pointer">
                  {{ $t('Size Reference') }}
                </p>
              </div>
              <DialogComp
                :isOpen="isDialogOpen"
                title="Confirmation"
                @close="closeDialog"
                @confirm="handleConfirm"
              >
                <p>Are you sure you want to proceed with this action?</p>
              </DialogComp>
            </div> -->


          </div>
        </div>

        <!-- شحن مجاني  -->
        <!-- <div class="bg-gray-100 w-full h-80 2xl:h-72 mb-5 p-5">
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
            <div class="pr-5 mt-2 grid grid-cols-6  2xl:grid-cols-12 items-center gap-1 ">
              <div class="col-span-3 flex items-center">
                <img class="w-4" src="/src/assets/images/copy-success.svg" />
                <p class="text-xs text-gray-600">
                  {{ $t('Secure payment methods') }}
                </p>
              </div>
              <div class="flex col-span-3">
                <img class="w-4" src="/src/assets/images/copy-success.svg" />
                <p class="text-xs text-gray-600">{{ $t('Safe shipping') }}</p>
              </div>
              <div class="flex col-span-3">
                <img class="w-4" src="/src/assets/images/copy-success.svg" />
                <p class="text-xs text-gray-600">
                  {{ $t('Customer service') }}
                </p>
              </div>

              <div class="flex col-span-3">
                <img class="w-4" src="/src/assets/images/copy-success.svg" />
                <p class="text-xs text-gray-600">
                  {{ $t('Privacy protection') }}
                </p>
              </div>
            </div>
          </div>
        </div> -->

        <!-- whats up button -->
        <div class=" w-full bg-white h-10">
            <a
              :href="whatsappShareUrl"
              target="_blank"
              class="flex items-center justify-center gap-2 p-2 bg-green-500 w-48 rounded-full  text-white"
            >
            للاستفسار عبر واتساب
              <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>

            </a>
        </div>


        <!-- الوصف و .... -->
        <div class="w-full mb-5 mt-5">
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
          <!-- <div>
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
          </div> -->

          <!-- حول المتجر -->
          <!-- <div>
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
          </div> -->
        </div>
      </div>

    </div>



     <!-- addToCart -->
    <div class="fixed bottom-0 w-full bg-white">
      <div class="flex items-center gap-1 p-3">
        <div
              class="w-[70px] py-2 rounded-full border flex items-center justify-center"
            >
              <svg v-if="activeFav" @click="oncklicAddToFav(storeProduct.getproductDetails.id)" width="30" height="30" viewBox="0 0 24 24" fill="#8a1538" xmlns="http://www.w3.org/2000/svg">
              <path d="M12.62 20.812C12.28 20.932 11.72 20.932 11.38 20.812C8.48 19.822 2 15.692 2 8.69199C2 5.60199 4.49 3.10199 7.56 3.10199C9.38 3.10199 10.99 3.98199 12 5.34199C12.5138 4.64787 13.183 4.08372 13.954 3.69473C14.725 3.30575 15.5764 3.10275 16.44 3.10199C19.51 3.10199 22 5.60199 22 8.69199C22 15.692 15.52 19.822 12.62 20.812Z" stroke="#8a1538" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              <svg v-else @click="oncklicAddToFav(storeProduct.getproductDetails.id)" width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12.62 20.812C12.28 20.932 11.72 20.932 11.38 20.812C8.48 19.822 2 15.692 2 8.69199C2 5.60199 4.49 3.10199 7.56 3.10199C9.38 3.10199 10.99 3.98199 12 5.34199C12.5138 4.64787 13.183 4.08372 13.954 3.69473C14.725 3.30575 15.5764 3.10275 16.44 3.10199C19.51 3.10199 22 5.60199 22 8.69199C22 15.692 15.52 19.822 12.62 20.812Z" stroke="#8a1538" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>

            </div>
            <button
              @click="addToCart"
              class=" w-full bg-primary-900 rounded text-white py-3 text-lg font-bold hover:bg-primary-800 transition"
            >
              <span v-if="storeCart.loading" class="loader mr-2"></span>
              <span>{{
                storeCart.loading ? 'جارٍ التحقق...' : $t('add to cart')
              }}</span>
            </button>

          </div>

           <!-- <p class="text-sm">
            {{ $t('Earn up to 3 GN points calculated at checkout.') }}
          </p> -->
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted,  computed,defineAsyncComponent} from 'vue'
// import CommentComp from '@/components/Comments/CommentComp.vue'
// import HeaderCommentsComp from '@/components/Comments/HeaderComentsComp.vue'
import { useRoute } from 'vue-router'
const LoaderComp = defineAsyncComponent(() => import('@/components/LoaderDatacomp.vue'));

//   <!-- مرجع المقاس -->
// import DialogComp from '@/components/DialogComp.vue'
const DescriptionComp = defineAsyncComponent(() => import('@/components/ProductDetailsComponent/DescriptionComp.vue'));

// import SizeProDetailsComp from '@/components/ProductDetailsComponent/SizeProDetailsComp.vue'
// import AboutStoreComp from '@/components/ProductDetailsComponent/AboutStoreComp.vue'

// import MoreProductDetailsComp from '@/components/ProductDetailsComponent/MoreProductDetailsComp.vue'
import { useProductStore } from '@/stores/product'
import { useCartStore } from '@/stores/cart'
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/swiper-bundle.css";
import { useAuthStore } from '@/stores/auth';
import { useFavoriteStore } from '@/stores/favorite';

import { useRouter } from 'vue-router';
const route = useRoute()
const storeProduct = useProductStore()
const storeCart = useCartStore()
const authStore = useAuthStore();
const fav = useFavoriteStore()
const router = useRouter();
const filteredData2 = ref({
  productID: null,
  product_id: null,
  color_id: null,
  parent_measuring_id: null,
  quantity: 1,
  price:null,
})

import { useI18n } from 'vue-i18n';
const { t } = useI18n();

const id = route.params.id
if (id != null) {
  filteredData2.value.productID = id
  filteredData2.value.product_id = id
}

const currency = localStorage.getItem('currency');

// import { dynamicLinks } from './firebase';

// const generateProductLink = async (productId) => {
//   const link = await dynamicLinks({
//     domainUriPrefix: 'https://example.page.link',
//     link: `https://devstation.com/products/${productId}`,
//     androidInfo: { packageName: 'com.example.app' },
//     iosInfo: { bundleId: 'com.example.ios' }
//   })
//   return link
// }

// for whatsup button
const currentUrl = ref(window.location.href)
const whatsappNumber = '967772496378'
const product = ref({
  name: '',
  description: '',
  shortUrl: currentUrl.value
})

const isMobile = computed(() => /Android|webOS|iPhone|iPad/i.test(navigator.userAgent))
const message = `السلام عليكم 🛍\n\n

🔹 المنتج: ${product.value.name}\n\n
📝 الوصف: ${product.value.description}\n\n
🔗 رابط المنتج: ${product.value.shortUrl}\n\n

📲 تواصل معنا للمزيد من التفاصيل!`

const whatsappShareUrl = computed(() => {
  return isMobile.value ?
    `whatsapp://send/?phone=${whatsappNumber}&text=${message}` :
    `https://web.whatsapp.com/send/?phone=${whatsappNumber}&text=${message}`
})

const isDropdowenDescriptionVisable = ref(false)
// const isDropdowenSize2Visable = ref(false)
// const isDropdowenAboutStoreVisable = ref(false)
const storedLanguage = localStorage.getItem('language')




// const listContentComment = ref([
//   {
//     title: 'حجم التمثال',
//     subtitle: 'us 30/EUR 65',
//   },
//   {
//     title: 'خصر ',
//     subtitle: 'cm/23 in 59',
//   },
//   {
//     title: 'طول',
//     subtitle: 'cm/62 in 165',
//   },
//   {
//     title: 'الوزن',
//     subtitle: 'kg/130 lbs 70',
//   },
//   {
//     title: 'الوركين',
//     subtitle: 'cm/30 in 80',
//   },
//   {
//     title: 'المقاس العام',
//     subtitle: 'مناسب',
//   },
//   {
//     title: 'لون',
//     subtitle: 'زمغدجي',
//   },
//   {
//     title: 'مقاس',
//     subtitle: 'XL',
//   },
// ])

const activeFav = ref(false)
const selectedfavIds = ref([]);
const oncklicAddToFav = async(product_id)=>{

  if (selectedfavIds.value.includes(product_id)) {
    selectedfavIds.value = selectedfavIds.value.filter((colorId) => colorId !== product_id);
  } else {
    selectedfavIds.value.push(product_id);
  }


  if(activeFav.value){
    const deletePro = await fav.deleteProductFavorite(selectedfavIds.value)
    if(deletePro){
      activeFav.value = false
      selectedfavIds.value = [];
    }else{
      alert("error"+fav.error)
    }
  }else{

    const addPro = await fav.addProductToFavorite(product_id)
    if(addPro){
      activeFav.value = true
    }else{
      alert("error"+fav.error)
    }

  }




}


const color_id_measuring = ref(null);
const size_value_measuring = ref(null);
const color_sizes = ref(null);


const tempidSize = ref(null)
const priceSize = ref(null)
const onclickSize = (size) => {

  if(size){
    priceSize.value =size.price
    size_value_measuring.value = size.measuring_value;
    filteredData2.value.parent_measuring_id = size.id
  if (tempidSize.value == size.id) {
    tempidSize.value = null
  } else {
    tempidSize.value = size.id
  }
  }

}

const priceColor = ref(null);
const tempidColor = ref(null)
const toggleColor = (color) => {
  if(color){
    priceColor.value = color.price
    color_id_measuring.value = color.id;
    if(color.sizes){
      color_sizes.value = color.sizes
    }else {
      color_sizes.value = null
    }

    filteredData2.value.color_id = color.id
    if (tempidColor.value == color.id) {
    tempidColor.value = null
  } else {
    tempidColor.value = color.id
  }
  }


}

const searchedOption = computed(() => {
  return storeProduct.getproductDetails.optionPrices.find(option =>
    option.color_id == color_id_measuring.value && option.measuring_value.toLowerCase() === size_value_measuring.value.toLowerCase()
  ) || null
});


const addToCart = async () => {

  if (!authStore.isAuthenticated) {
    // alert(t("Please log in to add products to the cart."));
    router.push('/phone/login');
    return;
  }

  if(priceSize.value != null){
    filteredData2.value.price = priceSize.value
  }else if(priceColor.value != null){
    filteredData2.value.price = priceColor.value
  }else if(searchedOption.value && searchedOption.value != null && searchedOption.value != undefined){
    filteredData2.value.price = searchedOption.value.price
  }else{
    filteredData2.value.price = storeProduct.getproductDetails.base_price
  }

  if(filteredData2.value.color_id == null){
    filteredData2.value.color_id = 0
  }



  if(filteredData2.value.parent_measuring_id == null){
    alert("plesase choose size")
  }else{
    const addcart = await storeCart.creatCart(
      filteredData2.value.product_id,
      filteredData2.value.color_id,
      filteredData2.value.parent_measuring_id,
      filteredData2.value.quantity,
      filteredData2.value.price,
    )

    if (addcart) {
      if (storeCart.productMessage != null) {
        alert(storeCart.productMessage)
      } else {
        alert(t("Product added to cart!"))
        router.push("/phone/home/")
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
// const showImageInSwiper = (index) => {
//   if (swiperInstance.value) {
//     swiperInstance.value.slideTo(index); // التنقل إلى الصورة المحددة
//   }
// };

// تغيير اللون وتحديث الصور
const changeColor = (index) => {
  isMainSelected.value = false;
  selectedColorIndex.value = index;


  const color = storeProduct.getproductColors[index];
  selectedColorImages.value = color.images || [];
  selectedImage.value = color.images[0]?.image || null;
  filteredData2.value.color_id = color.id

};

onMounted(async() => {
 await storeProduct.fetchProductDetailsById(filteredData2)

 if(storeProduct.getproductDetails.favorite== true){
  activeFav.value = true
 }else{
  activeFav.value = false
 }

 product.value.name =  storeProduct.getproductDetails.name ? storeProduct.getproductDetails.name :'.'

 product.value.description = storeProduct.getproductDetails.description?storeProduct.getproductDetails.description:'.'


   // تعيين اللون الرئيسي
   mainColor.value =
   storeProduct.getproductColors.find((color) => color.is_main === 1) || {};
  selectedImage.value = mainColor.value.images?.[0]?.image || null;

  // تعيين الصور الفرعية للون الأول كافتراضي
  if (storeProduct.getproductColors.length > 0) {
    changeColor(0);
  }

})

//  <!-- مرجع المقاس -->
// const isDialogOpen = ref(false)

// const openDialog = () => {
//   isDialogOpen.value = true
// }

// const closeDialog = () => {
//   isDialogOpen.value = false
// }

// const handleConfirm = () => {
//   alert('Action confirmed!')
//   closeDialog()
// };
</script>

<style scoped>

/* swiper 1 arabic =============================================================== */
/* تخصيص أزرار التنقل */
.custom-swiper :deep(.swiper-button-next),
.custom-swiper :deep(.swiper-button-prev) {
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  display: none;
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
  width: 10px;
  height: 10px;
  opacity: 1;
}

.custom-swiper :deep(.swiper-pagination-bullet-active) {
  background-color: #8a1538; /* لون النقطة النشطة */
  width: 12px;
  height: 12px;
}


/* swiper 2 english =============================================================== */
/* تخصيص أزرار التنقل */
.custom-swiper2 :deep(.swiper-button-next),
.custom-swiper2 :deep(.swiper-button-prev) {
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  border-radius: 50%;
  width: 30px;
  height: 30px;
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
  width: 10px;
  height: 10px;
  opacity: 1;
}

.custom-swiper2 :deep(.swiper-pagination-bullet-active) {
  background-color: #8a1538; /* لون النقطة النشطة */
  width: 12px;
  height: 12px;
}


</style>
