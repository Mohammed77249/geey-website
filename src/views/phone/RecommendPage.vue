<template>
  <div class="h-screen bg-gray-50">
   <!-- header -->
    <div class="fixed  inset-0 w-full bg-white px-2 py-1  h-14 ">
      <div class="grid grid-cols-12 mt-2 items-center justify-between">
        <!-- back button -->
          <div class="col-span-1">
            <RouterLink to="/phone/home">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8.90991 19.92L15.4299 13.4C16.1999 12.63 16.1999 11.37 15.4299 10.6L8.90991 4.07996" stroke="#8a1538" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </RouterLink>
          </div>

          <!-- search -->
          <div class=" relative col-span-11 text-sm font-bold text-center">
            <div class="flex items-center overflow-hidden">
              <input
                type="text"
                class="w-full flex-1  px-4 py-1   border border-primary-900 rounded-full"
                :placeholder="$t('Search for products...')"
              >
              <button
                class="px-2 absolute z-10 left-2  w-8 text-gray-400  bg-primary-900 py-1 cursor-pointer rounded-full transition"
              >
                <svg
                  width="16"
                  height="16"
                  class="text-gray-400 cursor-pointer"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.33331 13.3333C10.647 13.3333 13.3333 10.647 13.3333 7.33331C13.3333 4.0196 10.647 1.33331 7.33331 1.33331C4.0196 1.33331 1.33331 4.0196 1.33331 7.33331C1.33331 10.647 4.0196 13.3333 7.33331 13.3333Z"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M12.6199 13.7932C12.9733 14.8599 13.7799 14.9665 14.3999 14.0332C14.9666 13.1799 14.5933 12.4799 13.5666 12.4799C12.8066 12.4732 12.3799 13.0665 12.6199 13.7932Z"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
            </div>

          </div>
      </div>
    </div>

    <!-- قائمة الفئات الرئيسية -->
    <div class="bg-white mb-3 h-28 mt-14">
      <div v-if="storeSecion.loading">
      <LoaderDatacomp :is-loader="storeSecion.loading"/>
    </div>
      <div v-else-if="storeSecion.getSubCategories.length>0" class="flex items-center p-2 gap-2 overflow-x-auto w-full text-gray-600">
        <div
          v-for="category in storeSecion.getSubCategories"
          :key="category"
          @click="clickCat(category)"
          class=" bg-gray-50 w-16 h-24 flex-col-1 items-center justify-center rounded"
        >
          <img
            :src="category.image != null ?category.image :'/jeeeylogo.jpg'"
            alt="moaham"
            class="h-16 w-full rounded object-cover bg-gray-50 transition-transform duration-200 hover:scale-105 hover:shadow"
          />

          <button class="  text-xs  w-full hover:text-blue-600">
           <p> {{ category.name }}</p>
          </button>

        </div>

      </div>
      <div v-else>

      </div>
    </div>

    <!-- محتوى الصفحة الرئيسي -->
    <main class="mx-auto  bg-white">

      <div class="grid grid-cols-1 container mx-auto  p-2 bg-white">

        <!--   تصنيف والسعر-->
        <div class="grid grid-cols-12 items-center  gap-2">

          <!-- السعر -->
          <div class="col-span-9">
            <button
              class="px-2 py-1  text-gray-500 font-semibold  text-xs flex items-center gap-2"
            >
            السعر

            <div class="flex-col">
              <!-- up -->
               <div @click="togglePriceSelect('max')" >
                <svg v-if="maxPrice" width="10" height="10" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.22667 4.66L5.15667 3.59L4.50334 2.93333C4.22667 2.65666 3.77667 2.65666 3.5 2.93333L1.77334 4.66C1.54667 4.88666 1.71 5.27333 2.02667 5.27333H3.89667H5.97334C6.29334 5.27333 6.45334 4.88666 6.22667 4.66Z" fill="black"/>
                </svg>
                <svg v-else width="10" height="10" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.22667 4.66L5.15667 3.59L4.50334 2.93333C4.22667 2.65666 3.77667 2.65666 3.5 2.93333L1.77334 4.66C1.54667 4.88666 1.71 5.27333 2.02667 5.27333H3.89667H5.97334C6.29334 5.27333 6.45334 4.88666 6.22667 4.66Z" fill="#707070"/>
                </svg>
               </div>

              <!-- down -->
               <div @click="togglePriceSelect('min')">
                <svg v-if="minPrice" width="10" height="10" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.97331 2.72665H3.89664H2.02664C1.70664 2.72665 1.54664 3.11332 1.77331 3.33999L3.49998 5.06665C3.77664 5.34332 4.22664 5.34332 4.50331 5.06665L5.15998 4.40999L6.22998 3.33999C6.45331 3.11332 6.29331 2.72665 5.97331 2.72665Z" fill="black"/>
                </svg>

                <svg v-else  width="10" height="10" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.97331 2.72665H3.89664H2.02664C1.70664 2.72665 1.54664 3.11332 1.77331 3.33999L3.49998 5.06665C3.77664 5.34332 4.22664 5.34332 4.50331 5.06665L5.15998 4.40999L6.22998 3.33999C6.45331 3.11332 6.29331 2.72665 5.97331 2.72665Z" fill="#707070"/>
                </svg>
               </div>

            </div>

            </button>

          </div>

          <!-- التصنيف -->
          <div class="col-span-3 flex items-center justify-end">
            <button
              @click="isDrawerOpen = !isDrawerOpen ; isDropdowenColorVisable =false; isDropdowenSizeVisable=false; isDropdowenCategoryVisable = false"
              class="px-2 py-1  text-gray-500 font-semibold  text-xs flex"
            >
              التصنيف

              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5.40002 2.10199L18.6 2.10199C19.7 2.10199 20.6 3.00199 20.6 4.10199V6.30199C20.6 7.10199 20.1 8.10199 19.6 8.60199L15.3 12.402C14.7 12.902 14.3 13.902 14.3 14.702V19.002C14.3 19.602 13.9 20.402 13.4 20.702L12 21.602C10.7 22.402 8.90002 21.502 8.90002 19.902V14.602C8.90002 13.902 8.50002 13.002 8.10002 12.502L4.30002 8.50199C3.80002 8.00199 3.40002 7.10199 3.40002 6.50199V4.20199C3.40002 3.00199 4.30002 2.10199 5.40002 2.10199Z" stroke="gray" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
              <path opacity="0.4" d="M10.93 2.10199L6 10.002" stroke="gray" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>

            </button>

          </div>
        </div>


        <!-- colors sizes categories -->
        <div class="flex items-center relative justify-center gap-2  mt-2">
          <!-- colors -->
          <div ref="dropDownColor">
              <button
                class="text-[#979797]  w-[80px]  h-[30px]   bg-gray-100 font-medium  text-[10px]  px-3 py-2.5 text-center  flex items-center justify-center gap-1"
                type="button"
                :class="[{'border border-primary-900 scale-110': selectedColorIds.length > 0}]"
                @click="isDropdowenColorVisable = !isDropdowenColorVisable; isDropdowenSizeVisable = false ; isDropdowenCategoryVisable=false"
              >
                الالوان  <p v-if="selectedColorIds.length>0">({{ selectedColorIds.length }})</p>

                <svg
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  width="10px"
                  height="10px"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </button>

              <!-- Dropdown menu -->
              <div
                class="z-50 absolute left-0 border-b-2 bg-white divide-y divide-gray-100 transition-all duration-300 w-full  mt-4"
                v-if="isDropdowenColorVisable"
              >

                <ul class="space-y-5 ">
                  <li>
                    <div
                      class=" grid grid-cols-8 p-2  gap-5"
                    >
                      <div
                        v-for="(color, index) in storeSecion.getSubCategoryColors"
                        :key="index"
                        @click="toggleColorSelect(color.id)"
                        :class="[
                        'w-8 h-8 rounded-full cursor-pointer border-2 transition-all',
                        {
                          'border-primary-900 scale-110': selectedColorIds.includes(color.id),
                          'border-gray-300': !selectedColorIds.includes(color.id)
                        }
                      ]"
                      :style="{ backgroundColor: color.hex_code }"

                      >
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

          <!-- sizes  -->
          <div v-if="storeSecion.getSubCategorySizes.length>0" ref="dropDownSize">
              <button
                class="text-[#979797]  w-[80px]  h-[30px]   bg-gray-100 font-medium  text-[10px]  px-3 py-2.5 text-center flex items-center justify-center"
                type="button"
                :class="[{'border border-primary-900 scale-110': selectedSizeIds.length > 0}]"
                @click="isDropdowenSizeVisable = !isDropdowenSizeVisable;isDropdowenColorVisable =false ;isDropdowenCategoryVisable=false"
              >
                مقاس
                <p v-if="selectedSizeIds.length>0">({{ selectedSizeIds.length }})</p>
                <svg
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  width="10px"
                  height="10px"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </button>

              <!-- Dropdown menu -->
              <div
                class="z-50 absolute left-0 border-b-2 bg-white divide-y divide-gray-100 transition-all duration-300 w-full  mt-4"
                v-if="isDropdowenSizeVisable"
              >

                <ul class="space-y-5 ">
                  <li class="grid grid-cols-6 p-2  gap-5">
                    <div
                      v-for="(size, index) in storeSecion.getSubCategorySizes"
                        :key="index"
                        :class="[
                        ' h-6 rounded-full flex  items-center justify-center text-xs cursor-pointer border-2 transition-all',
                        {
                          'border-primary-900 scale-110': selectedSizeIds.includes(size.id),
                          'border-gray-300': !selectedSizeIds.includes(size.id)
                        }
                      ]"
                      @click="toggleSizeSelect(size.id)"
                      >
                        {{ size.measuring_value }}
                      </div>
                  </li>
                </ul>
              </div>
            </div>


            <!-- units -->
            <div v-if="storeSecion.getSubCategoryUnits.length>0" ref="dropDownUnit">
              <button
                class="text-[#979797]  w-[80px]  h-[30px]   bg-gray-100 font-medium  text-[10px]  px-3 py-2.5 text-center flex items-center justify-center"
                type="button"
                :class="[{'border border-primary-900 scale-110': selectedUnitIds.length > 0}]"
                @click="isDropdowenUnitVisable = !isDropdowenUnitVisable;isDropdowenColorVisable =false ;isDropdowenCategoryVisable=false"
              >
                وحدة
                <p v-if="selectedUnitIds.length>0">({{ selectedUnitIds.length }})</p>
                <svg
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  width="10px"
                  height="10px"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </button>

              <!-- Dropdown menu -->
              <div
                class="z-50 absolute left-0 border-b-2 bg-white divide-y divide-gray-100 transition-all duration-300 w-full  mt-4"
                v-if="isDropdowenUnitVisable"
              >

                <ul class="space-y-5 ">
                  <li class="grid grid-cols-6 p-2  gap-5">
                    <div
                      v-for="(unit, index) in storeSecion.getSubCategoryUnits"
                        :key="index"
                        :class="[
                        ' h-6 rounded-full flex  items-center justify-center text-xs cursor-pointer border-2 transition-all',
                        {
                          'border-primary-900 scale-110': selectedUnitIds.includes(unit.id),
                          'border-gray-300': !selectedUnitIds.includes(unit.id)
                        }
                      ]"
                      @click="toggleUnitSelect(unit.id)"
                      >
                        {{ unit.measuring_value }}
                      </div>
                  </li>
                </ul>
              </div>
            </div>

          <!-- category -->
          <div ref="dropDownCategory">
              <button
                class="text-[#979797]  w-[80px]  h-[30px]   bg-gray-100 font-medium  text-[10px]  px-3 py-2.5 text-center flex items-center justify-center"
                type="button"
                :class="[{'border border-primary-900 scale-110': selectedCategoryIds.length > 0}]"
                @click="isDropdowenCategoryVisable = !isDropdowenCategoryVisable;isDropdowenSizeVisable = false;isDropdowenColorVisable =false"
              >
                فئات
                <p v-if="selectedCategoryIds.length>0">({{ selectedCategoryIds.length }})</p>

                <svg
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  width="10px"
                  height="10px"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </button>

              <!-- Dropdown menu -->
              <div
                class="z-50 absolute left-0 border-b-2 bg-white divide-y divide-gray-100 transition-all duration-300 w-full  mt-4"
                v-if="isDropdowenCategoryVisable"
              >

                <ul class="space-y-5 ">
                  <li class="flex items-center justify-center gap-4  p-2 ">
                    <div
                      v-for="(category, index) in storeSecion.getSubCategories"
                        :key="index"
                        class=" "
                      >
                      <button  @click="toggleCategorySelect(category.id)"
                       :class="[
                        'text-xs border border-gray-500  cursor-pointer  transition-all',
                        {
                          'border-primary-900 scale-110': selectedCategoryIds.includes(category.id),
                          'border-gray-300': !selectedCategoryIds.includes(category.id)
                        }
                      ]"
                       >
                        <span class="text-[10px]  px-[3px] py-[3px]"> {{ category.name }}</span>
                      </button>

                      </div>
                  </li>
                </ul>
              </div>
            </div>
        </div>

      </div>



    <!-- المنتجات المعروضة -->
    <div class="px-2">
      <div v-if=" storeSecion.getProducts.length >0"   class="grid grid-cols-2 gap-1">
      <div
        v-for="product in storeSecion.getProducts"
        :key="product.id"
        class="p-1 mt-4 "
      >
        <RouterLink :to="`/phone/product/${product.id}`">
          <div class="cursor-pointe w-[full] h-[200px] md:h-[350px] border">
            <img
              v-if="product.main_imags != null && product.main_imags.length > 0 "
              :src=" product.main_imags[0]?.image"
              alt="no image"
              class="w-full h-full object-cover transition duration-300 ease-in-out"
            />


            <img v-else
              src="/jeeeylogo.jpg"  alt="" class="w-full h-full object-cover transition duration-300 ease-in-out"
              />
          </div>
          <h3 class="font-semibold text-xs md:text-sm mt-1">
            {{ product.name }}
          </h3>
        </RouterLink>
        <div class="mt-1">
          <div class="flex items-center">
            <span class="flex text-yellow-500">
              <i>
                <img src="/src/assets/images/star.svg" class="w-3 md:w-4"
              /></i>
              <i>
                <img src="/src/assets/images/star.svg" class="w-3 md:w-4"
              /></i>
              <i>
                <img src="/src/assets/images/star.svg" class="w-3 md:w-4"
              /></i>
              <i>
                <img src="/src/assets/images/star.svg" class="w-3 md:w-4"
              /></i>
            </span>
            <!-- <p class="text-[8px] md:text-[10px] mr-2">(+1000)</p> -->
          </div>
        </div>

        <div class="flex items-center justify-between">
          <div class="flex gap-2 items-center">
            <p class="font-sembold text-primary-900 text-[10px] md:text-[15px]">
              {{ product.base_price }}
            </p>
            <!-- <div class="border border-primary-400">
              <p class="text-[8px] md:text-[10px] text-primary-400">%50-</p>
            </div> -->
          </div>
          <div
            @click="openDialog(product.id)"
            class="cursor-pointer w-8 md:w-10 flex items-center justify-center border border-primary-900 rounded-full"
          >
            <svg
              class="h-4 w-4 md:h-5 md:w-5"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 2H3.74C4.82 2 5.67 2.93 5.58 4L4.75 13.96C4.71759 14.3459 4.76569 14.7342 4.89123 15.1005C5.01678 15.4669 5.21705 15.8031 5.47934 16.0879C5.74163 16.3728 6.06023 16.6001 6.41495 16.7553C6.76967 16.9106 7.15278 16.9905 7.54 16.99H18.19C19.63 16.99 20.89 15.81 21 14.38L21.54 6.88C21.66 5.22 20.4 3.87 18.73 3.87H5.82"
                stroke="#8a1538"
                stroke-width="2"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                opacity="0.4"
                d="M9 8H21M16.25 22C16.5815 22 16.8995 21.8683 17.1339 21.6339C17.3683 21.3995 17.5 21.0815 17.5 20.75C17.5 20.4185 17.3683 20.1005 17.1339 19.8661C16.8995 19.6317 16.5815 19.5 16.25 19.5C15.9185 19.5 15.6005 19.6317 15.3661 19.8661C15.1317 20.1005 15 20.4185 15 20.75C15 21.0815 15.1317 21.3995 15.3661 21.6339C15.6005 21.8683 15.9185 22 16.25 22ZM8.25 22C8.58152 22 8.89946 21.8683 9.13388 21.6339C9.3683 21.3995 9.5 21.0815 9.5 20.75C9.5 20.4185 9.3683 20.1005 9.13388 19.8661C8.89946 19.6317 8.58152 19.5 8.25 19.5C7.91848 19.5 7.60054 19.6317 7.36612 19.8661C7.1317 20.1005 7 20.4185 7 20.75C7 21.0815 7.1317 21.3995 7.36612 21.6339C7.60054 21.8683 7.91848 22 8.25 22Z"
                stroke="#8a1538"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>

      </div>
       <!-- رسالة تحميل المزيد -->
    <div v-if="storeSecion.showLoadingMessage" class="mt-4 mb-10 flex items-center justify-center">
      <LoaderDatacomp :is-loader="storeSecion.showLoadingMessage"/>
    </div>

     <!-- رسالة انتهاء التحميل -->
     <div v-if="!storeSecion.hasMore && !storeSecion.loading" class="text-center mt-4">
      <p>لا توجد منتجات إضافية.</p>
    </div>

    <!-- عنصر مراقبة نهاية الصفحة -->
    <div ref="loadMoreTrigger" class="h-1"></div>




    </div>


    </main>

    <!-- الدرج الجانبي -->
    <div
      class="fixed inset-y-0 left-0 w-80 bg-white shadow-xl transform transition-transform"
      :class="isDrawerOpen ? 'translate-x-0' : 'translate-x-[-400px] '"
    >

    <!-- header -->
    <div class=" border-b-2 p-2 flex items-center justify-between">
      <h2 class="text-md  font-bold ">تصنيف</h2>
      <button
          @click="isDrawerOpen = false"
          class="w-8 text-md  bg-primary-900 rounded text-white"
        >
          X
        </button>
    </div>

    <!-- main content -->
      <div class="p-4">
        <!-- فلتر الألوان -->
          <div class="mb-8">
            <div class="flex items-center justify-between">
              <p @click=" isDropdowenColorOnDrwerVisable = !isDropdowenColorOnDrwerVisable" class="font-semibold text-sm">
                 الالوان
                 <span v-if="selectedColorIds.length>0">({{ selectedColorIds.length }})</span>
                 </p>
              <button
                type="button"
                @click="
                  isDropdowenColorOnDrwerVisable = !isDropdowenColorOnDrwerVisable
                "
              >

              <svg   v-if="!isDropdowenColorOnDrwerVisable" width="15" height="15" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19.9201 8.94995L13.4001 15.47C12.6301 16.24 11.3701 16.24 10.6001 15.47L4.08008 8.94995" stroke="#292D32" stroke-width="3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>

                <svg  v-if="isDropdowenColorOnDrwerVisable" width="15" height="15" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19.9201 15.05L13.4001 8.53001C12.6301 7.76001 11.3701 7.76001 10.6001 8.53001L4.08008 15.05" stroke="#292D32" stroke-width="3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>

              </button>
            </div>

            <!-- list color -->
            <div v-if="isDropdowenColorOnDrwerVisable">
              <ul class="space-y-5 p-4 ">
                  <li>
                    <div
                      class=" grid grid-cols-6 p-2  gap-5"
                    >
                      <div
                        v-for="(color, index) in storeSecion.getSubCategoryColors"
                        :key="index"
                        @click="toggleColorSelect(color.id)"
                        :class="[
                          'w-7 h-7 rounded-full flex flex-col items-center cursor-pointer border-2 transition-all',
                          {
                            'border-primary-900 scale-110': selectedColorIds.includes(color.id),
                            'border-gray-300': !selectedColorIds.includes(color.id)
                          }
                        ]"
                        :style="{ backgroundColor: color.hex_code }"

                      >
                      </div>
                    </div>
                  </li>
                </ul>
            </div>

          </div>


        <!-- فلتر المقاسات -->
        <div v-if="storeSecion.getSubCategorySizes.length>0" class="mb-8">
          <div class="flex items-center justify-between">
              <p @click="isDropdowenSizeOnDrwerVisable = !isDropdowenSizeOnDrwerVisable" class="font-semibold text-sm">
                 المقاسات
                 <span v-if="selectedSizeIds.length>0">({{ selectedSizeIds.length }})</span>
                </p>
              <button
                type="button"
                @click="isDropdowenSizeOnDrwerVisable = !isDropdowenSizeOnDrwerVisable"
              >

              <svg   v-if="!isDropdowenSizeOnDrwerVisable" width="15" height="15" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19.9201 8.94995L13.4001 15.47C12.6301 16.24 11.3701 16.24 10.6001 15.47L4.08008 8.94995" stroke="#292D32" stroke-width="3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>

                <svg  v-if="isDropdowenSizeOnDrwerVisable" width="15" height="15" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19.9201 15.05L13.4001 8.53001C12.6301 7.76001 11.3701 7.76001 10.6001 8.53001L4.08008 15.05" stroke="#292D32" stroke-width="3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>

              </button>
            </div>

            <!-- list sizes -->
            <div v-if="isDropdowenSizeOnDrwerVisable">
              <ul class="space-y-5 p-4">
                  <li class="grid grid-cols-4 p-2  gap-5">
                    <div
                      v-for="(size, index) in storeSecion.getSubCategorySizes"
                        :key="index"
                        :class="[
                        ' h-6 rounded-full flex  items-center justify-center text-xs cursor-pointer border-2 transition-all',
                        {
                          'border-primary-900 scale-110': selectedSizeIds.includes(size.id),
                          'border-gray-300': !selectedSizeIds.includes(size.id)
                        }
                      ]"
                      @click="toggleSizeSelect(size.id)"
                      >
                        {{ size.measuring_value }}
                      </div>
                  </li>
                </ul>
            </div>
        </div>

        <!-- فلتر الوحدات -->
        <div v-if="storeSecion.getSubCategoryUnits.length>0" class="mb-8">
          <div class="flex items-center justify-between">
              <p @click="isDropdowenUnitOnDrwerVisable = !isDropdowenUnitOnDrwerVisable" class="font-semibold text-sm">
                 الوحدات
                 <span v-if="selectedUnitIds.length>0">({{ selectedUnitIds.length }})</span>
                </p>
              <button
                type="button"
                @click="isDropdowenUnitOnDrwerVisable = !isDropdowenUnitOnDrwerVisable"
              >

              <svg   v-if="!isDropdowenUnitOnDrwerVisable" width="15" height="15" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19.9201 8.94995L13.4001 15.47C12.6301 16.24 11.3701 16.24 10.6001 15.47L4.08008 8.94995" stroke="#292D32" stroke-width="3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>

                <svg  v-if="isDropdowenUnitOnDrwerVisable" width="15" height="15" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19.9201 15.05L13.4001 8.53001C12.6301 7.76001 11.3701 7.76001 10.6001 8.53001L4.08008 15.05" stroke="#292D32" stroke-width="3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>

              </button>
            </div>

            <!-- list sizes -->
            <div v-if="isDropdowenUnitOnDrwerVisable">
              <ul class="space-y-5 p-4">
                  <li class="grid grid-cols-4 p-2  gap-5">
                    <div
                      v-for="(unit, index) in storeSecion.getSubCategoryUnits"
                        :key="index"
                        :class="[
                        ' h-6 rounded-full flex  items-center justify-center text-xs cursor-pointer border-2 transition-all',
                        {
                          'border-primary-900 scale-110': selectedUnitIds.includes(unit.id),
                          'border-gray-300': !selectedUnitIds.includes(unit.id)
                        }
                      ]"
                      @click="toggleUnitSelect(unit.id)"
                      >
                        {{ unit.measuring_value }}
                      </div>
                  </li>
                </ul>
            </div>
        </div>


        <!-- فلتر الفئات -->
        <div class="mb-8">
          <div class="flex items-center justify-between">
              <p @click="isDropdowenCategoryOnDrwerVisable = !isDropdowenCategoryOnDrwerVisable" class="font-semibold text-sm">
                الفئات
                <span v-if="selectedCategoryIds.length>0">({{ selectedCategoryIds.length }})</span>
              </p>
              <button
                type="button"
                @click="isDropdowenCategoryOnDrwerVisable = !isDropdowenCategoryOnDrwerVisable"
              >

              <svg   v-if="!isDropdowenCategoryOnDrwerVisable" width="15" height="15" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19.9201 8.94995L13.4001 15.47C12.6301 16.24 11.3701 16.24 10.6001 15.47L4.08008 8.94995" stroke="#292D32" stroke-width="3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>

                <svg  v-if="isDropdowenCategoryOnDrwerVisable" width="15" height="15" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19.9201 15.05L13.4001 8.53001C12.6301 7.76001 11.3701 7.76001 10.6001 8.53001L4.08008 15.05" stroke="#292D32" stroke-width="3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>

              </button>
            </div>

            <!-- list categories -->
            <div v-if="isDropdowenCategoryOnDrwerVisable">
              <ul class="space-y-5 p-4">
                  <li class="grid grid-cols-4 items-center justify-center gap-1 ">
                    <div
                      v-for="(category, index) in storeSecion.getSubCategories"
                        :key="index"
                        class=" "
                      >
                      <button  @click="toggleCategorySelect(category.id)"
                      :class="[
                        'text-xs border border-gray-500  cursor-pointer  transition-all',
                        {
                          'border-primary-900 scale-110': selectedCategoryIds.includes(category.id),
                          'border-gray-300': !selectedCategoryIds.includes(category.id)
                        }
                      ]"
                       >
                        <span class="text-[10px]  px-[2px] py-[3px]"> {{ category.name }}</span>
                      </button>

                      </div>
                  </li>
                </ul>
            </div>
        </div>

      </div>
    </div>


    <DialogAddToCart  v-if="filteredData != null"   :IdProduct="filteredData"  :isOpen="isDialogOpen"  @close="closeDialog"  />

  </div>
