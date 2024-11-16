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
      class="w-full h-80 Swiper"
      id="mySlider"
    >
      <SwiperSlide v-for="(image, index) in images" :key="index">
        <img :src="image" alt="صورة المنتج" class="w-full h-full   rounded-lg" />
      </SwiperSlide>
<!--
    <button
      class="swiper-button-prev custom-prev bg-gray-300 rounded-full"
      @click="goToPrevSlide"
    >

    </button>
    <button
      class="swiper-button-next custom-next bg-gray-300 rounded-full"
      @click="goToNextSlide "
    >
    </button> -->


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

import image1 from '@/assets/images/Big Sale Banner.svg';
import image2 from '@/assets/images/products/Mockup.svg';
import image3 from '@/assets/images/products/Image (3).svg';
import image4 from '@/assets/images/products/unsplash_jsgby4-zj44.svg';
import image5 from '@/assets/images/products/unsplash_VpqI6WX6sEs.svg';
const images = ref([image1, image2,image3,image4,image5]);
const modules = [Pagination,Navigation,Autoplay]



const autoplayOptions = ref({
  delay: 2000,
  disableOnInteraction: false,
});


const swiper = ref(null);



// const goToNextSlide = () => {
//   if (swiper.value) {
//     swiper.value.swiper.slideNext();
//   }

// };


// const goToPrevSlide = () => {
//   if (swiper.value ) {
//     swiper.value.swiper.slidePrev();
//   }
// };

// onMounted(() => {


//   alert("fff1"+ swiper.value);
//   if (swiper.value && swiper.value.swiper) {
//     alert("fff2"+swiper.value.swiper);
//   }

// });

</script>


<style scoped>
Swiper {

    --swiper-navigation-size: 44px;
    --swiper-navigation-color: #fff;}

    .my-next-button,
  .my-prev-button {
    background: #000;
    color: #fff;
    padding: 10px 40px;
}

 .my-next-button,
  .my-prev-button {
    background: #000;
    color: #fff;
    padding: 10px 40px;
}

#mySlider .swiper-button-prev,
#mySlider .swiper-button-next {
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 8px;
  color: #888888;
  --swiper-navigation-size: 20px;
}

.custom-prev, .custom-next {
  color: white;
  cursor: pointer;
  font-size: 15px;


}

.custom-prev {
  left: 10px;

  transform: translateY(-50%);
}

.custom-next {
  right: 10px;
  transform: translateY(-50%);
}
</style>
