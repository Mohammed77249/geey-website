<template>
  <div class="bg-gray-50 w-full min-h-screen h-full">
    <!-- header -->
    <div
      class="fixed inset-0  top-0 left-0 right-0   bg-white p-2 shadow h-12 z-50"
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
          <div class="col-span-8 text-sm font-bold text-center">قائمه الاماني </div>

          <!-- go to cart -->

          <div class="col-span-2  flex items-center justify-end gap-2 font-bold">
           <span  @click="goBack" class="text-primary-900 ">الغاء</span>

          </div>


    </div>
    </div>


    <!-- content -->
    <div class="mt-12">
      <div v-if="storeFav.loading" class="flex items-center justify-center h-screen">
        <LoaderDatacomp :is-loader="storeFav.loading"/>
      </div>
      <div  v-else class="grid grid-cols-2  gap-1 mb-10">
        <div
          v-for="product in storeFav.getProductsInFavorite"
          :key="product.id"
          class="p-1 mt-4 bg-white rounded"
        >

          <div class="cursor-pointer w-[full]  "  >
            <div class="relative h-[170px]">

              <div class="absolute h-full w-full">
                <label class="inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    class="hidden"
                    @change="updateSelectAll"
                    v-model="product.selected"
                  />
                  <span
                    class="w-6 h-6 m-2 border-2 rounded-full flex items-center justify-center transition-colors duration-200"
                    :class="{
                      'bg-primary-900 border-primary-900': product.selected,
                      'bg-black/10 border-white': !product.selected
                    }"
                  >
                    <svg
                      v-if="product.selected"
                      class="w-4 h-4 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </span>
                </label>
              </div>


                    <img v-if="product.main_imags != null && product.main_imags.length > 0 "
                    :src="
                      hoverId === product.id &&
                      isHover &&
                      product.main_imags[1]?.image
                        ? product.main_imags[1]?.image
                        : product.main_imags[0]?.image
                    "  alt="" class="w-full h-full rounded  transition duration-300 ease-in-out"
                    />

                    <img v-else
                    src="/jeeeylogo.jpg"  alt="" class="w-full h-full rounded  transition duration-300 ease-in-out"
                    />

            </div>


          </div>



          <div class="flex items-center justify-between mt-2">
            <h3 class="font-medium text-xs ">{{ product.name }}</h3>
            <div @click="openDialog(product.id)" class="cursor-pointer w-8 flex items-center justify-center  rounded-full">
            <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"

                >
                  <path
                    d="M2 2H3.74C4.82 2 5.67 2.93 5.58 4L4.75 13.96C4.71759 14.3459 4.76569 14.7342 4.89123 15.1005C5.01678 15.4669 5.21705 15.8031 5.47934 16.0879C5.74163 16.3728 6.06023 16.6001 6.41495 16.7553C6.76967 16.9106 7.15278 16.9905 7.54 16.99H18.19C19.63 16.99 20.89 15.81 21 14.38L21.54 6.88C21.66 5.22 20.4 3.87 18.73 3.87H5.82"
                    stroke="#8a1538"
                    stroke-width="2"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    opacity="0.4"
                    d="M9 8H21M16.25 22C16.5815 22 16.8995 21.8683 17.1339 21.6339C17.3683 21.3995 17.5 21.0815 17.5 20.75C17.5 20.4185 17.3683 20.1005 17.1339 19.8661C16.8995 19.6317 16.5815 19.5 16.25 19.5C15.9185 19.5 15.6005 19.6317 15.3661 19.8661C15.1317 20.1005 15 20.4185 15 20.75C15 21.0815 15.1317 21.3995 15.3661 21.6339C15.6005 21.8683 15.9185 22 16.25 22ZM8.25 22C8.58152 22 8.89946 21.8683 9.13388 21.6339C9.3683 21.3995 9.5 21.0815 9.5 20.75C9.5 20.4185 9.3683 20.1005 9.13388 19.8661C8.89946 19.6317 8.58152 19.5 8.25 19.5C7.91848 19.5 7.60054 19.6317 7.36612 19.8661C7.1317 20.1005 7 20.4185 7 20.75C7 21.0815 7.1317 21.3995 7.36612 21.6339C7.60054 21.8683 7.91848 22 8.25 22Z"
                    stroke="#8a1538"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
               </svg>
          </div>

          </div>




        <div class="flex items-center justify-between">
          <div class="flex gap-2 items-center ">
            <p class="font-sembold text-primary-900 text-xs">{{ product.base_price }}</p>
            <div class="">
            <p class=" text-[8px] text-primary-900 "> {{ currency?currency:'YER' }} </p>
            </div>

          </div>


        </div>




        <div class="bg-white py-3     px-2 flex items-center gap-2 justify-between fixed bottom-0 w-full">
            <div class="flex items-center " >
                    <label class="inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        class="hidden"
                        v-model="selectAll"
                        @change="toggleSelectAll"
                      />
                      <span
                        class="w-6 h-6 border-2 rounded-full flex items-center justify-center transition-colors duration-200"
                        :class="{
                          'bg-primary-900 border-primary-900': selectAll,
                          'bg-white border-gray-400': !selectAll
                        }"
                      >
                        <svg
                          v-if="selectAll"
                          class="w-4 h-4 text-white"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </span>
                    </label>
                    <h2 class="font-semibold text-md px-2">الكل</h2>
                  </div>


                <div  class="flex items-center gap-5">
                  <span   v-if="selectedProductsCount > 0" @click="deleteProducts()" class=" text-md font-semibold text-primary-900" > حذف</span>
                  <span v-else  class=" text-md font-semibold text-gray-300 "> حذف</span>

                  <button   v-if="selectedProductsCount > 0"  @click="openDialog" class="bg-[#8a1538] px-8 rounded py-2 text-white text-sm font-semibold">
                    أضف الى القائمة
                  </button>

                  <button v-else  class="bg-gray-200 px-8 rounded py-2 text-white text-sm font-semibold">
                    أضف الى القائمة
                  </button>
                </div>



        </div>



  </div>

    </div>




    </div>

    <DialogAddProductToMenu :is-open="isDialogOpen" @close="closeDialog"  />

  </div>
