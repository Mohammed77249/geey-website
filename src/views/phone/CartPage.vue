<template>
  <div class="bg-gray-50 w-full min-h-screen h-full">
    <!-- header -->
    <div class="fixed inset-0  flex items-center justify-between  bg-white p-2 shadow h-12">
      <div class=" text-sm font-bold">
      حقيبه التسوق
     </div>

     <!-- like button -->
                <div class="">
                  <RouterLink to="/phone/favorite">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12.62 20.812C12.28 20.932 11.72 20.932 11.38 20.812C8.48 19.822 2 15.692 2 8.69199C2 5.60199 4.49 3.10199 7.56 3.10199C9.38 3.10199 10.99 3.98199 12 5.34199C12.5138 4.64787 13.183 4.08372 13.954 3.69473C14.725 3.30575 15.5764 3.10275 16.44 3.10199C19.51 3.10199 22 5.60199 22 8.69199C22 15.692 15.52 19.822 12.62 20.812Z" stroke="#8a1538" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </RouterLink>
                </div>

    </div>

    <!-- list cats -->
    <div class="mt-10 pt-5 pb-32  ">
      <div class="space-y-2 ">
          <div v-if="storeCart.loading" class="mt-10">
            <LoaderDatacomp :is-loader="storeCart.loading"/>
          </div>
          <div v-else class="grid grid-cols-12   w-full gap-6 p-4 shadow bg-white "  v-for="(item,index) in storeCart.getallCarts" :key="item.id">

            <div class="col-span-3 flex gap-2">
              <input
                type="checkbox"
                v-model="item.selected"
                class="w-4 h-3 text-primary-900"
                @change="updateSelectAll"
              />
              <div class="w-[150px] h-[70px] ">
                <img :src="item.image !='https:\/\/jeeey-dashboard.najaz.in\/storage' ? item.image :'/jeeeeylogo3.jpg'"  alt="" class=" h-full w-full rounded-lg border   " />

              </div>
            </div>
            <div class="col-span-6 ">
              <div class=" mx-1 mt-1">
                <!-- <RouterLink  :to="`/phone/product/${item.product_id}`"> -->
              <h3 class="font-semibold text-xs mb-2 ">{{ item.product_name }}</h3>
            <!-- </RouterLink> -->
              <button  @click="openDialog(item)"  class="border-[1px] px-2 mb-2 rounded-full flex items-center justify-center">
                <div class="flex">
                <span  class="text-xs md:text-sm text-gray-500 cursor-pointer">
                {{ $t("Color") }}:

              </span>
              <div class="w-3 h-3 rounded-full flex items-center justify-center mt-[2px] mx-1" :style="{ backgroundColor: item.color_hex }" ></div>
              </div>
                <span class="text-xs md:text-sm text-gray-500 cursor-pointer ">
                  , {{ $t("Size") }}: {{ item.measuring_value }}
                </span>


              </button>

              <!-- <p class="text-primary-900 text-xs  font-semibold mb-2">-0%</p> -->
               <div class="flex items-center gap-2">
                <p class="text-xs  font-bold"> {{ item.product_price * item.quantity  }}</p>
                <p class=" text-[8px] text-primary-900 "> {{ currency?currency:'YER' }} </p>
               </div>

            </div>

            </div>
            <div class="col-span-3  flex items-end justify-end ">
              <div class="flex items-center  ">

                <!-- more product -->
                <div>
                  <div class="flex items-center gap-2 ">

                    <button
                    :class=" item.quantity == 1 ? 'block' :'hidden'"
                      class="px-[1px] h-[15px] flex items-center rounded border border-[#8a1538]"
                      @click="removeItem(item.id)"
                    >
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21 5.97998C17.67 5.64998 14.32 5.47998 10.98 5.47998C9 5.47998 7.02 5.57998 5.04 5.77998L3 5.97998" stroke="#8a1538" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path opacity="0.34" d="M8.5 4.97L8.72 3.66C8.88 2.71 9 2 10.69 2H13.31C15 2 15.13 2.75 15.28 3.67L15.5 4.97" stroke="#8a1538" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M18.85 9.14001L18.2 19.21C18.09 20.78 18 22 15.21 22H8.79C6 22 5.91 20.78 5.8 19.21L5.15 9.14001" stroke="#8a1538" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path opacity="0.34" d="M10.33 16.5H13.66" stroke="#8a1538" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path opacity="0.34" d="M9.5 12.5H14.5" stroke="#8a1538" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    </button>

                    <button
                    :class=" item.quantity >1 ? 'block' :'hidden'"
                      class="bg-primary-900 hover:bg-primary-800 px-1 h-[15px] text-md flex items-center text-white rounded"
                      @click="decrementQuantity(index)"
                    >
                      -
                    </button>



                    <span class="font-semibold text-xs">{{ item.quantity }}</span>
                    <button
                      class="bg-primary-900 hover:bg-primary-800 px-1 h-[15px] rounded text-xs flex items-center text-white"
                      @click="incrementQuantity(index)"
                    >
                      +
                    </button>
                  </div>
                </div>

              </div>

            </div>

          </div>

        </div>

    </div>

    <!-- pay -->
    <div class="bg-white py-3  mb-14   px-2 flex items-center gap-2 justify-between fixed bottom-0 w-full">
      <div>
        <button  @click="checkout" class="bg-[#8a1538] px-10 rounded py-3 text-white text-sm font-semibold">
          الدفع
        </button>
        <span class="text-primary-900 text-sm"> YER {{ selectedTotalPrice }}</span>
      </div>
      <div>
        <div class="flex items-center " >
          <h2 class="font-medium text-sm px-2">الكل</h2>
              <input type="checkbox"
                v-model="selectAll"
                @change="toggleSelectAll"
                class="h-4 w-4 peer-checked:bg-black rounded-full peer-checked:border-black cursor-pointer transition-all duration-300 border border-black "/>

            </div>
      </div>


    </div>


    <DialogUpdateCart v-if="filteredData.cartID != null && filteredData.productID != null" :IdProduct="filteredData.productID" :IdCart="filteredData.cartID"  :is-open="isDialogOpen"  @close="closeDialog" :formEdit="formEdit"  />

  </div>
</template>


<script setup>
import { ref,onMounted,computed,defineAsyncComponent } from "vue";
import { useCartStore } from '@/stores/cart'
const DialogUpdateCart = defineAsyncComponent(() => import('@/components/phone/DialogUpdateCart.vue'));
const LoaderDatacomp = defineAsyncComponent(() => import('@/components/LoaderDatacomp.vue'));
import { useI18n } from 'vue-i18n';
const { t } = useI18n();
import { useRouter } from 'vue-router';
const storeCart = useCartStore()
const isDialogOpen = ref(false)
const filteredData = ref({
  productID: null,
  cartID:null,
})

const router = useRouter();

const currency = localStorage.getItem('currency');

const selectAll = ref(false);

const toggleSelectAll = () => {
  storeCart.allCarts.forEach((product) => {
    product.selected = selectAll.value;
  });
};



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
    alert(t("Your shopping cart is empty!"));
    return;
  }
  if (selectedProducts.length === 0) {
    alert(t("You have not selected any products!"));
    return;
  }

  try {
    // alert(t("Go to the order confirmation page"));

    router.push("/phone/confirmOrder");
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
