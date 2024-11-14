<!-- <template>
  <div class="">
    <p class="font-bold text-[12px] mb-5">نطاق السعر (SAR)</p>



    <div class="relative w-full">
      <input
        type="range"
        v-model="minPrice"
        :min="min"
        :max="max"
        class="absolute w-full h-2 bg-gray-300 rounded-lg cursor-pointer appearance-none "
      />

      <input
        type="range"
        v-model="maxPrice"
        :min="min"
        :max="max"
        class="absolute w-full h-2 bg-gray-300 rounded-lg cursor-pointer appearance-none z-10"
      />


      <div
        class="absolute h-2 bg-white rounded-lg"
        :style="{ left: `${(minPrice - min) / (max - min) * 100}%`, right: `${100 - (maxPrice - min) / (max - min) * 100}%` }"
      ></div>
    </div>

    <div class="flex items-center justify-between mt-8">
      <p class="text-[10px]">SR {{ minPrice }} </p>
      <p class="text-[10px]"> SR {{ maxPrice }} </p>
    </div>



<label for="default-range" class="block mb-2 text-sm font-medium ">Default range</label>
<input id="default-range" type="range" value="50" class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer ">

  </div>
</template>

<script setup>
import { ref } from 'vue';

    const min = 0;
    const max = 1000;
    const minPrice = ref(100);
    const maxPrice = ref(800);

</script> -->

<template>
  <div class="">
    <p class="font-bold text-[12px] mb-5">نطاق السعر (SAR)</p>




    <!-- شريط تمرير مزدوج -->
    <div class="relative w-full h-1 bg-gray-300 rounded-lg">
      <input
        type="range"
        class="absolute appearance-none w-full h-1 outline-none bg-transparent pointer-events-none"
        min="0"
        max="1000"
        step="1"
        v-model="minPrice"
        @input="updateRange"
        :style="{ zIndex: minPrice > maxPrice - 50 ? 2 : 1 }"
      />
      <input
        type="range"
        class="absolute appearance-none w-full h-1 outline-none bg-transparent pointer-events-none"
        min="0"
        max="1000"
        step="1"
        v-model="maxPrice"
        @input="updateRange"
      />

      <!-- الشريط الذي يعبر عن النطاق المحدد -->
      <div
        class="absolute h-1 bg-blue-500 rounded-lg"
        :style="{ left: `${(minPrice / 500) * 100}%`, right: `${100 - (maxPrice / 500) * 100}%` }"
      ></div>
    </div>

     <!-- عرض القيم المختارة لنطاق السعر -->
     <div class="flex justify-between mt-2">

      <p class="text-[10px]">SR {{ minPrice }} </p>
      <p class="text-[10px]"> SR {{ maxPrice }} </p>

    </div>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {

    const minPrice = ref(50);
    const maxPrice = ref(400);

    const updateRange = () => {
      if (minPrice.value > maxPrice.value) {
        minPrice.value = maxPrice.value - 1;
      }
    };

    return {
      minPrice,
      maxPrice,
      updateRange
    };
  }
};
</script>

<style scoped>
/* تنسيقات Tailwind إضافية لشريط التمرير */
input[type='range']::-webkit-slider-thumb {
  appearance: none;
  width: 16px;
  height: 16px;
  background-color: #3b82f6; /* لون أزرق */
  border-radius: 50%;
  cursor: pointer;
  pointer-events: auto;
}

input[type='range']::-moz-range-thumb {
  width: 16px;
  height: 16px;
  background-color: #3b82f6;
  border-radius: 50%;
  cursor: pointer;
  pointer-events: auto;
}
</style>

