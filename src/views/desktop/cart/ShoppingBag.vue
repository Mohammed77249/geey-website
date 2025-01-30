<template>
  <div>
    <main class="container mx-auto  grid grid-cols-1 md:grid-cols-3 lg:gap-3">
      <!-- Cart Products -->
      <div class="col-span-2 px-5">
        <!-- Header -->
        <!-- <div class=" w-full bg-orange-50 border border-orange-300 h-12 mb-3 flex items-center ">
          <h2 class="text-sm   px-5">استخدم الكوبون الآن لتوفير SR15.31</h2>
         </div> -->

         <div v-if="storeCart.getallCarts.length > 0" class="bg-white w-full h-14 mb-3 flex items-center justify-between px-5">
          <div class="flex items-center " >
            <input type="checkbox"
              v-model="selectAll"
              @change="toggleSelectAll"
              class="h-5 w-7 peer-checked:bg-black  peer-checked:border-black cursor-pointer transition-all duration-300 border border-black rounded-none"/>
            <h2 class="font-medium text-lg px-2">كل المنتجات ({{ selectedCount }})</h2>
          </div>


          <div class="flex items-center gap-1">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path opacity="0.4" d="M11 19.5H21" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path opacity="0.4" d="M11 12.5H21" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path opacity="0.4" d="M11 5.5H21" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M3 5.5L4 6.5L7 3.5" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M3 12.5L4 13.5L7 10.5" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M3 19.5L4 20.5L7 17.5" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            <span class="text-black">اختيار</span>
          </div>



         </div>

         <!-- <div class=" w-full px-5 bg-orange-50  h-16 mb-2 flex items-center justify-between ">
            <div class="flex flex-col">
              <span>هدايا رائعة</span>
              <span class="text-sm ">اضف SR322.45 أكثر للحصول على هدية مجانية!</span>
            </div>
            <div>
              <button class="text-white font-bold hover:bg-primary-800 bg-primary-900 w-24 h-8 text-[14px]">اضافة</button>
            </div>
         </div> -->

         <!-- <div class=" w-full px-5 bg-orange-50  h-16 mb-3 flex items-center justify-between ">
            <div class="flex flex-col">
              <span>المنتجات المضافة</span>
              <span class="text-sm ">مؤهل لاختيار منتج إضافي.</span>
            </div>
            <div>
              <button class="text-white font-bold hover:bg-primary-800 bg-primary-900 w-24 h-8 text-[14px]">اختيار</button>
            </div>
         </div> -->


        <!-- Products List -->
        <div class="space-y-4 mb-10">
          <div v-if="storeCart.loading" class="mt-10">
            <LoaderDatacomp :is-loader="storeCart.loading"/>
          </div>
          <div v-else class="grid grid-cols-12  w-full gap-2 p-5 shadow bg-white "  v-for="(item,index) in storeCart.getallCarts" :key="item.id">

            <div class="col-span-3 flex gap-2 md:col-span-2">
              <input
                type="checkbox"
                v-model="item.selected"
                class="w-4 h-3 text-primary-900"
                @change="updateSelectAll"
              />
              <RouterLink  :to="`/desktop/product/${item.product_id}`">
                <img
                :src="item.image"
                alt="Product Image"
                class="w-full h-36 object-cover"
              />
              </RouterLink>

            </div>
            <div class="col-span-6 md:col-span-7">
              <div class="md:mx-4 mx-1 mt-5">
                <RouterLink  :to="`/desktop/product/${item.product_id}`">
              <h3 class="font-semibold text-sm md:text-[17px] mb-2 ">{{ item.product_name }}</h3>
            </RouterLink>
              <button  @click="openDialog(item)"  class="border-[1px] px-2 mb-2 rounded-full flex items-center justify-center">
                <div class="flex">
                <span  class="text-xs md:text-sm text-gray-500 cursor-pointer">
                اللون:

              </span>
              <div class="w-4 h-4 rounded-full flex items-center justify-center mt-[2px] mx-1" :style="{ backgroundColor: item.color_hex }" ></div>
              </div>
                <span class="text-xs md:text-sm text-gray-500 cursor-pointer ">
                  , الحجم: {{ item.measuring_value }}
                </span>


              </button>

              <p class="text-red-500 text-xs md:text-sm font-semibold mb-2">-0%</p>
              <p class="text-sm md:text-lg font-bold">
                YER
                {{ item.product_currency }} {{ item.product_price * item.quantity  }}
              </p>
            </div>

            </div>
            <div class="col-span-3 flex items-end justify-end ">
              <div class="flex items-center  ">

                <!-- more product -->
                <div>
                  <div class="flex items-center gap-2 ">
                    <button
                      class="bg-primary-900 hover:bg-primary-800 px-2 py-[1px] text-white rounded"
                      @click="decrementQuantity(index)"
                    >
                      -
                    </button>
                    <span class="font-semibold ">{{ item.quantity }}</span>
                    <button
                      class="bg-primary-900 hover:bg-primary-800 px-2 py-[1px] rounded  text-white"
                      @click="incrementQuantity(index)"
                    >
                      +
                    </button>
                  </div>
                </div>

                <!-- delete butoon -->
                <div>
                    <button
                      class="px-2"
                      @click="removeItem(item.id)"
                    >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21 5.97998C17.67 5.64998 14.32 5.47998 10.98 5.47998C9 5.47998 7.02 5.57998 5.04 5.77998L3 5.97998" stroke="#8a1538" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path opacity="0.34" d="M8.5 4.97L8.72 3.66C8.88 2.71 9 2 10.69 2H13.31C15 2 15.13 2.75 15.28 3.67L15.5 4.97" stroke="#8a1538" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M18.85 9.14001L18.2 19.21C18.09 20.78 18 22 15.21 22H8.79C6 22 5.91 20.78 5.8 19.21L5.15 9.14001" stroke="#8a1538" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path opacity="0.34" d="M10.33 16.5H13.66" stroke="#8a1538" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path opacity="0.34" d="M9.5 12.5H14.5" stroke="#8a1538" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    </button>
                </div>

                <!-- like button -->
                <div class="">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12.62 20.812C12.28 20.932 11.72 20.932 11.38 20.812C8.48 19.822 2 15.692 2 8.69199C2 5.60199 4.49 3.10199 7.56 3.10199C9.38 3.10199 10.99 3.98199 12 5.34199C12.5138 4.64787 13.183 4.08372 13.954 3.69473C14.725 3.30575 15.5764 3.10275 16.44 3.10199C19.51 3.10199 22 5.60199 22 8.69199C22 15.692 15.52 19.822 12.62 20.812Z" stroke="#8a1538" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>

      <!-- Order Summary (Left Sidebar) -->
      <div class="col-span-1 "  >
        <div class="bg-white  shadow p-4">
          <h2 class="font-semibold text-lg mb-4">ملخص الطلب</h2>
          <div class="text-sm">
            <div class="flex justify-between py-2">
              <span> إجمالي المنتجات:</span>
              <span> {{ selectedCount }} </span>
            </div>
            <!-- <div class="flex justify-between py-2">
              <span>الإجمالي الفرعي:</span>
              <span> YER {{ storeCart.totalPrice }}</span>
            </div> -->
            <div class="flex justify-between py-2">
              <span>الخصم:</span>
              <span>- YER {{ storeCart.totalDiscount }}</span>
            </div>
            <div class="border-t my-4"></div>
            <div class="flex justify-between font-semibold text-lg">
              <span>الإجمالي:</span>
              <span class="text-primary-900"> YER {{ selectedTotalPrice }}</span>
            </div>
          </div>
          <button
          type="button"
            class="mt-4 w-full hover:bg-primary-800 bg-primary-900 text-white py-4 "
            @click="checkout"
          >
            اشتري الآن
          </button>
        </div>


        <!-- Payment Methods -->
        <!-- <div class="bg-white mt-6 shadow p-4 mb-10">

          <div class="">
            <h3 class="text-md font-bold mb-2">نقبل:</h3>
            <div class="grid grid-cols-4 gap-2 ">
              <img
                src="/src/assets/images/products/Image (1).svg"
                alt="PayPal"
                class="w-20  h-12 object-cover"
              />
              <img
                src="/src/assets/images/products/Image (1).svg"
                alt="Visa"
                class="w-20 h-12 object-cover"
              />
              <img
                src="/src/assets/images/products/Image (1).svg"
                alt="MasterCard"
                class="w-20 h-12 object-cover"
              />
              <img
                src="/src/assets/images/products/Image (1).svg"
                alt="Apple Pay"
                class="w-20 h-12 object-cover"
              />

              <img
                src="/src/assets/images/products/Image (1).svg"
                alt="Apple Pay"
                class="w-20 h-12 object-cover"
              />

              <img
                src="/src/assets/images/products/Image (1).svg"
                alt="Apple Pay"
                class="w-20 h-12 object-cover"
              />

              <img
                src="/src/assets/images/products/Image (1).svg"
                alt="Apple Pay"
                class="w-20 h-12 object-cover"
              />
            </div>
          </div>
        </div> -->


      </div>



    </main>
    <DialogUpdateCart v-if="filteredData.cartID != null && filteredData.productID != null" :IdProduct="filteredData.productID" :IdCart="filteredData.cartID"  :is-open="isDialogOpen"  @close="closeDialog" :formEdit="formEdit"  />

  </div>
