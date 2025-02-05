<template>
  <div class="bg-gray-100 h-screen">
    <!-- header -->
    <div class="fixed inset-0  bg-white p-2 shadow h-16">
      <div class="grid grid-cols-12 mt-2 items-center justify-between">
        <!-- back button -->
          <div class="col-span-3">
            <RouterLink to="/phone/confirmOrder">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8.90991 19.92L15.4299 13.4C16.1999 12.63 16.1999 11.37 15.4299 10.6L8.90991 4.07996" stroke="#8a1538" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </RouterLink>
          </div>
          <div class=" col-span-6 text-lg font-bold text-center">
            {{ $t("Add a new address") }}
          </div>
      </div>
    </div>

    <!-- main content -->
    <div>
      <div class="mt-14 pt-3 bg-gray-100">
              <div class="">
                <div class=" p-2">
                  <span class="text-sm text-[#F7A219]">*يرجى اضافة عنوان جديد دقيق لتمتع بتجربة توصيل مميزة!</span>
                </div>
                <form @submit.prevent="handleAddress">
                  <!-- المكتب الخاص أو المنزل -->
                  <div class="mb-4 px-1">
                    <input
                      type="text"
                      v-model="Adress"
                      required
                      :placeholder="$t('Private office or home')"
                      class="w-full border border-gray-300 py-4 shadow px-2 text-sm rounded-lg focus:outline-none focus:ring-0 focus:ring-black focus:border-black focus:border-[1px]"
                    />
                  </div>

                  <!-- المحافظة -->
                  <div class="px-1  mb-4">
                    <div ref="dropDownCite">
                      <button
                        class="text-[#979797] bg-white w-full shadow py-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-0 focus:ring-black focus:border-black focus:border-[1px] text-sm px-5 inline-flex items-center justify-between"
                        type="button"
                        @click="isDropdowenCiteVisable = true"
                        @mouseenter="isDropdowenCiteVisable = true"
                        @mouseleave="isDropdowenCiteVisable = false"
                      >
                        <p class="text-black">{{ selectedCite }}</p>

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
                  <div class="px-1  mb-4">
                    <div ref="dropDownDistrict">
                      <button
                        class="text-[#979797] bg-white w-full py-4 shadow rounded-lg border border-gray-300 focus:outline-none focus:ring-0 focus:ring-black focus:border-black focus:border-[1px] text-sm px-5 inline-flex items-center justify-between"
                        type="button"
                        @click="isDropdowenDistrictVisable = true"
                        @mouseenter="isDropdowenDistrictVisable = true"
                        @mouseleave="isDropdowenDistrictVisable = false"
                      >
                        <p class="text-black">{{ selectedDistrict }}</p>

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
                  <div class="px-1  mb-4">
                    <input
                      type="text"
                      v-model="NearestLand"
                      required
                      :placeholder="$t('nearest landmark')"
                      class="w-full border border-gray-300 py-4 shadow rounded-lg p-2 text-sm focus:outline-none focus:ring-0 focus:ring-black focus:border-black focus:border-[1px]"
                    />
                  </div>

                  <!-- الخريطة  -->
                  <div class="px-1 mb-4">
                    <button
                      type="button"
                      @click="clickOpenMap()"
                      class="w-full flex items-center bg-white shadow border border-gray-300 text-black gap-2 py-4 rounded-lg font-semibold text-xs"
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
                  <div v-if="showMapImage" class=" px-1">
                    <!-- <img
                    :src="getMapImageUrl()"
                      alt="Map"
                      class="w-full h-auto rounded-lg cursor-pointer"
                      @click="openMap"
                    /> -->

                    <img
                    src="/src//assets/images/mapp.png"
                      alt="Map"
                      class="w-full h-[200px] rounded-lg cursor-pointer"
                      @click="openMap"
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
                      {{ $t("Add a new address") }}
                      </button>
                    </div>
                </form>
              </div>
            </div>

    </div>

  </div>
</template>

<script setup>
import {   ref, onMounted, onBeforeMount,onUnmounted,defineAsyncComponent } from 'vue'
const GoogleMap = defineAsyncComponent(() => import('@/components/phone/GoogleMap.vue'));
import { useAddressStore } from '@/stores/address'
import { useConfirmOrders } from '@/stores/confirmorder'
import { useI18n } from 'vue-i18n';
import { useRouter } from 'vue-router';
const storeOrder = useConfirmOrders()
const storeAddress = useAddressStore()
const router = useRouter();
const { t } = useI18n();
const isMapOpen = ref(false);
const showMapImage = ref(true);
// const mapCenter = ref({ lat: 15.369445, lng: 44.191006 })
// const zoom = ref(12);


