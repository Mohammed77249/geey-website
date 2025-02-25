<template>
    <div class="bg-gray-50 h-screen">
      <!-- header -->
      <div class="fixed inset-0  bg-white p-2 shadow h-12">
        <div class="grid grid-cols-12 mt-1 items-center justify-between">
          <!-- back button -->
            <div @click="goBack" class="col-span-3">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.90991 19.92L15.4299 13.4C16.1999 12.63 16.1999 11.37 15.4299 10.6L8.90991 4.07996" stroke="#8a1538" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </div>
            <div class=" col-span-6 text-sm font-bold text-center">
             التقييمات
            </div>
        </div>
      </div>



      <!-- content -->
       <div class="pt-14">

        <div v-if="commentStore.loading" class="mt-20">
          <LoaderDatacomp :isLoader="commentStore.loading"/>
        </div>
        <div v-else-if="commentStore.getReviews.length >0 " >
          <!-- product details -->
         <div class=" bg-white w-full  mb-2" >
          <div class="grid grid-cols-12 gap-4 p-2">
            <div class="col-span-4">
              <img
                    class="h-full w-full object-contain rounded"
                    :src="productDetails.image? productDetails.image: '/src/assets/images/products/Image (1).svg'"
                  />
            </div>

            <div class="col-span-4 ">
                    <span>{{ productDetails.name }}</span>
                          <div class="flex-col items-center  gap-5 ">
                            <span class="text-xs" >   {{ $t("Quantity") }} :  {{ productDetails.quantity }} </span>
                          </div>
                          <div class="text-xs mt-1">
                            <span class="text-xs "> {{ $t("measuring") }} : {{ productDetails.measuring_value }}</span>
                          </div>
                          <div v-if="productDetails.hex_code" class="text-xs mt-1 flex">
                            <span class="text-xs  "> {{ $t("Color") }} :
                            </span>
                            <div class="w-3 h-3 rounded-full flex items-center justify-center mt-[2px] mx-1" :style="{ backgroundColor: productDetails.hex_code }" ></div>
                            <span>{{ productDetails.color_name }}</span>
                          </div>
            </div>

          </div>
         </div>

        <!-- header comments -->
            <div   class=" grid grid-cols-12 p-2 bg-white mb-2">
              <div class="col-span-4">
                <div class=" border-l-2  h-full w-full flex items-center justify-center">
                  <div class="flex-col items-center justify-center">

                    <h1 class=" font-bold text-2xl text-center text-black">{{ commentStore.getCommentsForProduct.rates }}</h1>
                    <span  class="flex ">
                      <div class="stars">
                        <span v-for="star in 5" :key="star" class="star" :class="{'filled': star <= fullStars, 'half': star === fullStars + 1 && halfStar}">
                          ★
                        </span>
                      </div>

                    </span>


                  </div>

                </div>
              </div>


              <div class="col-span-8 p-2 ">
                <h1 class="text-xs  text-gray-500 font-semibold"> هل مقاس المنتج مناسب بشكل جيد؟ </h1>

                <div  v-for="(comment, index) in commentStore.getCommentsForProduct.counter" :key="index" class="">
                  <div class="grid grid-cols-12  items-center  mt-2">
                    <p class="col-span-3 text-sm font-Semibold">{{ comment.name }}</p>
                    <div class=" col-span-9 flex items-center gap-2">
                      <div class="w-32 bg-gray-200 h-[5px]">
                        <div
                          :style="{ width: `${getPercentage(comment)}%` }"
                          class="h-full rounded-full bg-gray-500'"
                          :class="{
                            'bg-primary-900': comment.name === 'صغير',
                            'bg-primary-900': comment.name === 'مناسب',
                            'bg-primary-900': comment.name === 'كبير',

                          }"
                        ></div>
                      </div>
                      <span class="text-xs ml-2">{{ getPercentage(comment).toFixed(1) }}%</span>

                    </div>
                  </div>



                </div>
              </div>

            </div>


        <!-- content comment -->

        <div v-for="(comment, index) in commentStore.getReviews" :key="index"  class="w-full  bg-white mb-5 border-b-2 p-2">
          <!-- user name  -->
          <div>
            <div class="items-center gap-2">
              <div class="flex items-center gap-2">
                <h1 class="font-semibold text-black text-sm">{{ comment.user_name }}</h1>
                <span class="flex ">
                  <div class="stars">
                        <span v-for="star in 5" :key="star" class="star2 " :class="{'filled': star <= fullStars, 'half': star === fullStars + 1 && halfStar}">
                          ★
                        </span>
                   </div>
              </span>
              </div>

              <button class=" font-medium px-2 mb-2 mt-1 rounded-full flex items-center justify-center">
                <div class="flex">
                <span  class="text-xs md:text-sm text-gray-500 cursor-pointer">
                {{ $t("Color") }} : {{ comment.color_name }}

              </span>
              </div>
              <span class="px-1 text-[10px]">
                /
              </span>
                <span class="text-xs md:text-sm text-gray-500 cursor-pointer ">
                     {{ $t("Size") }} : {{ comment.measuring_value }}
                </span>


              </button>

              <div class="text-xs font-medium">
                {{ comment.comment }}
              </div>
            </div>
          </div>

          <!-- images -->
          <div class="mt-4">
          <div class="flex items-center overflow-x-auto gap-2 bg-gray-100 w-full">
            <!-- إذا كان هناك صور -->
            <div v-if="comment.images && comment.images.length > 0" class="flex items-center gap-2">
              <img
                v-for="(image, index) in comment.images"
                :key="index"
                class="h-[100px] w-[80px] "
                :src="image.image"
                alt="image"
              />
            </div>

            <!-- إذا لم تكن هناك صور -->
            <div v-else>
              <p>No images available</p>
            </div>
          </div>
         </div>

          <!-- like and date -->
          <div class="w-full h-7 flex items-center justify-between mt-1 gap-3">

            <!-- date -->
            <div class="flex items-center gap-2">
              <h1 class="text-gray-500 text-xs">{{ comment.created_at }}</h1>
            </div>

            <!-- like button -->
            <div  class="flex items-center gap-2">
                  <svg v-if=" comment.like_status[0].status == 1"   @click="toggleLike(comment)" width="20" height="20" viewBox="0 0 24 24" fill="#8a1538" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12.62 20.812C12.28 20.932 11.72 20.932 11.38 20.812C8.48 19.822 2 15.692 2 8.69199C2 5.60199 4.49 3.10199 7.56 3.10199C9.38 3.10199 10.99 3.98199 12 5.34199C12.5138 4.64787 13.183 4.08372 13.954 3.69473C14.725 3.30575 15.5764 3.10275 16.44 3.10199C19.51 3.10199 22 5.60199 22 8.69199C22 15.692 15.52 19.822 12.62 20.812Z" stroke="#8a1538" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                  <svg v-else-if="isLiked == false"
                     @click="toggleLike(comment.id)" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12.62 20.812C12.28 20.932 11.72 20.932 11.38 20.812C8.48 19.822 2 15.692 2 8.69199C2 5.60199 4.49 3.10199 7.56 3.10199C9.38 3.10199 10.99 3.98199 12 5.34199C12.5138 4.64787 13.183 4.08372 13.954 3.69473C14.725 3.30575 15.5764 3.10275 16.44 3.10199C19.51 3.10199 22 5.60199 22 8.69199C22 15.692 15.52 19.822 12.62 20.812Z" stroke="#8a1538" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                  <svg v-else-if="isLiked == true"   @click="toggleLike(comment)" width="20" height="20" viewBox="0 0 24 24" fill="#8a1538" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12.62 20.812C12.28 20.932 11.72 20.932 11.38 20.812C8.48 19.822 2 15.692 2 8.69199C2 5.60199 4.49 3.10199 7.56 3.10199C9.38 3.10199 10.99 3.98199 12 5.34199C12.5138 4.64787 13.183 4.08372 13.954 3.69473C14.725 3.30575 15.5764 3.10275 16.44 3.10199C19.51 3.10199 22 5.60199 22 8.69199C22 15.692 15.52 19.822 12.62 20.812Z" stroke="#8a1538" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                  <svg v-else   @click="toggleLike(comment)" width="20" height="20" viewBox="0 0 24 24" fill="#8a1538" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12.62 20.812C12.28 20.932 11.72 20.932 11.38 20.812C8.48 19.822 2 15.692 2 8.69199C2 5.60199 4.49 3.10199 7.56 3.10199C9.38 3.10199 10.99 3.98199 12 5.34199C12.5138 4.64787 13.183 4.08372 13.954 3.69473C14.725 3.30575 15.5764 3.10275 16.44 3.10199C19.51 3.10199 22 5.60199 22 8.69199C22 15.692 15.52 19.822 12.62 20.812Z" stroke="#8a1538" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                  <h1 class="text-xs"> {{ comment.review_like_count }}</h1>
            </div>

          </div>

        </div>


      </div>

      <div v-else>
        <span class="flex items-center justify-center mt-20 font-semibold text-sm">
          لاتوجد تقييمات لهذا المنتج
        </span>
      </div>


      <div>
          <!-- addComment -->
        <div class="fixed bottom-0 w-full bg-white">
          <div class="flex items-center gap-1 p-3">
              <button
                @click="openDialog"
                class=" w-full rounded bg-primary-900 text-white py-3 text-md font-medium hover:bg-primary-800 transition"
              >
                <span>أضافه تقييم</span>
              </button>
          </div>
        </div>
      </div>




      <DialogAddComment :is-open="isDialogOpen" :orderId="orderId" :productDetails="productDetails" @close="closeDialog"  :loading="commentStore.loading" :error="commentStore.error" />

    </div>


  </div>