</template>
<script setup>
import { ref,onMounted,computed,defineAsyncComponent } from "vue";
import { useCartStore } from '@/stores/cart'
const DialogUpdateCart = defineAsyncComponent(() => import('@/components/DialogUpdateCart.vue'));
const LoaderDatacomp = defineAsyncComponent(() => import('@/components/LoaderDatacomp.vue'));

import { useAuthStore } from '@/stores/auth';
import { useRouter } from 'vue-router';
const storeCart = useCartStore()
const isDialogOpen = ref(false)
const filteredData = ref({
  productID: null,
  cartID:null,
})

const authStore = useAuthStore();
const router = useRouter();

if (!authStore.isAuthenticated) {
  alert('يرجى تسجيل الدخول للوصول إلى السلة.');
  router.push('/login');
}

const selectAll = ref(false);

const toggleSelectAll = () => {
  storeCart.allCarts.forEach((product) => {
    product.selected = selectAll.value;
  });
};

// عدد المنتجات المختارة
const selectedCount = computed(() =>
storeCart.allCarts.filter((product) => product.selected).length
);

// إجمالي السعر بناءً على المنتجات المحددة
const selectedTotalPrice = computed(() =>
storeCart.allCarts.filter((product) => product.selected).reduce((sum, product) => sum + product.product_price * product.quantity, 0)
);

