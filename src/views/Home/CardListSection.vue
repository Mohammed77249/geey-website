<template>
  <div class="mt-5">
    <div>
      <ul class="space-y-5">
        <li v-if="storeCategories.getCategories">
          <div
            class=" p-5 grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7  rtl gap-6"
          >
            <div
              v-for="(category, index) in storeCategories.getCategories"
              :key="index"

              class="bg-white flex flex-col items-center"
            >  <RouterLink :to="`/recommend/${category.category_level}/${category.id}/${category.name}`">
              <img
                src="/src/assets/images/Big Sale Banner.svg"
                :alt="category.name"
                  @click="toggleChildren(category.id)"
                class="w-20 md:w-28 rounded-full h-20 md:h-28 object-cover bg-gray-50 transition-transform duration-200 hover:scale-105 hover:shadow"
              />
              <h3   @click="toggleChildren(category.id)" class="text-center mt-2 text-[12px] md:text-[15px] font-sans text-gray-800">
                {{ category.name }}
              </h3>
            </RouterLink>
            </div>
          </div>
        </li>
        <div v-else>
            no data
        </div>
        <!-- <LoaderComp  :is-loader="storeAllSection.loading"/> -->
         <div v-if=" storeCategories.loading">
          <LoaderDatacomp :is-loader="storeCategories.loading"/>
         </div>



      </ul>

    </div>

  </div>
  <div>
    <div class="grid grid-cols-12 md:mt-5 gap-5 p-2 sm:p-0 sm:gap-5">

    <div class="col-span-12 md:col-span-3 bg-[#b53ed233]  block rounded-md md:hidden ">
      <div>
        <h1 class="p-2">{{ $t('The most important trends') }}</h1>
        <div class="grid grid-cols-3 gap-1 p-2">
          <ProductCard :isORNot="true" v-for="product in products2" :key="product.id" :product="product" />
        </div>
      </div>
    </div>

    <div class=" col-span-12 md:col-span-3  bg-pink-50  rounded-md block md:hidden">
        <h1 class="p-2 text-primary-900 font-semibold">{{ $t('Low prices') }}</h1>
        <div class="grid grid-cols-3   gap-1 p-2">
        <ProductCard :isORNot="false" v-for="product in products" :key="product.id" :product="product" />
        <!-- <ProductCard :isORNot="false" /> -->
      </div>
    </div>




</div>
  </div>
</template>

<script setup>
import ProductCard from '@/components/ProductCard.vue';
import LoaderDatacomp from '@/components/LoaderDatacomp.vue';
import { useSectionsStore } from '@/stores/section'
import {ref } from 'vue'
const storeCategories = useSectionsStore();

const filteredData = ref({
  categoryId:null,
      page: 1,
      perPage: 10,
    });

    // onMounted(() => {
    //   storeAllSection.fetchAllSections(filteredData);
    // });

    const toggleChildren = id => {
  if (id) {


    filteredData.value.categoryId = id
    // storeCategories.fetchSubCategoryByCategoryID(filteredData)
  }
   else {
  alert("hghghg")
  }
}

// const categories = [
//   { name: 'الأزياء النسائية', image: '/src/assets/images/Big Sale Banner.svg' },
//   { name: 'الأزياء الرجالية', image: '/public/logogeey.svg' },
//   { name: 'الأطفال', image: '/src/assets/images/products/92265483-9E7E-4FC3-A355-16CCA677C11C.svg' },
//   { name: 'الإكسسوارات', image: '/src/assets/images/products/Image (1).svg' },
//   { name: 'الأحذية', image: '/src/assets/images/products/Image (2).svg' },
//   { name: 'الحقائب', image: '/src/assets/images/products/Image (3).svg' },
//   { name: 'الأزياء النسائية', image: '/src/assets/images/products/Image (4).svg' },
//   { name: 'الأزياء الرجالية', image: '/src/assets/images/products/Image.svg' },
//   { name: 'الأطفال', image: '/src/assets/images/products/Mockup.svg' },
//   { name: 'الإكسسوارات', image: '/src/assets/images/products/Placeholder_01 (2).svg' },
//   { name: 'الأحذية', image: '/src/assets/images/products/Placeholder_01 (3).svg' },
//   { name: 'الحقائب', image: '/src/assets/images/products/Placeholder_01 (4).svg' },
//   { name: 'الأزياء النسائية', image: '/src/assets/images/products/Placeholder_01 (5).svg' },
//   { name: 'الأزياء الرجالية', image: '/src/assets/images/products/Rectangle 1113 (1).svg' },
//   { name: 'الأطفال', image: '/src/assets/images/products/Rectangle 1253.svg' },
//   { name: 'الإكسسوارات', image: '/src/assets/images/products/Rectangle 56.svg' },
//   { name: 'الأحذية', image: '/src/assets/images/products/Rectangle 72 (1).svg' },
//   { name: 'الحقائب', image: '/src/assets/images/products/Rectangle 75.svg' },
//   { name: 'الأزياء النسائية', image: '/src/assets/images/products/unsplash_DyhiB_wFifk.svg' },
//   { name: 'الأزياء الرجالية', image: '/src/assets/images/products/unsplash_jsgby4-zj44.svg' },
//   { name: 'الأطفال', image: '/src/assets/images/products/unsplash_VpqI6WX6sEs.svg' },
// ];


const products =ref([
        { id: 1, name: 'Dress', price: 99.99, image: '/src/assets/images/products/92265483-9E7E-4FC3-A355-16CCA677C11C.svg' },
        { id: 2, name: 'T-Shirt', price: 49.99, image: '/src/assets/images/Placeholder_01.svg' },
        { id: 3, name: 'Jeans', price: 79.99, image: '/src/assets/images/Placeholder_01 (1).svg' },
        { id: 4, name: 'Dress', price: 99.99, image: '/src/assets/images/products/Image (1).svg'},
        { id: 5, name: 'T-Shirt', price: 49.99, image: '/src/assets/images/products/Image (2).svg'},
        { id: 6, name: 'Jeans', price: 79.99, image: '/src/assets/images/products/Image (3).svg' },
        // Add more products as needed
      ]);

      const products2 = ref([
        { id: 1, name: 'Dress', price: 99.99, image: '/src/assets/images/products/Image (4).svg' },
        { id: 2, name: 'T-Shirt', price: 49.99, image: '/src/assets/images/products/Image.svg' },
        { id: 3, name: 'Jeans', price: 79.99, image: '/src/assets/images/products/Mockup.svg' },
        { id: 4, name: 'Dress', price: 99.99, image: '/src/assets/images/products/Placeholder_01 (2).svg'},
        { id: 5, name: 'T-Shirt', price: 49.99, image: '/src/assets/images/products/Placeholder_01 (3).svg'},
        { id: 6, name: 'Jeans', price: 79.99, image: '/src/assets/images/products/Rectangle 1113 (1).svg' },
        // Add more products as needed
      ]);


</script>
