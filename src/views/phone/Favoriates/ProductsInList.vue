<template>
  <div class="bg-white w-full h-screen">
    <!-- header -->
    <div
      class="fixed inset-0  bg-white p-3 shadow h-12  "
    >

    <div class="flex items-center justify-between">
      <!-- back button -->
       <div class="  flex items-center  gap-4 ">
        <div @click="goBack" class="">
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
          <div class=" text-sm font-bold text-center"> {{ ListName }} </div>
       </div>


          <!-- go to cart -->
          <div class="  flex items-center  gap-2 font-bold">
            <!-- icon menu -->
            <div v-if="storeFav.productsInList.length > 0" @click="GoToCopyProducts">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path opacity="0.4" d="M11 19.5H21" stroke="#8a1538" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path opacity="0.4" d="M11 12.5H21" stroke="#8a1538" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path opacity="0.4" d="M11 5.5H21" stroke="#8a1538" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M3 5.5L4 6.5L7 3.5" stroke="#8a1538" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M3 12.5L4 13.5L7 10.5" stroke="#8a1538" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M3 19.5L4 20.5L7 17.5" stroke="#8a1538" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>

            <!-- icon cart -->
            <RouterLink to="/phone/cart">
              <svg width="20" height="20" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2 2.5H3.74C4.82 2.5 5.67 3.43 5.58 4.5L4.75 14.46C4.71759 14.8459 4.76569 15.2342 4.89123 15.6005C5.01678 15.9669 5.21705 16.3031 5.47934 16.5879C5.74163 16.8728 6.06023 17.1001 6.41495 17.2553C6.76967 17.4106 7.15278 17.4905 7.54 17.49H18.19C19.63 17.49 20.89 16.31 21 14.88L21.54 7.38C21.66 5.72 20.4 4.37 18.73 4.37H5.82" stroke="#8a1538" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
              <path opacity="0.4" d="M9 8.5H21M16.25 22.5C16.5815 22.5 16.8995 22.3683 17.1339 22.1339C17.3683 21.8995 17.5 21.5815 17.5 21.25C17.5 20.9185 17.3683 20.6005 17.1339 20.3661C16.8995 20.1317 16.5815 20 16.25 20C15.9185 20 15.6005 20.1317 15.3661 20.3661C15.1317 20.6005 15 20.9185 15 21.25C15 21.5815 15.1317 21.8995 15.3661 22.1339C15.6005 22.3683 15.9185 22.5 16.25 22.5ZM8.25 22.5C8.58152 22.5 8.89946 22.3683 9.13388 22.1339C9.3683 21.8995 9.5 21.5815 9.5 21.25C9.5 20.9185 9.3683 20.6005 9.13388 20.3661C8.89946 20.1317 8.58152 20 8.25 20C7.91848 20 7.60054 20.1317 7.36612 20.3661C7.1317 20.6005 7 20.9185 7 21.25C7 21.5815 7.1317 21.8995 7.36612 22.1339C7.60054 22.3683 7.91848 22.5 8.25 22.5Z" stroke="#8a1538" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </RouterLink>


          </div>

    </div>




    </div>

    <!-- content -->
    <div class="mt-12 p-2">
      <!-- no product -->
        <div v-if="storeFav.productsInList.length === 0"  class="h-[360px] w-full  bg-white">
            <div class=" mb-1 flex items-center  justify-center">

              <svg width="250" height="180" viewBox="0 0 250 200" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="250" height="200" fill="white"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M63 134H154C154.515 134 155.017 133.944 155.5 133.839C155.983 133.944 156.485 134 157 134H209C212.866 134 216 130.866 216 127C216 123.134 212.866 120 209 120H203C199.134 120 196 116.866 196 113C196 109.134 199.134 106 203 106H222C225.866 106 229 102.866 229 99C229 95.134 225.866 92 222 92H200C203.866 92 207 88.866 207 85C207 81.134 203.866 78 200 78H136C139.866 78 143 74.866 143 71C143 67.134 139.866 64 136 64H79C75.134 64 72 67.134 72 71C72 74.866 75.134 78 79 78H39C35.134 78 32 81.134 32 85C32 88.866 35.134 92 39 92H64C67.866 92 71 95.134 71 99C71 102.866 67.866 106 64 106H24C20.134 106 17 109.134 17 113C17 116.866 20.134 120 24 120H63C59.134 120 56 123.134 56 127C56 130.866 59.134 134 63 134ZM226 134C229.866 134 233 130.866 233 127C233 123.134 229.866 120 226 120C222.134 120 219 123.134 219 127C219 130.866 222.134 134 226 134Z" fill="#FFEEEE"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M86.2783 139.123L82.2081 139.695C80.0205 140.002 77.9978 138.478 77.6904 136.291L66.5565 57.0691C66.2491 54.8815 67.7733 52.8588 69.9609 52.5513L148.192 41.5567C150.38 41.2492 152.402 42.7734 152.71 44.961C152.71 44.961 153.422 50.0264 153.667 51.7688" fill="white"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M88.805 134.712L85.1092 135.238C83.1227 135.52 81.2886 134.139 81.0126 132.153L71.0174 60.2279C70.7414 58.2417 72.128 56.4028 74.1145 56.1204L145.152 46.0237C147.138 45.7413 148.973 47.1225 149.249 49.1087L150.108 55.2894C150.154 55.6239 153.223 77.8233 159.313 121.888C159.619 124.1 158.093 126.145 155.905 126.454C155.882 126.457 155.858 126.461 155.835 126.463L88.805 134.712Z" fill="#FFDADA"/>
              <path d="M86.2783 139.123L82.2081 139.695C80.0205 140.002 77.9978 138.478 77.6904 136.291L66.5565 57.0691C66.2491 54.8815 67.7733 52.8588 69.9609 52.5513L148.192 41.5567C150.38 41.2492 152.402 42.7734 152.71 44.961C152.71 44.961 153.422 50.0264 153.667 51.7688" stroke="#980000" stroke-width="2.5" stroke-linecap="round"/>
              <path d="M154.5 56.3796L155 59.5" stroke="#980000" stroke-width="2.5" stroke-linecap="round"/>
              <path d="M99.8221 60.4884C99.9809 58.9779 101.334 57.8821 102.844 58.0409L181.412 66.2987C182.922 66.4574 184.018 67.8106 183.859 69.321L175.497 148.883C175.338 150.393 173.985 151.489 172.475 151.33L93.9073 143.073C92.3969 142.914 91.3011 141.561 91.4598 140.05L99.8221 60.4884Z" fill="white" stroke="#980000" stroke-width="2.5"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M106.693 69.2547C106.866 67.6069 108.343 66.4115 109.99 66.5847L172.645 73.17C174.293 73.3432 175.488 74.8194 175.315 76.4671L169.775 129.177C169.602 130.825 168.126 132.02 166.478 131.847L103.823 125.261C102.175 125.088 100.98 123.612 101.153 121.964L106.693 69.2547Z" fill="white"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M109.741 109.878L119.538 103.27C121.172 102.168 123.365 102.42 124.706 103.864L131.879 111.587C132.237 111.972 132.833 112.014 133.242 111.683L148.581 99.2534C150.429 97.7561 153.167 98.1922 154.459 100.189L164.44 115.627L165.873 118.019L165.187 126.143C165.139 126.704 164.639 127.115 164.08 127.053L107.117 120.724C106.575 120.664 106.182 120.181 106.232 119.639L106.987 111.44L109.741 109.878Z" fill="#FFDADA"/>
              <path d="M107.936 69.3853C108.037 68.4241 108.899 67.7268 109.86 67.8279L172.515 74.4131C173.476 74.5142 174.173 75.3753 174.072 76.3365L168.532 129.046C168.431 130.007 167.57 130.705 166.609 130.604L103.954 124.018C102.993 123.917 102.295 123.056 102.396 122.095L107.936 69.3853Z" stroke="#980000" stroke-width="2.5"/>
              <circle cx="122.032" cy="85.9495" r="6" transform="rotate(6 122.032 85.9495)" fill="#FFEEEE" stroke="#980000" stroke-width="2.5"/>
              <path d="M107.729 111.425C111.666 108.707 119.538 103.27 119.538 103.27C121.172 102.168 123.365 102.42 124.706 103.864L131.879 111.587C132.238 111.972 132.833 112.014 133.242 111.683L148.582 99.2535C150.298 97.8627 152.817 98.1267 154.208 99.8431C154.297 99.954 154.381 100.07 154.459 100.19C154.459 100.19 163.427 114.42 165.523 117.746" stroke="#980000" stroke-width="2.5" stroke-linecap="round"/>
              </svg>

            </div>

            <div class="">
              <div class="flex items-center justify-center">
                <span class="text-md font-bold "> منتجات القائمة فارغة </span>
              </div>
              <div class="flex items-center justify-center mt-2 ">
              <p class="text-sm text-gray-400">
                <span>اضف منتجاتك المفضلة الى القائمة بالاختيار في صفحة قائمة الاماني او  </span>
                <span class="block text-center">  النقر على زر القلب في صفحة التفاصيل </span>
              </p>
            </div>

              <div class="mt-5 flex items-center justify-center">
                <button
                    type="button"
                    class="w-[180px] rounded  bg-primary-900 text-white py-3 font-semibold  text-sm"
                  >
                  اضافة منتجات
                  </button>
              </div>


            </div>

        </div>

        <div v-else-if="storeFav.loading" class="mt-20">
          <LoaderDatacomp :is-loader="storeFav.loading"/>
        </div>

        <div v-else >
          <div>
             <!-- button add list -->
            <div @click="GoToAddProductsToList" class="flex items-center justify-between ">

              <div class="flex items-center  ">
                <button class="p-2 text-white">
                  <svg class="w-7 h-7" viewBox="0 0 24 24" fill="#8a1538" stroke="currentColor">
                    <circle cx="12" cy="12" r="12" stroke-width="0" />
                    <line x1="12" y1="8" x2="12" y2="16" stroke-width="1.5" stroke-linecap="round" />
                    <line x1="8" y1="12" x2="16" y2="12" stroke-width="1.5" stroke-linecap="round"  />
                  </svg>
                </button>
                <span class="text-sm font-medium text-gray-700">  اضافة البضائع</span>
              </div>
              <div>
                <span class="text-sm font-medium text-black">   البضائع {{ storeFav.productsInList.length }}</span>
              </div>

            </div>
          </div>
          <div class="grid grid-cols-2  gap-1 ">
            <div
              v-for="product in storeFav.getProductsInList"
              :key="product.id"
              class="p-1 mt-2"
            >

              <div class="cursor-pointer w-[full]  "  >
                <div class="relative h-[170px]">



                  <div
                  v-if="showDeleteButton === product.id"
                  class="absolute  bg-black/50 backdrop-blur-xs h-full w-full"
                  @click="deleteProductFromList(product.id)"
                >

                  <button class="bg-primary-900 mt-20 mx-4 opacity-100 flex items-center justify-center text-white text-xs font-medium w-40 py-1 rounded-lg">
                    حذف
                  </button>

                  </div>

                  <RouterLink :to="`/phone/product/${product.id}`">
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
                  </RouterLink>
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
              <div  @click.stop="toggleDeleteButton(product.id)"  class="cursor-pointer w-8 flex items-center justify-center  rounded-full">
                <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <!-- النقطة الأولى -->
                <circle cx="5" cy="12" r="2" />

                <!-- النقطة الثانية -->
                <circle cx="12" cy="12" r="2" />

                <!-- النقطة الثالثة -->
                <circle cx="19" cy="12" r="2" />
              </svg>

              </div>

            </div>



            </div>
          </div>

        </div>

    </div>
    <DialogAddToCart  v-if="filteredData != null"   :-id-product="filteredData"  :is-open="isDialogOpen"  @close="closeDialog"  />

  </div>
