<template>
  <div
    v-if="props.isOpen"
    class="fixed inset-0 flex items-center justify-center z-50"
  >
    <div
      class="flex flex-col items-center h-full md:max-h-[600px] p-2 bg-gray-200 w-full max-w-2xl"
    >
      <div class="flex justify-end items-center">
        <button
          @click="close"
          class="text-primary-900 text-[20px] hover:text-black"
        >
          &times;
        </button>
      </div>
      <!-- الخريطة -->
      <div class="w-full h-4/5">
        <GoogleMap
          :center="mapCenter"
          :zoom="zoom"
          :options="mapOptions"
          class="h-full w-full"
          @click="onMapClick"
        >
          <Marker
            v-for="(marker, index) in markers"
            :key="index"
            :position="marker"
            :clickable="true"
            :draggable="true"
            @click="showInfoWindow(index, marker)"
          />
          <!-- نافذة المعلومات -->
          <InfoWindow
            v-if="infoWindow.visible"
            :position="infoWindow.position"
            @closeclick="infoWindow.visible = false"
          >
            <div>
              <p>Latitude: {{ infoWindow.position.lat }}</p>
              <p>Longitude: {{ infoWindow.position.lng }}</p>
            </div>
          </InfoWindow>
        </GoogleMap>
      </div>

      <!-- أزرار التحكم -->
      <div class="flex space-x-4 mt-4">
        <button
          class="px-4 py-2 bg-primary-900 text-white rounded"
          @click="ConfirmLanLat"
        >
          حفظ
        </button>
      </div>
    </div>
  </div>
</template>



<script setup>
import { ref, reactive} from 'vue'
import { GoogleMap, Marker, InfoWindow } from 'vue3-google-map'

const props = defineProps({
  isOpen: {
    type: Boolean,
    required: true,
  },
})

const mapCenter = reactive({ lat: 15.369445, lng: 44.191006 })
const markers = reactive([{ lat: 15.369445, lng: 44.191006 }])
const zoom = ref(12)

const infoWindow = reactive({
  visible: false,
  position: { lat: 0, lng: 0 },
})

const latitude = ref(null)
const longitude = ref(null)
const city = ref(null)
const region = ref(null)

const showInfoWindow = (index, marker) => {
  infoWindow.position = marker
  infoWindow.visible = true
}

const onMapClick = async event => {
  const latLng = event.latLng
  latitude.value = latLng.lat()
  longitude.value = latLng.lng()
  markers.push({ lat: latLng.lat(), lng: latLng.lng() })

  // استدعاء Nominatim للحصول على العنوان
  await fetchAddressFromNominatim(latLng.lat(), latLng.lng())
}


const fetchAddressFromNominatim = async (lat, lng) => {
  const url = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}&zoom=10&addressdetails=1`;

  try {
    const response = await fetch(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (YourAppName)',
      },
    });
    const data = await response.json();

    if (data.address) {
      // الحصول على النص الخام للمدينة
      const rawCity = data.address.city || data.address.town || data.address.village || 'Unknown';

      // تنظيف النص
      const cleanedCity = cleanCityName(rawCity);
      console.log('Cleaned City:', cleanedCity); // عرض النص بعد التنظيف

      // تخزين النص النظيف في city
      city.value = cleanedCity;
      region.value = data.address.state || 'Unknown'
    } else {
      console.error('Address not found in API response');
      city.value = 'Unknown';
      region.value = 'Unknown';
    }
  } catch (error) {
    console.error('Error fetching address from Nominatim:', error);
    city.value = 'Unknown';
    region.value = 'Unknown';
  }
};

const cleanCityName = (rawCity) => {
  if (!rawCity) return 'Unknown'; // إذا لم يكن هناك نص

  // الكلمات التي نريد حذفها
  const unwantedWords = ['مدينة', 'محافظة', 'ولاية'];

  // إزالة الكلمات غير المرغوب فيها باستخدام التعبير المنتظم
  unwantedWords.forEach((word) => {
    const regex = new RegExp(`${word}\\s*`, 'gi'); // حذف الكلمة والمسافة بعدها
    rawCity = rawCity.replace(regex, '').trim(); // تنظيف النص
  });

  return rawCity;
};



const emit = defineEmits(['close'])

const ConfirmLanLat = () => {
  // تخزين الإحداثيات والمدينة والمنطقة في localStorage
  localStorage.setItem('long', longitude.value)
  localStorage.setItem('lat', latitude.value)
  localStorage.setItem('city', city.value || 'Unknown')
  localStorage.setItem('region', region.value || 'Unknown')

  emit('close')
}

const close = () => {
  emit('close')
}

const mapOptions = reactive({
  styles: [
    {
      elementType: 'geometry',
      stylers: [{ color: '#ebe3cd' }],
    },
    {
      elementType: 'labels.text.fill',
      stylers: [{ color: '#523735' }],
    },
    {
      elementType: 'labels.text.stroke',
      stylers: [{ color: '#f5f1e6' }],
    },
    {
      featureType: 'administrative',
      elementType: 'geometry.stroke',
      stylers: [{ color: '#c9b2a6' }],
    },
    {
      featureType: 'landscape.man_made',
      elementType: 'geometry',
      stylers: [{ color: '#f0f0f0' }],
    },
    {
      featureType: 'road',
      elementType: 'geometry',
      stylers: [{ color: '#ffffff' }],
    },
    {
      featureType: 'water',
      elementType: 'geometry',
      stylers: [{ color: '#aaddff' }],
    },
  ],
});
</script>
