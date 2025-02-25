<template>
  <header class="bg-white shadow-md px-5 md:px-10 max-w-screen-3xl mx-auto">
    <div class="grid grid-cols-1">

      <div class="flex items-center justify-between ">
        <!-- logo-->

          <RouterLink to="/desktop/home">
            <div class="flex items-center cursor-pointer ">
              <!-- <span class="text-xl md:text-2xl 2xl:text-4xl font-bold text-primary-900">{{ $t('Jeey') }}</span> -->
              <img
                src="/jeeeeylogo3.jpg"
                alt="SHEIN"
                class="h-8 w-8 2xl:h-10 2xl:w-20"
              />
            </div>
          </RouterLink>

        <!-- search input -->
        <div class=" md:mx-6 flex-1 max-w-xl">
          <!-- <input
            type="text"
            :placeholder="$t('Search for products...')"
            class="w-full pr-10 pl-4 py-2 text-gray-700 border bg-[#F6F6F6] focus:outline-none focus:border-gray-400 text-right"
          />
          <div
            class="absolute top-1/2 transform -translate-y-1/2 left-0 h-full w-10 text-gray-400 cursor-pointer bg-black"
          >
            <svg
              width="16"
              height="16"
              class="absolute top-1/2 transform -translate-y-1/2 left-0 h-[50%] w-10 text-gray-400 cursor-pointer"
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
                opacity="0.4"
                d="M12.6199 13.7932C12.9733 14.8599 13.7799 14.9665 14.3999 14.0332C14.9666 13.1799 14.5933 12.4799 13.5666 12.4799C12.8066 12.4732 12.3799 13.0665 12.6199 13.7932Z"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div> -->
        <SearchComp/>
        </div>

        <!-- links -->
        <div class="flex gap-2 md:gap-4">
          <!-- icon user -->
          <div class="cursor-pointer text-gray-700 hover:text-gray-900">
            <div class="relative flex items-center">
              <div ref="dropDownStatus">
                <RouterLink to="/desktop/user">
                <button class="hidden lg:block"
                  type="button"
                  @click="isDropdowenStatusVisable = false"
                  @mouseover="isDropdowenStatusVisable = true"
                  @mouseleave="isDropdowenStatusVisable = false"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12Z"
                       stroke="#8a1538"
                       stroke-width="1.5"
                    />
                    <path
                      d="M11.9999 14.5C6.98991 14.5 2.90991 17.86 2.90991 22C2.90991 22.28 3.12991 22.5 3.40991 22.5H20.5899C20.8699 22.5 21.0899 22.28 21.0899 22C21.0899 17.86 17.0099 14.5 11.9999 14.5Z"
                       stroke="#8a1538"
                       stroke-width="1.5"
                    />
                  </svg>

                </button>
                <button class="block lg:hidden"
                  type="button"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12Z"
                       stroke="#8a1538"
                       stroke-width="1.5"
                    />
                    <path
                      d="M11.9999 14.5C6.98991 14.5 2.90991 17.86 2.90991 22C2.90991 22.28 3.12991 22.5 3.40991 22.5H20.5899C20.8699 22.5 21.0899 22.28 21.0899 22C21.0899 17.86 17.0099 14.5 11.9999 14.5Z"
                       stroke="#8a1538"
                       stroke-width="1.5"
                    />
                  </svg>

                </button>
              </RouterLink>
                <!-- Dropdown menu -->
                <div
                  @mouseenter="isDropdowenStatusVisable = true"
                  @mouseleave="isDropdowenStatusVisable = false"
                  class="z-50 absolute bg-white divide-y divide-gray-100 transition-all duration-300 rounded-lg shadow w-[140px]"
                  v-if="isDropdowenStatusVisable"
                >
                  <div class="px-4 py-3 text-[13px] font-medium text-black">
                    <div class="truncate rtl">mohammed@..</div>
                    <div class="w-full h-[1px] mt-3 bg-gray-300"></div>
                  </div>
                  <ul
                    class="py-1  text-[13px] text-gray-600 font-medium"
                    aria-labelledby="dropdownInformdropdownAvatarNameButtonationButton"
                  >
                    <li>
                      <!-- <a href="#" class="block px-4 py-1 hover:bg-gray-100"
                        >ملفي الشخصي</a
                      > -->
                      <RouterLink to="/desktop/user"  class="block px-4 py-1 hover:bg-gray-100">
                      {{ $t("My profile") }}
                      </RouterLink>
                    </li>
                    <li>
                      <RouterLink to="/desktop/user/myorder" class="block px-4 py-1 hover:bg-gray-100">
                        {{ $t("My Oreders") }}</RouterLink>
                    </li>
                    <!-- <li>
                      <a href="#" class="block px-4 py-1 hover:bg-gray-100"
                        >رسالتي</a
                      >
                    </li> -->
                    <!-- <li>
                      <a href="#" class="block px-4 py-1 hover:bg-gray-100"
                        >كوبوناتي</a
                      >
                    </li> -->
                    <!-- <li>
                      <a href="#" class="block px-4 py-1 hover:bg-gray-100"
                        >نقاطي</a
                      >
                    </li> -->
                    <!-- <li>
                      <a href="#" class="block px-4 py-1 hover:bg-gray-100"
                        >شوهد مؤخرا</a
                      >
                    </li> -->
                    <!-- <li>
                      <a href="#" class="block px-4 py-1 hover:bg-gray-100"
                        >المزيد من الخدمات
                      </a>
                    </li> -->
                  </ul>
                  <div class="w-full h-[1px] px-4 bg-gray-300"></div>
                  <div class="py-1">
                    <!-- <button
                      class="py-1 text-[13px] w-full font-medium text-gray-600 hover:bg-gray-100"
                    >
                      تبديل الحساب
                    </button> -->
                    <button
                      @click="store.logout(logout)"
                      class="w-full py-1 font-medium text-[13px] text-gray-600 hover:bg-gray-100"
                    >
                      {{ $t("Log out") }}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- icon سلة -->
           <div>
            <RouterLink to="/desktop/cart">
              <div
            class="relative cursor-pointer text-gray-700 hover:text-gray-900"
          >

            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 2H3.74C4.82 2 5.67 2.93 5.58 4L4.75 13.96C4.71759 14.3459 4.76569 14.7342 4.89123 15.1005C5.01678 15.4669 5.21705 15.8031 5.47934 16.0879C5.74163 16.3728 6.06023 16.6001 6.41495 16.7553C6.76967 16.9106 7.15278 16.9905 7.54 16.99H18.19C19.63 16.99 20.89 15.81 21 14.38L21.54 6.88C21.66 5.22 20.4 3.87 18.73 3.87H5.82"
                stroke="#8a1538"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M9 8H21M16.25 22C16.5815 22 16.8995 21.8683 17.1339 21.6339C17.3683 21.3995 17.5 21.0815 17.5 20.75C17.5 20.4185 17.3683 20.1005 17.1339 19.8661C16.8995 19.6317 16.5815 19.5 16.25 19.5C15.9185 19.5 15.6005 19.6317 15.3661 19.8661C15.1317 20.1005 15 20.4185 15 20.75C15 21.0815 15.1317 21.3995 15.3661 21.6339C15.6005 21.8683 15.9185 22 16.25 22ZM8.25 22C8.58152 22 8.89946 21.8683 9.13388 21.6339C9.3683 21.3995 9.5 21.0815 9.5 20.75C9.5 20.4185 9.3683 20.1005 9.13388 19.8661C8.89946 19.6317 8.58152 19.5 8.25 19.5C7.91848 19.5 7.60054 19.6317 7.36612 19.8661C7.1317 20.1005 7 20.4185 7 20.75C7 21.0815 7.1317 21.3995 7.36612 21.6339C7.60054 21.8683 7.91848 22 8.25 22Z"
                stroke="#8a1538"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <span
              class="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center"
            >
            <p v-if="storeCart.lengthCart !== null ">{{ storeCart.lengthCart }} </p>
             <p v-else>0</p>
            </span>

          </div>
            </RouterLink>
           </div>


          <!-- icon likes or favoraite -->
          <div
            class="relative cursor-pointer text-gray-700 hover:text-gray-900 hidden md:block"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.62 20.812C12.28 20.932 11.72 20.932 11.38 20.812C8.48 19.822 2 15.692 2 8.69199C2 5.60199 4.49 3.10199 7.56 3.10199C9.38 3.10199 10.99 3.98199 12 5.34199C12.5138 4.64787 13.183 4.08372 13.954 3.69473C14.725 3.30575 15.5764 3.10275 16.44 3.10199C19.51 3.10199 22 5.60199 22 8.69199C22 15.692 15.52 19.822 12.62 20.812Z"
                stroke="#8a1538"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <span
              class="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center"
            >
              0
            </span>
          </div>

          <!-- icon language -->
          <div class="cursor-pointer text-gray-700 hover:text-gray-900">
            <div class="relative flex items-center">
              <div ref="dropDownLanguage">
                <div
                  class=""
                  type="button"
                  @click="isDropdowenLanguageVisable = true"
                  @mouseenter="isDropdowenLanguageVisable = true"
                  @mouseleave="isDropdowenLanguageVisable = false"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                      stroke="#8a1538"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <g opacity="0.4">
                      <path
                        d="M7.99961 3H8.99961C7.04961 8.84 7.04961 15.16 8.99961 21H7.99961"
                        stroke="#8a1538"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M15 3C16.95 8.84 16.95 15.16 15 21"
                        stroke="#8a1538"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M3 16V15C8.84 16.95 15.16 16.95 21 15V16"
                        stroke="#8a1538"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M3 9.0001C8.84 7.0501 15.16 7.0501 21 9.0001"
                        stroke="#8a1538"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </g>
                  </svg>
                </div>

                <!-- Dropdown menu -->
                <div
                  @mouseenter="isDropdowenLanguageVisable = true"
                  @mouseleave="isDropdowenLanguageVisable = false"
                  :class="storedLanguage === 'en' ? 'right-0' : 'left-0'"
                  class="z-50 absolute bg-white divide-y divide-gray-100 transition-all duration-300 rounded-lg shadow p-5 w-[10 0px]"
                  v-if="isDropdowenLanguageVisable"
                >
                  <ul
                    class="py-2 text-[13px] text-gray-600 font-medium"
                    aria-labelledby="dropdownInformdropdownAvatarNameButtonationButton"

                  >
                    <li>
                      <button
                        class="px-4 py-2 w-full hover:bg-gray-100"
                        @click="changeLanguage('en')"
                      >
                        {{ $t("English") }}
                      </button>
                    </li>
                    <li>
                      <button
                        class="px-4 py-2 w-full hover:bg-gray-100"
                        @click="changeLanguage('ar')"
                      >
                        {{ $t("Arbic") }}
                      </button>
                    </li>
                  </ul>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>

      <div class="flex items-center justify-between ">
        <!-- button all -->
        <div>
          <ul>
            <li
              @mouseenter="showDropdown = true"
              @mouseleave="showDropdown = false"
            >
              <div class="flex space-x-2 cursor-pointer hover:text-black hover:bg-gray-100">
                <div :class="{'w-20': storedLanguage === 'en' , 'w-16': storedLanguage === 'ar' }" class="grid grid-cols-1 justify-center items-center h-10">
                  <div class="flex justify-start items-center ">
                    <div>
                      <span class="text-[12px] text-primary-900 font-sans">
                        {{ $t('Categories') }}
                      </span>
                    </div>
                    <div>
                      <svg
                        v-if="!showDropdown"
                        width="15"
                        height="15"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M19.9201 8.94995L13.4001 15.47C12.6301 16.24 11.3701 16.24 10.6001 15.47L4.08008 8.94995"
                          stroke="#8a1538"
                          stroke-width="1.5"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                      <svg
                        v-if="showDropdown"
                        width="15"
                        height="15"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M19.9201 15.05L13.4001 8.53001C12.6301 7.76001 11.3701 7.76001 10.6001 8.53001L4.08008 15.05"
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

              <div @mouseenter="isOpen = true" @mouseleave="isOpen = false" >
                <SidebarComp :isOpen="showDropdown" :hoveritem="isHoeverItem" />
              </div>
            </li>
          </ul>
        </div>

        <!-- list -->
        <div class="max-w-8xl overflow-x-auto">
          <ul
            class="flex gap-2 scrollable-list overflow-x-auto text-[12px] text-gray-600 font-sans"
          >
            <li
              v-for="(section, index) in storeSecion.getSections"
              :key="index"
              @mouseenter="handleMouseEnter(index)"
              @mouseleave="handleMouseLeave"
               @mouseover="getID(section.id)"
              :class="{ 'bg-gray-100 text-black': hoveredIndex == index }"
              class="flex-shrink-0 p-2 text-center rounded-lg cursor-pointer hover:text-black hover:bg-gray-100 transition-all duration-200"
            >

            <RouterLink :to="`/desktop/recommend/${section.id}/${section.name}`">
               {{ section.name }}
            </RouterLink>

            <!-- <div  v-if="storedLanguage == 'ar'">
              <RouterLink :to="`/recommend/${section.id}/${section.name_ar}`">
               {{ section.name_ar }}
            </RouterLink>
            </div>

            <div  v-if="storedLanguage == 'en'">
              <RouterLink :to="`/recommend/${section.id}/${section.name_en}`">
               {{ section.name_en }}
            </RouterLink>
            </div> -->



            </li>
          </ul>
        </div>

        <!-- buttons left and right -->
        <div class="flex space-x-6">
          <div
            class="grid grid-cols-1 border-e-2 justify-center items-center w-10 h-10"
          >
            <div class="flex gap-2" :class="storedLanguage == 'en' ? 'hidden' : ''">
              <div>
                <svg
                  width="13"
                  height="13"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.90991 19.92L15.4299 13.4C16.1999 12.63 16.1999 11.37 15.4299 10.6L8.90991 4.07996"
                    stroke="#8a1538"
                    stroke-width="4"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <div class="">
                <svg
                  width="13"
                  height="13"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  class="font-bold"
                >
                  <path
                    d="M15.0001 19.92L8.48009 13.4C7.71009 12.63 7.71009 11.37 8.48009 10.6L15.0001 4.07996"
                    stroke="#8a1538"
                    stroke-width="4"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
            </div>
            <div class="flex gap-2" :class="storedLanguage == 'ar' ? 'hidden' : ''">
              <div class="">
                <svg
                  width="13"
                  height="13"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  class="font-bold"
                >
                  <path
                    d="M15.0001 19.92L8.48009 13.4C7.71009 12.63 7.71009 11.37 8.48009 10.6L15.0001 4.07996"
                    stroke="#8a1538"
                    stroke-width="4"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <div>
                <svg
                  width="13"
                  height="13"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.90991 19.92L15.4299 13.4C16.1999 12.63 16.1999 11.37 15.4299 10.6L8.90991 4.07996"
                    stroke="#8a1538"
                    stroke-width="4"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>

      </div>
      <!-- <LoaderComp :is-loader="store.loading"/> -->
    </div>
  </header>
