<template>
  <div
    v-if="props.isOpen"
    class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
  >
    <!-- Dialog Container -->
    <div
      class="bg-white w-full max-w-3xl  gap-5 overflow-y-auto custom-scroll   max-h-[500px] h-full  shadow-lg p-2"
    >
      <!-- Dialog Header -->
      <div class="flex justify-end  items-center ">
        <button
          @click="close"
          class="text-primary-900 text-[20px] hover:text-black"
        >
          &times;
        </button>
      </div>

      <!-- Dialog Content -->
      <div >
        <div v-if="props.loading">
          <LoaderDatacomp :isLoader="props.loading" />
        </div>
        <div v-else-if="props.error">{{ props.error }}</div>
        <div v-else-if="props.titles">
         <div class="flex items-center justify-between mt-10 bg-gray-100 py-4 p-5">
          <h1 class="text-primary-900 font-bold  text-xl">عناوينك</h1>

          <button type="button" class="w-[200px] bg-primary-900 text-white py-3 font-semibold  text-sm">
            اضافه عنوان جديد
          </button>
         </div>

         <div class="mt-5 p-4 overflow-y-auto">
            <div class="bg-gray-50 "  v-for="address in titles" :key="address.id" >
              <div class="grid grid-cols-12    p-2 ">
                <div class=" col-span-1 w-12  rounded-full h-12 bg-gray-200 ">
                  <div class="flex items-center justify-center mt-[6px]">
                    <svg  width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="36" height="36" rx="18" fill="#8A1538"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M10.9167 16.598C10.9167 12.7647 14.12 9.6665 17.9946 9.6665C21.8802 9.6665 25.0834 12.7647 25.0834 16.598C25.0834 18.5296 24.3809 20.3229 23.2247 21.8428C21.9491 23.5194 20.3769 24.9802 18.6072 26.1269C18.2022 26.3919 17.8366 26.4119 17.3921 26.1269C15.6124 24.9802 14.0402 23.5194 12.7755 21.8428C11.6184 20.3229 10.9167 18.5296 10.9167 16.598ZM15.6619 16.8138C15.6619 18.0979 16.7098 19.1079 17.9946 19.1079C19.2803 19.1079 20.3382 18.0979 20.3382 16.8138C20.3382 15.5397 19.2803 14.4805 17.9946 14.4805C16.7098 14.4805 15.6619 15.5397 15.6619 16.8138Z" fill="white"/>
                    </svg>
                  </div>
                </div>
                <div class="col-span-2  ">
                  <p class="text-md font-semibold text-black">{{ address.address }}</p>
                  <span class="text-sm font-normal text-black">{{ address.city.name }}</span> -
                  <span class="text-sm font-normal text-black">{{ address.district.name }}</span>
                </div>
                <div class="col-span-9 ">
                  <div class="flex items-center justify-end  mt-[10px]">
                    <input
                      id="default-radio-3"
                      type="radio"
                      value="option3"
                      name="default-radio"
                      class="w-4 h-4 text-primary-900  bg-gray-100 focus:ring-primary-900 "
                      v-model="selectedOption"
                    />
                  </div>
                </div>
              </div>
            </div>
         </div>


        </div>
        <div v-else>
        <span>no data</span>
      </div>

      </div>



    </div>
  </div>
</template>

<script setup>
import { defineProps, defineEmits,ref } from "vue";
// import DialogComp from "./DialogComp.vue";
import LoaderDatacomp from "./LoaderDatacomp.vue";
// const storedLanguage = localStorage.getItem("language");
// import { useCartStore } from '@/stores/cart'
// const storeCart = useCartStore()
// Props
const props = defineProps({
  isOpen: {
    type: Boolean,
    required: true,
  },
  titles:{
    type: [],
  },
  loading:{
    type:Boolean
  },
  error:{
    type:String
  },
});

// const isHover = ref(false)
// const hoverId = ref(null)
// const onhover = image => {
//   isHover.value = true
//   hoverId.value = image
// }

// alert(props.IdProduct)
// const filteredData = ref({
//   product_id:  null,
//   color_id: null,
//   size_id: null,
//   quantity: 1,
// })

// const tempidSize = ref(null)
// const onclickSize = id => {
//   if(id){
//     filteredData.value.size_id = id
//   if (tempidSize.value === id) {
//     tempidSize.value = null
//   } else {
//     tempidSize.value = id
//   }
//   }

// }

// const tempidColor = ref(null)
// const toggleColor = id => {

//   if(id){
//     filteredData.value.color_id = id
//   if (tempidColor.value === id) {
//     tempidColor.value = null
//   } else {
//     tempidColor.value = id
//   }
//   }

// }



// const isDialogOpen = ref(false)

// const openDialog = () => {
//   isDialogOpen.value = true
// }

// const closeDialog = () => {
//   isDialogOpen.value = false
// }



// const addToCart = async() => {
//   if(props.productDetails && props.productDetails.id != null){
//     filteredData.value.product_id = props.productDetails.id
//   }

//   if(filteredData.value.color_id === null ){
//     alert("ادخ اللون ")
//   }else if(filteredData.value.size_id === null){
//     alert("ادخل المقاس")
//   }
//   else{
//     const addcart = await storeCart.creatCart(
//     filteredData.value.product_id,
//     filteredData.value.color_id,
//     filteredData.value.size_id,
//     filteredData.value.quantity,
//   )


//   if (addcart) {
//     if (storeCart.getcartProductMessage != null) {
//       // alert(storeCart.getcartProductMessage)
//       window.location.reload();
//       close()
//     } else {
//       alert('تمت إضافة المنتج إلى السلة!')
//       window.location.reload();
//       close()
//     }
//   } else {
//     alert(storeCart.error)
//     window.location.reload();
//       close()
//   }

//   }

// };



// Emits
const emit = defineEmits(["close"]);

// Close the dialog
const close = () => {
  emit("close");
};




</script>


<style>
.custom-scroll::-webkit-scrollbar {
  width: 5px;
  opacity: 0;
}
.custom-scroll:hover::-webkit-scrollbar,
.custom-scroll:active::-webkit-scrollbar {
  opacity: 1;
}

.custom-scroll::-webkit-scrollbar-track {
  background: transparent;
}
.custom-scroll::-webkit-scrollbar-thumb {
  background-color: rgba(0, 0, 0, 0.4);
  border-radius: 4px;
}
</style>