</template>
<script setup>
import { useRouter } from 'vue-router';
import { ref ,onMounted,defineAsyncComponent,computed } from 'vue';
import { useFavoriteStore } from '@/stores/favorite';
import DialogAddProductToMenu from './componentFav/DialogAddProductToMenu.vue';
const LoaderDatacomp = defineAsyncComponent(() => import('@/components/LoaderDatacomp.vue'));

const storeFav = useFavoriteStore()
const router = useRouter();
const currency = localStorage.getItem('currency');

const goBack = () => {
  router.back();
};

const isDialogOpen = ref(false)
const openDialog = () => {
  isDialogOpen.value = true
}
const closeDialog = () => {
  isDialogOpen.value = false
}

const selectAll = ref(false);
const toggleSelectAll = () => {
  storeFav.productsInFavorite = storeFav.productsInFavorite.map(p => ({
    ...p,
    selected: selectAll.value
  }))
}

const updateSelectAll = () => {
  selectAll.value = storeFav.productsInFavorite.every((product) => product.selected);
};

const selectedProductsCount = computed(() => {
  return storeFav.productsInFavorite.filter(p => p.selected).length
})


const deleteProducts = async()=>{
  const selectedIds = storeFav.productsInFavorite
    .filter(p => p.selected)
    .map(p => p.id)

  if (selectedIds.length > 0) {
   const result  = await storeFav.deleteProductFavorite(selectedIds)

   if(result){
    alert("تم الحذف")
    storeFav.fetchProductInfavorite();
   }else{
    alert(storeFav.error)
   }

  }

}


onMounted(() => {
  storeFav.fetchProductInfavorite();

});

</script>
