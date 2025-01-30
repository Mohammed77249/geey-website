<!-- <template>
  <div
    id="map"
    style="height: 500px;"
  />
</template>

<script setup>
import { onMounted, ref,watch } from 'vue'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'

// import { getTranslate } from '@/helpers'
// import { useRouter } from 'vue-router'

const props = defineProps({
  // Add props as needed
  points: {
    type: Array,
    required: true,
    validator: value => {
      return value.every(point => {
        return point.lat && point.lng && point.id && point.customerName && point.image
      })
    },
  },
})

const map = ref(null)

const customIcon = L.icon({
  iconUrl: '/marker.svg', // Replace with your custom icon URL
  iconSize: [40, 40], // Size of the icon [width, height]
  iconAnchor: [20, 40], // Point of the icon which will correspond to marker's location
  popupAnchor: [0, -40], // Point from which the popup should open relative to the iconAnchor
})

onMounted(() => {
  map.value = L.map('map').setView([24.685382932905796, 46.70292911326416], 10)

})

const drawMapPoints = () => {
  console.log('hi')

  // center the map to first point
  if(props.points?.length > 0) {
    map.value.setView([props.points[0].lat, props.points[0].lng], 10)
  }

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 18,

    attribution: 'Naif Sameer :)',
  }).addTo(map.value)


  map.value.on('click', e => {
    console.log('Map clicked', e.latlng)
  })

  props.points.forEach(point => {
    const marker = L.marker([point.lat, point.lng], {
      icon: customIcon,
    }).addTo(map.value)

    // Use L.DomUtil.create to create popup content with the image
    const popupContent = L.DomUtil.create('div', 'popup-content')

    popupContent.style.textAlign = 'center'

    const img = L.DomUtil.create('img', '', popupContent)

    img.src = point.image
    img.alt = point.customerName
    img.style.width = '50px'
    img.style.height = '50px'
    img.style.borderRadius = '50%'

    const customerName = L.DomUtil.create('p', '', popupContent)

    customerName.innerText = point.customerName
    customerName.style = 'font-weight: bold; margin: 5px 0'

    const button = L.DomUtil.create('button', '', popupContent)

    button.innerText = 'view job details'
    button.style = `
      display: block;
      cursor: pointer;
      margin-top: 5px;
      padding: 5px 10px;
      border: none;
      background-color: #007bff;
      color: white;
      border-radius: 4px;
    `

    // Button click event for redirection
    // button.addEventListener('click', () => window.open(`/jobs/${point.id}`, '_blank'))

    // Bind structured popup content to marker
    marker.bindPopup(popupContent)
  })
}

watch(() => props.points, () => {
  drawMapPoints()
});
</script>

<style>
/* Optional: Fix the default icon path for Leaflet */
.leaflet-container {
  border-radius: 8px;
  block-size: 100%;
  inline-size: 100%;
}

.leaflet-control-attribution {
  inset-block-start: 20px;
}

.leaflet-popup-content-wrapper {
  text-align: center;
}

.leaflet-popup-content img {
  display: block;
  margin-block: 0;
  margin-inline: auto;
}
</style> -->

<!-- <template>
  <GMapMap
    :center="{ lat: 40.7128, lng: -74.006 }"
    :zoom="12"
    style="height: 500px; width: 100%"
  >
    <GMapMarker :position="{ lat: 40.7128, lng: -74.006 }"></GMapMarker>
  </GMapMap>
</template>

<script setup>
import { GMapMap, GMapMarker } from '@fawmi/vue-google-maps';

defineExpose({
  GMapMap,
  GMapMarker,
});
</script> -->

<!-- <template>
  <div class="container mx-auto p-4">
    <h1 class="text-2xl font-bold mb-4 text-center">Google Map with Vue 3</h1>
    <GMapMap
      :center="{ lat: 40.7128, lng: -74.0060 }"
      :zoom="12"
      class="rounded-md shadow-md"
      style="width: 100%; height: 500px"
    >
      <GMapMarker :position="{ lat: 40.7128, lng: -74.0060 }"></GMapMarker>
      <GMapInfoWindow
        :position="{ lat: 40.7128, lng: -74.0060 }"
        content="This is New York"
      ></GMapInfoWindow>

      <GMapPolyline
        :path="[
          { lat: 40.7128, lng: -74.0060 },
          { lat: 40.7308, lng: -73.9973 }
        ]"
        :options="{ strokeColor: '#0000FF', strokeWeight: 2 }"
      ></GMapPolyline>

      <GMapCircle
      :center="{ lat: 40.7128, lng: -74.0060 }"
      :radius="500"
      :options="{ fillColor: '#FF0000', strokeColor: '#FF0000' }"
    ></GMapCircle>


    </GMapMap>
  </div>
</template> -->

<!-- <script setup>

import { GMapMap, GMapMarker } from '@fawmi/vue-google-maps';

defineExpose({
  GMapMap,
  GMapMarker,

});
</script> -->


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

  // alert(city.value)
  // alert(region.value)
}

// const fetchAddressFromNominatim = async (lat, lng) => {
//   const url = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}&zoom=10&addressdetails=1`

//   try {
//     const response = await fetch(url, {
//       headers: {
//         'User-Agent': 'Mozilla/5.0 (YourAppName)',
//       },
//     })
//     const data = await response.json()

//     if (data.address) {
//       city.value = data.address.city || data.address.town || data.address.village || 'Unknown'
//       region.value = data.address.state || 'Unknown'
//     } else {
//       city.value = 'Unknown'
//       region.value = 'Unknown'
//     }
//   } catch (error) {
//     console.error('Error fetching address from Nominatim:', error)
//     city.value = 'Unknown'
//     region.value = 'Unknown'
//   }
// }

