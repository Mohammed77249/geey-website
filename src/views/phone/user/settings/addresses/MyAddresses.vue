<template>
  <div  class="bg-gray-100 h-screen">
      <!-- header -->
      <div class="fixed inset-0  bg-white p-2 shadow h-12">
        <div class="grid grid-cols-12 mt-2 items-center justify-between">
          <!-- back button -->
            <div class="col-span-3">
              <RouterLink to="/phone/user/setting">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.90991 19.92L15.4299 13.4C16.1999 12.63 16.1999 11.37 15.4299 10.6L8.90991 4.07996" stroke="#8a1538" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </RouterLink>
            </div>
            <div class=" col-span-6 text-sm font-bold text-center">
              العناوين
            </div>
        </div>
      </div>

      <!-- Dialog Content -->
      <div class="mt-12  pb-4">
        <div class="" v-if=" storeAddress.loading">
          <LoaderDatacomp :isLoader="storeAddress.loading" />
        </div>
        <div v-else-if="storeAddress.error">
          {{ storeAddress.error }}
        </div>
        <div v-else-if="storeAddress.getAllAddresses">
          <div class="grid grid-cols-1 sm:grid-cols-12 gap-3 mb-5 ">
            <div class="col-span-6 bg-gray-100">

              <div class="p-2 m-2 sm:max-h-72 md:max-h-[500px] overflow-y-auto">
                <div class="rounded-xl shadow mb-3 py-2 bg-white" v-for="address in storeAddress.getAllAddresses" :key="address.id">
                  <RouterLink :to="`/phone/user/myaddress/editaddress/${address.id}`">
                  <div class="grid grid-cols-12 p-2 " >
                    <div class="col-span-2 w-12 rounded-full flex items-center justify-center   h-12 bg-gray-200">
                      <div class=" ">
                        <svg
                          width="36"
                          height="36"
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
                    >
                      <p class="text-sm font-semibold text-black">
                        {{ address.address }}
                      </p>
                      <span class="text-xs font-normal text-black">{{address.city_name}}</span>
                      -
                      <span class="text-xs font-normal text-black">{{
                        address.district_name
                      }}</span>
                    </div>
                    <div class="col-span-6">
                      <div class="flex items-center justify-end mt-[10px]">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15.0001 19.92L8.48009 13.4C7.71009 12.63 7.71009 11.37 8.48009 10.6L15.0001 4.07996" stroke="#8a1538" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                      </div>
                    </div>
                  </div>
                </RouterLink>
                </div>
              </div>
            </div>

             <!-- زر الحفظ -->
             <RouterLink to="/phone/user/setting/addaddress">
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

</template>

<script setup>
import {   defineAsyncComponent ,onMounted } from 'vue'
const LoaderDatacomp = defineAsyncComponent(() => import('@/components/LoaderDatacomp.vue'));
import { useAddressStore } from '@/stores/address'
const storeAddress = useAddressStore()

onMounted( async() => {
 await storeAddress.fetchAllAddresses()
});

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
