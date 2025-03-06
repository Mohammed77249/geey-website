<template>
  <div class="px-2 mt-2 pb-10" >
    <div v-if="storeFav.allLists.length == 0" class="h-[360px] w-full  bg-white">
      <div class=" mb-1 flex items-center  justify-center">

        <svg width="250" height="200" viewBox="0 0 250 200" fill="none" xmlns="http://www.w3.org/2000/svg">
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
          <span class="text-md font-bold ">لا توجد قوائم</span>
        </div>
        <div class="flex items-center justify-center mt-2 ">
        <p class="text-sm text-gray-400">
          <span>طريقة جديدة لإدارة المنتجات المفضلة لديك! يمكنك التصنيف</span>
          <span class="block text-center">  بطريقتك الخاصه</span>
        </p>
      </div>

        <div class="mt-5 flex items-center justify-center">
          <button
              type="button"
              class="w-[150px] rounded  bg-primary-900 text-white py-3 font-semibold  text-sm"
            >
             انشاء قائمة
            </button>
        </div>


      </div>



    </div>

    <div v-else-if="storeFav.loading" class="mt-20">
      <LoaderDatacomp :is-loader="storeFav.loading"/>
    </div>

    <div v-else class="mt-2  ">

      <!-- button add list -->
      <div class="flex items-center gap-2  mb-2"  @click="openDialog()">
        <button  class="p-2 text-black">
          <svg class="w-8 h-8" viewBox="0 0 24 24" fill="white" stroke="currentColor">
            <circle cx="12" cy="12" r="12" stroke-width="0"/>
            <line x1="12" y1="8" x2="12" y2="16" stroke-width="1.5" stroke-linecap="round" fill="black"/>
            <line x1="8" y1="12" x2="16" y2="12" stroke-width="1.5" stroke-linecap="round"/>
          </svg>
        </button>

        <span class="text-sm font-medium text-gray-900">انشاء قائمه جديدة</span>
      </div>

      <!-- lists -->
      <div  v-for="list in storeFav.getAllListsInFavorite"
      :key="list.id"
      class="bg-white w-full h-[200px] p-2 mb-3 mt-2"
      >

        <div v-if=" list.product_images.length > 0" @click="GoTOListProduct(list)"  class=" w-full h-[130px] flex items-center overflow-x-auto custom-scroll gap-2">

          <div v-for="image in list.product_images" :key="image.id" class=" min-w-[80px] h-[120px] flex items-center   ">
            <img :src="image" class="h-full w-full border object-cover" />
          </div>

        </div>
        <div v-else @click="GoTOListProduct(list)" class="  h-[130px] flex items-center gap-2" >
          <div class="">
            <svg width="100" height="100" viewBox="0 0 250 200" fill="none" xmlns="http://www.w3.org/2000/svg">
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

          <div class=" w-full h-full py-5 px-5">
            <span class="text-md font-semibold">منتجات القائمه فارغة</span>
            <div>
              <span class="text-sm text-gray-500">اضف منتجاتك المفضلة الى القائمة  بالاختيار  في  </span>
              <span class="text-sm text-gray-500">صفحة قائمة الاماني او النقر على زر القلب في </span>
              <span class="text-sm text-gray-500">صفحة التفاصيل</span>
            </div>

          </div>

        </div>


        <div class=" h-[45px] mt-2">
          <div class="flex items-center justify-between">
            <!-- list name -->
            <div  @click="GoTOListProduct(list)">
              <span class="text-sm text-black font-medium">{{ list.name }}</span>
              <div class="flex items-center">
                <span class="text-sm text-gray-500">البضائع : {{ list.product_images.length }}</span>
              </div>
            </div>

            <!-- list button -->
            <div class="flex   gap-2">

              <!--share -->
              <button  @click="GoTOListProduct(list)"  class="text-gray-600 hover:text-blue-500">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16.96 6.16992C18.96 7.55992 20.34 9.76992 20.62 12.3199" stroke="#292D32" stroke-width="1.5" />
              <path d="M3.48999 12.3702C3.74999 9.83021 5.10999 7.62021 7.08999 6.22021" stroke="#292D32" stroke-width="1.5" />
              <path d="M8.18994 20.9399C9.34994 21.5299 10.6699 21.8599 12.0599 21.8599C13.3999 21.8599 14.6599 21.5599 15.7899 21.0099" stroke="#292D32" stroke-width="1.5" />

              <path d="M12.06 7.70014C13.5954 7.70014 14.84 6.45549 14.84 4.92014C14.84 3.38479 13.5954 2.14014 12.06 2.14014C10.5247 2.14014 9.28003 3.38479 9.28003 4.92014C9.28003 6.45549 10.5247 7.70014 12.06 7.70014Z" stroke="#292D32" stroke-width="1.5"/>
              <path d="M4.83005 19.9199C6.3654 19.9199 7.61005 18.6752 7.61005 17.1399C7.61005 15.6045 6.3654 14.3599 4.83005 14.3599C3.2947 14.3599 2.05005 15.6045 2.05005 17.1399C2.05005 18.6752 3.2947 19.9199 4.83005 19.9199Z" stroke="#292D32" stroke-width="1.5" />
              <path d="M19.1699 19.9199C20.7052 19.9199 21.9499 18.6752 21.9499 17.1399C21.9499 15.6045 20.7052 14.3599 19.1699 14.3599C17.6345 14.3599 16.3899 15.6045 16.3899 17.1399C16.3899 18.6752 17.6345 19.9199 19.1699 19.9199Z" stroke="#292D32" stroke-width="1.5" />
              </svg>
            </button>

            <!-- menu -->
              <button @click="openDialog2(list)" class="text-gray-500 hover:text-blue-500">
                <svg class="w-6 h-6 flex" viewBox="0 0 24 24" fill="black">
                  <circle cx="6" cy="12" r="2" />
                  <circle cx="12" cy="12" r="2" />
                  <circle cx="18" cy="12" r="2" />
                </svg>
              </button>

            </div>

          </div>
        </div>

      </div>
    </div>


  </div>
  <DialogAddNewMenu :is-open="isDialogOpen" @close="closeDialog"  Status="new" />
  <DialogRenameDelete :is-open="isDialogOpen2" @close="closeDialog2" :ListId="listId" :ListName="listName" />