// رابط الخريطة الثابتة
// const getMapImageUrl = () => {
//   const apiKey = 'AIzaSyCHShZz-2aciDHjlCDh7rHFGWjxSIRJztY'; // استبدل بـ مفتاح API الخاص بك
//   return `https://maps.googleapis.com/maps/api/staticmap?center=${mapCenter.value.lat},${mapCenter.value.lng}&zoom=${zoom.value}&size=600x300&markers=color:red%7Clabel:S%7C${mapCenter.value.lat},${mapCenter.value.lng}&key=${apiKey}`;
// };


// فتح الخريطة
const clickOpenMap = () => {
  showMapImage.value = false; // إخفاء صورة الخريطة
  isMapOpen.value = true; // عرض الخريطة
};

// إظهار نافذة الخريطة عند الضغط على الصورة
const openMap = () => {
  showMapImage.value = false;
  isMapOpen.value = true;
};

const closeDialog = () => {
  isMapOpen.value = false
}

const Getlong = ref(localStorage.getItem("long"));
const Getlat = ref(localStorage.getItem("lat"));
const Getcity = ref(localStorage.getItem('city')); // قراءة القيمة الأولية
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
    selectedCite.value = Getcity.value;
    filteredData.value.city_id = exists.id

    filteredAreas.value = storeAddress.getDistricts.filter(
      (area) => area.city_id === parseInt(exists.id)
    );



  } else {
    resultMessage.value = `${Getcity.value} غير موجود داخل المصفوفة`;
  }
};




const filteredAreas = ref([]);

const Adress = ref('')
const NearestLand = ref('')
const filteredData = ref({
  city_id: null,
  nearest_landmark: '',
  district_id: null,
  address: '',
  lat: null,
  lng: null,
  is_default: 1,
})

// cities
const dropDownCite = ref(null)
const selectedCite = ref(t('City'))
const isDropdowenCiteVisable = ref(false)
const toggleCiteSelect = city => {
  filteredData.value.city_id = city.id
  selectedCite.value = city.name
  isDropdowenCiteVisable.value = false


  if (city.id) {
    filteredAreas.value = storeAddress.getDistricts.filter(
      (area) => area.city_id === parseInt(city.id)
    );
    selectedDistrict.value = t('Area')
  } else {
    filteredAreas.value = [];
  }


}


// District
const dropDownDistrict = ref(null)
const selectedDistrict = ref(t('Area'))
const isDropdowenDistrictVisable = ref(false)
const toggleDistrictSelect = district => {
  filteredData.value.district_id = district.id
  selectedDistrict.value = district.name
  isDropdowenDistrictVisable.value = false


}


const handleAddress = async () => {

  if(selectedCite.value == t("City")){
    alert(t("Choose a city"))
    return;
  }
  if(selectedDistrict.value == t("Area")){
    alert(t("Choose a region"))
    return;
  }
  if(!Getlat.value &&  !Getlong.value){
    alert(t("Choose from the map"))
    return;
  }

  filteredData.value.address = Adress.value
  filteredData.value.nearest_landmark = NearestLand.value

  filteredData.value.lat =  Getlat.value;
  filteredData.value.lng = Getlong.value;



  const creataddress = await storeAddress.creatAddress(filteredData.value)
  if (creataddress) {
    alert(t("Added successfully"))
    storeOrder.fetchDataOrders()
    router.push("/phone/confirmOrder")
    Adress.value = "";
    NearestLand.value= "";
    selectedDistrict.value = t("Area");
    selectedCite.value =t("City")

    localStorage.removeItem('long')
    localStorage.removeItem('lat')
    localStorage.removeItem('city')
    localStorage.removeItem('region')

  } else {
    alert(storeAddress.error + 'error')
    localStorage.removeItem('long')
    localStorage.removeItem('lat')
    localStorage.removeItem('city')
    localStorage.removeItem('region')
  }

}

onMounted(() => {
  storeAddress.fetchCities()
  storeAddress.fetchDistricts()
})
onBeforeMount(() => {

});
</script>
