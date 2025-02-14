<template>
<div class=" bg-white border max-w-md p-2 wshadow h-[70px] flex items-center">


  <div
    class="flex items-center  overflow-x-auto custom-scroll    gap-4 "
  >
    <div class="">
      <button
        @click="taggleActiveForYou"
        :class="[
          onclickForYou
          ? ' text-white text-sm bg-[#8a1538] py-1.5 px-3 rounded-full'
          : ' bg-gray-50 text-sm py-1.5  rounded-full text-[#252525]',
        ]"
      >
      <p>
        من_اجلك
      </p>

      </button>
    </div>

    <div class="">
      <button
        @click="taggleActiveNewEnters"
        :class="[
          onclickNewEnters
            ? ' text-white text-sm  bg-[#8a1538] py-1.5 px-3 rounded-full'
            : ' bg-gray-50 py-1.5 px-3 text-sm rounded-full text-[#252525]',
        ]"
      >
      <p>
        مدخلات_جديدة
      </p>

      </button>
    </div>

    <div class="">
      <button
        @click="taggleActiveDiscounts"
        :class="[
          onclickDiscounts
            ? ' text-white bg-[#8a1538] text-sm py-1.5 px-3 rounded-full'
            : ' bg-gray-50 py-1.5 px-3 text-sm rounded-full text-[#252525]',
        ]"
      >
      <p>
        خصومات
      </p>

      </button>
    </div>

    <div class="">
      <button
        @click="taggleActiveMoreSells"
        :class="[
          onclickMoreSells
            ? ' text-white bg-[#8a1538] text-sm py-1.5 px-3 rounded-full'
            : ' bg-gray-50 py-1.5 text-sm px-3 rounded-full text-[#252525]',
        ]"
      >
        الاكثر_مبيعا
      </button>
    </div>


  </div>
</div>
  <div class="mb-5">
    <div v-if="onclickForYou">
      <ProductComp NumberFilter="1" />
    </div>

    <div v-if="onclickNewEnters">
      <ProductComp NumberFilter="2" />
    </div>

    <div v-if="onclickDiscounts">
      <ProductComp NumberFilter="3" />
    </div>

    <div v-if="onclickMoreSells">
      <ProductComp NumberFilter="4" />
    </div>
  </div>
</template>

<script setup>
import ProductComp from '@/components/phone/ProductComp.vue'
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


<style scoped>


.custom-scroll::-webkit-scrollbar {
  width: 0px;
  height: 0px;
  opacity: 0;
}
.custom-scroll:hover::-webkit-scrollbar,
.custom-scroll:active::-webkit-scrollbar {
  opacity: 0;
}

.custom-scroll::-webkit-scrollbar-track {
  background: transparent;
}
.custom-scroll::-webkit-scrollbar-thumb {
  background-color: rgba(0, 0, 0, 0.4);
  border-radius: 4px;
}
</style>