</template>

<script setup>
import { onMounted, ref,defineAsyncComponent,computed } from "vue";
const LoaderDatacomp = defineAsyncComponent(() => import('@/components/LoaderDatacomp.vue'));

import { useCommentsStore } from '@/stores/comments.js';
import { useRouter,useRoute } from 'vue-router';
import DialogAddComment from "@/components/phone/Comments/DialogAddComment.vue";

const route = useRoute();
const router = useRouter();
const commentStore = useCommentsStore();
const orderId = ref()


const productDetails = ref([]);
const productId = ref();
const rating = ref(0);
const fullStars = ref(0);
const halfStar = ref(false);
const isLiked = ref(false);

const isDialogOpen = ref(false)

const openDialog = () => {
  isDialogOpen.value = true
}

const closeDialog = () => {
  isDialogOpen.value = false
}

const goBack = () => {
  router.back();
  localStorage.removeItem('productDetails')
};


// حساب العدد الإجمالي للتعليقات
const totalComments = computed(() => commentStore.getCommentsForProduct.counter.reduce((total, item) => total + item.value, 0));
const getPercentage = (item) => {
  if (totalComments.value === 0) return 0;
  return (item.value / totalComments.value) * 100;
};


const toggleLike = async (comment) => {

  if(comment.like_status.length > 0 ){

    if(comment.like_status[0].status == 0){
      await commentStore.AddLikeToComment(comment.id);
    await commentStore.fetchCommentsByProductId(productId.value);
    isLiked.value = true;
    }

    if(comment.like_status[0].status == 1){
      await commentStore.DisLikeComment(comment.id);
    await commentStore.fetchCommentsByProductId(productId.value);
    isLiked.value = false;
    }


  }else{
    await commentStore.AddLikeToComment(comment.id);
    await commentStore.fetchCommentsByProductId(productId.value);
    isLiked.value = true;
  }
};



