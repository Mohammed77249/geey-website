<template>
  <div
    v-if="props.isOpen"
    class="fixed bottom-0 mb-16 bg-white w-full z-50"
  >

      <!-- Dialog Content -->

        <div>
          <div class="grid grid-cols-1  gap-3 mb-5 ">
            <div class="col-span-6 bg-white">
              <div class="py-2 p-5  border mt-2 bg-white m-2 flex items-center justify-between">
                <h1 class="text-primary-900 font-bold text-sm"> هل يمكنك ترك رايك؟</h1>
                <button
                  @click="close"
                  class="text-primary-900  text-[20px] hover:text-black"
                >
                  &times;
                </button>
              </div>


              <div class="p-2  m-2 h-96">

                <!-- التقييم النجمي -->
                <div class="flex justify-center items-center space-x-1 relative">
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
                  <span class="ml-2 text-xl text-gray-700">{{ rating.toFixed(1) }} / 5</span>
                </div>

                <!-- تعليق المستخدم -->
                <div class="mt-4">
                  <label for="comment" class="block text-sm font-medium text-gray-700">هل يمكنك ترك رأيك؟</label>
                  <textarea
                    id="comment"
                    v-model="comment"
                    rows="4"
                    class="mt-1 p-2 w-full border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
                    placeholder="أضف تعليقك هنا"
                  ></textarea>
                </div>

                  <!-- اللون والمقاس -->
                  <div class="flex space-x-4 mt-4">
                    <div>
                      <label for="color" class="block text-sm font-medium text-gray-700">اللون:</label>
                      <select id="color" v-model="selectedColor" class="mt-1 p-2 border border-gray-300 rounded-md">
                        <option value="black">أسود</option>
                        <option value="white">أبيض</option>
                        <option value="blue">أزرق</option>
                      </select>
                    </div>

                    <div>
                      <label for="size" class="block text-sm font-medium text-gray-700">المقاس:</label>
                      <select id="size" v-model="selectedSize" class="mt-1 p-2 border border-gray-300 rounded-md">
                        <option value="s">S</option>
                        <option value="m">M</option>
                        <option value="l">L</option>
                      </select>
                    </div>
                  </div>


                      <!-- خيار إضافة صورة -->
                <div class="mt-4">
                  <label for="image-upload" class="block text-sm font-medium text-gray-700">إضافة صورة:</label>
                  <input type="file" id="image-upload" @change="handleImageUpload" class="mt-1 p-2 border border-gray-300 rounded-md" />
                </div>



              </div>
            </div>

             <!-- زر الحفظ -->
             <div class="bg-white py-2 px-2  flex items-center   fixed bottom-0 w-full">
                <button
                  type="button"
                  class="w-full rounded-xl  bg-primary-900 text-white py-4 font-semibold  text-sm"
                >
               تاكيد
                </button>
              </div>

          </div>


        </div>



  </div>
</template>

<script setup>

import { ref ,watch } from 'vue';



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
})

const rating = ref(0);
let isDragging = false;
let containerLeft = 0;
let containerWidth = 0;
const starsContainer = ref(null);
const comment = ref('');





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



// لون المنتج المحدد
const selectedColor = ref('black');

// المقاس المحدد
const selectedSize = ref('s');



// التعامل مع رفع الصورة
const handleImageUpload = (event) => {
  const file = event.target.files[0];
  if (file) {
    // هنا يمكنك معالجة الصورة (مثل رفعها إلى الخادم)
    console.log("تم رفع الصورة:", file.name);
  }
};





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
const submitReview = () => {
  const reviewData = {
    rating: rating.value,
    comment: comment.value,
    color: selectedColor.value,
    size: selectedSize.value,
    image: "uploaded_image_url",  // استبداله بالرابط الفعلي للصورة
  };

  // إرسال البيانات إلى الـ API (على سبيل المثال باستخدام axios)
  console.log("إرسال التقييم:", reviewData);
};


// onMounted(() => {
//   // تهيئة القيم بعد تحميل المكون
//   const rect = starsContainer.value.getBoundingClientRect();
//   containerLeft = rect.left;
//   containerWidth = rect.width;
// });


// Emits
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
