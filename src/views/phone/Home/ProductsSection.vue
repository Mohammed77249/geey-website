<template>
  <div
    class="flex items-center justify-center rounded-[10px] h-[70px] bg-white overflow-x-auto gap-2 shadow"
  >
    <div class="">
      <button
        @click="taggleActiveForYou"
        :class="[
          onclickForYou
          ? ' text-white bg-[#8a1538] py-1.5 px-3 rounded-full'
          : ' bg-gray-50 py-1.5 px-3 rounded-full text-[#252525]',
        ]"
      >
      من اجلك
      </button>
    </div>

    <div class="">
      <button
        @click="taggleActiveNewEnters"
        :class="[
          onclickNewEnters
            ? ' text-white bg-[#8a1538] py-1.5 px-3 rounded-full'
            : ' bg-gray-50 py-1.5 px-3 rounded-full text-[#252525]',
        ]"
      >
         مدخلات جديدة
      </button>
    </div>

    <div class="">
      <button
        @click="taggleActiveDiscounts"
        :class="[
          onclickDiscounts
            ? ' text-white bg-[#8a1538] py-1.5 px-3 rounded-full'
            : ' bg-gray-50 py-1.5 px-3 rounded-full text-[#252525]',
        ]"
      >
        خصومات
      </button>
    </div>

    <div class="">
      <button
        @click="taggleActiveMoreSells"
        :class="[
          onclickMoreSells
            ? ' text-white bg-[#8a1538] py-1.5 px-3 rounded-full'
            : ' bg-gray-50 py-1.5 px-3 rounded-full text-[#252525]',
        ]"
      >
        الاكثر مبيعا
      </button>
    </div>


  </div>

  <div class="mb-5">
    <div v-if="onclickNewEnters">
      <MoreProductsell />
    </div>

    <div v-if="onclickForYou">
      <MoreProductsell />
    </div>
  </div>
</template>

<script setup>
// import LowProductsell from '@/components/HomeComponent/LowProductsell.vue'
import MoreProductsell from '@/components/HomeComponent/MoreProductsell.vue'
import { ref } from 'vue'

const onclickForYou = ref(true)
const onclickNewEnters = ref(false)
const onclickDiscounts = ref(false)
const onclickMoreSells = ref(false)

const taggleActiveForYou = () => {
  onclickForYou.value = true
  onclickNewEnters.value = false
  onclickDiscounts.value = false
  onclickMoreSells.value = false
}

const taggleActiveNewEnters = () => {
  onclickForYou.value  = false
  onclickNewEnters.value  = true
  onclickDiscounts.value = false
  onclickMoreSells.value = false
};

const taggleActiveDiscounts = () => {
  onclickForYou.value  = false
  onclickNewEnters.value  = false
  onclickDiscounts.value = true
  onclickMoreSells.value = false
};

const taggleActiveMoreSells = () => {
  onclickForYou.value  = false
  onclickNewEnters.value  = false
  onclickDiscounts.value = false
  onclickMoreSells.value = true
};

</script>
