<template>
  <div >
    <div class="container mx-auto grid grid-cols-3 gap-4 mb-5">
      <!-- القسم الأيمن: عنوان الشحن -->
       <div class="col-span-3 md:col-span-2">
        <div class="p-3">
          <h2 class="text-lg font-bold text-gray-800 mb-4"> {{ $t("Shipping address") }} </h2>
          <form class="space-y-4" @submit.prevent="handlOrder">
            <!-- الصف الأول:  اضافه  الموقع  -->
             <div class="bg-white border shadow ">
              <div class="flex items-center ">
                <button
                  type="button"
                  @click="openDialog()"
                  class="w-full flex items-center justify-center  text-primary-900 py-6 font-semibold  text-md"
                >
                   <p v-if="localValueName">{{ localValueName  }}</p>
                   <p v-else>{{ $t("the address") }}</p>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
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
                <label class="block text-sm font-semibold text-gray-600 mb-2"> {{ $t("Recipient's phone number") }}</label>
                <input
                  type="text"
                   placeholder="YE +967"
                   v-model="filteredData.phone_number"
                  class="w-full border  border-gray-300 py-4  p-2 text-sm focus:outline-none focus:ring-0 focus:ring-black focus:border-black focus:border-[1px]"
                />
              </div>

             <!-- وسيله الشحن -->
              <div class="bg-white p-2 border shadow">
                <label class="block text-sm font-semibold text-gray-600 mb-2"> {{ $t("Shipping method") }}</label>

                <div class="mb-2 p-2 border"  v-for="delevery in storeOrder.getDeliveryTypes" :key="delevery.id" >
                  <div class="flex items-center">
                    <input
                      id="default-radio-1"
                      type="radio"
                      :value="delevery.id"
                      name="colored-radio"
                      class="w-4 h-4 text-primary-900 bg-gray-100 border-gray-300    focus:ring-primary-900"
                      v-model="filteredData.delivery_type_id"
                    />
                    <label for="default-radio-1" class="mr-2 text-sm font-medium text-gray-900">{{ delevery.name }}</label>
                  </div>
                  <div>
                  <span class="mr-6  text-sm font-normal text-primary-700">{{ delevery.cost_of_kilo }}</span>
                  </div>
                </div>
              </div>

              <!--  طريقه الدفع -->
              <div class="bg-white p-2 border shadow">
                <label class="block text-sm font-semibold text-gray-600 mb-2">  {{ $t("payment method") }} </label>

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
                      class="w-4 h-4 text-primary-900  bg-gray-100 end border-gray-300 focus:ring-primary-900"
                      v-model="filteredData.payment_id"
                    />
                  </div>
                </div>
              </div>

              <!--   تفاصيل الطلب -->
              <div class="">
                <div class="w-full h-full  mt-10 bg-white p-3">
                  <div class="flex items-center justify-between ">
                    <span class="text-[16px] font-semibold">  |{{ $t("Order details") }}</span>

                    <div class="flex items-center gap-2">
                      <button class="text-[16px]  font-semibold">
                      {{ $t("View one product") }}
                    </button>

                    <svg v-if="storedLanguage == 'ar'" width="15" height="15" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.0001 19.92L8.48009 13.4C7.71009 12.63 7.71009 11.37 8.48009 10.6L15.0001 4.07996" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>

                    <svg v-if="storedLanguage == 'en'" width="15" height="15" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8.90991 19.92L15.4299 13.4C16.1999 12.63 16.1999 11.37 15.4299 10.6L8.90991 4.07996" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    </div>
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

            <!-- زر الحفظ -->
            <button
              type="submit"
              class="w-full bg-primary-900 text-white py-5 font-semibold  text-sm"
            >
             {{ $t("Confirm the order") }}
            </button>
          </form>
        </div>
      </div>

      <!-- القسم الأيسر: ملخص الطلب -->
      <div class="col-span-1 h-screen mt-14 hidden md:block">
        <div class="bg-white shadow  p-4">
              <!-- عنوان القسم -->
            <h2 class="text-lg font-bold text-gray-800 mb-4"> {{ $t("Order summary") }}</h2>
            <!-- تفاصيل الأسعار -->
            <div class="space-y-2">
              <div class="flex justify-between text-sm text-gray-500">
                <span> {{ $t("Unit price") }}:</span>
                <span class="line-through text-gray-400">SR32.00</span>
              </div>
              <div class="flex justify-between text-sm text-gray-500">
                <span> {{ $t("Total products") }}:</span>
                <span class="text-red-500 font-semibold">SR27.20</span>
              </div>
            </div>
        </div>

        <!-- نقاط المكافآت -->
        <!-- <div class="mt-4 p-4 bg-white shadow  flex items-center text-sm text-yellow-700">
          <p>🎉 لديك <span class="font-semibold">7 نقاط مكافأة</span></p>
        </div> -->
        <!-- Shein Club -->
        <!-- <div class="mt-4 bg-yellow-50 p-4 text-sm">
          <p class="font-bold text-green-700 mb-1">Jeey Club</p>
          <p>تكلفة الانضمام: <span class="text-red-500 font-bold">SR99.99</span></p>
          <p class="text-xs text-gray-500 mt-1">
            من خلال الانضمام، ستوافق على <span class="text-blue-500 underline">الشروط والأحكام</span>
          </p>
        </div> -->


        <!--  <div class="mt-4 bg-white shadow p-4"> -->
           <!-- رمز القسيمة -->
            <!-- <div class="mt-4">
              <label class="block text-md font-semibold text-black mb-2">رمز القسيمة</label>
              <div class="flex items-center space-x-2 rtl:space-x-reverse">
                <input
                disabled
                  type="text"
                  placeholder="أدخل الرمز"
                  class="w-full border border-gray-300 py-3 p-2 text-sm focus:ring focus:ring-indigo-500"
                />
                <button disabled class="bg-white border border-black  px-4 py-3  text-sm font-semibold text-black hover:bg-gray-50">
                  تقديم
                </button>
              </div>
            </div> -->

            <!-- بطاقة هدية -->
            <!-- <div class="mt-4">
              <label class="block text-md font-semibold text-black mb-2">بطاقة هدية</label>
              <div class="flex items-center space-x-2 rtl:space-x-reverse">
                <input
                disabled
                  type="text"
                  placeholder="رقم البطاقة"
                  class="w-full border border-gray-300  p-2 py-3 text-sm focus:ring focus:ring-indigo-500"
                />
                <button disabled class="bg-white border border-black  px-4 py-3  text-sm font-semibold text-black hover:bg-gray-50">
                  تقديم
                </button>
              </div>
            </div> -->

            <!-- زر تأكيد الطلب -->
            <!-- <button
            disabled class="mt-6 w-full bg-primary-900 text-white py-4  font-semibold hover:bg-primary-800 text-sm"
            >
              تأكيد الطلب
            </button> -->

        <!--</div>   -->

      </div>
    </div>

    <DialogAddAddress :is-open="isDialogOpen" @close="closeDialog" :titles="storeOrder.getUserAddresses" :loading="storeOrder.loading" :error="storeOrder.error" />
  </div>
</template>

<script setup>
import { useCartStore } from '@/stores/cart'
import { useConfirmOrders } from '@/stores/confirmorder'
import { ref,onMounted ,onBeforeUnmount,defineAsyncComponent} from "vue";
const DialogAddAddress = defineAsyncComponent(() => import('@/components/DialogAddAddress.vue'));

const storeCart = useCartStore();
const storeOrder = useConfirmOrders();
import { useRouter } from 'vue-router';
const router = useRouter();
const storedLanguage = localStorage.getItem("language");
const isDialogOpen = ref(false)

const openDialog = () => {
  isDialogOpen.value = true
}

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
        router.push('/');
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


