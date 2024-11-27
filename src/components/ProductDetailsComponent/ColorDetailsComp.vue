
<template>
  <div>
          <div >
            <ul class="space-y-5 mt-5">
              <li>
                <div
                  class="  grid grid-cols-5 gap-5"
                >
                  <div
                    v-for="(color, index) in colors"
                    :key="index"
                    :class="['w-10 h-10 rounded-full flex flex-col items-center hover:border-2 hover:border-black  ', color]"
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
