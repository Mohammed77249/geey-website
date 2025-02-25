<template>
  <div  class=" h-screen">

  <div class="bg-gray-50 ">
    <!-- header -->
    <div
      class="fixed inset-0 grid grid-cols-12 items-center justify-between bg-white p-2 shadow h-12"
    >
      <!-- back button -->
      <div class="col-span-2">
        <RouterLink to="/phone/user">
          <svg
            width="15"
            height="15"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.90991 19.92L15.4299 13.4C16.1999 12.63 16.1999 11.37 15.4299 10.6L8.90991 4.07996"
              stroke="#8a1538"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </RouterLink>
      </div>
      <div class="col-span-8 text-sm font-bold text-center">الاعدادات</div>
    </div>

    <!-- main content -->
    <div class="mt-9 pt-4">
      <!-- اللغه -->
      <div class="h-12 border bg-white p-4 mb-1">
        <div class="flex items-center justify-between"  @click="openDialog">
          <span class="text-sm text-black font-medium">اللغه</span>
          <span>
            <svg
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.0001 19.92L8.48009 13.4C7.71009 12.63 7.71009 11.37 8.48009 10.6L15.0001 4.07996"
                stroke="#8a1538"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </span>
        </div>
      </div>

      <aside class="">
        <ul class="space-y-1">
          <!-- الاعدادات -->
          <li class="border bg-white p-4">
            <span class="text-sm font-semibold mb-4"> الاعدادات</span>

            <ul class="text-gray-600 text-xs">
              <!-- addresses -->
              <li>
                <button class="cursor-pointer h-12 w-full border-b-2">
                  <RouterLink to="/phone/user/setting/myaddresses">
                    <div class="flex items-center justify-between">
                      <span class="text-xs text-black font-medium">
                        {{ $t('Address book') }}</span
                      >
                      <span>
                        <svg
                          width="15"
                          height="15"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M15.0001 19.92L8.48009 13.4C7.71009 12.63 7.71009 11.37 8.48009 10.6L15.0001 4.07996"
                            stroke="#8a1538"
                            stroke-width="1.5"
                            stroke-miterlimit="10"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </span>
                    </div>
                  </RouterLink>
                </button>
              </li>

              <!-- my account manage -->
              <li>
                <button class="cursor-pointer h-12 w-full  border-b-2">
                  <RouterLink to="/phone/user/setting/manageAccount">
                    <div class="flex items-center justify-between">
                      <span class="text-xs text-black font-medium">
                        {{ $t('Manage my account') }}</span
                      >
                      <span>
                        <svg
                          width="15"
                          height="15"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M15.0001 19.92L8.48009 13.4C7.71009 12.63 7.71009 11.37 8.48009 10.6L15.0001 4.07996"
                            stroke="#8a1538"
                            stroke-width="1.5"
                            stroke-miterlimit="10"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </span>
                    </div>
                  </RouterLink>
                </button>
              </li>

              <!-- عمله -->
              <li>
                <button class="cursor-pointer h-12 w-full">
                  <RouterLink to="/phone/user/setting/currencies">
                    <div class="flex items-center justify-between">
                      <span class="text-xs text-black font-medium"> عملة</span>
                      <span>
                        <svg
                          width="15"
                          height="15"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M15.0001 19.92L8.48009 13.4C7.71009 12.63 7.71009 11.37 8.48009 10.6L15.0001 4.07996"
                            stroke="#8a1538"
                            stroke-width="1.5"
                            stroke-miterlimit="10"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </span>
                    </div>
                  </RouterLink>
                </button>
              </li>

            </ul>
          </li>

          <!-- معلومات -->
          <li class="border bg-white p-4">
            <span class="text-sm font-bold mb-2"> معلومات</span>

            <ul class="text-gray-600 text-xs">
              <!-- الارجاع -->
              <li>
                <button class="cursor-pointer h-12 w-full border-b-2">
                  <!-- <RouterLink to="/desktop/user/myaddresses"> -->
                  <div class="flex items-center justify-between">
                    <span class="text-xs text-black font-medium">
                      سياسه الارجاع</span
                    >
                    <span>
                      <svg
                        width="15"
                        height="15"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M15.0001 19.92L8.48009 13.4C7.71009 12.63 7.71009 11.37 8.48009 10.6L15.0001 4.07996"
                          stroke="#8a1538"
                          stroke-width="1.5"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </span>
                  </div>
                  <!-- </RouterLink> -->
                </button>
              </li>

              <!-- الخصوصيه -->
              <li>
                <button class="cursor-pointer h-12 w-full border-b-2">
                  <RouterLink to="/phone/user/myaccount">
                    <div class="flex items-center justify-between">
                      <span class="text-xs text-black font-medium">
                        مركز الخصوصيه</span
                      >
                      <span>
                        <svg
                          width="15"
                          height="15"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M15.0001 19.92L8.48009 13.4C7.71009 12.63 7.71009 11.37 8.48009 10.6L15.0001 4.07996"
                            stroke="#8a1538"
                            stroke-width="1.5"
                            stroke-miterlimit="10"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </span>
                    </div>
                  </RouterLink>
                </button>
              </li>

              <!-- الخصوصيه -->
              <li>
                <button class="cursor-pointer h-12 w-full border-b-2">
                  <RouterLink to="/phone/user/myaccount">
                    <div class="flex items-center justify-between">
                      <span class="text-xs text-black font-medium">
                        سياسه الخصوصيه</span
                      >
                      <span>
                        <svg
                          width="15"
                          height="15"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M15.0001 19.92L8.48009 13.4C7.71009 12.63 7.71009 11.37 8.48009 10.6L15.0001 4.07996"
                            stroke="#8a1538"
                            stroke-width="1.5"
                            stroke-miterlimit="10"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </span>
                    </div>
                  </RouterLink>
                </button>
              </li>

              <!-- حول جي -->
              <li>
                <button class="cursor-pointer h-10 w-full">
                  <!-- <RouterLink to="/phone/user/myaccount"> -->
                  <div class="flex items-center justify-between">
                    <span class="text-xs text-black font-medium"> حول جي</span>
                    <span>
                      <svg
                        width="15"
                        height="15"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M15.0001 19.92L8.48009 13.4C7.71009 12.63 7.71009 11.37 8.48009 10.6L15.0001 4.07996"
                          stroke="#8a1538"
                          stroke-width="1.5"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </span>
                  </div>
                  <!-- </RouterLink> -->
                </button>
              </li>
            </ul>
          </li>

          <!-- تسجيل الخروج -->
          <li class="border bg-white p-4">

            <div v-if="storeAuth.isAuthenticated" class="cursor-pointer text-center" @click="toggleLougOut()">
              <h3 class="font-bold text-sm text-primary-900">
                {{ $t('Log out') }}
              </h3>
            </div>

            <RouterLink to="/phone/login">
            <div v-if="!storeAuth.isAuthenticated" class="cursor-pointer text-center">
              <h3 class="font-bold text-sm text-primary-900">
                {{ $t('login') }}
              </h3>
            </div>
          </RouterLink>

          </li>
        </ul>
      </aside>
    </div>

  </div>

  <DialogShowLangauge :is-open="isDialogOpen" :productDetails="productDetails" @close="closeDialog"  />

</div>

</template>

<script setup>
import {  ref } from "vue";

import DialogShowLangauge from '@/components/phone/DialogShowLangauge.vue';
import { useAuthStore } from '@/stores/auth'
const storeAuth = useAuthStore()


const isDialogOpen = ref(false)

const openDialog = () => {
  isDialogOpen.value = true
}

const closeDialog = () => {
  isDialogOpen.value = false
}

const toggleLougOut = () => {
  storeAuth.logout('desktop')
};






</script>
