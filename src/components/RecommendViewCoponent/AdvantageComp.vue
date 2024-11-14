<template>
  <div>
    <div class="mt-5" v-if="isDropdowenVisable">
      <ul class="">
        <li>
          <div class="grid grid-cols-1 space-y-2">
            <div
              v-for="(advantage, index) in advantages"
              :key="index"
              class="rounded-full flex items-center"
            >
              <input
                type="checkbox"
                :value="advantage"
                class="ml-2 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              />
              <label class="cursor-pointer text-[10px]">{{ advantage }}</label>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
defineProps({
  isDropdowenVisable: {
    type: Boolean,
    default: false,
    required: true,
  },

  advantages: {
    type: [],
    default: [],
  },
})
</script>
