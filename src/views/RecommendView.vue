<template>
  <div>

    <div class="grid grid-cols-12  gap-5  mt-10 px-10">
      <div class="col-span-10">
        <div class="rtl mt-16">

          <div class="flex gap-5">
            <div ref="dropDownStatus">
            <button
              class="text-[#979797]  w-[220px] h-[40px] border border-gray-900 bg-white font-medium rounded-lg text-[12px] px-5 py-2.5 text-center inline-flex items-center justify-between"
              type="button"
              @click="isDropdowenStatusVisable = true"
              @mouseenter="isDropdowenStatusVisable = true"
              @mouseleave="isDropdowenStatusVisable = false"
            >
              صنف ب <p class="text-black">{{ selectedStatus }}</p>


              <svg
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                width="10px"
                height="10px"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
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
              class="z-50 absolute bg-white divide-y  divide-gray-100 transition-all duration-300 rounded-lg shadow w-[220px]"
                v-if="isDropdowenStatusVisable"
            >
              <ul
                class="h-48 px-3 pb-3 overflow-y-auto text-[12px] text-gray-700"
                aria-labelledby="dropdownSearchButton"
              >
              <li v-for="(status, index) in statuses"
                :key="index"
                @click="toggleStatusSelect(status)">
                <div class="flex items-center ps-2 rounded hover:bg-gray-100">
                    <span
                      for="checkbox-item-11"
                      class="w-full py-2 ms-2 text-sm font-medium text-gray-900 rounded"
                      >{{ status }}</span>
                  </div>
              </li>
              </ul>
            </div>
            </div>

            <div>
              <button type="button" class="bg-gray-50 h-[40px] w-[100px] hover:bg-gray-100 ">
                <div class="flex items-center justify-between pe-1">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="red" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.40476 15.5264L8.93476 20.0564C10.7948 21.9164 13.8148 21.9164 15.6848 20.0564L20.0748 15.6664C21.9348 13.8064 21.9348 10.7864 20.0748 8.91637L15.5348 4.39637C14.5848 3.44637 13.2748 2.93637 11.9348 3.00637L6.93476 3.24637C4.93476 3.33637 3.34476 4.92637 3.24476 6.91637L3.00476 11.9164C2.94476 13.2664 3.45476 14.5764 4.40476 15.5264Z" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path opacity="0.4" d="M9.73486 12.2263C11.1156 12.2263 12.2349 11.107 12.2349 9.72632C12.2349 8.34561 11.1156 7.22632 9.73486 7.22632C8.35415 7.22632 7.23486 8.34561 7.23486 9.72632C7.23486 11.107 8.35415 12.2263 9.73486 12.2263Z" stroke="#292D32" stroke-width="1.5" stroke-linecap="round"/>
                <path opacity="0.4" d="M13.2349 17.2263L17.2349 13.2263" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <p class="text-[13px]  font-semibold">بلاك فرايدي </p>

                </div>

              </button>
            </div>

            <div>
              <button type="button" class="bg-gray-50 hover:bg-gray-100  h-[40px] w-[80px] text-[13px] font-semibold text-[#BA68C8]"> ترندات</button>
            </div>
          </div>
        </div>


        <div>
          <RecomndProductComp/>
        </div>

      </div>

      <div class="col-span-2 rtl mb-5">
      <p class="text-gray-500">  الصفحة الرئيسية /  الجمال</p>
      <div class="overflow-y-auto  h-screen custom-scroll  pl-5">
      <p class="font-bold text-[13px]  mt-8 mb-5"> تصنيف</p>
      <div class="w-full h-[1px] mb-5 bg-gray-200"></div>
      <div class="space-y-10">

        <div>
          <div class="flex items-center justify-between">
        <p class="font-bold text-[12px]">الفئات</p>
        <button type="button"  @click="isDropdowenCategoryVisable = !isDropdowenCategoryVisable">

          <svg v-if="!isDropdowenVisable" width="15" height="15" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path  d="M6 12H18" stroke="#292D32" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M12 18V6" stroke="#292D32" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>

          <svg v-if="isDropdowenVisable" width="15" height="15" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M6 12H18" stroke="#292D32" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>
      </div>
      <CategoriesComp :statuses="categories" :isDropdowenVisable="isDropdowenCategoryVisable"/>
        </div>

        <div>
          <div class="flex items-center justify-between">
            <p class="font-bold text-[12px]">مقاس</p>
            <button type="button"  @click="isDropdowenSizeVisable = !isDropdowenSizeVisable">

              <svg v-if="!isDropdowenSizeVisable" width="15" height="15" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path  d="M6 12H18" stroke="#292D32" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M12 18V6" stroke="#292D32" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>

              <svg v-if="isDropdowenSizeVisable" width="15" height="15" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 12H18" stroke="#292D32" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </button>
          </div>

          <SiziesComp :sizes="sizes" :isDropdowenVisable="isDropdowenSizeVisable"/>



        </div>

        <div>
          <div class="flex items-center justify-between">
            <p class="font-bold text-[12px]">لون</p>
            <button type="button"  @click="isDropdowenColorVisable = !isDropdowenColorVisable">
            <svg v-if="!isDropdowenColorVisable" width="15" height="15" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path  d="M6 12H18" stroke="#292D32" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M12 18V6" stroke="#292D32" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <svg v-if="isDropdowenColorVisable" width="15" height="15" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 12H18" stroke="#292D32" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            </button>
          </div>
          <ColorsComp :isDropdowenVisable="isDropdowenColorVisable" :colors="colors"/>
        </div>

        <div>
          <div class="flex items-center justify-between">
            <p class="font-bold text-[12px]">الموارد</p>
            <button type="button"  @click="isDropdowenResourccesVisable = !isDropdowenResourccesVisable">
                <svg v-if="!isDropdowenResourccesVisable" width="15" height="15" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path  d="M6 12H18" stroke="#292D32" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M12 18V6" stroke="#292D32" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <svg v-if="isDropdowenResourccesVisable" width="15" height="15" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 12H18" stroke="#292D32" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                </button>
          </div>
          <ResourccesComp :isDropdowenVisable="isDropdowenResourccesVisable" :resorcces="resorcces"/>
          <div>

          </div>

        </div>

        <div>
          <div class="flex items-center justify-between">
                  <p class="font-bold text-[12px]">تصاميم</p>
                  <button type="button"  @click="isDropdowenDesignesVisable = !isDropdowenDesignesVisable">
                  <svg v-if="!isDropdowenDesignesVisable" width="15" height="15" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path  d="M6 12H18" stroke="#292D32" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M12 18V6" stroke="#292D32" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                  <svg v-if="isDropdowenDesignesVisable" width="15" height="15" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6 12H18" stroke="#292D32" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                  </button>
              </div>
              <DesignComp :designes="designes" :isDropdowenVisable="isDropdowenDesignesVisable"/>
        </div>


        <div>
          <div class="flex items-center justify-between">
                  <p class="font-bold text-[12px]">نوع</p>
                  <button type="button"  @click="isDropdowenTypesVisable = !isDropdowenTypesVisable">
                  <svg v-if="!isDropdowenTypesVisable" width="15" height="15" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path  d="M6 12H18" stroke="#292D32" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M12 18V6" stroke="#292D32" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                  <svg v-if="isDropdowenTypesVisable" width="15" height="15" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6 12H18" stroke="#292D32" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                  </button>
              </div>
              <TypeComp :types="types" :isDropdowenVisable="isDropdowenTypesVisable"/>
        </div>

        <div>
          <div class="flex items-center justify-between">
                  <p class="font-bold text-[12px]">الطول</p>
                  <button type="button"  @click="isDropdowenTallVisable = !isDropdowenTallVisable">
                  <svg v-if="!isDropdowenTallVisable" width="15" height="15" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path  d="M6 12H18" stroke="#292D32" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M12 18V6" stroke="#292D32" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                  <svg v-if="isDropdowenTallVisable" width="15" height="15" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6 12H18" stroke="#292D32" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                  </button>
              </div>
              <TallComp :talls="talls" :isDropdowenVisable="isDropdowenTallVisable"/>
        </div>


        <div>
          <div class="flex items-center justify-between">
                  <p class="font-bold text-[12px]">ميزة</p>
                  <button type="button"  @click="isDropdowenAdvantageVisable = !isDropdowenAdvantageVisable">
                  <svg v-if="!isDropdowenAdvantageVisable" width="15" height="15" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path  d="M6 12H18" stroke="#292D32" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M12 18V6" stroke="#292D32" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                  <svg v-if="isDropdowenAdvantageVisable" width="15" height="15" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6 12H18" stroke="#292D32" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                  </button>
              </div>
              <AdvantageComp :advantages="advantages" :isDropdowenVisable="isDropdowenAdvantageVisable"/>
        </div>

        <div>
          <PriceRangeComp/>
        </div>


      </div>
      </div>
      </div>


    </div>

