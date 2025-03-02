<template>
  <div class="bg-gray-50 h-screen">
     <!-- header -->
     <div
      class="fixed inset-0 grid grid-cols-12 items-center justify-between bg-white p-2 shadow h-12"
    >
      <!-- back button -->
      <div class="col-span-2">
        <RouterLink to="/phone/user/setting">
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
        </RouterLink>
      </div>
      <div class="col-span-8 text-sm font-bold text-center">تغيير العملة</div>
    </div>

    <!-- content -->
    <div class="mt-12 pt-2 ">
      <div v-if="storeCurrency.loading" class="mt-4">
      <LoaderDatacomp :is-loader="storeCurrency.loading"/>
    </div>
    <div v-else  class="grid grid-cols-1">
      <div v-for="currency in storeCurrency.getAllCurrencies" :key="currency.id" @click="clickCurrency(currency)" class="flex items-center justify-between py-3 border-b-2  bg-white px-2">
        <div class="flex items-center gap-3">
          <span class="text-xs font-semibold ">{{ currency.code }}</span>
          <span class="text-xs font-thin text-gray-700">{{ currency.symbol }}</span>
        </div>

        <div >
          <svg v-if="temp == currency.code "
            xmlns="http://www.w3.org/2000/svg"
            class="w-5 h-4 text-primary-900  transition-colors cursor-pointer"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"
            />
          </svg>

        </div>


      </div>

    </div>

    </div>
  </div>
</template>

<script setup>
import { onMounted,defineAsyncComponent,ref} from "vue";
import { useCurrenciesStore } from '@/stores/currencie'
const LoaderDatacomp = defineAsyncComponent(() => import('@/components/LoaderDatacomp.vue'));
import { useRouter } from 'vue-router';

const storeCurrency = useCurrenciesStore()
const router = useRouter();
const temp = ref(null)
const clickCurrency = (currency)=>{
  if(currency){
    if (temp.value == currency.code) {
      temp.value = null
    } else {
      temp.value = currency.code
      localStorage.setItem('currency',temp.value);

      // for footer
      localStorage.setItem('activePage', 'home');
      router.push("/phone/home");
      // window.location.reload();
    }

  }

}


onMounted(async() => {
  await storeCurrency.fetchAllCurrencies();
  const cu = localStorage.getItem('currency');
  if(cu){
    temp.value = cu
  }else{
    temp.value = storeCurrency.getAllCurrencies[0].code
    localStorage.setItem('currency',temp.value);

  }

});
</script>


