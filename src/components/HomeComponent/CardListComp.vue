<template>
  <div class="mt-5">
    <div>
      <ul class="space-y-5">
        <li>
          <div
            class=" p-5 grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7  rtl gap-6"
          >
            <div
              v-for="(category, index) in categories"
              :key="index"
              class="bg-white flex flex-col items-center"
            >  <RouterLink to="/recommend">
              <img
                :src="category.image"
                :alt="category.name"
                class="w-32 rounded-full h-32 object-cover bg-gray-50 transition-transform duration-200 hover:scale-105 hover:shadow"
              />
              <h3 class="text-center mt-2 text-[20px] font-sans text-gray-800">
                {{ category.name }}
              </h3>
            </RouterLink>
            </div>

          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
const categories = [
  { name: 'الأزياء النسائية', image: '/src/assets/images/Big Sale Banner.svg' },
  { name: 'الأزياء الرجالية', image: '/public/logogeey.svg' },
  { name: 'الأطفال', image: '/public/logogeey.svg' },
  { name: 'الإكسسوارات', image: '/public/logogeey.svg' },
  { name: 'الأحذية', image: '/public/logogeey.svg' },
  { name: 'الحقائب', image: '/public/logogeey.svg' },
  { name: 'الأزياء النسائية', image: '/public/logogeey.svg' },
  { name: 'الأزياء الرجالية', image: '/public/logogeey.svg' },
  { name: 'الأطفال', image: '/public/logogeey.svg' },
  { name: 'الإكسسوارات', image: '/public/logogeey.svg' },
  { name: 'الأحذية', image: '/public/logogeey.svg' },
  { name: 'الحقائب', image: '/public/logogeey.svg' },
  { name: 'الأزياء النسائية', image: '/public/logogeey.svg' },
  { name: 'الأزياء الرجالية', image: '/public/logogeey.svg' },
  { name: 'الأطفال', image: '/public/logogeey.svg' },
  { name: 'الإكسسوارات', image: '/public/logogeey.svg' },
  { name: 'الأحذية', image: '/public/logogeey.svg' },
  { name: 'الحقائب', image: '/public/logogeey.svg' },
  { name: 'الأزياء النسائية', image: '/public/logogeey.svg' },
  { name: 'الأزياء الرجالية', image: '/public/logogeey.svg' },
  { name: 'الأطفال', image: '/public/logogeey.svg' },
];

</script>