</template>

<script setup>
import SidebarComp from './SidebarComp.vue'
import SearchComp from './SearchComp.vue'
import { ref, onMounted, onBeforeMount } from 'vue'
import { useAuthStore } from '@/stores/auth'
import { useLanguageStore } from "@/stores/language";
// import LoaderComp from './LoaderComp.vue';
import { useSectionsStore } from '@/stores/section'
import { useCartStore } from '@/stores/cart'
import { RouterLink } from 'vue-router';
const storeCart = useCartStore()
const isHoeverItem = ref(null)
const showDropdown = ref()
const store = useAuthStore()
const storeSecion = useSectionsStore();

const logout = "desktop";
const filteredData = ref({
  page: 1,
  perPage: 20,
  filter:0,
});


const languageStore = useLanguageStore();
const storedLanguage = localStorage.getItem("language");
function changeLanguage(lang) {
  setTimeout(() => {
    languageStore.setLanguage(lang);
    window.location.reload();

      }, 500);

}

const getID = (id) =>{
    filteredData.value.sectionId = id
    // storeSecion.fetchSubSectionBySectionID(filteredData);

  }

const hoveredIndex = ref(null);
let intervalId;
const updateHoveredIndex = () => {
      const newIndex = localStorage.getItem("hoveredIndex2");
      hoveredIndex.value = newIndex !== null ? parseInt(newIndex) : null;
    };

//user icon   Language
const dropDownStatus = ref(null)
const isDropdowenStatusVisable = ref(false)


//Language icon
const dropDownLanguage = ref(null)
const isDropdowenLanguageVisable = ref(false)


onMounted(() => {
  storeSecion.fetchSections(filteredData);

  if(store.isAuthenticated){
    storeCart.fetchAllProductsInCart();
  }

  updateHoveredIndex();
  intervalId = setInterval(updateHoveredIndex, 500);

})


onBeforeMount(() => {
  clearInterval(intervalId);
})



const handleMouseEnter = index => {
  showDropdown.value = true
  localStorage.setItem('hoveredIndex', index)

}

const handleMouseLeave = () => {
  isHoeverItem.value = null
  showDropdown.value = false
  localStorage.removeItem('hoveredIndex')
};


</script>
