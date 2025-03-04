<template>

  <div  v-if="props.isOpen"  class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">


  <div
    
    class="fixed bottom-0 mb-16 w-full border-t-2 rounded z-50"
  >
    <!-- Dialog Container -->
    <div
      class="bg-white w-full overflow-y-auto custom-scroll max-h-[500px] h-full"
    >
      <!-- Dialog Content -->
      <div class="mb-5 bg-white px-2">
        <div class="mb-2">
          <button
            type="button"
            @click="openDialog()"
            class="py-3 border-b-2 w-full text-black font-semibold"
          >
            اعادة تسمية
          </button>
        </div>

        <div class="mb-2">
          <button
            type="button"
               @click="openDialogDel"
            class="py-3 border-b-4 w-full text-primary-800 font-semibold"
          >
            حذف القائمة
          </button>

              <DialogConfirmDelete
                :isOpen="isDialogOpenDel"
                @close="closeDialogDel"
                @confirm="handleConfirmDel"
              >
              </DialogConfirmDelete>
        </div>

        <div class="bg-white py-2 px-2 flex items-center fixed bottom-0 w-full">
          <button
            type="button"
            @click="close"
            class="w-full text-black py-4 font-semibold"
          >
            الغاء
          </button>
        </div>
      </div>
    </div>


  </div>
  <DialogAddNewMenu :is-open="isDialogOpen" @close="closeDialog" Status="old" :ListName="ListName2" :ListId="ListId2"  />

</div>



</template>
<script setup>
import { ref} from "vue";
import DialogAddNewMenu from './DialogAddNewMenu.vue'
import DialogConfirmDelete from "./DialogConfirmDelete.vue";
import { useFavoriteStore } from '@/stores/favorite'

// Props
const props = defineProps({
  isOpen: {
    type: Boolean,
    required: true,
  },
  ListId:{
    type:Number,

  },
  ListName:{
    type:String,

  },


})

const storeFav = useFavoriteStore()
const ListName2 = ref('')
const ListId2 = ref()


// for rename
const isDialogOpen = ref(false)
const openDialog = () => {
  isDialogOpen.value = true
  ListName2.value = props.ListName
  ListId2.value = props.ListId



}
const closeDialog = () => {
  isDialogOpen.value = false
  close();
}





// confirm delete
const isDialogOpenDel = ref(false)

const openDialogDel = () => {
  isDialogOpenDel.value = true
}

const closeDialogDel = () => {
  isDialogOpenDel.value = false
}

const handleConfirmDel = async() => {

  const result = await storeFav.deleteListWithItsProducts(props.ListId)
  if(result){
    alert(storeFav.Messagefavorite)
    closeDialogDel()
    closeDialog()
    close();
    storeFav.fetchAllListsfavorite()
  }else{
    alert("erroe"+storeFav.error)
    closeDialogDel()
    closeDialog()
    close();
  }

};





// Emits
const emit = defineEmits(['close'])


// Close the dialog
const close = () => {
  emit('close')
};
</script>
