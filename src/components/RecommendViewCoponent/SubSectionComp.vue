<template>
  <div>
    <div>
      <div
        id="dropdownTop"
        class="mt-5"
        v-if="props.isDropdowenVisable === true"
      >

      <div v-if="props.lev != 'no' ">
        <ListCatogriesComp v-if="storeSecion.subcategories && storeSecion.subcategories.length > 0 "
        :categories="storeSecion.getSubCategories" @update-selected="updateCategories"/>
      </div>

      <div v-else>

        <ul
          v-if="storeSecion.getSubSections[0].has_sub == 'true' "
          class="text-sm text-gray-700"
          aria-labelledby="dropdownTopButton"
        >

          <li
            v-for="subSection in props.subSectiones"
            :key="subSection.id"
            class="space-y-2"
          >
            <div class="flex items-center justify-between">
              <div>
                <input
                  type="radio"
                  :value="subSection.id"
                  :checked="selectedCategories === subSection.id"
                  @click="toggleChildren(subSection.id)"
                  class="ml-2 rounded border-gray-300 text-black focus:ring-black"
                />
                <label
                  @click="toggleChildren(subSection.id)"
                  class="cursor-pointer text-[8px] md:text-[10px]"
                  >{{ subSection.name }}
                </label>
              </div>

              <div v-if="subSection.has_sub ">
                <button type="button" @click="toggleChildren(subSection.id)">
                  <svg
                    v-if="subSection.id === tempid"
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6 12H18"
                      stroke="#292D32"
                      stroke-width="4"
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
                      stroke-width="4"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M12 18V6"
                      stroke="#292D32"
                      stroke-width="4"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </div>

            <div v-if="subSection.has_sub" class="px-5">
              <ListCatogriesComp
                v-if="subSection.id === tempid"
                :categories="subSection.categories"
                 @update-selected="updateCategories"
              />
            </div>
          </li>

        </ul>
        <div v-else  class="px-5">

          <ListCatogriesComp :categories="storeSecion.getCategories"  @update-selected="updateCategories"/>
        </div>

      </div>


        <div>

        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import ListCatogriesComp from './ListCatogriesComp.vue'
import { useSectionsStore } from '@/stores/section'
const storeSecion = useSectionsStore()
const props = defineProps({
  isDropdowenVisable: {
    type: Boolean,
    default: false,
    required: true,
  },

  subSectiones: {
    type: [],
    default: [],
  },

  lev:{
    type:String
  }
})


const filteredData = ref({
  subSectionId: null,
  page: 1,
  perPage: 30,
})

const selectedCategories = ref(null)
const tempid = ref(null)

const toggleChildren = id => {
  if (tempid.value === id) {
    tempid.value = null
    selectedCategories.value = null
  } else {

    selectedCategories.value = id
    tempid.value = id
    filteredData.value.subSectionId = id
    // storeSecion.fetchCategoriesAndProducetsForSubsetion(filteredData)
  }
}

const selectedIds = ref(null);
const emit = defineEmits(['update-categories']);
// استقبال التحديثات من مكون الفئات
const updateCategories = (ids) => {
  selectedIds.value = ids;

  // alert( selectedIds.value)
  // يمكن إرسال هذه البيانات مباشرة إلى صفحة الفلترة باستخدام emit
  emit('update-selected', selectedIds.value);
};

// تعريف emit لإرسال البيانات إلى صفحة الفلترة

</script>