onMounted(async() => {
  productId.value = decodeURIComponent(route.query.id || '')
  orderId.value =   decodeURIComponent(route.query.order_id)
  if(productId.value){
    await commentStore.fetchCommentsByProductId(productId.value);
    rating.value = commentStore.getCommentsForProduct.rates;
    fullStars.value = Math.floor(commentStore.getCommentsForProduct.rates);
    halfStar.value = rating.value % 1 >= 0.5;

  }




  const storedUser = JSON.parse(localStorage.getItem('productDetails'));
  if (storedUser) {
    productDetails.value = storedUser;
  }


});

</script>

<style scoped>
.star {
  font-size: 20px;
  color: #e4e4e4;  /* اللون الافتراضي للنجوم */
}

.star2 {
  font-size: 10px;
  color: #e4e4e4;  /* اللون الافتراضي للنجوم */
}

.star.filled {
  color: #ffd700;  /* اللون الذهبي للنجوم الممتلئة */
}

.star2.filled {
  color: #ffd700;  /* اللون الذهبي للنجوم الممتلئة */
}

.star.half {
  color: #ffd700;  /* لون النجم نصف الممتلئ */
  background: linear-gradient(to left, #ffd700 50%, #e4e4e4 50%); /* تقسيم اللون */
  -webkit-background-clip: text;
  color: transparent;
}

.star2.half {
  color: #ffd700;  /* لون النجم نصف الممتلئ */
  background: linear-gradient(to left, #ffd700 50%, #e4e4e4 50%); /* تقسيم اللون */
  -webkit-background-clip: text;
  color: transparent;
}

.stars {
  display: flex;
  justify-content: start;
  gap: 5px;
}


</style>