</template>
<script setup>
import { onMounted,defineAsyncComponent,ref} from "vue";
import { useFavoriteStore } from '@/stores/favorite'
import { useRouter } from 'vue-router';
import DialogAddNewMenu from "./componentFav/DialogAddNewMenu.vue";
import DialogRenameDelete from "./componentFav/DialogRenameDelete.vue";
const LoaderDatacomp = defineAsyncComponent(() => import('@/components/LoaderDatacomp.vue'));

const router = useRouter();
const storeFav = useFavoriteStore()
const GoTOListProduct = (list) => {
  router.push({ path: `/phone/favorite/list`, query: { id: encodeURIComponent(list.id) ,name: encodeURIComponent(list.name)} })

};

const listId = ref();
const listName = ref('');

// for add new list
const isDialogOpen = ref(false)
const openDialog = () => {
  isDialogOpen.value = true
}
const closeDialog = () => {
  isDialogOpen.value = false
}

// for delete list and rename
const isDialogOpen2 = ref(false)
const openDialog2 = (list) => {
  listId.value = list.id
  listName.value = list.name
  isDialogOpen2.value = true
}
const closeDialog2 = () => {
  isDialogOpen2.value = false
}





onMounted(() => {
  // storeFav.fetchAllListsfavorite();
});
</script>
<style scoped>


.custom-scroll::-webkit-scrollbar {
  width: 0px;
  height: 0px;
  opacity: 0;
}
.custom-scroll:hover::-webkit-scrollbar,
.custom-scroll:active::-webkit-scrollbar {
  opacity: 0;
}

.custom-scroll::-webkit-scrollbar-track {
  background: transparent;
}
.custom-scroll::-webkit-scrollbar-thumb {
  background-color: rgba(0, 0, 0, 0.4);
  border-radius: 4px;
}
</style>