</template>

<script setup>
import { ref,onMounted,defineAsyncComponent ,watch} from 'vue'
import { useSectionsStore } from '@/stores/section'
import { useRoute, } from 'vue-router'
import { useIntersectionObserver } from '@vueuse/core';
const DialogAddToCart = defineAsyncComponent(() => import('@/components/phone/DialogAddToCartComp.vue'));
const LoaderDatacomp = defineAsyncComponent(() => import('@/components/LoaderDatacomp.vue'));
const storeSecion = useSectionsStore()
const isDrawerOpen = ref(false)
const route = useRoute()
const filteredData = ref(null)
const id = route.params.id
const isDialogOpen = ref(false)

const isDropdowenColorOnDrwerVisable = ref(false)
const isDropdowenSizeOnDrwerVisable = ref(false)
const isDropdowenUnitOnDrwerVisable = ref(false)
const isDropdowenCategoryOnDrwerVisable = ref(false)



const openDialog = (id) => {
  // if (!authStore.isAuthenticated) {
  //   router.push('/phone/login');
  //   return;
  // }
  filteredData.value = id;
  isDialogOpen.value = true;
}

const closeDialog = () => {
  isDialogOpen.value = false
  filteredData.value = null;
}

const filteredData3 = ref({
  categoryId:null,
  page: 1,
  perPage: 30,
});

