<template>
  <div class="bg-gray-100 h-screen">
    <!-- header -->
    <div class="fixed inset-0  grid grid-cols-12 items-center justify-between  bg-white p-2 shadow h-12">
      <!-- back button -->
      <div class="col-span-2">
        <RouterLink to="/phone/user">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8.90991 19.92L15.4299 13.4C16.1999 12.63 16.1999 11.37 15.4299 10.6L8.90991 4.07996" stroke="#8a1538" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </RouterLink>
      </div>
      <div class="col-span-8 text-lg font-bold text-center">
       الاعدادات
     </div>



    </div>

    <!-- main content -->
    <div class="mt-12 pt-4 ">

      <!-- اللغه -->
      <div class="h-16 border bg-white p-4 mb-5">
                    <div class="flex items-center justify-between ">
                      <span class=" text-sm text-black font-medium">اللغه</span>
                      <span>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M15.0001 19.92L8.48009 13.4C7.71009 12.63 7.71009 11.37 8.48009 10.6L15.0001 4.07996" stroke="#8a1538" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                      </svg>
                      </span>
                    </div>


      </div>

      <aside class="">
        <ul class="space-y-5 ">
          <!-- الاعدادات -->
          <li class="border bg-white p-4">
            <span class="text-xs md:text-lg font-bold mb-4"> الاعدادات</span>

            <ul class="mt-2 space-y-3  text-gray-600 text-sm">
            <!-- addresses -->
              <li>
                <button class="cursor-pointer h-16 w-full border-b-2">
                  <RouterLink to="/desktop/user/myaddresses">
                    <div class="flex items-center justify-between ">
                      <span class=" text-sm text-black font-medium"> {{ $t("Address book") }}</span>
                      <span>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M15.0001 19.92L8.48009 13.4C7.71009 12.63 7.71009 11.37 8.48009 10.6L15.0001 4.07996" stroke="#8a1538" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                      </svg>
                      </span>
                    </div>
                  </RouterLink>
                </button>
              </li>

              <!-- my account manage -->
              <li>
                <button class="cursor-pointer h-16 w-full ">
                  <RouterLink to="/phone/user/myaccount">
                    <div class="flex items-center justify-between ">
                      <span class=" text-sm text-black font-medium"> {{ $t("Manage my account") }}</span>
                      <span>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M15.0001 19.92L8.48009 13.4C7.71009 12.63 7.71009 11.37 8.48009 10.6L15.0001 4.07996" stroke="#8a1538" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
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
            <span class="text-xs md:text-lg font-bold mb-4"> معلومات</span>

            <ul class="mt-2 space-y-3  text-gray-600 text-sm">
            <!-- الارجاع -->
              <li>
                <button class="cursor-pointer h-16 w-full border-b-2">
                  <!-- <RouterLink to="/desktop/user/myaddresses"> -->
                    <div class="flex items-center justify-between ">
                      <span class=" text-sm text-black font-medium"> سياسه الارجاع</span>
                      <span>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M15.0001 19.92L8.48009 13.4C7.71009 12.63 7.71009 11.37 8.48009 10.6L15.0001 4.07996" stroke="#8a1538" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                      </svg>
                      </span>
                    </div>
                  <!-- </RouterLink> -->
                </button>
              </li>

              <!-- الخصوصيه -->
              <li>
                <button class="cursor-pointer h-16 w-full  border-b-2">
                  <RouterLink to="/phone/user/myaccount">
                    <div class="flex items-center justify-between ">
                      <span class=" text-sm text-black font-medium"> مركز الخصوصيه</span>
                      <span>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M15.0001 19.92L8.48009 13.4C7.71009 12.63 7.71009 11.37 8.48009 10.6L15.0001 4.07996" stroke="#8a1538" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                      </svg>
                      </span>
                    </div>
                  </RouterLink>
                </button>
              </li>

              <!-- الخصوصيه -->
              <li>
                <button class="cursor-pointer h-16 w-full ">
                  <RouterLink to="/phone/user/myaccount">
                    <div class="flex items-center justify-between ">
                      <span class=" text-sm text-black font-medium"> سياسه الخصوصيه</span>
                      <span>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M15.0001 19.92L8.48009 13.4C7.71009 12.63 7.71009 11.37 8.48009 10.6L15.0001 4.07996" stroke="#8a1538" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                      </svg>
                      </span>
                    </div>
                  </RouterLink>
                </button>
              </li>

               <!-- حول جي -->
               <li>
                <button class="cursor-pointer h-16 w-full ">
                  <!-- <RouterLink to="/phone/user/myaccount"> -->
                    <div class="flex items-center justify-between ">
                      <span class=" text-sm text-black font-medium"> حول جي</span>
                      <span>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M15.0001 19.92L8.48009 13.4C7.71009 12.63 7.71009 11.37 8.48009 10.6L15.0001 4.07996" stroke="#8a1538" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                      </svg>
                      </span>
                    </div>
                  <!-- </RouterLink> -->
                </button>
              </li>


            </ul>
          </li>






          <!-- تسجيل الخروج -->
          <li class="border bg-white p-4 ">
            <div
              class=" cursor-pointer text-center py-2 "
              @click="toggleLougOut()"
            >
              <h3 class="font-bold text-md text-primary-900">{{ $t("Log out") }}</h3>
            </div>
          </li>
        </ul>
      </aside>

    </div>
  </div>
</template>

<script setup>
import { useAuthStore } from '@/stores/auth';
const storeAuth = useAuthStore();




const toggleLougOut = ()=>{
  storeAuth.logout("desktop")
};

</script>
