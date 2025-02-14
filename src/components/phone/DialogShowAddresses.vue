<template>
  <div
    v-if="props.isOpen"
    class="fixed bottom-0 mb-16 w-full border-t-2 z-50"
  >
    <!-- Dialog Container -->
    <div
      class="bg-white w-full overflow-y-auto custom-scroll max-h-[500px] h-full"
    >

      <!-- Dialog Content -->
      <div>
        <div v-if="props.loading || storeAddress.loading">
          <LoaderDatacomp :isLoader="props.loading || storeAddress.loading" />
        </div>
        <div v-else-if="props.error || storeAddress.loading">
          {{ props.error }}
        </div>
        <div v-else-if="props.titles">
          <div class="grid grid-cols-1 sm:grid-cols-12 gap-3 mb-5 ">
            <div class="col-span-6 bg-white">
              <div class="py-2 p-5  border mt-2 bg-white m-2 flex items-center justify-between">
                <h1 class="text-primary-900 font-bold text-sm"> {{ $t("All your addresses") }}</h1>
                <button
                  @click="close"
                  class="text-primary-900  text-[20px] hover:text-black"
                >
                  &times;
                </button>
              </div>
              <div class="p-2   sm:max-h-72 md:max-h-[500px] overflow-y-auto">
                <div class="rounded-xl shadow bg-gray-50 mb-3 py-2 " v-for="address in titles" :key="address.id">
                  <div class="grid grid-cols-12 p-2">
                    <div class="col-span-2 w-10 flex items-center justify-center  rounded-full h-10 bg-gray-200">
                      <div class="">
                        <svg
                          width="30"
                          height="30"
                          viewBox="0 0 36 36"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect width="36" height="36" rx="18" fill="#8A1538" />
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M10.9167 16.598C10.9167 12.7647 14.12 9.6665 17.9946 9.6665C21.8802 9.6665 25.0834 12.7647 25.0834 16.598C25.0834 18.5296 24.3809 20.3229 23.2247 21.8428C21.9491 23.5194 20.3769 24.9802 18.6072 26.1269C18.2022 26.3919 17.8366 26.4119 17.3921 26.1269C15.6124 24.9802 14.0402 23.5194 12.7755 21.8428C11.6184 20.3229 10.9167 18.5296 10.9167 16.598ZM15.6619 16.8138C15.6619 18.0979 16.7098 19.1079 17.9946 19.1079C19.2803 19.1079 20.3382 18.0979 20.3382 16.8138C20.3382 15.5397 19.2803 14.4805 17.9946 14.4805C16.7098 14.4805 15.6619 15.5397 15.6619 16.8138Z"
                            fill="white"
                          />
                        </svg>
                      </div>
                    </div>
                    <div
                      class="col-span-4 cursor-pointer"
                      @click="chooseAdress(address)"
                    >
                      <p class="text-sm font-semibold text-black">
                        {{ address.address }}
                      </p>
                      <span class="text-xs font-normal text-black">{{
                        address.city.name
                      }}</span>
                      -
                      <span class="text-xs font-normal text-black">{{
                        address.district.name
                      }}</span>
                    </div>
                    <div class="col-span-6">
                      <div class="flex items-center justify-end mt-[10px]">
                        <input
                          id="default-radio-3"
                          type="radio"
                           @click="chooseAdress(address)"
                          value="option3"
                          name="default-radio"
                          class="w-3 h-3 text-primary-900 bg-gray-100 focus:ring-primary-900"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

             <!-- زر الحفظ -->
             <RouterLink to="/phone/addaddressCom">
             <div class="bg-white py-2 px-2  flex items-center   fixed bottom-0 w-full">
                <button
                  type="button"
                  class="w-full rounded-xl  bg-primary-900 text-white py-4 font-semibold  text-sm"
                >
                {{ $t("Add a new address") }}
                </button>
              </div>
            </RouterLink>

          </div>


        </div>
        <div v-else>
          <span>no data</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {   defineAsyncComponent } from 'vue'
const LoaderDatacomp = defineAsyncComponent(() => import('@/components/LoaderDatacomp.vue'));

import { useAddressStore } from '@/stores/address'
const storeAddress = useAddressStore()

// Props
const props = defineProps({
  isOpen: {
    type: Boolean,
    required: true,
  },
  titles: {
    type: Array,
    default: () => []
  },
  loading: {
    type: Boolean,
  },
  error: {
    type: String,
  },
})



const chooseAdress = address => {
  localStorage.setItem('adressInfoId', address.id)
  localStorage.setItem('adressInfoName', address.address)
  close()
}

// Emits
const emit = defineEmits(['close'])

// Close the dialog
const close = () => {
  emit('close')
};


</script>

<style>
.custom-scroll::-webkit-scrollbar {
  width: 0px;
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
  background-color: rgba(0, 0, 0, 0.4);
  border-radius: 4px;
}
</style>
