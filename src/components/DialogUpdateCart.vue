<template>
    <div
    v-if="props.isOpen"
    class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
  >
    <!-- Dialog Container -->
    <div
      class="bg-white w-full max-w-5xl  gap-5 overflow-y-auto custom-scroll   max-h-[600px] h-full  shadow-lg p-2"
    >
      <!-- Dialog Header -->
      <div class="flex justify-end  items-center ">
        <button
          @click="close"
          class="text-primary-900 text-[20px] hover:text-black"
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
          <div class="mx-auto grid grid-cols-1 lg:grid-cols-12 px-5">

               <!-- product image  -->
            <div class="col-span-6 ">
              <!-- product image  -->
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
                              class="w-12 h-12  md:w-16 md:h-20  my-3   cursor-pointer border-2 border-transparent hover:border-gray-500"
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
                                class="w-12 h-12  md:w-16 md:h-20   my-3  shadow cursor-pointer border-2 border-transparent hover:border-gray-500"
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
                    :class="{'rounded-lg custom-swiper border h-[250px] w-[300px] md:w-[400px] md:h-[550px]':storedLanguage == 'ar' , 'rounded-lg custom-swiper2 border w-[700px] h-[900px]':storedLanguage == 'en'}"
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
            </div>

            <div class="col-span-6 ">
              <!-- الاسم والسعر -->
              <div class="w-full h-44  ">

                <div class="flex items-center justify-between">
                  <p  class="text-md font-medium">
                    {{ storeCart.productDetails.description }}
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

                <div class="  mt-3">
                  <p class="text-sm text-gray-400">12684532486586453218451</p>
                </div>

                <div class="mt-3">
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
                </div>

                <div class="flex items-center gap-2 mt-3">
                  <p  class="text-xl text-orange-700 font-semibold">
                    {{ storeCart.productDetails.currency}}{{ storeCart.productDetails.base_price }}
                  </p>
                  <div class="h-5 px-2 flex items-center justify-center bg-black">
                    <p   class="text-xs text-white">
                      {{ storeCart.productDetails.discount_price }}-
                    </p>
                  </div>
                </div>

                <div class="flex items-center gap-1 mt-3 bg-amber-100">
                  <p class="text-sm font-semibold text-amber-600">
                    رقم 7 الافضل مبيعا
                  </p>
                  <p class="text-sm text-amber-600">في فساتين نوم بطباعه ازهلر</p>
                </div>
               </div>

                <!-- المقاس وزر الاضافة -->
              <div class="border-t-2 mb-5">
                <div class="mb-1 mt-5">
                  <!-- colors -->
                    <div class="pb-5">
                      <h3 class="text-md font-medium">{{ $t('Color: Multicolor') }}</h3>
                      <ul class="space-y-5 mt-5">
                        <li>
                          <div class="grid grid-cols-7 gap-3">
                            <div
                              v-for="(color, index) in storeCart.getproductColors"
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

                  <div v-if="storeCart.productDetails.size_type_id" class="flex items-center gap-1 mb-5 mt-5">
                    <h3 class="text-lg font-semibold">{{ $t('Size') }}</h3>
                    <div >
                      <button
                        class="text-[#979797]  h-[25px] border border-gray-900 bg-gray-50 font-medium rounded-full text-[14px] px-3 text-center "
                        type="button"
                      >
                        <p class="text-black">{{ storeCart.productDetails.size_type_name }}</p>

                      </button>
                    </div>
                  </div>

                  <!-- الاحجام -->
                  <div class="">
                    <button
                        v-for="(size, index) in storeCart.getproductSizes"
                      :key="index"
                      :class="{
                        'py-1 cursor-pointer px-7 m-2  border rounded-full bg-gray-100':
                          tempidSize === size.size_type_id,
                        'py-1 cursor-pointer px-7  border m-2 rounded-full hover:bg-gray-100':
                          tempidSize !== size.size_type_id,
                      }"
                      @click="onclickSize(size.size_type_id)"
                    >
                      {{ size.size_type_name }}
                    </button>
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
                    @click="updateToCart"

                    class="max-w-[350px] w-full bg-primary-900 text-white py-3 text-lg font-bold hover:bg-primary-800 transition"
                  >
                    <span v-if="storeCart.loading" class="loader mr-2"></span>
                        <span>{{
                          storeCart.loading ? 'جارٍ التحقق...' : $t('updat cart')
                        }}</span>
                  </button>
                  <div
                    class="w-[80px] py-4 rounded-full border flex items-center justify-center"
                  >
                    <img class="w-10" src="/src/assets/images/heart.svg" />
                  </div>
                </div>
                <p class="text-sm">
                  {{ $t('Earn up to 3 GN points calculated at checkout.') }}
                </p>
              </div>

              <div class="flex items-center mb-5">
                <RouterLink :to="`/product/${storeCart.productDetails.id}`">
                    <div class="flex items-center">
                      <h1 class="text-gray-500 font-medium"> {{$t('View Full Details')}}</h1>
                      <svg  :class="storedLanguage == 'en' ? 'hidden' : ''"  width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M15.0001 19.92L8.48009 13.4C7.71009 12.63 7.71009 11.37 8.48009 10.6L15.0001 4.07996" stroke="gray" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                      </svg>

                      <svg :class="storedLanguage == 'ar' ? 'hidden' : ''" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8.90991 19.92L15.4299 13.4C16.1999 12.63 16.1999 11.37 15.4299 10.6L8.90991 4.07996" stroke="gray" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                      </svg>
                    </div>
                  </RouterLink>
              </div>
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
import { defineProps, defineEmits,ref ,onMounted} from "vue";
import DialogComp from "./DialogComp.vue";
import LoaderDatacomp from "./LoaderDatacomp.vue";
const storedLanguage = localStorage.getItem("language");
import { useCartStore } from '@/stores/cart'
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/swiper-bundle.css";
const storeCart = useCartStore()

