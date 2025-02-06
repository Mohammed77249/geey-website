<template>
    <div class="bg-gray-100 h-screen">
    <!-- header -->
    <div class="fixed inset-0  bg-white p-2 shadow h-12">

      <div class="grid grid-cols-12 mt-2 items-center justify-between">
        <!-- back button -->
          <div class="col-span-3">
            <RouterLink to="/phone/cart">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8.90991 19.92L15.4299 13.4C16.1999 12.63 16.1999 11.37 15.4299 10.6L8.90991 4.07996" stroke="#8a1538" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </RouterLink>
          </div>
          <div class=" col-span-6 text-sm font-bold text-center">
          تاكيد الطلب
          </div>
      </div>


    </div>


      <!-- main content -->
      <div>
        <div class="mt-12 pt-3">
        <div class="">
          <form class="space-y-3" @submit.prevent="handlOrder">
            <!-- الصف الأول:  اضافه  الموقع  -->
             <div class="bg-white border shadow ">
              <div class="flex items-center ">
                <button
                  type="button"
                  @click="openDialog()"
                  class="w-full flex items-center justify-center  text-primary-900 py-4 font-semibold  text-sm"
                >
                   <p v-if="localValueName">{{ localValueName  }}</p>
                   <p v-else>{{ $t("the address") }}</p>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g opacity="0.4">
                <path d="M9.25 11H14.75" stroke="#8a1538" stroke-width="1.5" stroke-linecap="round"/>
                <path d="M12 13.75V8.25" stroke="#8a1538" stroke-width="1.5" stroke-linecap="round"/>
                </g>
                <path d="M3.62001 8.49C5.59001 -0.169998 18.42 -0.159997 20.38 8.5C21.53 13.58 18.37 17.88 15.6 20.54C13.59 22.48 10.41 22.48 8.39001 20.54C5.63001 17.88 2.47001 13.57 3.62001 8.49Z" stroke="#8a1538" stroke-width="1.5"/>
                </svg>
                </button>


              </div>

             </div>

            <!-- الصف الثاني: أرقام الهواتف -->
              <div class="bg-white border shadow p-2">
                <label class="block text-xs font-semibold text-gray-600 mb-2"> {{ $t("Recipient's phone number") }}</label>
                <input
                  type="text"
                   placeholder="YE +967"
                   v-model="filteredData.phone_number"
                  class="w-full border  border-gray-300 py-3  p-2 text-sm focus:outline-none focus:ring-0 focus:ring-black focus:border-black focus:border-[1px]"
                />
              </div>

             <!-- وسيله الشحن -->
              <div class="bg-white p-2 border shadow">
                <label class="block text-xs font-semibold text-gray-600 mb-2"> {{ $t("Shipping method") }}</label>

                <div class="mb-2 p-1 border"  v-for="delevery in storeOrder.getDeliveryTypes" :key="delevery.id" >
                  <div class="flex items-center">
                    <input
                      id="default-radio-1"
                      type="radio"
                      :value="delevery.id"
                      name="colored-radio"
                      class="w-3 h-3 text-primary-900 bg-gray-100 border-gray-300    focus:ring-primary-900"
                      v-model="filteredData.delivery_type_id"
                    />
                    <label for="default-radio-1" class="mr-2 text-xs font-medium text-gray-900">{{ delevery.name }}</label>
                  </div>
                  <div>
                  <span class="mr-6  text-xs font-normal text-primary-900">{{ delevery.cost_of_kilo }}</span>
                  </div>
                </div>
              </div>

              <!--  طريقه الدفع -->
              <div class="bg-white p-2 border shadow">
                <label class="block text-xs font-semibold text-gray-600 mb-2">  {{ $t("payment method") }} </label>

                <div class="mb-2 p-2 border flex items-center justify-between" v-for="pay in storeOrder.getPaymentMethods" :key="pay.id" >
                  <div class="flex items-center gap-5 ">
                    <div class="w-10 h-10 bg-gray-200 flex items-center justify-center">
                    </div>
                    <label for="default-radio-3" class="mr-2 text-sm font-medium text-gray-900"> {{ pay.name }} </label>
                  </div>
                  <div>
                    <input
                      id="default-radio-3"
                      type="radio"
                      :value="pay.id"
                      name="default-radio"
                      class="w-4 h-4 text-primary-900  bg-gray-100  border-gray-300 focus:ring-primary-900"
                      v-model="filteredData.payment_id"
                    />
                  </div>
                </div>
              </div>

              <!--   تفاصيل الطلب -->
              <div class="">
                <div class="w-full h-full   bg-white p-1">
                  <div class="flex items-center justify-between ">
                    <span class="text-sm font-semibold">  {{ $t("Order details") }}</span>
                  </div>

                  <div class=" p-2 w-full h-full ">
                    <div class="bg-gray-100 overflow-x-auto  h-full flex ">
                      <div v-for="(item,index) in storeCart.selectedItems" :key="index">

                        <div class="p-2">
                          <div class="w-28 h-32 ">
                            <img
                            :src="item.image"
                            alt="Product Image"
                            class="w-full h-full object-cover"
                          />
                          </div>

                          <div class="mt-1 flex justify-between ">
                            <span class=" text-xs text-primary-900 font-medium">{{ item.product_currency }} {{ item.product_price }}</span>
                            <span class=" text-xs text-primary-900 font-medium">%0</span>
                          </div>
                            <div class="mt-2 flex justify-center">
                              <h3 class="font-semibold text-xs ">{{ item.product_name }}</h3>
                              <!-- <div class="flex items-center  ">
                                <button
                                  class="bg-white border border-gray-400 hover:border-black px-2 py-[1px] text-black rounded-s-full"
                                  @click="decrementQuantity(index)"
                                >
                                  -
                                </button>
                                <span class="font-semibold border-y  bg-white text-center border-gray-400 w-5 h-7 ">{{ item.quantity }}</span>
                                <button
                                  class="bg-white border border-gray-400 hover:border-black px-2 py-[1px]  rounded-e-full text-black"
                                  @click="incrementQuantity(index)"
                                >
                                  +
                                </button>
                              </div> -->
                            </div>
                        </div>

                      </div>
                    </div>
                  </div>
               </div>

              </div>


              <div class="pb-20">
                <div class="bg-white  shadow p-4">
                  <h2 class="font-semibold text-sm mb-4">{{ $t("Order summary") }} </h2>
                  <div class="text-sm">
                    <div class="flex justify-between py-2">
                      <span class="text-xs"> تكلفه التوصيل:</span>
                      <span  class="text-xs"> YER 0</span>
                    </div>
                    <div class="flex justify-between py-2">
                      <span  class="text-xs">{{ $t("Discount") }}:</span>
                      <span  class="text-xs">- YER {{ storeCart.totalDiscount }}</span>
                    </div>
                    <div class="border-t my-2"></div>
                    <div class="flex justify-between font-semibold text-lg">
                      <span  class="text-sm">{{ $t("Total") }}:</span>
                      <span class="text-primary-900 text-sm"> YER {{ selectedTotalPrice }}</span>
                    </div>
                  </div>
                </div>

              </div>

            <!-- زر الحفظ -->
            <div class="bg-white py-2 px-2  flex items-center   fixed bottom-0 w-full">
            <button
              type="submit"
              class="w-full  bg-primary-900 text-white py-4 font-semibold  text-sm"
            >
             {{ $t("Confirm the order") }}
            </button>
          </div>
          </form>
        </div>
      </div>
      </div>

    <DialogShowAddresses :is-open="isDialogOpen" @close="closeDialog" :titles="storeOrder.getUserAddresses" :loading="storeOrder.loading" :error="storeOrder.error" />

  </div>
