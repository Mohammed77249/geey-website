<template>
 <div class="min-h-screen bg-gray-100">
    <header class="bg-white shadow p-4">
      <h1 class="text-xl font-bold text-center text-gray-800">{{ $t("Address book") }}</h1>
    </header>

    <main class="">
      <div class="space-y-4">

        <div v-if="storeAddress.loading">
          <LoaderDatacomp :isLoader="storeAddress.loading" />
        </div>
        <div v-else-if="storeAddress.error">
          {{ storeAddress.error }}
        </div>
    <!-- اضافه العناوين -->
    <div v-else-if="storeAddress.getAllAddresses.length > 0">
      <div class=" p-4">
        <button type="button"   @click="openDialog()" class="bg-primary-900 w-48 h-10 flex items-center justify-center gap-2">
          <span class="text-white">+</span>
          <span class="text-white text-md font-semibold">{{ $t("Add a new address") }}</span>
        </button>
      </div>

      <!-- قائمة العناوين -->
      <div class="bg-white p-4" >
        <h2 class="text-lg font-semibold text-primary-900"> {{ $t("Address list") }}</h2>

        <div>
          <div class="">
              <div class="p-2 bg-white">
                <div class="border mb-2 shadow" v-for="(address,index) in storeAddress.getAllAddresses" :key="index">
                  <div class="grid grid-cols-12 p-2">
                    <div class="col-span-1 w-12 rounded-full h-12 bg-gray-200">
                      <div class="flex items-center justify-center mt-[6px]">
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
                      class="col-span-5 cursor-pointer"
                    >
                      <p class="text-md font-semibold text-black">
                        {{ address.address }}
                      </p>
                      <span class="text-sm font-normal text-black">{{
                        address.city_name
                      }}</span>
                      -
                      <span class="text-sm font-normal text-black">{{
                        address.district_name
                      }}</span>
                    </div>
                    <div class="col-span-6">
                      <div class="flex items-center justify-end mt-[10px] ">
                        <button
                          class=" text-white py-1 px-3 rounded "
                          @click="openEdit(address)"
                        >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g opacity="0.4">
                        <path d="M16 2H8C4 2 2 4 2 8V21C2 21.55 2.45 22 3 22H16C20 22 22 20 22 16V8C22 4 20 2 16 2Z" stroke="green" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M12.9098 7.84015L7.71979 13.0302C7.51979 13.2302 7.3298 13.6202 7.2898 13.9002L7.0098 15.8802C6.9098 16.6002 7.40979 17.1002 8.12979 17.0002L10.1098 16.7202C10.3898 16.6802 10.7798 16.4902 10.9798 16.2902L16.1698 11.1002C17.0598 10.2102 17.4898 9.17015 16.1698 7.85015C14.8498 6.52015 13.8098 6.94015 12.9098 7.84015Z" stroke="green" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M12.1699 8.58008C12.6099 10.1501 13.8399 11.3901 15.4199 11.8301" stroke="green" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                        </g>
                        </svg>
                        </button>
                        <button
                          class=" text-white py-1 px-3 rounded "
                          @click="deleteAddress(address)"
                        >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M21 5.97998C17.67 5.64998 14.32 5.47998 10.98 5.47998C9 5.47998 7.02 5.57998 5.04 5.77998L3 5.97998" stroke="#8a1538" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path opacity="0.34" d="M8.5 4.97L8.72 3.66C8.88 2.71 9 2 10.69 2H13.31C15 2 15.13 2.75 15.28 3.67L15.5 4.97" stroke="#8a1538" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M18.85 9.14001L18.2 19.21C18.09 20.78 18 22 15.21 22H8.79C6 22 5.91 20.78 5.8 19.21L5.15 9.14001" stroke="#8a1538" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path opacity="0.34" d="M10.33 16.5H13.66" stroke="#8a1538" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path opacity="0.34" d="M9.5 12.5H14.5" stroke="#8a1538" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </div>

      </div>


    </div>
    <div v-else>
      no data
    </div>

  </div>
    </main>

    <AddAddress :is-open="isDialogOpen" @close="closeDialog"/>
    <EditAddress :is-open="isEditing" @close="closeEdit"  :formEdit="formEdit || {}"/>
  </div>

</template>
<script setup>
import {  ref ,onMounted,defineAsyncComponent} from 'vue';
import { useAddressStore } from '@/stores/address'
import AddAddress from './AddAddress.vue';
import EditAddress from './EditAddress.vue';
const LoaderDatacomp = defineAsyncComponent(() => import('@/components/LoaderDatacomp.vue'));

const storeAddress = useAddressStore()



const isDialogOpen = ref(false)
const isEditing = ref(false);
const openDialog = () => {

  isDialogOpen.value = true
}

const formEdit = ref(null);

const openEdit = (address) => {
  isEditing.value = true
  formEdit.value = {...address}
}


const closeDialog = () => {
  isDialogOpen.value = false
    localStorage.removeItem('long')
    localStorage.removeItem('lat')
    localStorage.removeItem('city')
    localStorage.removeItem('region')
  window.dispatchEvent(new Event("storage"));
}

const closeEdit = () => {
  isEditing.value = false;
  window.dispatchEvent(new Event("storage"));
}

onMounted(() => {
  storeAddress.fetchAllAddresses()
})

// حذف عنوان
const deleteAddress= async (address) =>{
  const address_id = address.id
  const res = await storeAddress.deleteAddress(address_id)
  if(res){
    alert("تم الحذف بنجاح")
    window.location.reload();
  }else{
    alert(storeAddress.error + 'error')
  }
}

</script>
