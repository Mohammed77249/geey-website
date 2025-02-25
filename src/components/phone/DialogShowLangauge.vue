<template>
  <div v-if="props.isOpen" class="">
    <div class="fixed bottom-0   bg-white rounded-lg w-full z-50">


    <div class=" bg-white">

      <div class="py-2 p-5  mt-2 bg-white m-2 grid grid-cols-12 items-center justify-between">
        <h1 class="text-primary-900 font-bold text-sm text-center col-span-11 "> لغه التطبيق

        </h1>
          <button
           @click="close"
            class="text-primary-900  text-[20px] hover:text-black col-span-1"
          >
             &times;
          </button>
      </div>


                  <div  :class="storedLanguage === 'en' ? 'right-0' : 'left-0'" class="px-3 grid grid-cols-1 mt-4 ">
                    <button  @click="changeLanguage('ar')" :class="storedLanguage === 'ar' ? 'border-primary-900' : 'border-gray-900'" class=" flex items-center justify-between px-2 border  py-3 mb-5 rounded-lg">
                      <span  :class="storedLanguage === 'ar' ? 'text-primary-900' : 'text-black'"  class="ms-2 text-sm font-semibold ">  {{ $t("Arbic") }} </span>
                      <input v-if="storedLanguage === 'ar'" checked id="default-radio-1" type="radio" value="1" name="default-radio-1" class="w-4 h-4 text-primary-900 bg-primary-900 border-primary-900  focus:ring-primary-900">
                      <input v-else id="default-radio-1" type="radio" value="1" name="default-radio-1" class="w-4 h-4 text-primary-900 bg-primary-900 border-primary-900  focus:ring-primary-900">

                    </button>
                    <button   @click="changeLanguage('en')" :class="storedLanguage === 'en' ? 'border-primary-900' : 'border-gray-900'" class=" flex items-center justify-between px-2 border  py-3 mb-5 rounded-lg">
                      <span :class="storedLanguage === 'en' ? 'text-primary-900' : 'text-black'" class="ms-2 text-sm font-semibold ">  {{ $t("English") }}</span>
                        <input  v-if="storedLanguage === 'en'" checked  id="default-radio-2" type="radio" value="2"  name="default-radio-2" class="w-4 h-4 text-primary-900 bg-primary-900 border-primary-900 focus:ring-primary-900">
                        <input  v-else  id="default-radio-2" type="radio" value="2"  name="default-radio-2" class="w-4 h-4 text-primary-900 bg-primary-900 border-primary-900 focus:ring-primary-900">

                      </button>
                  </div>

    </div>

  </div>
  </div>
</template>

<script setup>
import { useLanguageStore } from "@/stores/language";
import { watch } from 'vue';


// Props
const props = defineProps({
  isOpen: {
    type: Boolean,
    required: true,
  }
});




const languageStore = useLanguageStore();
const storedLanguage = localStorage.getItem("language");
function changeLanguage(lang) {
  setTimeout(() => {
    languageStore.setLanguage(lang);
    window.location.reload();

      }, 500);

}


const emit = defineEmits(['close'])

// Close the dialog
const close = () => {
  emit('close')
};



// إدارة حالة التمرير
watch(() => props.isOpen, (newVal) => {
  if (newVal) {
    document.body.classList.add('overflow-hidden');
  } else {
    document.body.classList.remove('overflow-hidden');
  }
});

</script>
