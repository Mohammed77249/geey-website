<template>
  <div
    v-if="props.isOpen"
    class="fixed bottom-0 mb-16  bg-white rounded w-full z-50"
  >

      <!-- Dialog Content -->
    <div class=" bg-white">

              <div class="py-2 p-5  mt-2 bg-white m-2 grid grid-cols-12 items-center justify-between">
                <h1 class="text-black font-bold text-sm text-center col-span-11 "> هل يمكنك ترك رايك؟</h1>
                <button
                  @click="close"
                  class="text-primary-900  text-[20px] hover:text-black col-span-1"
                >
                  &times;
                </button>
              </div>

              <form @submit.prevent="submitReview"  class="">

                <!-- التقييم النجمي -->
                <div class="flex  items-center justify-center  ">
                  <div  class="flex-col justify-center  items-center ">
                    <div
                    class="flex space-x-1 w-full"
                    @mousedown="startDrag"
                    @mouseup="endDrag"
                    @mouseleave="endDrag"
                    @mousemove="dragStars"
                    @touchstart.passive="startDrag"
                    @touchend.passive="endDrag"
                    @touchmove.passive="dragStars"
                    ref="starsContainer"
                    style="cursor: pointer;"
                    required
                  >
                    <span
                      v-for="star in 5"
                      :key="star"
                      class="star-container text-3xl"
                      :style="getStarStyle(star)"
                    >
                      ★
                    </span>
                  </div>
                  <span class=" text-lg text-gray-700 text-center flex items-center justify-center">{{ rating.toFixed(1) }}</span>
                  </div>


                </div>

                <!-- تعليق المستخدم -->
                <div class="mt-4 px-3">
                  <textarea
                    id="comment"
                    v-model="FormData.comment"
                    required
                    rows="4"
                    class="mt-1 p-2 w-full  bg-gray-50 rounded-md ring-0"
                    placeholder="أضف تعليقك هنا"
                  ></textarea>
                </div>

                  <!-- اللون والمقاس -->
                  <div class="px-3 grid grid-cols-12 mt-2">

                    <!-- color -->
                    <div class="col-span-6">
                      <div v-if="props.productDetails.hex_code" class="text-xs mt-1 flex">
                            <span class="text-sm font-medium text-gray-700  "> {{ $t("Color") }} :
                            </span>
                            <div class="w-3 h-3 rounded-full flex items-center justify-center mt-[2px] mx-1" :style="{ backgroundColor: productDetails.hex_code }" ></div>
                            <span>{{ productDetails.color_name }}</span>
                          </div>
                    </div>

                    <!-- size -->
                    <div class="col-span-6">
                      <span class="text-sm font-medium text-gray-700"> {{ $t("measuring") }} : {{ productDetails.measuring_value }}</span>
                    </div>

                  </div>

                  <!-- perfect or not -->

                  <div class="px-3 grid grid-cols-12 mt-4">
                    <div class="col-span-4 flex items-center">
                      <input id="default-radio-1" type="radio" value="1" v-model="FormData.proportion" name="default-radio-1" class="w-4 h-4 text-primary-900 bg-primary-900 border-primary-900  focus:ring-primary-900">
                      <span class="ms-2 text-sm font-medium text-black">صغير </span>
                    </div>
                    <div class=" col-span-4 flex items-center">
                        <input checked id="default-radio-2" type="radio" value="2" v-model="FormData.proportion" name="default-radio-2" class="w-4 h-4 text-primary-900 bg-primary-900 border-primary-900 focus:ring-primary-900">
                        <span class="ms-2 text-sm font-medium text-black">مناسب</span>
                    </div>
                    <div class=" col-span-4 flex items-center">
                        <input  id="default-radio-3" type="radio" value="3" v-model="FormData.proportion" name="default-radio-3" class="w-4 h-4 text-primary-900 bg-primary-900 border-primary-900 focus:ring-primary-900">
                        <span  class="ms-2 text-sm font-medium text-black">كبير</span>
                    </div>
                  </div>


                    <!-- اختيار الصور -->
                <div class="px-3 mt-4">

                  <!-- اختيار الصور -->
                  <div class="cursor-pointer ">
                    <div class="w-28 h-10 shadow rounded-lg relative flex items-center px-2 justify-center gap-2 ">
                      <img
                          src="/src/assets/images/camera.svg"
                          alt="معاينة الصورة"
                          class="w-4 h-4  object-cover "
                        />
                      <span  class=" text-sm font-semibold text-primary-900 ">إضافة صورة</span>
                    <input
                        type="file"
                        accept="image/*"
                        multiple
                        @change="previewImages"
                        class="absolute opacity-0 cursor-pointer"
                      />



                    </div>


                  </div>

                  <!-- عرض الصور -->
                  <div class=" mx-auto mt-2 w-full  h-24 ">
                    <div  v-if="images.length > 0" class=" flex items-center gap-2 w-full  h-24 ">
                      <div
                        v-for="image in images"
                        :key="image.id"
                        class=" w-24 h-24 rounded-lg"
                      >
                        <img
                          :src="image.url"
                          class="w-full h-full object-cover rounded-lg"
                        />

                      </div>
                    </div>
                    </div>

                </div>

                        <!-- زر الحفظ -->
                    <div class="bg-white py-2 px-2  flex items-center   fixed bottom-0 w-full">
                        <button
                          type="submit"
                          class="w-full rounded-xl  bg-primary-900 text-white py-4 font-semibold  text-sm"
                        >
                      تاكيد
                        </button>
                    </div>

              </form>
    </div>


  </div>
