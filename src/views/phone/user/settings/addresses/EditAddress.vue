<template>
  <div class="bg-gray-50 h-screen">
    <div class="fixed inset-0  bg-white p-2 shadow h-12">
        <div class="grid grid-cols-12 mt-2 items-center justify-between">
          <!-- back button -->
            <div class="col-span-3" @click="goBack">
              <RouterLink to="/phone/user/setting/myaddresses">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.90991 19.92L15.4299 13.4C16.1999 12.63 16.1999 11.37 15.4299 10.6L8.90991 4.07996" stroke="#8a1538" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </RouterLink>
            </div>
            <div class=" col-span-6 text-sm font-bold text-center">
              تعديل العنوان
            </div>

            <!-- deleted icon -->
            <div @click="deleteAddress()" class=" col-span-3 flex items-center justify-end">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M21 5.97998C17.67 5.64998 14.32 5.47998 10.98 5.47998C9 5.47998 7.02 5.57998 5.04 5.77998L3 5.97998" stroke="#8a1538" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path opacity="0.34" d="M8.5 4.97L8.72 3.66C8.88 2.71 9 2 10.69 2H13.31C15 2 15.13 2.75 15.28 3.67L15.5 4.97" stroke="#8a1538" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M18.85 9.14001L18.2 19.21C18.09 20.78 18 22 15.21 22H8.79C6 22 5.91 20.78 5.8 19.21L5.15 9.14001" stroke="#8a1538" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path opacity="0.34" d="M10.33 16.5H13.66" stroke="#8a1538" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path opacity="0.34" d="M9.5 12.5H14.5" stroke="#8a1538" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
        </div>
      </div>

      <!-- main content -->
      <div>
        <div>
      <div class="mt-12 pt-3 ">

        <div v-if=" storeAddress.loading">
          <LoaderDatacomp :isLoader="storeAddress.loading" />
        </div>
        <div v-else-if="storeAddress.error">
          {{ storeAddress.error }}
        </div>

              <div v-else class="">

                <form @submit.prevent="handleEditAddress">
                  <!-- المكتب الخاص أو المنزل -->
                  <div class="mb-2 px-1">
                    <input
                      type="text"
                      v-model="filteredData.address"
                      required
                      :placeholder="$t('Private office or home')"
                      class="w-full border border-gray-300 py-4  px-2 text-sm rounded-lg focus:outline-none focus:ring-0 focus:ring-black focus:border-black focus:border-[1px]"
                    />
                  </div>

                  <!-- المحافظة -->
                  <div class="px-1  mb-2">
                    <div ref="dropDownCite">
                      <button
                        class="text-[#979797] bg-white w-full  py-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-0 focus:ring-black focus:border-black focus:border-[1px] text-sm px-5 inline-flex items-center justify-between"
                        type="button"
                        @click="isDropdowenCiteVisable = true"
                        @mouseenter="isDropdowenCiteVisable = true"
                        @mouseleave="isDropdowenCiteVisable = false"
                      >
                        <p class="text-black">{{ filteredData.city_name }}</p>

                        <svg
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          width="10px"
                          height="10px"
                          viewBox="0 0 10 6"
                        >
                          <path
                            stroke="#8a1538"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="m1 1 4 4 4-4"
                          />
                        </svg>
                      </button>

                      <!-- Dropdown menu -->
                      <div
                        @mouseenter="isDropdowenCiteVisable = true"
                        @mouseleave="isDropdowenCiteVisable = false"
                        class="z-50 absolute bg-white divide-y divide-gray-100 transition-all duration-300  rounded-lg shadow"
                        v-if="isDropdowenCiteVisable"
                      >
                        <ul
                          class="h-48 px-3 pb-3 overflow-y-auto custom-scroll text-[12px] text-gray-700"
                          aria-labelledby="dropdownSearchButton"

                        >
                          <li
                            v-for="(cite, index) in storeAddress.getCities"
                            :key="index"
                            @click="toggleCiteSelect(cite)"

                          >
                            <div
                              class="flex items-center ps-2 cursor-pointer rounded hover:bg-gray-100"
                            >
                              <span
                                for="checkbox-item-11"
                                class="w-full py-2 ms-2 cursor-pointer text-sm font-medium text-gray-900 rounded"
                                >{{ cite.name }}</span
                              >
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <!-- المنطقة -->
                  <div class="px-1  mb-2">
                    <div ref="dropDownDistrict">
                      <button
                        class="text-[#979797] bg-white w-full py-4  rounded-lg border border-gray-300 focus:outline-none focus:ring-0 focus:ring-black focus:border-black focus:border-[1px] text-sm px-5 inline-flex items-center justify-between"
                        type="button"
                        @click="isDropdowenDistrictVisable = true"
                        @mouseenter="isDropdowenDistrictVisable = true"
                        @mouseleave="isDropdowenDistrictVisable = false"
                      >
                        <p class="text-black">{{ filteredData.district_name }}</p>

                        <svg
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          width="10px"
                          height="10px"
                          viewBox="0 0 10 6"
                        >
                          <path
                            stroke="#8a1538"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="m1 1 4 4 4-4"
                          />
                        </svg>
                      </button>

                      <!-- Dropdown menu -->
                      <div
                        @mouseenter="isDropdowenDistrictVisable = true"
                        @mouseleave="isDropdowenDistrictVisable = false"
                        class="z-50 absolute bg-white divide-y divide-gray-100 transition-all duration-300 rounded-lg shadow"
                        v-if="isDropdowenDistrictVisable"
                      >
                        <ul
                          class="h-48 px-3 pb-3 overflow-y-auto custom-scroll text-[12px] text-gray-700"
                          aria-labelledby="dropdownSearchButton" v-if="filteredAreas.length > 0"
                        >
                          <li
                            v-for="(district, index
                            ) in filteredAreas"
                            :key="index"
                            @click="toggleDistrictSelect(district)"
                          >
                            <div
                              class="flex items-center ps-2 cursor-pointer rounded hover:bg-gray-100"
                            >
                              <span
                                for="checkbox-item-11"
                                class="w-full py-2 ms-2 cursor-pointer text-sm font-medium text-gray-900 rounded"
                                >{{ district.name }}</span
                              >
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <!-- معلم قريب -->
                  <div class="px-1  mb-2">
                    <input
                      type="text"
                      v-model="filteredData.nearest_landmark"
                      required
                      :placeholder="$t('nearest landmark')"
                      class="w-full border border-gray-300 py-4  rounded-lg p-2 text-sm focus:outline-none focus:ring-0 focus:ring-black focus:border-black focus:border-[1px]"
                    />
                  </div>

                  <!-- الخريطة  -->
                  <div class="px-1 mb-2">
                    <button
                      type="button"
                      @click="clickOpenMap()"
                      class="w-full flex items-center bg-white border border-gray-300 text-black gap-2 py-4 rounded-lg font-semibold text-xs"
                    >
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g opacity="0.4">
                          <path
                            d="M9.25 11H14.75"
                            stroke="#8a1538"
                            stroke-width="1.5"
                            stroke-linecap="round"
                          />
                          <path
                            d="M12 13.75V8.25"
                            stroke="#8a1538"
                            stroke-width="1.5"
                            stroke-linecap="round"
                          />
                        </g>
                        <path
                          d="M3.62001 8.49C5.59001 -0.169998 18.42 -0.159997 20.38 8.5C21.53 13.58 18.37 17.88 15.6 20.54C13.59 22.48 10.41 22.48 8.39001 20.54C5.63001 17.88 2.47001 13.57 3.62001 8.49Z"
                          stroke="#8a1538"
                          stroke-width="1.5"
                        />
                      </svg>
                      <p>{{ $t("Is it easier to click on the address using Google Map?") }}</p>
                    </button>
                  </div>

                  <!-- صورة الخريطة -->
                  <div  class=" px-1">
                    <img
                    src="/src//assets/images/mapp.png"
                      alt="Map"
                      class="w-full h-[200px] rounded-lg cursor-pointer"
                      @click="clickOpenMap"
                    />
                  </div>


                  <div v-if="isMapOpen">
                    <GoogleMap  :isOpen="isMapOpen" @close="closeDialog"/>
                  </div>


                  <div class="bg-white py-2 px-2  flex items-center   fixed bottom-0 w-full">
                      <button
                        type="submit"
                        class="w-full rounded-lg  bg-primary-900 text-white py-4 font-semibold  text-sm"
                      >
                      {{ $t("Save edits")}}
                      </button>
                    </div>
                </form>
              </div>
            </div>

    </div>
      </div>
  </div>
