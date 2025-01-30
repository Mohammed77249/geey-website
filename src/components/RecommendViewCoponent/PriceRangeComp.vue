<template>
  <div class="">
    <p class="font-bold text-[12px] mb-5"> {{ $t("Price range") }} (SAR)</p>
    <div class="relative w-full">
      <!-- <input
        type="range"
        v-model="minPrice"
        :min="min"
        :max="max"
        class="absolute w-full h-2 bg-gray-300 rounded-lg cursor-pointer appearance-none "
      /> -->

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

      <!-- <p class="text-[10px]">minPrice </p>
      <p class="text-[10px]"> maxPrice </p> -->
    </div>



<!-- <label for="default-range" class="block mb-2 text-sm font-medium ">Default range</label>
<input id="default-range" type="range" value="50" class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer "> -->

  </div>
</template>

<script setup>
import { ref,watch } from 'vue';

    const min = 0;
    const max = 1000;
    const minPrice = ref(100);
    const maxPrice = ref(500);
  const  emit = defineEmits(['update-selected']);


// إرسال البيانات إلى المكون الأب
watch(maxPrice, () => {
  emit('update-selected', maxPrice.value);
});

</script>
