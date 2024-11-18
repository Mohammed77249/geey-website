<template>
  <div class="container mx-auto px-28  rtl">
    <div>

      <div class=" py-4 border-b">
        <div class="container mx-auto px-4">
          <h1 class="text-gray-400 font-normal">الصفحة الرئيسية  </h1>
        </div>
      </div>

      <HeaderCommentsComp :isSwich="true"/>

      <div class="w-full h-20    mb-5">
        <div class="flex items-center justify-between gap-5">

          <div class="flex items-center gap-5 justify-center mt-5  px-5">

            <div class="flex items-center ">
              <button
                @click="taggleActiveAllcomments"
                :class="[
                  onclickAllComments
                    ? ' font-medium text[24px] text-black '
                    : 'font-medium text[24px] text-[#565656] mb-3',
                ]"
              >
                 جميع التقييمات
                <div
                  :class="[
                    onclickAllComments ? 'bg-primary-900' : 'bg-black hidden',
                    ' h-1 w-24 mt-2',
                  ]"
                ></div>
              </button>
            </div>

            <div class="flex items-center">
                <button
                  @click="taggleActiveImagesComment"
                  :class="[
                    onclickCommentsImages
                      ? ' font-medium text[24px] text-black '
                      : 'font-medium text[24px] text-[#565656] mb-3',
                  ]"
                >
                  الصور
                  <div
                    :class="[
                      onclickCommentsImages ? 'bg-primary-900' : 'bg-black hidden',
                      ' h-1 w-9 mt-2',
                    ]"
                  ></div>
                </button>
            </div>

          </div>

          <div class="flex items-center gap-2">

            <div ref="dropDownRating" class=" flex items-center mt-5 gap-1">
              <p class="text-sm text-gray-600  font-medium">التصنيف</p>
            <button
              class="text-[#979797]  w-full h-[35px] border border-gray-900 bg-white font-medium  text-[12px] px-3 py-2.5 text-center inline-flex items-center gap-2 justify-between"
              type="button"
              @click="isDropdowenRatingVisable = true"
              @mouseenter="isDropdowenRatingVisable = true"
              @mouseleave="isDropdowenRatingVisable = false"
            >
               <p class="text-black  text-[15px] font-bold">{{ selectedRating }}</p>
              <svg
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                width="10px"
                height="10px"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="black"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 1 4 4 4-4"
                />
              </svg>
            </button>

            <!-- Dropdown menu -->
            <div
              @mouseenter="isDropdowenRatingVisable = true"
              @mouseleave="isDropdowenRatingVisable = false"
              class="absolute  mt-52  mr-14 w-[120px]  bg-white divide-y  divide-gray-100 transition-all duration-300  shadow "
                v-if="isDropdowenRatingVisable"
            >
              <ul
                class="px-3 overflow-y-auto text-[12px] text-gray-700"

              >
              <li v-for="(rating, index) in ratings"
                :key="index"
                @click="toggleRatingSelect(rating)">
                <div class="flex items-center ps-2 cursor-pointer rounded hover:bg-gray-100 ">
                    <span
                      class=" py-2 ms-2 text-sm font-medium text-gray-900 rounded"
                      >{{ rating }}</span>
                  </div>
              </li>
              </ul>
            </div>

            </div>


            <div ref="dropDownSize" class=" flex items-center mt-5 gap-1">
              <p class="text-sm text-gray-600  font-medium">فرز_حسب_المقاس</p>
            <button
              class="text-[#979797]  w-full h-[35px] border border-gray-900 bg-white font-medium  text-[12px] px-3 py-2.5 text-center inline-flex items-center gap-2 justify-between"
              type="button"
              @click="isDropdowenSizeVisable = true"
              @mouseenter="isDropdowenSizeVisable = true"
              @mouseleave="isDropdowenSizeVisable = false"
            >
               <p class="text-black text-[15px] font-bold">{{ selectedSize }}</p>
              <svg
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                width="10px"
                height="10px"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="black"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 1 4 4 4-4"
                />
              </svg>
            </button>

            <!-- Dropdown menu -->
            <div
              @mouseenter="isDropdowenSizeVisable = true"
              @mouseleave="isDropdowenSizeVisable = false"
              class="absolute  mt-28 mr-20  w-[200px]  bg-white divide-y  divide-gray-100 transition-all duration-300  shadow "
                v-if="isDropdowenSizeVisable"
            >
              <ul
                class="px-3 overflow-y-auto text-[12px] text-gray-700"

              >
              <!-- <li v-for="(size, index) in sizes"
                :key="index"
                @click="toggleSizeSelect(size)">
                <div class="flex items-center ps-2 rounded hover:bg-gray-100 w-10">
                    <span
                      class=" cursor-pointer py-2 ms-2 text-sm font-medium text-gray-900 rounded"
                      >{{ size }}</span>
                  </div>
              </li> -->

              <li>
                <div
                  class="grid grid-cols-3 gap-2"
                >
                  <div
                   @click="toggleSizeSelect(size)"
                  v-for="(size, index) in sizes"
                    :key="index"
                    class="rounded-full flex  items-center"
                  >

                  <span
                      class=" cursor-pointer py-2 ms-2 text-sm font-medium text-gray-900 rounded"
                      >{{ size }}</span>
                  </div>
                </div>
              </li>
              </ul>
            </div>

            </div>

            <div ref="dropDownStatus" class=" flex items-center mt-5 gap-1">
              <p class="text-sm text-gray-600  font-medium">ترتيب_حسب </p>
            <button
              class="text-[#979797]  w-full h-[35px] border border-gray-900 bg-white font-medium  text-[12px] px-3 py-2.5 text-center inline-flex items-center gap-2 justify-between"
              type="button"
              @click="isDropdowenStatusVisable = true"
              @mouseenter="isDropdowenStatusVisable = true"
              @mouseleave="isDropdowenStatusVisable = false"
            >
               <p class="text-black text-[15px] font-bold">{{ selectedStatus }}</p>
              <svg
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                width="10px"
                height="10px"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="black"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 1 4 4 4-4"
                />
              </svg>
            </button>

            <!-- Dropdown menu -->
            <div
              @mouseenter="isDropdowenStatusVisable = true"
              @mouseleave="isDropdowenStatusVisable = false"
              class="absolute mt-16 mr-20 bg-white divide-y  divide-gray-100 transition-all duration-300   shadow "
                v-if="isDropdowenStatusVisable"
            >
              <ul
                class="px-3 flex   overflow-y-auto text-[12px] text-gray-700"
              >
              <li v-for="(status, index) in statuses"
                :key="index"
                @click="toggleStatusSelect(status)">
                <div class="flex items-center ps-2  cursor-pointer rounded hover:bg-gray-100">
                    <span
                      for="checkbox-item-11"
                      class="w-full py-2 ms-2 text-sm font-medium text-gray-900 rounded"
                      >{{ status }}</span>
                  </div>
              </li>
              </ul>
            </div>

            </div>

          </div>

        </div>
      </div>

      <!-- comments -->
      <div>
        <CommentComp :commentList="listContentComment"  />
        <CommentComp :commentList="listContentComment"  />
        <CommentComp :commentList="listContentComment"  />
        <CommentComp :commentList="listContentComment"  />
        <CommentComp :commentList="listContentComment"  />
        <CommentComp :commentList="listContentComment"  />
        <CommentComp :commentList="listContentComment"  />
        <CommentComp :commentList="listContentComment"  />

      </div>


    </div>
  </div>
