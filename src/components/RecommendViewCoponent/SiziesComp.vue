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
                class=" ml-2 rounded border-gray-300 text-blue-600  focus:ring-blue-500"
              />
                <label  class="cursor-pointer text-[10px]">{{ size }}</label>

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

    sizes: {
      type: [],
      default: [],
    },
  });

  </script>
