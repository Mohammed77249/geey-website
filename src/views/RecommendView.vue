<template>
  <div>

    <div class="grid grid-cols-12 overflow-y-auto  h-screen  gap-5  mt-10 px-10">
      <div class="col-span-10">
        <div class="rtl">
          <div ref="dropDownStatus">
          <button
             class="text-[#979797]  w-[250px] h-[40px] border border-gray-900 bg-[#F5F6FA] font-medium rounded-lg text-[14px] px-5 py-2.5 text-center inline-flex items-center justify-between"
            type="button"
            @click="isDropdowenStatusVisable = true"
            @mouseenter="isDropdowenStatusVisable = true"
            @mouseleave="isDropdowenStatusVisable = false"
          >
          صنف ب {{ selectedStatus }}


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
             class="z-50 absolute bg-white divide-y divide-gray-100 rounded-lg shadow w-[250px]"
              v-if="isDropdowenStatusVisable"
          >
            <ul
              class="h-48 px-3 pb-3 overflow-y-auto text-sm text-gray-700"
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