const updateSelectAll = () => {
  selectAll.value = storeCart.allCarts.every((product) => product.selected);
};


const formEdit = ref(null)
const openDialog = (item) => {
  isDialogOpen.value = true
  filteredData.value.productID = item.product_id;
  filteredData.value.cartID = item.id;
  formEdit.value = {...item}

}

const closeDialog = () => {
  isDialogOpen.value = false
  filteredData.value.cartID = null;
  filteredData.value.productID = null;

}

onMounted(() => {
   storeCart.fetchAllProductsInCart();
})

// update cart
const incrementQuantity = async(index) => {
  storeCart.getallCarts[index].quantity++;


  await storeCart.updateCart(
    storeCart.getallCarts[index].id,
    storeCart.getallCarts[index].product_id,
    storeCart.getallCarts[index].color_id,
    storeCart.getallCarts[index].parent_measuring_id,
    storeCart.getallCarts[index].quantity,
    storeCart.getallCarts[index].product_price,
  );
};

// update cart
const decrementQuantity = async(index) => {
  if( storeCart.getallCarts[index].quantity > 1){
    storeCart.getallCarts[index].quantity--;

    await storeCart.updateCart(
      storeCart.getallCarts[index].id,
    storeCart.getallCarts[index].product_id,
    storeCart.getallCarts[index].color_id,
    storeCart.getallCarts[index].parent_measuring_id,
    storeCart.getallCarts[index].quantity,
    storeCart.getallCarts[index].product_price,
    );
  }
};

// delete cart
const removeItem = async(cart_id) => {
  const deleteCar = await storeCart.deleteCart(cart_id)
  if(deleteCar){
    alert('تمت حذف المنتج من السلة!')
    window.location.reload();
  }else{
    alert(storeCart.error +"error")
  }
};

const checkout = () => {
  const selectedProducts = storeCart.allCarts.filter((product) => product.selected);

  if (!storeCart.allCarts || storeCart.allCarts.length === 0) {
    alert("عربة التسوق فارغة!");
    return;
  }
  if (selectedProducts.length === 0) {
    alert("لم تقم باختيار أي منتجات!");
    return;
  }

  try {
    alert("انتقال إلى صفحة تاكيد الطلب");

    // استدعاء الدوال مع التحقق
    if (typeof storeCart.saveSelectedItems === "function") {
      storeCart.saveSelectedItems();
    } else {
      console.error("saveSelectedItems غير موجودة أو ليست دالة");
    }

    if (typeof storeCart.enableCheckout === "function") {
      storeCart.enableCheckout();
    } else {
      console.error("enableCheckout غير موجودة أو ليست دالة");
    }
  } catch (error) {
    console.error("حدث خطأ أثناء تنفيذ checkout:", error);
  }

  // if (selectedProducts.length == 0) {
  //   alert("لم تقم باختيار أي منتجات!");
  //   return;
  // }else{
  //   alert("انتقال إلى صفحة تاكيد الطلب");
  //   storeCart.saveSelectedItems();
  //   storeCart.enableCheckout();
  // }


};
</script>
