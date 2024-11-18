<template>
  <div class=" px-32 min-h-screen rtl">
    <!-- العنوان -->
    <div class=" py-4 border-b">
      <div class="container mx-auto px-4">
        <h1 class="text-gray-400 font-normal">الصفحة الرئيسية  </h1>
      </div>
    </div>

    <div class="container mx-auto px-4  grid grid-cols-1 lg:grid-cols-12 ">

       <!-- product image  -->
        <div class="col-span-8 pl-10">
        <div class="flex ltr">
          <img
            :src="product.image"
            alt="Product Image"
            class="w-full  shadow-md"
          />

          <div class="block gap-2 ml-3">
            <img
              v-for="(thumbnail, index) in product.thumbnails"
              :key="index"
              :src="thumbnail"
              alt="Thumbnail"
              class="w-20 h-20 object-cover rounded-md border hover:border-blue-500"
            />
          </div>
        </div>

        <div class="mt-10 mb-10">
          <div class="mb-5">
          <div class="flex items-center justify-between mb-5">
            <h1 class="font-semibold text-xl"> مراجعات العملاء   (1000+)</h1>
            <RouterLink :to="`/product/${productId}/comments`">
              <div class="flex items-center">
              <h1 class="text-gray-500 font-medium">الاراء الكاملة</h1>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15.0001 19.92L8.48009 13.4C7.71009 12.63 7.71009 11.37 8.48009 10.6L15.0001 4.07996" stroke="gray" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
            </RouterLink>
          </div>

          <HeaderCommentsComp :isMain="true" />
        </div>

        <!-- comments -->
          <CommentComp :commentList="listContentComment"  />
          <CommentComp :commentList="listContentComment"  />
          <CommentComp :commentList="listContentComment"  />

          <div>

              <RouterLink :to="`/product/${productId}/comments`">
                <div class="flex items-center justify-center gap-1">
                    <h1 class="font-semibold text-sm">عرض تقييمات جميع العملاء</h1>
                    <img class="w-[20px] " src="/src/assets/images/arrow-left.svg" />
                </div>
              </RouterLink>


          </div>

        </div>
      </div>


      <!-- product details  -->
       <div class="col-span-4">
        <div class="bg-blue-500 w-full h-40 mb-5 ">

        </div>

        <div class=" bg-gray-700 h-80 mb-5">
          <h2 class="text-3xl font-bold mb-2">{{ product.name }}</h2>
        <p class="text-gray-600 mb-4">{{ product.description }}</p>
        <p class="text-2xl font-semibold text-red-500 mb-6">
          {{ product.price }}$
        </p>
        <div class="mb-6">
          <h3 class="text-lg font-bold mb-2">اختر الحجم:</h3>
          <div class="flex gap-3">
            <button
              v-for="(size, index) in product.sizes"
              :key="index"
              class="py-2 px-4 border rounded-md hover:bg-gray-100"
            >
              {{ size }}
            </button>
          </div>
        </div>

        <button
          @click="addToCart"
          class="w-full bg-red-500 text-white py-3 rounded-lg text-lg font-bold hover:bg-red-600 transition"
        >
          أضف إلى السلة
        </button>
        </div>

        <div class="bg-blue-500 w-full h-72 mb-5 ">

        </div>

        <div class="bg-blue-500 w-full h-[1020px] mb-5 ">

        </div>


      </div>

    </div>


    <!-- more product-->
    <div class="bg-white py-8 mb-10">
      <div class="container mx-auto px-4">
        <h3 class="text-xl font-bold mb-4"> ماينظر الية الاخرون</h3>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div
            v-for="(item, index) in similarProducts"
            :key="index"
            class="bg-white shadow-md rounded-lg p-4"
          >
            <img
              :src="item.image"
              alt="Similar Product"
              class="w-full h-40 object-cover rounded-md"
            />
            <h4 class="text-sm font-semibold mt-2">{{ item.name }}</h4>
            <p class="text-red-500 font-bold">{{ item.price }}$</p>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script setup>
import { ref } from "vue";
import CommentComp from '../components/Comments/CommentComp.vue';
import HeaderCommentsComp from '../components/Comments/HeaderComentsComp.vue';
import { useRoute } from 'vue-router';
const route = useRoute();
const productId = route.params.id;

const product = ref({
  name: "اسم المنتج",
  description: "هذا هو وصف المنتج بشكل مفصل.",
  price: 49.99,
  image: "/src/assets/images/products/92265483-9E7E-4FC3-A355-16CCA677C11C.svg",
  thumbnails: [
    "/src/assets/images/products/Image (1).svg",
    "/src/assets/images/products/Image (2).svg",
   "/src/assets/images/products/Image (1).svg",
   "/src/assets/images/products/Image (1).svg",
    "/src/assets/images/products/Image (1).svg",
    "/src/assets/images/products/Image (1).svg",


  ],
  sizes: ["S", "M", "L", "XL"],
});


const listContentComment = ref([
  {
    title:"حجم التمثال",
    subtitle: "us 30/EUR 65",
  },
  {
    title:"خصر ",
    subtitle: "cm/23 in 59",
  },
  {
    title:"طول",
    subtitle: "cm/62 in 165",
  },
  {
    title:"الوزن",
    subtitle: "kg/130 lbs 70",
  },
  {
    title:"الوركين",
    subtitle: "cm/30 in 80",
  },
  {
    title:"المقاس العام",
    subtitle: "مناسب",
  },
  {
    title:"لون",
    subtitle: "زمغدجي",
  },
  {
    title:"مقاس",
    subtitle: "XL",
  },

])

const similarProducts = ref([
  {
    name: "منتج مشابه 1",
    price: 29.99,
    image: "https://via.placeholder.com/150",
  },
  {
    name: "منتج مشابه 2",
    price: 19.99,
    image: "https://via.placeholder.com/150",
  },
  {
    name: "منتج مشابه 3",
    price: 39.99,
    image: "https://via.placeholder.com/150",
  },
  {
    name: "منتج مشابه 4",
    price: 59.99,
    image: "https://via.placeholder.com/150",
  },
  {
    name: "منتج مشابه 4",
    price: 59.99,
    image: "https://via.placeholder.com/150",
  },
  {
    name: "منتج مشابه 4",
    price: 59.99,
    image: "https://via.placeholder.com/150",
  },
  {
    name: "منتج مشابه 4",
    price: 59.99,
    image: "https://via.placeholder.com/150",
  },
  {
    name: "منتج مشابه 4",
    price: 59.99,
    image: "https://via.placeholder.com/150",
  },
  {
    name: "منتج مشابه 4",
    price: 59.99,
    image: "https://via.placeholder.com/150",
  },
  {
    name: "منتج مشابه 4",
    price: 59.99,
    image: "https://via.placeholder.com/150",
  },
  {
    name: "منتج مشابه 4",
    price: 59.99,
    image: "https://via.placeholder.com/150",
  },
  {
    name: "منتج مشابه 4",
    price: 59.99,
    image: "https://via.placeholder.com/150",
  },
  {
    name: "منتج مشابه 4",
    price: 59.99,
    image: "https://via.placeholder.com/150",
  },
  {
    name: "منتج مشابه 4",
    price: 59.99,
    image: "https://via.placeholder.com/150",
  },
  {
    name: "منتج مشابه 4",
    price: 59.99,
    image: "https://via.placeholder.com/150",
  },
  {
    name: "منتج مشابه 4",
    price: 59.99,
    image: "https://via.placeholder.com/150",
  },
]);


const addToCart = () => {
  alert("تمت إضافة المنتج إلى السلة!");
};
</script>


