<template>
  <div v-if="props.isOpen"  class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
    <div class="fixed bottom-0 mb-16 w-full border-t-2 rounded z-50">
      <!-- header -->
      <div>
        <div class="py-2 p-5  border mt-2 bg-white m-2 flex items-center justify-between">
                <h1 class="text-primary-900 font-bold text-sm"> أضف الى القائمة</h1>
                <button
                  @click="close"
                  class="text-primary-900  text-[20px] hover:text-black"
                >
                  &times;
                </button>
              </div>
      </div>

      <!-- content -->
      <div class="bg-white w-full overflow-y-auto custom-scroll max-h-[500px] h-full">
      hggjgjj
      </div>

    </div>

  </div>
</template>

<script setup>


const props = defineProps({
  isOpen: {
    type: Boolean,
    required: true,
  },


});




// Emits
const emit = defineEmits(['close'])
// Close the dialog
const close = () => {
  emit('close')
};

</script>