</template>

<script setup>
import CommentComp from '../components/Comments/CommentComp.vue';
import HeaderCommentsComp from '../components/Comments/HeaderComentsComp.vue';
import { ref ,onMounted ,onBeforeMount} from "vue";
const listContentComment = ref([
  {
    title:"حجم التمثال",
    subtitle: "us 30/EUR 65",
  },
  {
    title:"خصر ",
    subtitle: "cm/23 in 59",
  },
  {
    title:"طول",
    subtitle: "cm/62 in 165",
  },
  {
    title:"الوزن",
    subtitle: "kg/130 lbs 70",
  },
  {
    title:"الوركين",
    subtitle: "cm/30 in 80",
  },
  {
    title:"المقاس العام",
    subtitle: "مناسب",
  },
  {
    title:"لون",
    subtitle: "زمغدجي",
  },
  {
    title:"مقاس",
    subtitle: "XL",
  },

]);

const onclickAllComments = ref(true)
const onclickCommentsImages = ref(false)

const taggleActiveAllcomments = () => {
  onclickAllComments.value = onclickAllComments.value = true
  onclickCommentsImages.value = onclickCommentsImages.value = false

}

const taggleActiveImagesComment = () => {
  onclickCommentsImages.value = onclickCommentsImages.value = true
  onclickAllComments.value = onclickAllComments.value = false

};


const statuses = ['الاحدث الى الاقدم'];
const dropDownStatus = ref(null)
const selectedStatus = ref('التوصية')
const isDropdowenStatusVisable = ref(false)
const toggleStatusSelect = (status) => {
  selectedStatus.value = status
  isDropdowenStatusVisable.value = false
}
const closeDropdowenStatus = (element) => {
  if (!dropDownStatus.value.contains(element.target)) {
    isDropdowenStatusVisable.value = false
  }
}

const sizes = [ 'S', 'M', 'L', 'XL', 'XXL'];
const dropDownSize = ref(null)
const selectedSize = ref('الجميع')
const isDropdowenSizeVisable = ref(false)
const toggleSizeSelect = (size) => {
  selectedSize.value = size
  isDropdowenSizeVisable.value = false
}
const closeDropdowenSize = (element) => {
  if (!dropDownSize.value.contains(element.target)) {
    isDropdowenSizeVisable.value = false
  }
}

const ratings = [ '5_نجوم ', '4_نجوم', '3_نجوم', '2_نجوم', '1_نجوم'];
const dropDownRating = ref(null)
const selectedRating = ref('الجميع')
const isDropdowenRatingVisable = ref(false)
const toggleRatingSelect = (rating) => {
  selectedRating.value = rating
  isDropdowenRatingVisable.value = false
}
const closeDropdowenRating = (element) => {
  if (!dropDownRating.value.contains(element.target)) {
    isDropdowenRatingVisable.value = false
  }
}






onMounted(() => {
  window.addEventListener('click', closeDropdowenStatus)
  window.addEventListener('click', closeDropdowenSize)
  window.addEventListener('click', closeDropdowenRating)
})
onBeforeMount(() => {
  window.removeEventListener('click', closeDropdowenStatus)
  window.removeEventListener('click', closeDropdowenSize)
  window.removeEventListener('click', closeDropdowenRating)

});

</script>