</div>
</template>

<script setup>

import AdvantageComp from '@/components/RecommendViewCoponent/AdvantageComp.vue';
import CategoriesComp from '@/components/RecommendViewCoponent/CategoriesComp.vue';
import ColorsComp from '@/components/RecommendViewCoponent/ColorsComp.vue';
import DesignComp from '@/components/RecommendViewCoponent/DesignComp.vue';
import PriceRangeComp from '@/components/RecommendViewCoponent/PriceRangeComp.vue';
import RecomndProductComp from '@/components/RecommendViewCoponent/RecomndProductComp.vue';
import ResourccesComp from '@/components/RecommendViewCoponent/ResourccesComp.vue';
import SiziesComp from '@/components/RecommendViewCoponent/SiziesComp.vue';
import TallComp from '@/components/RecommendViewCoponent/TallComp.vue';
import TypeComp from '@/components/RecommendViewCoponent/TypeComp.vue';
import { ref } from 'vue';
import {  onMounted, onBeforeMount } from 'vue'

const isDropdowenCategoryVisable = ref(false);
const categories = ['الجمال', 'الجمال', 'الجمال', 'الجمال', 'الجمال', 'الجمال  '];

const isDropdowenSizeVisable = ref(false);
const sizes = ['مقاس ةاحد', 'S', 'M', 'L', 'XL', 'XXL'];

