<template>
  <div v-if="props.isOpen" class="fixed bottom-0 mb-16 w-full z-50">
    <!-- Dialog Container -->
    <div
      class="bg-white w-full overflow-y-auto custom-scroll max-h-[600px] h-full"
    >
      <!-- Dialog Header -->
      <div class="flex justify-end items-center">
        <button
          @click="close"
          class="text-primary-900 text-[20px] hover:text-primary-950"
        >
          &times;
        </button>
      </div>

      <!-- Dialog Content -->
      <div>
        <div v-if="storeCart.loading">
          <LoaderDatacomp :isLoader="storeCart.loading" />
        </div>
        <div v-else-if="storeCart.error">{{ storeCart.error }}</div>
        <div v-else-if="storeCart.productDetails">
          <div class="mx-auto grid grid-cols-1">
            <!-- product image  -->
            <div class="col-span-6">
              <!-- product image  -->
              <div v-if="storeCart.productDetails.color_has_imgs == false">
                <swiper
                  :modules="[Navigation, Pagination]"
                  :slides-per-view="1"
                  :space-between="10"
                  navigation
                  pagination
                  :class="{
                    'rounded-lg custom-swiper border h-[400px] w-screen mb-5':
                      storedLanguage == 'ar',
                    'rounded-lg custom-swiper2 border h-[400px] w-screen mb-5':
                      storedLanguage == 'en',
                  }"
                  @swiper="setSwiperInstance"
                >
                  <swiper-slide
                    v-for="(image, index) in storeCart.productDetails
                      .all_images"
                    :key="index"
                  >
                    <img
                      :src="image.image"
                      alt="Product Image"
                      class="w-full h-full rounded-lg"
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
                  :class="{
                    'rounded-lg custom-swiper border h-[400px] w-screen mb-5':
                      storedLanguage == 'ar',
                    'rounded-lg custom-swiper2  h-[400px] w-screen mb-5':
                      storedLanguage == 'en',
                  }"
                  @swiper="setSwiperInstance"
                >
                  <swiper-slide
                    v-for="(image, index) in selectedColorImages"
                    :key="index"
                  >
                    <img
                      :src="image.image"
                      alt="Product Image"
                      class="w-full h-full rounded-lg"
                    />
                  </swiper-slide>
                </swiper>
              </div>
            </div>

            <div class="col-span-6 px-2 mb-32">
              <!-- الاسم والسعر -->
              <div class="w-full mb-10">
                <div class="flex items-center justify-between">
                  <p class="text-md font-medium">
                    {{ storeCart.productDetails.name }}
                  </p>

                  <!-- <svg
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
                  </svg> -->
                </div>
                <div class="">
                  <p class="text-[10px] font-medium">
                    {{ storeCart.productDetails.description }}
                  </p>
                </div>

                <!-- <div class="  mt-3">
                  <p class="text-sm text-gray-400">12684532486586453218451 </p>
                </div> -->

                <!-- <div class="mt-3">
                  <div class="flex items-center gap-1">
                    <span class="flex text-yellow-500">
                      <i> <img class="w-4" src="/src/assets/images/star.svg" /></i>
                      <i> <img class="w-4" src="/src/assets/images/star.svg" /></i>
                      <i> <img class="w-4" src="/src/assets/images/star.svg" /></i>
                      <i> <img class="w-4" src="/src/assets/images/star.svg" /></i>
                      <i> <img class="w-4" src="/src/assets/images/star.svg" /></i>
                    </span>
                    <h1 class="font-medium text-xs text-yellow-600">
                      {{ $t('Customer Reviews') }}
                    </h1>
                  </div>
                </div> -->

                <div class="flex items-center gap-2 mt-3">
                  <p
                    v-if="
                      storeCart.productDetails.price_options_type ==
                      'by_color_and_measuring'
                    "
                    class="text-xl text-primary-900 font-semibold"
                  >
                    {{
                      searchedOption
                        ? searchedOption.price
                        : props.formEdit != null
                          ? props.formEdit.product_price
                          : storeCart.productDetails.base_price
                    }}
                  </p>

                  <p
                    v-else-if="
                      storeCart.productDetails.price_options_type == 'by_color'
                    "
                    class="text-lg text-primary-900"
                  >
                    {{
                      priceColor != null
                        ? priceColor
                        : props.formEdit != null
                          ? props.formEdit.product_price
                          : storeCart.productDetails.base_price
                    }}
                  </p>

                  <p
                    v-else-if="
                      storeCart.productDetails.price_options_type ==
                      'by_measuring'
                    "
                    class="text-lg text-primary-900"
                  >
                    {{
                      priceSize != null
                        ? priceSize
                        : props.formEdit != null
                          ? props.formEdit.product_price
                          : storeCart.productDetails.base_price
                    }}
                  </p>

                  <p v-else class="text-lg text-primary-900">
                    {{ storeCart.productDetails.base_price }}
                  </p>

                  <!-- <div class="h-5 px-2 flex items-center justify-center bg-black">
                    <p   class="text-xs text-white">
                      {{ storeCart.productDetails.discount_price }}-
                    </p>
                  </div> -->
                </div>

                <!-- <div class="flex items-center gap-1 mt-3 bg-amber-100">
                  <p class="text-sm font-semibold text-amber-600">
                    رقم 7 الافضل مبيعا
                  </p>
                  <p class="text-sm text-amber-600">في فساتين نوم بطباعه ازهلر</p>
                </div> -->
              </div>

              <!-- المقاس   -->
              <div class="mb-5">
                <div class="mb-1 mt-5">
                  <!-- colors -->
                  <div class="pb-5">
                    <h3 class="text-md font-medium">الالوان:</h3>
                    <ul class="space-y-5 mt-5">
                      <li>
                        <div class="grid grid-cols-7 gap-3">
                          <div
                            v-for="(color, index) in storeCart.getproductColors"
                            :key="index"
                            class="w-10 h-10 rounded-full border-2 cursor-pointer flex items-center justify-center"
                            :class="{
                              'border-primary-900 ':
                                selectedColorIndex === index,
                            }"
                          >
                            <div
                              @click="(changeColor(index), toggleColor(color))"
                              class="rounded-full h-8 w-8"
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

                        <p
                          v-if="
                            storeCart.productDetails.measuring_type == 'size'
                          "
                          class="text-black"
                        >
                          size
                        </p>
                        <p
                          v-if="
                            storeCart.productDetails.measuring_type == 'unit'
                          "
                          class="text-black"
                        >
                          unit
                        </p>
                      </button>
                    </div>
                  </div>

                  <!-- الاحجام -->
                  <div
                    v-if="
                      color_sizes != null &&
                      storeCart.productDetails.color_has_sizes
                    "
                    class=""
                  >
                    <button
                      v-for="(size, index) in color_sizes"
                      :key="index"
                      :class="{
                        'py-1 cursor-pointer px-7 m-2  border rounded-full bg-gray-100':
                          tempidSize === size.id,
                        'py-1 cursor-pointer px-7  border m-2 rounded-full hover:bg-gray-100':
                          tempidSize != size.id,
                      }"
                      @click="onclickSize(size)"
                    >
                      {{ size.measuring_value }}
                    </button>
                  </div>

                  <div v-else class="">
                    <button
                      v-for="(size, index) in storeCart.getproductSizes"
                      :key="index"
                      :class="{
                        'py-1 cursor-pointer px-7 m-2  border rounded-full bg-gray-100':
                          tempidSize === size.id,
                        'py-1 cursor-pointer px-7  border m-2 rounded-full hover:bg-gray-100':
                          tempidSize != size.id,
                      }"
                      @click="onclickSize(size)"
                    >
                      {{ size.measuring_value }}
                    </button>
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
            </div>

            <!-- updateCart -->
            <div class="fixed bottom-0 w-full mb-16 bg-white">
              <div class="flex items-center gap-1 p-3">
                <div
                  class="w-[70px] py-2 rounded-full border flex items-center justify-center"
                >
                  <svg
                    width="30"
                    height="30"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12.62 20.812C12.28 20.932 11.72 20.932 11.38 20.812C8.48 19.822 2 15.692 2 8.69199C2 5.60199 4.49 3.10199 7.56 3.10199C9.38 3.10199 10.99 3.98199 12 5.34199C12.5138 4.64787 13.183 4.08372 13.954 3.69473C14.725 3.30575 15.5764 3.10275 16.44 3.10199C19.51 3.10199 22 5.60199 22 8.69199C22 15.692 15.52 19.822 12.62 20.812Z"
                      stroke="#8a1538"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>

                <button
                  @click="updateToCart"
                  class="w-full bg-primary-900 text-white py-3 rounded-md text-lg font-bold hover:bg-primary-800 transition"
                >
                  <span v-if="storeCart.loading" class="loader mr-2"></span>
                  <span>{{
                    storeCart.loading ? 'جارٍ التحقق...' : $t('updat cart')
                  }}</span>
                </button>
              </div>

              <!-- <p class="text-sm">
                  {{ $t('Earn up to 3 GN points calculated at checkout.') }}
                </p> -->
            </div>
          </div>
        </div>
        <div v-else>
          <span>no data</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'
