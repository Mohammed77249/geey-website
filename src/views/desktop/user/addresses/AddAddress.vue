<template>
  <div
    v-if="props.isOpen"
    class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
  >
    <!-- Dialog Container -->
    <div
      class="bg-white w-full max-w-xl gap-5 overflow-y-auto custom-scroll sm:max-h-[600px] h-full shadow-lg p-2"
    >
      <!-- Dialog Header -->
      <div class="flex justify-end items-center">
        <button
          @click="close"
          class="text-primary-900 text-[20px] hover:text-black"
        >
          &times;
        </button>
      </div>

      <!-- Dialog Content -->
      <div>
        <div>
          <div class="grid grid-cols-1 gap-3 mt-5">

            <div class="col-span-12 bg-gray-100">
              <div class="py-4 p-5 shadow bg-white m-2">
                <h1 class="text-primary-900 font-bold text-xl">
                  {{ $t("Add a new address") }}
                </h1>
              </div>

              <div class="p-2 bg-white m-2">
                <form @submit.prevent="handleAddress">
                  <!-- المكتب الخاص أو المنزل -->
                  <div class="bg-white border shadow p-2">
                    <label class="block text-xs font-semibold text-black mb-2"> {{ $t("Private office or home") }} </label
                    >
                    <input
                      type="text"
                      v-model="Adress"
                      required
                      :placeholder="$t('Private office or home')"
                      class="w-full border border-gray-300 py-2 p-2 text-sm focus:outline-none focus:ring-0 focus:ring-black focus:border-black focus:border-[1px]"
                    />
                  </div>

                  <!-- المحافظة -->
                  <div class="bg-white border shadow p-2">
                    <label class="block text-xs font-semibold text-black mb-2">{{ $t("City") }}</label
                    >
                    <div ref="dropDownCite">
                      <button
                        class="text-[#979797] w-full py-2 border border-gray-300 focus:outline-none focus:ring-0 focus:ring-black focus:border-black focus:border-[1px] text-sm px-5 inline-flex items-center justify-between"
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
                            stroke="currentColor"
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
                        class="z-50 absolute bg-white divide-y divide-gray-100 transition-all duration-300 rounded-lg shadow"
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
                  <div class="bg-white border shadow p-2">
                    <label class="block text-xs font-semibold text-black mb-2">{{ $t("Area") }}</label
                    >
                    <div ref="dropDownDistrict">
                      <button
                        class="text-[#979797] w-full py-2 border border-gray-300 focus:outline-none focus:ring-0 focus:ring-black focus:border-black focus:border-[1px] text-sm px-5 inline-flex items-center justify-between"
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
                            stroke="currentColor"
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
                          aria-labelledby="dropdownSearchButton"
                        >
                          <li
                            v-for="(
                              district, index
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
                  <div class="bg-white border shadow p-2">
                    <label class="block text-xs font-semibold text-black mb-2"> {{ $t("nearest landmark") }} </label
                    >
                    <input
                      type="text"
                      v-model="NearestLand"
                      required
                     :laceholder="$t('nearest landmark')"
                      class="w-full border border-gray-300 py-2 p-2 text-sm focus:outline-none focus:ring-0 focus:ring-black focus:border-black focus:border-[1px]"
                    />
                  </div>

                  <!-- الخريطة  -->
                  <div class="bg-white border shadow p-2">
                    <button
                      type="button"
                      @click="cklickOpenMap()"
                      class="w-full flex items-center border border-gray-300 text-black gap-2 py-2 font-semibold text-xs"
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
                      <p>  {{ $t("Is it easier to click on the address using Google Map?") }}   </p>
                    </button>
                  </div>

                  <div class="bg-white border shadow p-2">
                    <button
                      type="submit"
                      class="w-full bg-primary-900 text-white py-3 font-semibold text-sm"
                    >
                    {{ $t("Add a new address") }}</button>
                  </div>
                </form>
              </div>
            </div>
          </div>

          <div v-if="isMap">
            <GoogleMap  :isOpen="isMap" @close="closeDialog"/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted,onUnmounted,defineAsyncComponent } from 'vue'
const GoogleMap = defineAsyncComponent(() => import('@/components/GoogleMap.vue'));

import { useAddressStore } from '@/stores/address'

const storeAddress = useAddressStore()
// Props
const props = defineProps({
  isOpen: {
    type: Boolean,
    required: true,
  },
})

import { useI18n } from 'vue-i18n';
const { t } = useI18n();

const isMap = ref(false)

const cklickOpenMap = () => {
  isMap.value = true
}

const closeDialog = () => {
  isMap.value = false
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
  } else {
    resultMessage.value = `${Getcity.value} غير موجود داخل المصفوفة`;
  }


  if (exists && exists.id) {
    filteredAreas.value = storeAddress.getDistricts.filter(
      (area) => area.city_id === parseInt(exists.id)
    );
    selectedDistrict.value = 'المنطقة'

  } else {
    filteredAreas.value = [];
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
  lat: '',
  lng: '',
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
  filteredData.value.lat = Getlat.value
  filteredData.value.lng = Getlong.value;

  const creataddress = await storeAddress.creatAddress(filteredData.value)
  if (creataddress) {
    alert(t("Added successfully"))
    storeAddress.fetchAllAddresses()
    Adress.value = "";
    NearestLand.value= "";
    selectedDistrict.value = t("Area");
    selectedCite.value =t("City")

    localStorage.removeItem('long')
    localStorage.removeItem('lat')
    localStorage.removeItem('city')
    localStorage.removeItem('region')
    window.location.reload();
  } else {
    alert(storeAddress.error + 'error')
    localStorage.removeItem('long')
    localStorage.removeItem('lat')
    localStorage.removeItem('city')
    localStorage.removeItem('region')
  }

  close();

}

onMounted(() => {
  storeAddress.fetchCities()
  storeAddress.fetchDistricts()

})

// Emits
const emit = defineEmits(['close'])

// Close the dialog
const close = () => {
  emit('close')
};

</script>

<style>
.custom-scroll::-webkit-scrollbar {
  width: 5px;
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
