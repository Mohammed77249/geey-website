<template>
  <div class="bg-gray-50 h-screen">
     <!-- header -->
     <div class="fixed inset-0  bg-white p-2 shadow h-16">
        <div class="grid grid-cols-12 mt-2 items-center justify-between">
          <!-- back button -->
            <div class="col-span-3">
              <RouterLink to="/phone/user/setting">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.90991 19.92L15.4299 13.4C16.1999 12.63 16.1999 11.37 15.4299 10.6L8.90991 4.07996" stroke="#8a1538" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </RouterLink>
            </div>
            <div class=" col-span-6 text-lg font-bold text-center">
              اداره حسابي
            </div>
        </div>
      </div>

      <!-- main content -->
      <div class="mt-12 pt-4 ">
        <ul class="mt-5 space-y-3  text-gray-600 text-sm ">
            <!-- change passowrd -->
              <li class="bg-white">
                <button class="cursor-pointer h-16 w-full border-b-2 p-4">
                  <RouterLink to="/phone/user/setting/manageAccount/changePassowrd">
                    <div class="flex items-center justify-between ">
                      <span class=" text-sm text-black font-medium">  تغيير كلمه المرور</span>
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
              <!-- <li class="bg-white">
                <button class="cursor-pointer h-16 w-full p-4">
                  <RouterLink to="/phone/user/setting/manageAccount">
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
              </li> -->
            </ul>
      </div>

  </div>
</template>
