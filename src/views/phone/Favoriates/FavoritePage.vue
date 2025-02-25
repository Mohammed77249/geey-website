<template>
  <div class="bg-gray-50 w-full h-screen">
    <!-- header -->
    <div
      class="fixed inset-0  bg-white p-2 shadow h-24"
    >

    <div class="grid grid-cols-12 items-center justify-between">
      <!-- back button -->
      <div @click="goBack" class="col-span-2">
          <svg
            width="15"
            height="15"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.90991 19.92L15.4299 13.4C16.1999 12.63 16.1999 11.37 15.4299 10.6L8.90991 4.07996"
              stroke="#8a1538"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          </div>
          <div class="col-span-9 text-sm font-bold text-center">قائمه الاماني </div>

          <!-- go to cart -->
           <RouterLink to="/phone/cart">
          <div class="col-span-1  flex items-center justify-end font-bold">
          <svg width="20" height="20" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M2 2.5H3.74C4.82 2.5 5.67 3.43 5.58 4.5L4.75 14.46C4.71759 14.8459 4.76569 15.2342 4.89123 15.6005C5.01678 15.9669 5.21705 16.3031 5.47934 16.5879C5.74163 16.8728 6.06023 17.1001 6.41495 17.2553C6.76967 17.4106 7.15278 17.4905 7.54 17.49H18.19C19.63 17.49 20.89 16.31 21 14.88L21.54 7.38C21.66 5.72 20.4 4.37 18.73 4.37H5.82" stroke="#8a1538" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
          <path opacity="0.4" d="M9 8.5H21M16.25 22.5C16.5815 22.5 16.8995 22.3683 17.1339 22.1339C17.3683 21.8995 17.5 21.5815 17.5 21.25C17.5 20.9185 17.3683 20.6005 17.1339 20.3661C16.8995 20.1317 16.5815 20 16.25 20C15.9185 20 15.6005 20.1317 15.3661 20.3661C15.1317 20.6005 15 20.9185 15 21.25C15 21.5815 15.1317 21.8995 15.3661 22.1339C15.6005 22.3683 15.9185 22.5 16.25 22.5ZM8.25 22.5C8.58152 22.5 8.89946 22.3683 9.13388 22.1339C9.3683 21.8995 9.5 21.5815 9.5 21.25C9.5 20.9185 9.3683 20.6005 9.13388 20.3661C8.89946 20.1317 8.58152 20 8.25 20C7.91848 20 7.60054 20.1317 7.36612 20.3661C7.1317 20.6005 7 20.9185 7 21.25C7 21.5815 7.1317 21.8995 7.36612 22.1339C7.60054 22.3683 7.91848 22.5 8.25 22.5Z" stroke="#8a1538" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          </div>
        </RouterLink>

    </div>



      <div class=" mt-4">
        <ul class="flex items-center justify-center gap-20 text-sm  font-sans">
              <li
                @click="onClickProductsfavorite()"
                :class="{
                  'text-black border-b-4  border-black': productsFavorite,
                  'text-gray-800': !productsFavorite
                }"
                class="p-2 text-center font-semibold cursor-pointer transition-all duration-200"
              >
                المنتجات  <span v-if="storeFav.getProductsInFavorite.length >0">({{ storeFav.getProductsInFavorite.length }})</span>
              </li>

              <li
                @click="onClickMenuFavorite()"
                :class="{
                  'text-black  border-b-4  border-black': menuFavorite,
                  'text-gray-600': !menuFavorite
                }"
                class="p-2 text-center font-semibold cursor-pointer transition-all duration-200"
              >
                قائمه
              </li>


            </ul>

      </div>
    </div>


    <!-- content -->
    <div class="mt-20 pt-4 ">

      <div v-if="productsFavorite">
        <ProductsFavorite/>
      </div>



    </div>
  </div>
</template>
<script setup>
import { ref ,onMounted} from "vue";
import { useFavoriteStore } from '@/stores/favorite'
import { useRouter } from 'vue-router';
import ProductsFavorite from "./ProductsFavorite.vue";
const router = useRouter();
const storeFav = useFavoriteStore()


const productsFavorite = ref(true);
const menuFavorite = ref(false);


const goBack = () => {
  router.back();
};

const onClickProductsfavorite = () =>{
  productsFavorite.value = true
  menuFavorite.value = false
}

const onClickMenuFavorite = () =>{
  productsFavorite.value = false
  menuFavorite.value = true
};




onMounted(() => {
  storeFav.fetchProductInfavorite();
});

</script>
