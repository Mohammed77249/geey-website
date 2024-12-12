

<template>
  <div class="bg-gray-50 min-h-screen overflow-y-auto ">
    <!-- Breadcrumbs -->
    <header class="bg-white py-2  border-b">
      <nav class="text-lg container mx-auto">
        <div class="flex items-center justify-between">
          <div>
            <RouterLink to="/" class="font-bold text-black">
              {{ $t('Jeey') }}
            </RouterLink>
            <span class="mx-1">/</span>
            <a href="/cart" class="text-[15px] text-black">التسوق في اليمن</a>
          </div>

          <div class="flex items-center gap-5">
            <div class="flex items-center gap-1">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path opacity="0.4" d="M6 10V8C6 4.69 7 2 12 2C17 2 18 4.69 18 8V10" stroke="green" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M17 22H7C3 22 2 21 2 17V15C2 11 3 10 7 10H17C21 10 22 11 22 15V17C22 21 21 22 17 22Z" stroke="green" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path opacity="0.4" d="M15.9965 16H16.0054" stroke="green" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path opacity="0.4" d="M11.9955 16H12.0045" stroke="green" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path opacity="0.4" d="M7.99451 16H8.00349" stroke="green" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              <span class="text-[14px] text-green-700  font-medium">خاصية الدفع الآمن</span>
            </div>

            <div class="flex items-center gap-1">
              <span class="hover:underline text-[15px] font-normal opacity-45">مواصلة التسوق</span>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15.0001 19.92L8.48009 13.4C7.71009 12.63 7.71009 11.37 8.48009 10.6L15.0001 4.07996" stroke="gray" stroke-width="4" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
          </div>

        </div>

      </nav>
    </header>


    <main class="container mx-auto ">
      <!-- Toggle Switch -->
    <div class="flex justify-center space-x-5 mb-6">

      <div class="flex items-center py-2 ml-5">
      <button
        @click="taggleActiveShoppingBag"
        :class="[
          onclickShoppingBag
            ? 'text-primary-900 '
            : 'text-black opacity-50',
            'font-medium text-[15px]'
        ]"
      >
        {{ $t('Shopping bag') }}
        <div class="flex items-center justify-center">
          <div
          :class="[
            onclickShoppingBag ? 'bg-primary-900' : 'bg-black hidden',
            ' h-[3px] w-20 ',
          ]"
        ></div>
        <div :class="[ onclickShoppingBag ? '' : 'hidden',]" >
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M15.0001 19.92L8.48009 13.4C7.71009 12.63 7.71009 11.37 8.48009 10.6L15.0001 4.07996" stroke="#980000" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>

        </div>
      </button>
      </div>

      <div class="flex items-center px-2 py-2">
      <button
        :disabled="!cartStore.isCheckoutEnabled"
        @click="taggleActiveConfirmOrder"
        :class="[
          onclickConfirmOrder
            ? ' text-primary-900'
            : ' text-black opacity-50',
            'font-medium text-[15px]'
        ]"
      >
         {{ $t('Confirm the order') }}
         <div class="flex items-center justify-center">
          <div
          :class="[
            onclickConfirmOrder ? 'bg-primary-900' : 'bg-black hidden',
            ' h-[3px] w-20 ',
          ]"
        ></div>
        <div :class="[ onclickConfirmOrder ? '' : 'hidden',]" >
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M15.0001 19.92L8.48009 13.4C7.71009 12.63 7.71009 11.37 8.48009 10.6L15.0001 4.07996" stroke="#980000" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>

        </div>
      </button>
      </div>

      <div class="flex items-center px-2 py-2">
      <button
      disabled
        @click="taggleActivePay"
        :class="[
          onclickPay
            ? ' text-primary-900'
            : ' text-black opacity-50',
            'font-medium text[24px]'
        ]"
      >
         {{ $t('Pay') }}
         <div class="flex items-center justify-center">
          <div
          :class="[
            onclickPay ? 'bg-primary-900' : 'bg-black hidden',
            ' h-[3px] w-16 ',
          ]"
        ></div>
        <div :class="[ onclickPay ? '' : 'hidden',]" >
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M15.0001 19.92L8.48009 13.4C7.71009 12.63 7.71009 11.37 8.48009 10.6L15.0001 4.07996" stroke="#980000" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>

        </div>
      </button>
      </div>

      <div class="flex items-center px-2 py-2">
      <button
      disabled
        @click="taggleActiveRequestDone"
        :class="[
          onclickRequestDone
            ? ' text-primary-900'
            : 'text-black opacity-50',
            'font-medium text[24px] '
        ]"
      >
         {{ $t('Request done') }}
         <div class="flex items-center justify-center">
          <div
          :class="[
            onclickRequestDone ? 'bg-primary-900' : 'bg-black hidden',
            ' h-[3px] w-20 ',
          ]"
        ></div>
        <div :class="[ onclickRequestDone ? '' : 'hidden',]" >
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M15.0001 19.92L8.48009 13.4C7.71009 12.63 7.71009 11.37 8.48009 10.6L15.0001 4.07996" stroke="#980000" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>

        </div>
      </button>
      </div>
    </div>

    <div v-if="onclickShoppingBag">
      <ShoppingBag />
    </div>

    <div v-if="onclickConfirmOrder">
      <ConfirmOrder />
    </div>

    <div v-if="onclickPay">
      <PayMoney />
    </div>

    <div v-if="onclickRequestDone">
      <RequestDone />
    </div>

    </main>


    <div v-if="onclicknoproduct" class="bg-white w-full ">
      <ProductUnder/>
    </div>

  </div>
</template>

<script setup>
import ShoppingBag from './cart/ShoppingBag.vue';
import ConfirmOrder from './cart/ConfirmOrder.vue';
import PayMoney from './cart/PayMoney.vue';
import RequestDone from './cart/RequestDone.vue';
import { useCartStore } from '../stores/cart.js';
import { ref ,watch} from 'vue'
import ProductUnder from './cart/ProductUnder.vue';

const cartStore = useCartStore();
const onclicknoproduct = ref(true)

const onclickShoppingBag = ref(true)
const onclickConfirmOrder = ref(false)

const onclickPay = ref(false);
const onclickRequestDone = ref(false)

watch(()=>{
  if(cartStore.isCheckoutEnabled){
  onclickConfirmOrder.value = true;
  onclickShoppingBag.value = false;
}
})


const taggleActiveShoppingBag = () => {
  onclickConfirmOrder.value = onclickConfirmOrder.value = false
  onclickShoppingBag.value = onclickShoppingBag.value = true
  onclickPay.value = onclickPay.value = false
  onclickRequestDone.value = onclickRequestDone.value = false

  onclicknoproduct.value =true

}

const taggleActiveConfirmOrder = () => {
  onclickShoppingBag.value = onclickShoppingBag.value = false
  onclickConfirmOrder.value = onclickConfirmOrder.value = true
  onclickPay.value = onclickPay.value = false
  onclickRequestDone.value = onclickRequestDone.value = false

  onclicknoproduct.value =false
};

const taggleActivePay = () => {
  onclickConfirmOrder.value = onclickConfirmOrder.value = false
  onclickShoppingBag.value = onclickShoppingBag.value = false
  onclickPay.value = onclickPay.value = true
  onclickRequestDone.value = onclickRequestDone.value = false
};

const taggleActiveRequestDone = () => {
  onclickConfirmOrder.value = onclickConfirmOrder.value = false
  onclickShoppingBag.value = onclickShoppingBag.value = false
  onclickPay.value = onclickPay.value = false
  onclickRequestDone.value = onclickRequestDone.value = true
};



</script>