// Props
const props = defineProps({
  isOpen: {
    type: Boolean,
    required: true,
  },
  IdProduct:{
    type:Number
  },
  IdCart:{
    type:Number
  }
});


const filteredData = ref({
  cart_id:null,
  product_id:  null,
  color_id: null,
  size_id: null,
  quantity: 1,
})

const tempidSize = ref(null)
const onclickSize = id => {
  if(id){
    filteredData.value.size_id = id
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
    filteredData.value.color_id = id
  if (tempidColor.value === id) {
    tempidColor.value = null
  } else {
    tempidColor.value = id
  }
  }

}

const isDialogOpen = ref(false)

const openDialog = () => {
  isDialogOpen.value = true
}

const closeDialog = () => {
  isDialogOpen.value = false
}



const updateToCart = async() => {
  if(props.IdProduct != null){
    filteredData.value.product_id = props.IdProduct
  }
  if(props.IdCart  != null){
    filteredData.value.cart_id = props.IdCart
  }


    const updatecart12 = await storeCart.updateCart(
    filteredData.value.cart_id,
    filteredData.value.product_id,
    filteredData.value.color_id,
    filteredData.value.size_id,
    filteredData.value.quantity,
  );


  if (updatecart12) {
      alert('تمت تحديث المنتج !')
      window.location.reload();
      close()
  } else {
    alert(storeCart.error)
    window.location.reload();
      close()
  }

};


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

  const color = storeCart.getproductColors[index];
  selectedColorImages.value = color.images || [];
  selectedImage.value = color.images[0]?.image || null;
};

onMounted(async() => {
  if(props.isOpen === true){
    await storeCart.fetchProductDetailsByIdForCart(props.IdProduct)
     // تعيين اللون الرئيسي
      mainColor.value =
      storeCart.getproductColors.find((color) => color.is_main === 1) || {};
      selectedImage.value = mainColor.value.images?.[0]?.image || null;

    // تعيين الصور الفرعية للون الأول كافتراضي
      if (storeCart.getproductColors.length > 0) {
        changeColor(0);
      }

  }

})




// Emits
const emit = defineEmits(["close"]);

// Close the dialog
const close = () => {
  emit("close");
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
  width: 30px;
  height: 30px;
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