</template>
<script setup>
import { ref ,onMounted,defineAsyncComponent} from "vue";
import { useFavoriteStore } from '@/stores/favorite'
import { useRouter,useRoute } from 'vue-router';
const LoaderDatacomp = defineAsyncComponent(() => import('@/components/LoaderDatacomp.vue'));
const DialogAddToCart = defineAsyncComponent(() => import('@/components/phone/DialogAddToCartComp.vue'));


const router = useRouter();
const route = useRoute();

const storeFav = useFavoriteStore()


const ListName = ref('')
const ListId = ref()

const goBack = () => {
  router.push({ path: `/phone/favorite`, query: { IsMneu:encodeURIComponent("yes")} })

};

const GoToCopyProducts = ()=>{
    router.push({ path: `/phone/favorite/chooseproduct`, query: { id:encodeURIComponent(ListId.value) , from: encodeURIComponent(ListName.value) } })
}

const GoToAddProductsToList = ()=>{
    router.push({ path: `/phone/favorite/addproducttolist`, query: { id:encodeURIComponent(ListId.value) ,ListName: encodeURIComponent("no"), IsNew: encodeURIComponent("no") } })
}

const isDialogOpen = ref(false)
const filteredData = ref(null)
const showDeleteButton = ref(null);

const toggleDeleteButton = (productId) => {
  showDeleteButton.value = showDeleteButton.value === productId ? null : productId;
};

const selectedProductsIds = ref([]);
const deleteProductFromList = async (productId) => {

  if (selectedProductsIds.value.includes(productId)) {
    selectedProductsIds.value = selectedProductsIds.value.filter((colorId) => colorId !== productId);
  } else {
    selectedProductsIds.value.push(productId);
  }

 const deletePro = await storeFav.deleteListProductFavorite(selectedProductsIds.value ,ListId.value)

 if(deletePro){
  selectedProductsIds.value = [];
      storeFav.fetchProductInList(ListId.value);
    }else{
      alert("error"+storeFav.error)
    }

};


const openDialog = (id) => {
  isDialogOpen.value = true
  filteredData.value = id;
}

const closeDialog = () => {
  isDialogOpen.value = false
  filteredData.value = null;
};



onMounted(async() => {
ListId.value = decodeURIComponent(route.query.id || '')
ListName.value = decodeURIComponent(route.query.name || '')

await storeFav.fetchProductInList(ListId.value);

});
</script>