</template>

<script setup>
import { useCartStore } from '@/stores/cart'
import { useConfirmOrders } from '@/stores/confirmorder'
import { ref,onMounted ,onBeforeUnmount,defineAsyncComponent,computed} from "vue";
const DialogShowAddresses = defineAsyncComponent(() => import('@/components/phone/DialogShowAddresses.vue'));

const storeCart = useCartStore();
const storeOrder = useConfirmOrders();
import { useRouter } from 'vue-router';
const router = useRouter();
// const storedLanguage = localStorage.getItem("language");
const isDialogOpen = ref(false)

const openDialog = () => {
  isDialogOpen.value = true
}

const selectedTotalPrice = computed(() =>
storeCart.selectedItems.reduce((sum, product) => sum + product.product_price * product.quantity, 0)
);

const filteredData = ref({
  products: null,
  address_id: null,
  payment_id: null,
  delivery_type_id:null,
  note: 'mm',
  unit_price:12,
  phone_number:null
})


const localValueId = ref(localStorage.getItem("adressInfoId") );
const localValueName = ref(localStorage.getItem("adressInfoName"));


const updateLocalValue = () => {
  localValueId.value = localStorage.getItem("adressInfoId");
  localValueName.value = localStorage.getItem("adressInfoName");
};

const products_for_order = ref([]);
const handlOrder = async () => {
  products_for_order.value = storeCart.selectedItems.map((product) => ({
    id:product.id,
    product_id: product.product_id,
    product_name:product.product_name,
    parent_measuring_id: product.parent_measuring_id,
    color_id: product.color_id != 0 ?  product.color_id : null ,
    quantity: product.quantity,
    price:product.product_price,
  }));


  filteredData.value.products = JSON.stringify(products_for_order.value);
  filteredData.value.address_id = localValueId;
  const createorder = await storeOrder.creatOrder(filteredData.value);
  if(createorder){
    alert("تم الاضافه بنجاح")
    window.location.reload();
    localStorage.removeItem("adressInfoName");
    localStorage.removeItem("adressInfoId");
    setTimeout(() => {
        router.push('/phone/home');
      }, 1500);
  }else{
    alert(storeOrder.error + "error");
    localStorage.removeItem("adressInfoName");
    localStorage.removeItem("adressInfoId");
  }
  localStorage.removeItem("adressInfoName");
  localStorage.removeItem("adressInfoId");
};

const closeDialog = () => {
  isDialogOpen.value = false
  localStorage.removeItem('long')
  localStorage.removeItem('lat')
  localStorage.removeItem('city')
  localStorage.removeItem('region')
  window.dispatchEvent(new Event("storage"));
}

onMounted(()=>{
  storeOrder.fetchDataOrders();

  window.addEventListener("storage", updateLocalValue);
})

onBeforeUnmount(() => {
  window.removeEventListener("storage", updateLocalValue);
});


</script>