const filterData2 = ref({
    page:1,
    perPage:10,
    categoryId:null,
    colors: null,
    sizes: null,
    price:null,
    units:null,
    search:null
  });

if (id != null) {
  filteredData3.value.categoryId = id
  filterData2.value.categoryId = id
}





const dropDownColor = ref(null)
const selectedColorIds = ref([]);
const isDropdowenColorVisable = ref(false)
const toggleColorSelect = color => {
  if (selectedColorIds.value.includes(color)) {
    selectedColorIds.value = selectedColorIds.value.filter((colorId) => colorId !== color);
  } else {
    selectedColorIds.value.push(color);
  }

};


const dropDownSize = ref(null)
const selectedSizeIds = ref([]);
const isDropdowenSizeVisable = ref(false)
const toggleSizeSelect = size => {
  if (selectedSizeIds.value.includes(size)) {
    selectedSizeIds.value = selectedSizeIds.value.filter((sizeId) => sizeId !== size);
  } else {
    selectedSizeIds.value.push(size);
  }
};


const dropDownUnit = ref(null)
const selectedUnitIds = ref([]);
const isDropdowenUnitVisable = ref(false)
const toggleUnitSelect = unit => {
  if (selectedUnitIds.value.includes(unit)) {
    selectedUnitIds.value = selectedUnitIds.value.filter((unitId) => unitId !== unit);
  } else {
    selectedUnitIds.value.push(unit);
  }
};

