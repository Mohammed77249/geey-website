<template>
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
</style>