</template>

<script setup>
import { ref ,watch } from 'vue';
import { useCommentsStore } from '@/stores/comments.js';

// Props
const props = defineProps({
  isOpen: {
    type: Boolean,
    required: true,
  },
  loading: {
    type: Boolean,
  },
  error: {
    type: String,
  },
  productDetails:{
    type:Array
  },
  orderId:{
    type: String,
  }
});

const commentStore = useCommentsStore();

const rating = ref(2.5);
let isDragging = false;
let containerLeft = 0;
let containerWidth = 0;
const starsContainer = ref(null);

const FormData = ref({
  product_id:null,
  order_id:null,
  color_id:null,
  parent_measuring_id:null,
  comment:null,
  rating:null,
  proportion:2,
  images:null
});




const images = ref([]);
const previewImages = (event) => {
  const files = event.target.files;

  if (!files) return;

  for (const file of files) {
    if (file.type.startsWith('image/')) {
      const reader = new FileReader();

      reader.onload = (e) => {
        images.value.push({
          id: Date.now() + file.name,
          url: e.target.result,
          file: file
        });
      };

      reader.readAsDataURL(file);
    }
  }
};



watch(() => props.isOpen, (newVal) => {
  if (newVal) {
    // تأخير التهيئة لضمان وجود العنصر في DOM
    setTimeout(() => {
      if (starsContainer.value) {
        const rect = starsContainer.value.getBoundingClientRect();
        containerLeft = rect.left;
        containerWidth = rect.width;
      }
    }, 50);
  }
});


// إدارة حالة التمرير
watch(() => props.isOpen, (newVal) => {
  if (newVal) {
    document.body.classList.add('overflow-hidden');
  } else {
    document.body.classList.remove('overflow-hidden');
  }
});



const startDrag = (event) => {
  if (!starsContainer.value) return; // تحقق من وجود العنصر

  isDragging = true;
  const rect = starsContainer.value.getBoundingClientRect();
  containerLeft = rect.left;
  containerWidth = rect.width;
  updateRating(event);
};

// إنهاء السحب
const endDrag = () => {
  isDragging = false;
};

const dragStars = (event) => {
  if (!isDragging) return;
  updateRating(event);
};



const updateRating = (event) => {
  const clientX = event.clientX || event.touches[0].clientX;
  const relativeX = clientX - containerLeft;
  let newRating = (relativeX / containerWidth) * 5;

  // تحديد القيمة بين 0 و5 مع تقريب إلى أقرب 0.5
  newRating = Math.max(0, Math.min(5, newRating));
  rating.value = Math.round(newRating * 2) / 2;
};


const getStarStyle = (star) => {
  const fillPercentage = Math.min(1, Math.max(0, rating.value - (star - 1))) * 100;
  return {
    background: `linear-gradient(90deg, #fbbf24 ${fillPercentage}%, #d1d5db ${fillPercentage}%)`,
    '-webkit-background-clip': 'text',
    'background-clip': 'text',
    '-webkit-text-fill-color': 'transparent'
  };
};



// إرسال التقييم
const submitReview = async() => {
  if(props.productDetails){
    FormData.value.product_id = props.productDetails.id
    FormData.value.parent_measuring_id = props.productDetails.measuring_id
    FormData.value.color_id = props.productDetails.color_id
  }
  FormData.value.rating = rating.value
  FormData.value.order_id = props.orderId

  const result = await commentStore.creatComment(FormData.value);
  if(result){
    alert("تم الاضافه بنجاح")
  }else{
    alert("error "+commentStore.error)
  }

};


const emit = defineEmits(['close'])

// Close the dialog
const close = () => {
  emit('close')
};


</script>


<style scoped>
.star-container {
  transition: background 0.2s ease-in-out;
  display: inline-block;
}

.text-yellow-400 {
  color: #fbbf24;
}

.text-gray-300 {
  color: #d1d5db;
}

/* تحسينات للشاشات الصغيرة */
@media (max-width: 640px) {
  .star-container {
    font-size: 2rem;
  }
}
</style>
