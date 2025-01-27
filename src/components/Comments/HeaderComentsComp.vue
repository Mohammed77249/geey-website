<template>
  <div>
    <div class="w-full h-52 ">
            <div class="w-full bg-gray-50 h-40">
              <div>
                <div class="flex items-center gap-5 p-5">
                  <h1 class=" font-bold text-3xl">4.99</h1>
                  <span class="flex text-yellow-500">
                    <i> <img class="w-6" src="/src/assets/images/star.svg"/></i>
                    <i> <img class="w-6" src="/src/assets/images/star.svg"/></i>
                    <i> <img class="w-6" src="/src/assets/images/star.svg"/></i>
                    <i> <img class="w-6" src="/src/assets/images/star.svg"/></i>
                    <i> <img class="w-6" src="/src/assets/images/star.svg"/></i>
                  </span>
                </div>
              </div>
              <div class="p-5">
                <h1 class="text-sm font-medium"> {{ $t('General size') }} </h1>
                <div class="flex items-center gap-5">
                  <div>
                    <p class="text-[12px]">{{ $t('Small') }}</p>
                    <div class="flex items-center gap-2">
                      <div class="w-28 h-[5px] bg-gray-300">
                        <div class="w-10 h-[5px] bg-black"></div>
                      </div>
                      <p class="text-[10px]">35%</p>
                    </div>
                  </div>

                  <div>
                    <p class="text-[12px]">{{ $t('Appropriate') }}</p>
                    <div class="flex items-center gap-2">
                      <div class="w-28 h-[5px] bg-gray-300">
                        <div class="w-1 h-[5px] bg-black"></div>
                      </div>
                      <p class="text-[10px]">3%</p>
                    </div>
                  </div>

                  <div>
                    <p class="text-[12px]">{{ $t('Big') }}</p>
                    <div class="flex items-center gap-2">
                      <div class="w-28 h-[5px] bg-gray-300">
                        <div class="w-24 h-[5px] bg-black"></div>
                      </div>
                      <p class="text-[10px]">93%</p>
                    </div>
                  </div>

                </div>
              </div>
            </div>

            <div v-if="isMain" class="w-full border border-gray-300 bg-white h-11 ">
              <div class="flex items-center justify-between">
                <div class="flex items-center gap-2 p-2">
                  <h1 class="text-md"> {{ $t('View local reviews') }} </h1>
                  <h1 class=" font-medium text-sm">4.99</h1>
                  <span class="flex text-yellow-500">
                    <i> <img  src="/src/assets/images/star.svg"/></i>
                    <i> <img src="/src/assets/images/star.svg"/></i>
                    <i> <img  src="/src/assets/images/star.svg"/></i>
                    <i> <img  src="/src/assets/images/star.svg"/></i>
                    <i> <img  src="/src/assets/images/star.svg"/></i>
                  </span>
                </div>
                <RouterLink :to="`/desktop/product/${productId}/comments`">
              <div class="flex items-center">
                <h1 class="text-gray-500 font-medium">{{ $t('Full opinions') }}</h1>
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

            <div v-if="isSwich" class="w-full border border-gray-300 bg-white h-11 ">
              <div class="flex items-center justify-between">
                <div class="flex items-center gap-2 p-2">
                  <h1 class="text-md" >{{ $t('View local reviews') }} </h1>
                  <h1 class=" font-medium text-sm">4.99</h1>
                  <span class="flex text-yellow-500">
                    <i> <img  src="/src/assets/images/star.svg"/></i>
                    <i> <img src="/src/assets/images/star.svg"/></i>
                    <i> <img  src="/src/assets/images/star.svg"/></i>
                    <i> <img  src="/src/assets/images/star.svg"/></i>
                    <i> <img  src="/src/assets/images/star.svg"/></i>
                  </span>

                    <div class="relative inline-block w-11 h-5">
                      <input checked id="switch-component" type="checkbox" class="peer appearance-none w-11 h-5 bg-slate-100 rounded-full checked:bg-slate-800 cursor-pointer transition-colors duration-300" />
                      <label for="switch-component" class="absolute top-0 left-0 w-5 h-5 bg-white rounded-full border border-slate-300 shadow-sm transition-transform duration-300 peer-checked:translate-x-6 peer-checked:border-slate-800 cursor-pointer">
                      </label>
                    </div>
                </div>
              </div>
            </div>

    </div>
  </div>
</template>

<script setup>
import { defineProps} from 'vue'

import { useRoute } from 'vue-router';
const route = useRoute();
const productId = route.params.id;
const storedLanguage = localStorage.getItem("language");

defineProps({
  isMain: {
    type: Boolean,
    default: false,
  },

  isSwich: {
    type: Boolean,
    default: false,
  },

});





</script>
