<template>
  <div  v-if="props.isOpen" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
    <div

    class="fixed bottom-0 mb-16 w-full border-t-2 rounded z-50"
  >
    <!-- Dialog Container -->
    <div
      class="bg-white w-full overflow-y-auto custom-scroll max-h-[500px] h-full"
    >

      <!-- Dialog Content -->
      <div>
        <div >
          <div class="mb-5 ">
            <div class=" bg-white">
              <div class="py-1  px-2  border-b-2  bg-white m-2 grid grid-cols-12 items-center ">
                <h1 v-if="props.Status == 'new'" class="col-span-11 text-center text-gray-500 font-bold text-sm"> انشاء قائمة جديدة</h1>
                <h1 v-if="props.Status == 'old'" class="col-span-11 text-center text-gray-500 font-bold text-sm">  اعادة تسمية</h1>

                <button
                  @click="close"
                  class="text-primary-900 col-span-1 text-[20px] hover:text-black "
                >
                  &times;
                </button>
              </div>
              <div class="mt-4 px-2">
                <div class="mb-2 ">
                  <span class="text-black text-md font-semibold">اسم القائمة</span>
                    <input
                      ref="inputRef"
                      type="text"
                      v-model="NameList"
                      required
                      placeholder="Board"
                      class="w-full    border-gray-300 py-4  px-2 text-sm  focus:outline-none focus:ring-0 focus:ring-black focus:border-gray-500 focus:border-b-[1px] "
                    />
                  </div>
              </div>
            </div>

             <!-- زر الحفظ -->
             <div class="bg-white py-2 px-2  flex items-center   fixed bottom-0 w-full">
                <button v-if="props.Status == 'new'"
                  type="button"
                  @click="createNewList"
                  class="w-full rounded bg-primary-900 text-white py-4 font-semibold  text-sm"
                >

                انشاء قائمة
                </button>

                <button  v-if="props.Status == 'old'"
                  type="button"
                  @click="ChangeListName"
                  class="w-full rounded bg-primary-900 text-white py-4 font-semibold  text-sm"
                >

                تأكيد
                </button>


              </div>

          </div>


        </div>

      </div>

    </div>
  </div>
  </div>
</template>
<script setup>
import {   ref, watch ,nextTick} from 'vue'
import { useFavoriteStore } from '@/stores/favorite'
import { useRouter } from 'vue-router';

// Props
const props = defineProps({
  isOpen: {
    type: Boolean,
    required: true,
  },
  Status:{
    type:String,

  },
  ListName:{
    type:String,

  },

  ListId:{
    type:Number,

  },

  selectedIds:{
    type:Array
  }

});

const inputRef = ref(null)
const NameList = ref('')
const storeFav = useFavoriteStore()
const router = useRouter();


const createNewList = async() => {

    if(props.selectedIds){
      const result = await storeFav.storeList(NameList.value ,props.selectedIds)
    if(result){
      alert(storeFav.Messagefavorite)
      close();

    }else{
      alert("erroe"+storeFav.error)
      close();
    }
  }else{
    router.push({ path: `/phone/favorite/addproducttolist`, query: { ListName:encodeURIComponent(NameList.value) ,IsNew:encodeURIComponent("yes") } })

  }

}


const ChangeListName = async() =>{
  const listID = ref()
  if(props.ListId){
    listID.value = props.ListId
  }

  const result = await storeFav.updateList(NameList.value ,listID.value)
  if(result){
    alert(storeFav.Messagefavorite)
    close();
    storeFav.fetchAllListsfavorite()
  }else{
    alert("erroe"+storeFav.error)
    close();
  }

}



// Emits
const emit = defineEmits(['close'])

// مراقبة فتح/إغلاق الـ Dialog
watch(() => props.isOpen, async (isOpen) => {
  if (isOpen) {
    await nextTick()
    inputRef.value?.focus()

    if(props.Status == "old"){
      NameList.value = props.ListName
    }else{
      NameList.value=''
    }
  }

});

// Close the dialog
const close = () => {
  emit('close')
};


</script>