const dropDownCategory = ref(null)
const selectedCategoryIds = ref([]);
const isDropdowenCategoryVisable = ref(false)
const toggleCategorySelect = category => {
  if (selectedCategoryIds.value.includes(category)) {
    selectedCategoryIds.value = selectedCategoryIds.value.filter((categoryId) => categoryId !== category);
  } else {
    selectedCategoryIds.value.push(category);
  }

  // alert(category)
};


const maxPrice = ref(false);
const minPrice = ref(false);
const selectedPrice = ref('');
const togglePriceSelect = (price)=>{
  if(price == "max"){
    maxPrice.value = true

    selectedPrice.value = "max"
  } else if(price == "min"){
    maxPrice.value = false
    minPrice.value = true
    selectedPrice.value = "min"

  }
}


const clickCat = (category) =>{
  if(category.has_children == true){
    filteredData3.value.categoryId = category.id
    storeSecion.resetProducts();
   storeSecion.fetchSubCategoryByCategoryID(filteredData3)
   storeSecion.fetchProductsFilterBySubcategry(filteredData3)

  }else if(category.has_children == false){
    filteredData3.value.categoryId = category.id
    storeSecion.resetProducts();
    storeSecion.fetchProductsFilterBySubcategry(filteredData3)
    console.log("no")
  }

}


