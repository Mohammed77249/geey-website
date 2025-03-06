<template>
  <div v-if="props.isOpen"  class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
    <div class="fixed bottom-0  w-full border-t-2 bg-white rounded z-50 max-h-[500px] h-full overflow-x-auto  custom-scroll ">
      <!-- header -->
      <div class="border-b-2">
        <div class="py-1 px-4 grid grid-cols-12 items-center ">
                <h1 class="col-span-11 text-gray-500 font-bold text-center text-sm"> أضف الى القائمة</h1>
                <button
                  @click="close"
                  class="text-primary-900 col-span-1  text-[20px] hover:text-black"
                >
                  &times;
                </button>
              </div>
      </div>

      <!-- content -->
      <div class="">

        <!-- add list  button -->
        <div class="flex items-center gap-2  border-b-2"  @click="openDialog()">
          <button  class="p-2 text-black">
            <svg class="w-9 h-9" viewBox="0 0 24 24" fill="#f6f7f9" stroke="currentColor">
              <circle cx="12" cy="12" r="12" stroke-width="0"/>
              <line x1="12" y1="8" x2="12" y2="16" stroke-width="1.5" stroke-linecap="round" fill="black"/>
              <line x1="8" y1="12" x2="16" y2="12" stroke-width="1.5" stroke-linecap="round"/>
            </svg>
          </button>

          <span class="text-sm font-medium text-black">انشاء قائمه جديدة</span>
        </div>

        <!-- list of menus -->
        <div  v-for="list in storeFav.getAllListsInFavorite"
        :key="list.id" @click="addProductsToList(list)" class="flex items-center gap-4 p-2 border-b-2 ">
          <div class="w-14 h-14 ">
            <div class="grid grid-cols-12 gap-[1px] h-full w-full" >
              <div class="col-span-6 h-full w-full">
                <img v-if="list.product_images[0]"  :src="list.product_images[0]" class="h-full w-full  " />
                <img v-else  src="/jeeeeylogo3.jpg" class="h-full w-full object-contain bg-gray-50  " />

              </div>

              <div class="col-span-6 flex-col  ">
                <img v-if="list.product_images[1]" :src="list.product_images[1]" class="h-7 w-full mb-[1px] " />
                <img v-else src="/jeeeeylogo3.jpg" class="h-7 w-full object-contain bg-gray-50 mb-[1px]  " />

                <img  v-if="list.product_images[2]" :src="list.product_images[2]" class="h-7 w-full  mb-[1px] " />
                <img v-else src="/jeeeeylogo3.jpg" class="h-7 w-full object-contain bg-gray-50 mb-[1px] " />


              </div>
            </div>

          </div>

          <div>
            <span class="text-gray-800">{{ list.name }}</span>
          </div>

        </div>

      </div>

    </div>
    <DialogAddNewMenu :is-open="isDialogOpen" @close="closeDialog"  Status="new" :selectedIds="props.selectedIds" />

  </div>
</template>

<script setup>
import { onMounted,ref} from "vue";
import { useFavoriteStore } from '@/stores/favorite'
import DialogAddNewMenu from "./DialogAddNewMenu.vue";



const props = defineProps({
  isOpen: {
    type: Boolean,
    required: true,
  },
  selectedIds:{
    type:Array,
    required: true,
  },
  CopyOrNot:{
    type:Boolean
  }


});


const storeFav = useFavoriteStore()


const isDialogOpen = ref(false)
const openDialog = () => {
  isDialogOpen.value = true
}
const closeDialog = () => {
  isDialogOpen.value = false
  close()
}



const addProductsToList = async(list) =>{
  const selectedIds = ref(props.selectedIds)

     await storeFav.fetchProductInList(list.id)
    const selectedIdsOld = storeFav.productsInList.map(p => p.id)

    const tempSet = new Set([...selectedIds.value, ...selectedIdsOld])
    selectedIds.value = Array.from(tempSet)

    const result = await storeFav.updateListProducts(list.id,selectedIds.value)
    if(result){
      alert(storeFav.Messagefavorite)
    }else{
      alert(storeFav.error)
    }

    close();

}

onMounted(() => {
  storeFav.fetchAllListsfavorite();
});

// Emits
const emit = defineEmits(['close'])
// Close the dialog
const close = () => {
  emit('close')
};

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
