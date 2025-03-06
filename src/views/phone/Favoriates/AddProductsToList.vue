<template>
  <div class="bg-gray-50 w-full min-h-screen h-full">
    <!-- header -->
    <div
      class="fixed inset-0  bg-white p-3 shadow h-12 "
    >
      <div class="grid grid-cols-12 items-center ">
        <!-- back button -->
        <div  @click="goBack" class="col-span-1">
          <svg
          :class="IsNew == 'no'? 'block' :'hidden'"
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
        <div class="col-span-10 text-center text-sm font-bold ">
        اختيار المنتجات
        </div>

        <div @click="createNewList" class="col-span-1">
          <span :class="IsNew == 'yes'?'block':'hidden'" class="text-primary-900 text-sm font-semibold">تخطي</span>
        </div>


      </div>

    </div>



    <!-- content -->
     <div  class="mt-12">
        <div v-if="storeFav.loading" class="mt-10 pt-10">
          <LoaderDatacomp :is-loader="storeFav.loading"/>
        </div>
        <div v-else >
          <div class="grid grid-cols-3  gap-1 ">
            <div
              v-for="product in ListProducts"
              :key="product.id"
              class=" mt-2 bg-white"
            >

            <div class="cursor-pointer w-[full]">
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
                      'bg-black/10 border-white': !product.selected,
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

              <img
                v-if="
                  product.main_imags != null && product.main_imags.length > 0
                "
                :src="
                  hoverId === product.id &&
                  isHover &&
                  product.main_imags[1]?.image
                    ? product.main_imags[1]?.image
                    : product.main_imags[0]?.image
                "
                alt=""
                class="w-full h-full rounded transition duration-300 ease-in-out"
              />

              <img
                v-else
                src="/jeeeylogo.jpg"
                alt=""
                class="w-full h-full rounded transition duration-300 ease-in-out"
              />
            </div>
          </div>


            <div class="flex items-center  p-2">
              <div class="flex gap-2 items-center ">
                <p class="font-sembold text-primary-900 text-xs">{{ product.base_price }}</p>
                <div class="">
                <p class=" text-[8px] text-primary-900 "> {{ currency?currency:'YER' }} </p>
                </div>

              </div>


            </div>



            </div>
          </div>


          <!-- footer -->
          <div
          class="bg-white py-3 px-2 flex items-center gap-2 justify-between fixed bottom-0 w-full"
        >
          <div class="flex items-center">
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
                  'bg-white border-gray-400': !selectAll,
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

          <div class="flex items-center gap-5">
            <button
              v-if="selectedProductsCount > 0"
              @click="createNewList"
              class="bg-[#8a1538] px-8 rounded py-2 text-white text-sm font-semibold"
            >
              أضف الى القائمة
            </button>

            <button
              v-else
              class="bg-gray-200 px-8 rounded py-2 text-white text-sm font-semibold"
            >
               أضف الى القائمة
            </button>
          </div>
        </div>

        </div>
     </div>

  </div>
</template>

<script setup>
import { ref ,onMounted,defineAsyncComponent ,computed} from "vue";
import { useFavoriteStore } from '@/stores/favorite'
import { useRouter,useRoute } from 'vue-router';
const LoaderDatacomp = defineAsyncComponent(() => import('@/components/LoaderDatacomp.vue'));

const router = useRouter();
const route = useRoute();
const ListProducts = ref([])
const ListProducts2 = ref([])
const ListName = ref('')
const IsNew = ref('')
const ListId = ref()

const storeFav = useFavoriteStore()
const goBack = () => {
  router.back();
};



const selectAll = ref(false)
const toggleSelectAll = () => {
  ListProducts.value =  ListProducts.value.map(p => ({
      ...p,
      selected: selectAll.value,
    }))

}

const updateSelectAll = () => {
  selectAll.value =  ListProducts.value.every(product => product.selected)
}

const selectedProductsCount = computed(() => {
  return  ListProducts.value.filter(p => p.selected).length
})





const createNewList = async() => {
  const selectedIds = ref([]);
  selectedIds.value = ListProducts.value
      .filter(p => p.selected)
      .map(p => p.id)

      if(selectedIds.value.length >0){

        if(ListId.value != "mm"){

          const result = await storeFav.updateListProducts(ListId.value,selectedIds.value)
          if(result){

              alert("تم تحديث القائمه")
              router.push({ path: `/phone/favorite/list`, query: { id: encodeURIComponent(ListId.value) ,name: encodeURIComponent(ListName.value)} })

            close();

          }else{
            alert("erroe"+storeFav.error)
            close();
          }

        }else{
          const result = await storeFav.storeList(ListName.value,selectedIds.value)
          if(result){
              alert("تم انشاء القائمه")
              router.push("/phone/favorite")

            close();

          }else{
            alert("erroe"+storeFav.error)
            close();
          }
        }


      }else{
        const result = await storeFav.storeList(ListName.value)
        if(result){
          alert("تم انشاء القائمه")
          router.push("/phone/favorite")
          close();

        }else{
          alert("erroe"+storeFav.error)
          close();
        }
      }


}

onMounted(async() => {
ListId.value = decodeURIComponent(route.query.id || 'mm')
ListName.value = decodeURIComponent(route.query.ListName || '')
IsNew.value = decodeURIComponent(route.query.IsNew || '')



 if(ListId.value != "mm"){
  await storeFav.fetchProductInList(ListId.value);
  ListProducts2.value = storeFav.getProductsInList

 }



await storeFav.fetchProductInfavorite();
ListProducts.value = storeFav.getProductsInFavorite


ListProducts.value = storeFav.getProductsInFavorite.map(product => ({
    ...product,
    // إذا كان المنتج موجودًا في المصفوفة الثانية، ضع selected: true
    selected: ListProducts2.value.some(p => p.id === product.id)
  }));


});

</script>