// import DialogComp from "./DialogComp.vue";
import LoaderDatacomp from '@/components/LoaderDatacomp.vue'
const storedLanguage = localStorage.getItem('language')
import { useCartStore } from '@/stores/cart'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Pagination } from 'swiper/modules'
import 'swiper/swiper-bundle.css'
const storeCart = useCartStore()
// Props
const props = defineProps({
  isOpen: {
    type: Boolean,
    required: true,
  },
  IdProduct: {
    type: Number,
  },
  IdCart: {
    type: Number,
  },
  formEdit: {
    type: Object,
    required: true,
  },
})

import { useI18n } from 'vue-i18n'
const { t } = useI18n()

const filteredData = ref({
  cart_id: null,
  product_id: null,
  color_id: props.formEdit.color_id,
  parent_measuring_id: props.formEdit.parent_measuring_id,
  quantity: props.formEdit.quantity,
  price: null,
})

const color_id_measuring = ref(null)
const size_value_measuring = ref(null)
const color_sizes = ref(null)

const tempidSize = ref(null)
const priceSize = ref(null)
const onclickSize = size => {
  if (size) {
    priceSize.value = size.price
    size_value_measuring.value = size.measuring_value
    filteredData.value.parent_measuring_id = size.id
    if (tempidSize.value == size.id) {
      tempidSize.value = null
    } else {
      tempidSize.value = size.id
    }
  }
}

