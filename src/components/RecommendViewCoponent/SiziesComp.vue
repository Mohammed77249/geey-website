<template>
  <div>
    <div class="mt-5"  v-if="isDropdowenVisable">
      <ul class="space-y-5 ">
              <li>
                <div
                  class="grid grid-cols-2 gap-5"
                >
                  <div
                  v-for="(size, index) in sizes"
                    :key="index"
                    class="rounded-full flex  items-center"
                  >

                  <input
                type="checkbox"
                :value="size"
                  @click="toggleSize(size.id)"
                class=" ml-2 rounded border-gray-300 text-blue-600  focus:ring-blue-500"
              />
                <label  class="cursor-pointer text-[10px]">{{ size.measuring_value }}</label>

                  </div>
                </div>
              </li>
            </ul>
          </div>
  </div>
  </template>

  <script setup>
  import { ref, } from 'vue';
  defineProps({
    isDropdowenVisable: {
      type: Boolean,
      default: false,
      required: true,
    },

    sizes: {
     type: Array,

    },
  });


  const selectedIds = ref([]);
  const  emit = defineEmits(['update-selected']);
// تحديث الاختيار
const toggleSize = (id) => {
  if (selectedIds.value.includes(id)) {
    selectedIds.value = selectedIds.value.filter((sizeId) => sizeId !== id);
  } else {
    selectedIds.value.push(id);
  }

  emit('update-selected', selectedIds.value);
};

// إرسال البيانات إلى المكون الأب
// watch(selectedIds, () => {
//   emit('update-selected', selectedIds.value);
// });


  </script>
