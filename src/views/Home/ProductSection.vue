<template>
  <div
    class="flex items-center justify-center rounded-[10px] h-[70px] bg-white"
  >
    <div class="flex items-center">
      <button
        @click="taggleActiveLowProduct"
        :class="[
          onclickLowProduct
            ? 'text-primary-900'
            : 'font-medium text[24px] text-[#565656]',
        ]"
      >
        التخفيضات
        <div
          :class="[
            onclickLowProduct ? 'bg-primary-900' : 'bg-black hidden',
            ' h-1 w-20 mt-2',
          ]"
        ></div>
      </button>
    </div>

    <div class="flex items-center px-10">
      <button
        @click="taggleActiveMoreSellsProduct"
        :class="[
          onclickMoreSellsProduct
            ? ' text-primary-900'
            : 'font-medium text[24px] text-[#565656]',
        ]"
      >
        الاكثر مبيعا
        <div
          :class="[
            onclickMoreSellsProduct ? 'bg-primary-900' : 'bg-black hidden',
            ' h-1 w-20 mt-2',
          ]"
        ></div>
      </button>
    </div>
  </div>

  <div class="mb-5">
    <div v-if="onclickMoreSellsProduct">
      <MoreProductsell />
    </div>

    <div v-if="onclickLowProduct">
      <LowProductsell />
    </div>
  </div>
</template>

<script setup>
import LowProductsell from '@/components/HomeComponent/LowProductsell.vue'
import MoreProductsell from '@/components/HomeComponent/MoreProductsell.vue'
import { ref } from 'vue'

const onclickLowProduct = ref(false)
const onclickMoreSellsProduct = ref(true)

const taggleActiveLowProduct = () => {
  onclickMoreSellsProduct.value = onclickMoreSellsProduct.value = false
  onclickLowProduct.value = onclickLowProduct.value = true
}

const taggleActiveMoreSellsProduct = () => {
  onclickLowProduct.value = onclickLowProduct.value = false
  onclickMoreSellsProduct.value = onclickMoreSellsProduct.value = true
}
</script>
