<template>
  <div>
    <div>
      <div id="dropdownTop" class="mb-2">
        <ul  class="text-sm text-gray-700" aria-labelledby="dropdownTopButton">
          <li
            v-for="category in categories"
            :key="category.id"
            class="space-y-2"
          >
            <div class="flex items-center justify-between">
              <div>
                <input
                  type="radio"
                  :value="category.id"
                  :checked="selectedcategory == category.id"
                  @click="toggleGrandchildren(category)"
                  class="ml-2 rounded border-gray-300 text-black focus:ring-black"
                />
                <label
                  @click="toggleGrandchildren(category)"
                  class="cursor-pointer text-[8px] md:text-[10px]"
                  >{{ category.name }}</label
                >
              </div>

              <div v-if="category.has_children">
                <button type="button" @click="toggleGrandchildren(category)">
                  <svg
                    v-if="category.id == tempid"
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6 12H18"
                      stroke="#292D32"
                      stroke-width="3"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>

                  <svg
                    v-else
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6 12H18"
                      stroke="#292D32"
                      stroke-width="3"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M12 18V6"
                      stroke="#292D32"
                      stroke-width="3"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </div>

            <div v-if="category.has_children" class="pr-3">
              <ListCatogriesComp
                v-if="category.id == tempid"
                :categories="subcat"
              />
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useSectionsStore } from '@/stores/section'
import { ref ,watch} from 'vue'
import ListCatogriesComp
from './ListCatogriesComp.vue'
const storeSecion = useSectionsStore()

defineProps({
  categories: {
    type: [],
    default: [],
  },
})


let subcat = ref([{}])

const filteredData = ref({
  categoryId: null,
  page: 1,
  perPage: 10,
})

const selectedcategory = ref(null)
const tempid = ref(null)
const toggleGrandchildren = async (category) => {

  if(category.has_children === true){
    if (tempid.value == category.id) {
    tempid.value = null
    selectedcategory.value = null
    subcat.value = [{}];
    } else {
      tempid.value = category.id
      selectedcategory.value = category.id
      filteredData.value.categoryId = category.id
      await storeSecion.fetchSubCategoryByCategoryID(filteredData)
      subcat.value =  storeSecion.subcategories;
    }
  }else{

    if(category.categories ==  null){
      filteredData.value.categoryId = category.id
      await storeSecion.fetchSubCategoryByCategoryID(filteredData)
      subcat.value = [{}];
    }
  }



// alert(subcat.value)
}

watch(
  () => storeSecion.getSubCategories, // المراقبة على getter
  (newVal) => {
    subcat.value = [...subcat.value,...newVal]; // تحديث قيمة subcat عند حدوث تغيير
  },
  { immediate: true } // تشغيل المراقبة فورًا عند التحميل
);

// watch(
//   () => storeSecion.getSubCategories, // المراقبة على getter
//   (newVal) => {
//     // تحقق من أن newVal هو مصفوفة قبل محاولة التكرار عليها
//     if (Array.isArray(newVal)) {
//       subcat.value = [...subcat.value, ...newVal]; // تحديث قيمة subcat عند حدوث تغيير
//     } else {
//       console.error("getSubCategories returned a non-iterable value:", newVal);
//       subcat.value = []; // تعيين قيمة فارغة في حالة عدم كونها مصفوفة
//     }
//   },
//   { immediate: true } // تشغيل المراقبة فورًا عند التحميل
// );



</script>