</template>


<script setup>
import {   ref, onMounted,onUnmounted,defineAsyncComponent } from 'vue'
const GoogleMap = defineAsyncComponent(() => import('@/components/phone/GoogleMap.vue'));
const LoaderDatacomp = defineAsyncComponent(() => import('@/components/LoaderDatacomp.vue'));

import { useAddressStore } from '@/stores/address'
import { useI18n } from 'vue-i18n';
import { useRoute ,useRouter } from 'vue-router';
const storeAddress = useAddressStore()
const route = useRoute()
const router = useRouter();
const { t } = useI18n();
const isMapOpen = ref(false);
const addressId = route.params.id

// فتح الخريطة
const clickOpenMap = () => {
  isMapOpen.value = true;
};


const closeDialog = () => {
  isMapOpen.value = false
}

const Getlong = ref(localStorage.getItem("long"));
const Getlat = ref(localStorage.getItem("lat"));
const Getcity = ref(localStorage.getItem('city'));
let intervalId = null; // تعريف متغير لتخزين المعرف الخاص بـ setInterval

// وظيفة لتحديث القيمة عند حدوث تغييرات
const checkLocalStorageChanges = () => {
  const currentValue = localStorage.getItem('city'); // قراءة القيمة الحالية من localStorage
  const Getlong11 = localStorage.getItem("long");
const Getlat11 = localStorage.getItem("lat");
  if (currentValue !== Getcity.value) {
    Getcity.value = currentValue; // تحديث القيمة تلقائيًا

  }
  if(Getlat11 != null && Getlong11 != null){
    Getlat.value = Getlat11
     Getlong.value = Getlong11
  }

  checkName()
};


