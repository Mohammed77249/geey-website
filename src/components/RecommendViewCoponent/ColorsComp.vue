
<template>
  <div>
          <div v-if="isDropdowenVisable">
            <ul class="space-y-5 mt-5">
              <li>
                <div
                  class="  grid grid-cols-5 gap-5"
                >
                  <div
                    v-for="(color, index) in colors"
                    :key="index"
                    :class="['w-5 h-5 rounded-full flex flex-col items-center', color]"
                  >
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

    colors: {
      type: [],
      default: [],
    },
  });

  </script>