// const fetchAddressFromNominatim = async (lat, lng) => {
//   const url = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}&zoom=10&addressdetails=1`;

//   try {
//     const response = await fetch(url, {
//       headers: {
//         'User-Agent': 'Mozilla/5.0 (YourAppName)',
//       },
//     });
//     const data = await response.json();

//     if (data.address) {
//       // استخراج اسم المدينة وإزالة الكلمات الإضافية
//       const rawCity = data.address.city || data.address.town || data.address.village || 'Unknown';
//       alert('Before Cleaning:', rawCity);
//       city.value = cleanCityName(rawCity);
//       alert('After Cleaning:', city.value);

//       // استخراج اسم المنطقة (المحافظة)
//       region.value = data.address.state || 'Unknown';
//     } else {
//       city.value = 'Unknown';
//       region.value = 'Unknown';
//     }
//   } catch (error) {
//     console.error('Error fetching address from Nominatim:', error);
//     city.value = 'Unknown';
//     region.value = 'Unknown';
//   }
// };

// const fetchAddressFromNominatim = async (lat, lng) => {
//   const url = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}&zoom=10&addressdetails=1`;

//   try {
//     const response = await fetch(url, {
//       headers: {
//         'User-Agent': 'Mozilla/5.0 (YourAppName)',
//       },
//     });
//     const data = await response.json();

//     // تسجيل البيانات المستلمة بالكامل
//     console.log('Full API Response:', data);

//     if (data.address) {
//       // استخراج اسم المدينة
//       const rawCity = data.address.city || data.address.town || data.address.village || 'Unknown';
//       console.log('Raw City:', rawCity);

//       city.value = cleanCityName(rawCity);
//       console.log('Cleaned City:', city.value);

//       alert(`Before Cleaning: ${rawCity}`);
//       alert(`After Cleaning: ${city.value}`);
//     } else {
//       console.error('Address not found in API response');
//     }
//   } catch (error) {
//     console.error('Error fetching address from Nominatim:', error);
//   }
// };

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
      // console.log('Raw City:', rawCity); // عرض النص الخام

      // تنظيف النص
      const cleanedCity = cleanCityName(rawCity);
      console.log('Cleaned City:', cleanedCity); // عرض النص بعد التنظيف
      // alert(`Before Cleaning: ${rawCity}`);
      // alert(`After Cleaning: ${cleanedCity}`);

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



// // دالة لتنظيف اسم المدينة
// const cleanCityName = (rawCity) => {
//   // الكلمات التي نريد حذفها
//   const unwantedWords = ['مدينة', 'محافظة', 'ولاية'];

//   // إزالة الكلمات غير المرغوب فيها من اسم المدينة
//   let cleanedCity = rawCity;
//   unwantedWords.forEach((word) => {
//     const regex = new RegExp(`\\b${word}\\b`, 'gi'); // البحث عن الكلمة مع مراعاة حالة الأحرف
//     cleanedCity = cleanedCity.replace(regex, '').trim();
//   });


//   return cleanedCity; // إعادة اسم المدينة بعد التنظيف
// };

// const cleanCityName = (rawCity) => {
//   if (!rawCity) return 'Unknown'; // إذا لم يكن هناك اسم مدينة

//   // الكلمات التي نريد حذفها
//   const unwantedWords = ['مدينة', 'محافظة', 'ولاية'];

//   // إزالة الكلمات غير المرغوب فيها
//   unwantedWords.forEach((word) => {
//     const regex = new RegExp(`\\b${word}\\s*`, 'gi'); // حذف الكلمة والمسافة بعدها
//     rawCity = rawCity.replace(regex, '').trim(); // تنظيف النص
//   });


//   return rawCity;
// };

// const cleanCityName = (rawCity) => {
//   if (!rawCity) return 'Unknown'; // إذا لم يكن هناك اسم مدينة

//   // الكلمات التي نريد حذفها
//   const unwantedWords = ['مدينة', 'محافظة', 'ولاية'];

//   // إزالة الكلمات غير المرغوب فيها
//   unwantedWords.forEach((word) => {
//     const regex = new RegExp(`\\b${word}\\s*`, 'gi'); // حذف الكلمة والمسافة بعدها
//     rawCity = rawCity.replace(regex, '').trim(); // تنظيف النص
//   });

//   return rawCity;
// };


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
  // localStorage.setItem('latitude', latitude.value)
  // localStorage.setItem('longitude', longitude.value)

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
})
</script>

<!--
<script setup>
import { ref, reactive } from 'vue'
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

  // استدعاء API للحصول على اسم المدينة والمنطقة
  await fetchAddress(latLng.lat(), latLng.lng())

}

const fetchAddress = async (lat, lng) => {
  const apiKey = 'YOUR_GOOGLE_MAPS_API_KEY' // ضع مفتاح Google Maps API الخاص بك هنا
  const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${apiKey}`

  try {
    const response = await fetch(url)
    const data = await response.json()

    if (data.results && data.results.length > 0) {
      const addressComponents = data.results[0].address_components

      // استخراج المدينة والمنطقة
      city.value = addressComponents.find(component =>
        component.types.includes('locality')
      )?.long_name
      region.value = addressComponents.find(component =>
        component.types.includes('administrative_area_level_1')
      )?.long_name
    }
  } catch (error) {
    console.error('Error fetching address:', error)
  }
}

const emit = defineEmits(['close'])

const ConfirmLanLat = () => {
  // تخزين الإحداثيات والمدينة والمنطقة في localStorage
  localStorage.setItem('latitude', latitude.value)
  localStorage.setItem('longitude', longitude.value)
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
})
</script> -->

<style></style>