// بدء المراقبة عند تحميل المكون
onMounted(() => {
  intervalId = setInterval(checkLocalStorageChanges, 500); // التحقق من التغييرات كل 500 ملي ثانية

});

// إيقاف المراقبة عند إلغاء تحميل المكون
onUnmounted(() => {
  clearInterval(intervalId);
});


const resultMessage = ref('');
const checkName = () => {
  const exists =  storeAddress.getCities.find(item => item.name ===  Getcity.value);
  if (exists) {
    resultMessage.value = `${Getcity.value} موجود داخل المصفوفة`;
    filteredData.value.city_name = Getcity.value;
    filteredAreas.value = storeAddress.getDistricts.filter(
      (area) => area.city_id === parseInt(exists.id)
    );
  } else {
    resultMessage.value = `${Getcity.value} غير موجود داخل المصفوفة`;
  }

};

const filteredAreas = ref([]);
const filteredData = ref({
  address_id:null,
  city_id: null,
  nearest_landmark: '',
  district_id: null,
  district_name: t("Area"),
  city_name:t("City"),
  address: '',
  lat: null,
  lng: null,
  is_default: 1,
})

// cities
const dropDownCite = ref(null)
const isDropdowenCiteVisable = ref(false)
const toggleCiteSelect = city => {
  filteredData.value.city_id = city.id
  filteredData.value.city_name = city.name
  filteredData.value.district_id = null
  filteredData.value.district_name =t("Area")
  filteredData.value.lng = null
  filteredData.value.lat = null
  isDropdowenCiteVisable.value = false
  if (city.id) {
    filteredAreas.value = storeAddress.getDistricts.filter(
      (area) => area.city_id === parseInt(city.id)
    );
    filteredData.value.district_name = t('Area')
  } else {
    filteredAreas.value = [];
  }
}


// District
const dropDownDistrict = ref(null)
const isDropdowenDistrictVisable = ref(false)
const toggleDistrictSelect = district => {
  filteredData.value.district_id = district.id
  filteredData.value.district_name = district.name
  isDropdowenDistrictVisable.value = false
}


const handleEditAddress = async () => {
  if( Getlat.value != null && Getlong.value != null){
      filteredData.value.lat =  Getlat.value
      filteredData.value.lng = Getlong.value
    }


  if(filteredData.value.city_id ==  null){
    alert(t("Choose a city"))
    return;
  }
  if(filteredData.value.district_id ==  null){
    alert(t("Choose a region"))
    return;
  }

  if(filteredData.value.lat == null && filteredData.value.lng ==  null){
    alert(t("Choose from map lat and lng"))
    return;
  }

  filteredData.value.address_id = addressId

  try {
    const result = await storeAddress.updateAddress(filteredData.value)

    if (result) {
      alert(t("Modified successfully"))
      router.push("/phone/user/setting/myaddresses")
      localStorage.removeItem('long')
      localStorage.removeItem('lat')
      localStorage.removeItem('city')
      localStorage.removeItem('region')

    } else {
      alert(t("An error occurred while modifying the address"))
      localStorage.removeItem('long')
      localStorage.removeItem('lat')
      localStorage.removeItem('city')
      localStorage.removeItem('region')
    }
  } catch (error) {
    console.error('Error updating address:', error)
  }

}

// حذف عنوان
const deleteAddress= async () =>{
  const address_id = addressId
  const res = await storeAddress.deleteAddress(address_id)
  if(res){
    alert("تم الحذف بنجاح")
    router.push("/phone/user/setting/myaddresses")
  }else{
    alert(storeAddress.error + 'error')
  }
}


onMounted(async() => {
 await storeAddress.fetchCities()
 await storeAddress.fetchDistricts()
 await storeAddress.fetchAhowAddress(addressId)

  if(storeAddress.getShowAddress[0]){
    filteredData.value.address = storeAddress.getShowAddress[0].address
    filteredData.value.city_name =  storeAddress.getShowAddress[0].city_name
    filteredData.value.district_name= storeAddress.getShowAddress[0].district_name
    filteredData.value.city_id =  storeAddress.getShowAddress[0].city_id
    filteredData.value.district_id= storeAddress.getShowAddress[0].district_id
    filteredData.value.nearest_landmark = storeAddress.getShowAddress[0].nearest_landmark
    filteredData.value.lat = storeAddress.getShowAddress[0].lat
    filteredData.value.lng = storeAddress.getShowAddress[0].lng


    filteredAreas.value = storeAddress.getDistricts.filter(
      (area) => area.city_id === parseInt(storeAddress.getShowAddress[0].city_id)
    );
  }

});

</script>
