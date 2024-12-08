
<template>
  <div>
          <div >
            <ul class="space-y-5 mt-5">
              <li>
                <div
                  class="  grid grid-cols-7 gap-3"
                >
                  <div
                    v-for="(color, index) in colors"
                    :key="index"
                    :class="['w-10 h-10 rounded-full flex flex-col items-center  border-2 border-black']"
                     :style="{ backgroundColor: color.color_hex }"
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
    colors: {
      type: [],
      default: [],
    },
  });

  </script>
