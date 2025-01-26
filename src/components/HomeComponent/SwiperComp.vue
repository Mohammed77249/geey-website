<template>
  <div class="swiper-container">
    <Swiper
    :ref="swiper"
    :modules="modules"
      :slides-per-view="1"
      :space-between="30"
      :loop="true"
      :autoplay="autoplayOptions"
      :pagination="{ clickable : true}"
       :navigation="true"
      :class="{'w-full h-80 Swiper custom-swiper': storedLanguage == 'ar' , 'w-full h-80 Swiper custom-swiper2': storedLanguage =='en'}"
      id="mySlider"
    >
      <SwiperSlide v-for="(image, index) in storeSecion.getBannerImage" :key="index">
        <img :src="image.image" alt="صورة المنتج" class="w-full h-full object-cover   rounded-lg" />
      </SwiperSlide>

    </Swiper>

  </div>
</template>

<script setup>
import { ref } from 'vue';
import {Pagination , Navigation,Autoplay} from 'swiper/modules'
import { Swiper, SwiperSlide, } from 'swiper/vue';
import 'swiper/swiper-bundle.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
import { useSectionsStore } from '@/stores/section'
const storeSecion = useSectionsStore();

// import image1 from '@/assets/images/Big Sale Banner.svg';
// import image2 from '@/assets/images/products/Mockup.svg';
// import image3 from '@/assets/images/products/Image (3).svg';
// import image4 from '@/assets/images/products/unsplash_jsgby4-zj44.svg';
// import image5 from '@/assets/images/products/unsplash_VpqI6WX6sEs.svg';

const storedLanguage = localStorage.getItem("language");

// const images = ref([image1, image2,image3,image4,image5]);
const modules = [Pagination,Navigation,Autoplay]



const autoplayOptions = ref({
  delay: 2000,
  disableOnInteraction: false,
});


const swiper = ref(null);



</script>


<style scoped>

/* swiper 1 arabic =============================================================== */
/* تخصيص أزرار التنقل */
.custom-swiper :deep(.swiper-button-next),
.custom-swiper :deep(.swiper-button-prev) {
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.3s ease;
}

.custom-swiper :deep(.swiper-button-next):hover,
.custom-swiper :deep(.swiper-button-prev):hover {
  background-color: rgba(0, 0, 0, 0.8);
  color: #8a1538;
}

.custom-swiper :deep(.swiper-button-next)::after,
.custom-swiper :deep(.swiper-button-prev)::after {
  font-size: 20px;
  font-weight: bold;
}

/* مواضع الأزرار */
.custom-swiper :deep(.swiper-button-next) {
  left: 0px;
  right: auto;
  margin-left: 10px;
}

.custom-swiper :deep(.swiper-button-prev) {
  right:0px;
  left: auto;
  margin-right: 10px;
}

/* تخصيص النقاط (Pagination) */
.custom-swiper :deep(.swiper-pagination-bullet) {
  background-color: rgba(0, 0, 0, 0.3); /* لون النقاط */
  width: 10px;
  height: 10px;
  opacity: 1;
}

.custom-swiper :deep(.swiper-pagination-bullet-active) {
  background-color: #8a1538; /* لون النقطة النشطة */
  width: 12px;
  height: 12px;
}


/* swiper 2 english =============================================================== */
/* تخصيص أزرار التنقل */
.custom-swiper2 :deep(.swiper-button-next),
.custom-swiper2 :deep(.swiper-button-prev) {
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.3s ease;
}

.custom-swiper2 :deep(.swiper-button-next):hover,
.custom-swiper2 :deep(.swiper-button-prev):hover {
  background-color: rgba(0, 0, 0, 0.8);
  color: #8a1538;
}

.custom-swiper2 :deep(.swiper-button-next)::after,
.custom-swiper2 :deep(.swiper-button-prev)::after {
  font-size: 20px;
  font-weight: bold;
}

/* مواضع الأزرار */
.custom-swiper2 :deep(.swiper-button-next) {
  right:0px;
  left: auto;
  margin-right: 10px;

}

.custom-swiper2 :deep(.swiper-button-prev) {
  left: 0px;
  right: auto;
  margin-left: 10px;
}

/* تخصيص النقاط (Pagination) */
.custom-swiper2 :deep(.swiper-pagination-bullet) {
  background-color: rgba(0, 0, 0, 0.3); /* لون النقاط */
  width: 10px;
  height: 10px;
  opacity: 1;
}

.custom-swiper2 :deep(.swiper-pagination-bullet-active) {
  background-color: #8a1538; /* لون النقطة النشطة */
  width: 12px;
  height: 12px;
}


</style>

