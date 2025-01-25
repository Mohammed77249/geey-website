
<template>
  <div>
          <div v-if="isDropdowenVisable">
            <ul class="space-y-5 mt-5">
              <li>
                <div
                  class=" grid grid-cols-5 gap-5"
                >
                  <div
                    v-for="(color, index) in colors"
                    :key="index"
                     @click="toggleColor(color.id)"
                    class="w-5 h-5 rounded-full flex flex-col items-center cursor-pointer"
                    :style="['background-color:' + color.hex_code + '']"

                  >

                  </div>
                </div>
              </li>
            </ul>
          </div>
  </div>
  </template>

  <script setup>
  // import { useSectionsStore } from '@/stores/section'
  import { ref   } from 'vue'
  // const storeSecion = useSectionsStore()
  defineProps({
    isDropdowenVisable: {
      type: Boolean,
      default: false,
      required: true,
    },

    colors: {
      type: [],
      default: [],
    },
  });


//   const filteredData = ref({
//     categoryId: 4,
//     page: 1,
//     perPage: 100,
//     color:[],
//     size:null,
//     price:null,
//     categoryChild:null
// })

  // const onClickColor = async(id)=>{

  //   filteredData.value.color = id
  //   await storeSecion.fetchProductsFilterBySubcategry(filteredData)
  // }


  const  emit = defineEmits(['update-selected']);
const selectedIds = ref([]);

// تحديث الاختيار
const toggleColor = (id) => {
  if (selectedIds.value.includes(id)) {
    selectedIds.value = selectedIds.value.filter((colorId) => colorId !== id);
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