// دالة لجلب المنتجات من API
const fetchProducts = async () => {

 filterData2.value.categoryId = selectedCategoryIds.value? selectedCategoryIds.value : id;

// alert(filterData2.value.categoryId)
filterData2.value.colors = selectedColorIds.value.length >0 ? JSON.stringify(selectedColorIds.value) : null;
filterData2.value.sizes = selectedSizeIds.value.length > 0 ? JSON.stringify(selectedSizeIds.value) : null;
filterData2.value.units = selectedUnitIds.value.length > 0 ? JSON.stringify(selectedUnitIds.value) : null;
filterData2.value.price = selectedPrice.value ?selectedPrice.value : null;

storeSecion.resetProductsCatPage()
await storeSecion.fetchProductsFilterBySubcategry(filterData2)

};


// مراقبة أي تغيير على الفئات أو الألوان أو المقاسات
watch(
  [selectedCategoryIds, selectedColorIds, selectedSizeIds,selectedPrice,selectedUnitIds],
  () => {
    fetchProducts(); // جلب المنتجات تلقائيًا عند حدوث تغيير
  },
  { deep: true }
);





// load more product
const loadMoreTrigger = ref(null);
// استخدام IntersectionObserver لمراقبة نهاية الصفحة
useIntersectionObserver(
  loadMoreTrigger,
  ([{ isIntersecting }]) => {
    if (isIntersecting) {
          storeSecion.fetchProductsFilterBySubcategry(filterData2);
    }
  },


  { threshold: 0.5 }
);


onMounted(async() => {
  storeSecion.resetProducts();
  await storeSecion.fetchSubCategoryByCategoryID(filteredData3)
  await storeSecion.fetchProductsFilterBySubcategry(filteredData3)

});
</script>




<style>
/* إضافة أي تخصيصات إضافية هنا */
</style>
