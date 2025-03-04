<template>
  <div
    v-if="isOpen"
    class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
  >
    <!-- Dialog Container -->
    <div
      class="bg-white w-full max-w-xs rounded-lg shadow-lg p-6"
    >
      <!-- Dialog Header -->
      <div class="flex justify-center items-center mb-4">
        <h3 class="text-lg font-semibold">هل انت متأكد أنك تريد حذف القائمة؟</h3>

      </div>

      <!-- Dialog Content -->
      <div>
        <slot></slot>
      </div>

      <!-- Dialog Footer -->
      <div class="mt-4 flex items-center justify-center gap-2">
        <button
          class="bg-white text-black px-4 py-2 w-28 rounded border border-primary-900"
          @click="close"
        >
          الغاء
        </button>
        <button
          class="bg-primary-900 text-white px-4 w-28 py-2 rounded"
          @click="confirm"
        >
          حذف
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  isOpen: {
    type: Boolean,
    required: true,
  },

});

// Emits
const emit = defineEmits(["close", "confirm"]);

// Close the dialog
const close = () => {
  emit("close");
};

// Confirm the action
const confirm = () => {
  emit("confirm");
};


</script>