const priceColor = ref(null)
const tempidColor = ref(null)
const toggleColor = color => {
  if (color) {
    priceColor.value = color.price
    color_id_measuring.value = color.id
    if (color.sizes) {
      color_sizes.value = color.sizes
    } else {
      color_sizes.value = null
    }

    filteredData.value.color_id = color.id

    if (tempidColor.value == color.id) {
      tempidColor.value = null
    } else {
      tempidColor.value = color.id
    }
  }
}

const searchedOption = computed(() => {
  return storeCart.productDetails.optionPrices.find(
    option =>
      option.color_id == color_id_measuring.value &&
      option.measuring_value.toLowerCase() ===
        size_value_measuring.value.toLowerCase(),
  )
})

// مرجع المقاس
// const isDialogOpen = ref(false)

// const openDialog = () => {
//   isDialogOpen.value = true
// }

// const closeDialog = () => {
//   isDialogOpen.value = false
// }

const updateToCart = async () => {
  if (storeCart.productDetails && storeCart.productDetails.id != null) {
    filteredData.value.product_id = storeCart.productDetails.id
  }
  if (props.IdCart != null) {
    filteredData.value.cart_id = props.IdCart
  }
  if (priceSize.value != null) {
    filteredData.value.price = priceSize.value
  } else if (priceColor.value != null) {
    filteredData.value.price = priceColor.value
  } else if (
    searchedOption.value &&
    searchedOption.value != null &&
    searchedOption.value != undefined
  ) {
    filteredData.value.price = searchedOption.value.price
  } else {
    filteredData.value.price = props.formEdit.product_price
  }

  const updatecart12 = await storeCart.updateCart(
    filteredData.value.cart_id,
    filteredData.value.product_id,
    filteredData.value.color_id,
    filteredData.value.parent_measuring_id,
    filteredData.value.quantity,
    filteredData.value.price,
  )

  if (updatecart12) {
    alert(t('Product has been updated!'))
    window.location.reload()
    close()
  } else {
    alert(storeCart.error)
    window.location.reload()
    close()
  }
}

// متغيرات الحالة
const mainColor = ref({})
const selectedColorIndex = ref(null)
const selectedColorImages = ref([])
const selectedImage = ref(null)
const isMainSelected = ref(true)

const swiperInstance = ref(null)
// ربط مثيل Swiper عند الإنشاء
const setSwiperInstance = swiper => {
  swiperInstance.value = swiper
}

// تغيير اللون وتحديث الصور
const changeColor = index => {
  isMainSelected.value = false
  selectedColorIndex.value = index
  // selectedColorIndex.value = props.formEdit.color_id
  const color = storeCart.getproductColors[index]
  selectedColorImages.value = color.images || []
  selectedImage.value = color.images[0]?.image || null
}

const productIndex = ref(null)

onMounted(async () => {
  if (props.isOpen === true) {
    await storeCart.fetchProductDetailsByIdForCart(props.IdProduct)
    // تعيين اللون الرئيسي
    mainColor.value =
      storeCart.getproductColors.find(color => color.is_main === 1) || {}
    selectedImage.value = mainColor.value.images?.[0]?.image || null

    // تعيين الصور الفرعية للون الأول كافتراضي
    if (storeCart.getproductColors.length > 0) {
      productIndex.value = storeCart.getproductColors.findIndex(
        color => color.id == props.formEdit.color_id,
      )
      changeColor(productIndex.value)
    }

    if (props.formEdit != null) {
      if (
        color_sizes.value != null &&
        storeCart.productDetails.color_has_sizes
      ) {
        const s = color_sizes.value.find(
          size => size.id === props.formEdit.parent_measuring_id,
        )
        tempidSize.value = s.id
      } else {
        const s = storeCart.getproductSizes.find(
          size => size.id === props.formEdit.parent_measuring_id,
        )
        tempidSize.value = s.id
      }
    }
  }
})

// Emits
const emit = defineEmits(['close'])

// Close the dialog
const close = () => {
  emit('close')
};
</script>

<style >
.custom-scroll::-webkit-scrollbar {
  width: 0px;
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
  right: 0px;
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
  right: 0px;
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
