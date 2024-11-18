<template>
  <div>
    <div class="w-full h-[270px] mb-5  border-b-2">
            <div>
              <div class=" items-center gap-2 ">
                <div class="flex items-center gap-2">
                  <h1 class=" font-medium text-sm">mh**m</h1>
                  <h1 class="text-[12px] text-gray-400">jul,2024 3</h1>
                </div>
                  <span class="flex text-yellow-500 mt-2">
                    <i> <img  src="/src/assets/images/star.svg"/></i>
                    <i> <img src="/src/assets/images/star.svg"/></i>
                    <i> <img  src="/src/assets/images/star.svg"/></i>
                    <i> <img  src="/src/assets/images/star.svg"/></i>
                    <i> <img  src="/src/assets/images/star.svg"/></i>
                  </span>
              </div>
            </div>

            <div class="mt-3 grid grid-cols-5  gap-2  ">
              <div v-for="(commentD, index) in commentList"
              :key="index" class="flex items-center gap-3">
                <h1 class="text-[11px] font-semibold text-gray-500">{{ commentD.title }} :</h1>
                 <p class="text-[10px] text-gray-400">{{ commentD.subtitle }}</p>
              </div>
            </div>

            <div class="mt-4 grid grid-cols-12  gap-2 ">
              <div class="col-span-8 h-28">
                  روعة فخم جدا جدا جدا من المعدوم وااااووووو الزينقزوق
              </div>
              <div class="col-span-4 ">
                <div class="flex items-center gap-2 justify-between ">
                  <div class="w-32  h-[112px] bg-blue-300">
                    <img class="h-full object-cover" src="/src/assets/images/products/Image (1).svg" />
                  </div>

                  <div class="w-32 h-[112px] bg-blue-300">
                    <img class="h-full object-cover" src="/src/assets/images/products/Image (1).svg" />
                  </div>

                </div>
              </div>
            </div>

            <div class="w-full h-9 flex items-center justify-end mt-1 gap-3">
              <div class="flex items-center gap-2">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path  d="M7.48001 18.35L10.58 20.75C10.98 21.15 11.88 21.35 12.48 21.35H16.28C17.48 21.35 18.78 20.45 19.08 19.25L21.48 11.95C21.98 10.55 21.08 9.35003 19.58 9.35003H15.58C14.98 9.35003 14.48 8.85003 14.58 8.15003L15.08 4.95003C15.28 4.05003 14.68 3.05003 13.78 2.75003C12.98 2.45003 11.98 2.85003 11.58 3.45003L7.48001 9.55003" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10"/>
                <path d="M2.38 18.35V8.55002C2.38 7.15002 2.98 6.65002 4.38 6.65002H5.38C6.78 6.65002 7.38 7.15002 7.38 8.55002V18.35C7.38 19.75 6.78 20.25 5.38 20.25H4.38C2.98 20.25 2.38 19.75 2.38 18.35Z" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>

                <h1 class=text-gray-500>مفيد (3)</h1>
              </div>

              <div>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 10C3.9 10 3 10.9 3 12C3 13.1 3.9 14 5 14C6.1 14 7 13.1 7 12C7 10.9 6.1 10 5 10Z" stroke="black" stroke-width="1.5"/>
                <path d="M19 10C17.9 10 17 10.9 17 12C17 13.1 17.9 14 19 14C20.1 14 21 13.1 21 12C21 10.9 20.1 10 19 10Z" stroke="black" stroke-width="1.5"/>
                <path d="M12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10Z" stroke="black" stroke-width="1.5"/>
                </svg>
              </div>
            </div>

          </div>
  </div>
</template>

<script setup>

import { defineProps} from 'vue'

defineProps({
  commentList: {
    type: [],
  },

});


</script>