const isDropdowenColorVisable = ref(false);
const colors = ref([
      'bg-red-300',
      'bg-blue-300',
      'bg-green-300',
      'bg-yellow-300',
      'bg-purple-300',
      'bg-red-300',
      'bg-blue-300',
      'bg-green-300',
      'bg-yellow-300',
      'bg-purple-300',
      'bg-red-300',
      'bg-blue-300',
      'bg-green-300',
      'bg-yellow-300',
      'bg-purple-300'

    ]);

const isDropdowenResourccesVisable = ref(false);
const resorcces = ['الجمال', 'الجمال', 'الجمال', 'الجمال', 'الجمال', 'الجمال  ','الجمال', 'الجمال', 'الجمال', 'الجمال', 'الجمال', 'الجمال  '];

const isDropdowenDesignesVisable = ref(false);
const designes = ['تصميم الكرتون', 'اسلوب الرعوي'];

const isDropdowenTypesVisable = ref(false);
const types = ['الجمال', 'الجمال', 'الجمال', 'الجمال', 'الجمال', 'الجمال  ','الجمال', 'الجمال', 'الجمال', 'الجمال', 'الجمال', 'الجمال  '];

const isDropdowenTallVisable = ref(false);
const talls = [' منتظم', 'الفستان القصير '];

const isDropdowenAdvantageVisable = ref(false);
const advantages = [' سريع الجفاف', 'ضد الماء '];






const statuses = ['التوصية','اوسع منتشرة', 'الوصول الجديد', 'الاعلى تقييما', 'السعر من الاقل الى الاكثر', 'السعر من الاكثر الى الاقل'];
const dropDownStatus = ref(null)
const isDropdowenVisable= ref(false)


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


onMounted(() => {
  window.addEventListener('click', closeDropdowenStatus)
})

onBeforeMount(() => {
  window.removeEventListener('click', closeDropdowenStatus)

});


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
  background-color: rgba(0, 0, 0, 0.2);
  border-radius: 4px;
}
</style>
