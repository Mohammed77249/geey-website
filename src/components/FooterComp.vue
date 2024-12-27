<template>
  <footer class="bg-gray-50 text-white text-sm">
    <div class="container mx-auto px-10 md:px-20 py-8">
      <div class="grid grid-cols-1 md:grid-cols-12 gap-8 mt-5 md:mt-10 md:pb-8 ">

        <div class="col-span-6 w-full ">
          <div class="grid grid-cols-6 gap-1">

            <div class="col-span-2  w-full">
              <div>
                <h3 class="text-xs text-black font-medium mb-4">{{ $t('Company information') }}</h3>
                <ul class="space-y-2 text-[10px] text-gray-500">
                  <li><a href="#" class="hover:underline hover:text-black">{{ $t('About jeey') }}</a></li>
                  <li><a href="#" class="hover:underline hover:text-black"> {{ $t('Contact us') }}</a></li>
                  <li><a href="#" class="hover:underline hover:text-black"> {{ $t('Be our member') }}</a></li>
                  <li><a href="#" class="hover:underline hover:text-black">{{ $t('Luke fashion') }} </a></li>
                  <li><a href="#" class="hover:underline hover:text-black"> {{ $t('Social responsibility') }}</a></li>
                  <li><a href="#" class="hover:underline hover:text-black">{{ $t('Jobs') }}</a></li>
                </ul>
              </div>
            </div>
            <div class="col-span-2 w-full">
              <div>
                <h3 class="text-xs text-black font-medium mb-4">{{ $t('Center & Help') }}</h3>
                <ul class="space-y-2 text-[10px] text-gray-500 ">
                  <li><a href="#" class="hover:underline hover:text-black">{{ $t('How to order') }}</a></li>
                  <li><a href="#" class="hover:underline hover:text-black">{{ $t('shipping Information') }}</a></li>
                  <li><a href="#" class="hover:underline hover:text-black">{{ $t('recalled Products') }}</a></li>
                  <li><a href="#" class="hover:underline hover:text-black">{{ $t('refund') }}</a></li>
                  <li><a href="#" class="hover:underline hover:text-black">{{ $t('size Reference') }}</a></li>
                  <li><a href="#" class="hover:underline hover:text-black">{{ $t('faq') }}</a></li>
                  <li><a href="#" class="hover:underline hover:text-black">{{ $t('vip') }}</a></li>
                  <li><a href="#" class="hover:underline hover:text-black">{{ $t('track Order') }}</a></li>
                </ul>
              </div>
            </div>

            <div class="col-span-2  w-full">
              <div>
                <h3 class="text-xs text-black font-medium mb-4">{{ $t('customer service') }}</h3>
                <ul class="space-y-2 text-[10px] text-gray-500">
                  <li><a href="#" class="hover:underline hover:text-black">{{ $t('payment Method') }}</a></li>
                  <li><a href="#" class="hover:underline hover:text-black">{{ $t('cash On Delivery') }}</a></li>
                  <li><a href="#" class="hover:underline hover:text-black">{{ $t('gift Card') }}</a></li>
                  <li><a href="#" class="hover:underline hover:text-black">{{ $t('rewards Program') }}</a></li>
                </ul>
              </div>
            </div>

          </div>
        </div>

        <div class="col-span-6 w-full ">

          <div class="grid grid-cols-6 gap-1 mb-6">

            <!-- follow us -->
            <div class="col-span-3">
              <h3 class="text-xs text-black font-semibold mb-4">{{ $t('Follow us on') }}</h3>
              <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-5">
                <a href="#" class="text-gray-900 hover:text-white">
                  <img src="/src/assets/images/bootsrap.svg" alt="App Store" class="w-5 lg:w-7 text-black" />
                </a>
                <a href="#" class="text-gray-900 hover:text-white">
                  <img src="/src/assets/images/facebook.svg" alt="App Store" class="w-5 lg:w-7 text-black" />
                </a>
                <a href="#" class="text-gray-900 hover:text-white">
                  <img src="/src/assets/images/google-play.svg" alt="App Store" class="w-5 lg:w-7 text-black" />
                </a>
                <a href="#" class="text-gray-900 hover:text-white">
                  <img src="/src/assets/images/snapchat.svg" alt="App Store" class="w-5 lg:w-7 text-black" />
                </a>
                <a href="#" class="text-gray-900 hover:text-white">
                  <img src="/src/assets/images/whatsapp.svg" alt="App Store" class="w-5 lg:w-7 text-black" />
                </a>
                <a href="#" class="text-gray-900 hover:text-white">
                  <img src="/src/assets/images/youtube.svg" alt="App Store" class="w-5 lg:w-7 text-black" />
                </a>
              </div>
            </div>

            <!-- dowenload app -->
            <div class="col-span-3">
              <h3 class="text-xs text-black font-semibold ">{{ $t('App') }}</h3>
                <div class="flex gap-5  mt-4">
                  <a href="#">
                    <img src="/src/assets/images/android.svg" alt="Google Play" class="w-5 lg:w-7 text-primary-900" />
                  </a>
                  <a href="#">
                    <img src="/src/assets/images/apple.svg" alt="App Store" class="w-5 lg:w-7 text-primary-900" />
                  </a>
                </div>
            </div>

        </div>

        <!-- input buttom -->
          <div>
          <p class="mb-4 text-gray-400">{{ $t('Subscribe to Ji to receive fashion news') }}</p>
          <form class="flex items-center">
            <input
              type="email"
              :placeholder="$t('Enter your email')"
              class="flex-grow px-4 py-3 border border-gray-300 text-black"
            />
            <button
              type="submit"
              class="bg-primary-900 text-white  px-2 md:px-4 py-3 hover:bg-gray-800"
            >
            {{ $t('subscription') }}
            </button>
          </form>
          <form class="flex items-center mt-4 md:mt-8">
            <input
              type="email"
              :placeholder="$t('WhatsApp account')"
              class="flex-grow px-4 py-3 border border-gray-300  text-black"
            />
            <button
              type="submit"
              class="bg-primary-900 text-white px-2 md:px-4 py-3 hover:bg-gray-800"
            >
              {{ $t('subscription') }}
            </button>
          </form>
          </div>
        </div>

      </div>

      <div class="w-full text-black  mt-10 md:mt-20 grid grid-cols-6 md:grid-cols-12  gap-8">
        <div class="col-span-6 w-full">
          <div class="text-gray-800 ">
            &copy; 2024 Jeey. All rights reserved.
          </div>
          <div class="text-gray-900 underline ">
            سياسة الخصوصية     سياسة الخصوصية
          </div>
          <div class="text-gray-800 ">
            سياسة الخصوصية
          </div>

        </div>

        <div class="col-span-6 w-full  ">
          <p class="text-xs text-black font-medium mb-2">{{ $t('Accept') }}</p>
          <div class="px-2 grid grid-cols-6 gap-2">
            <img src="/src/assets/images/ads1.svg" class="w-16" />
            <img src="/src/assets/images/ads2.svg" class="w-16 " />
            <img src="/src/assets/images/ads1.svg" class="w-16" />
            <img src="/src/assets/images/ads2.svg" class="w-16 " />
            <img src="/src/assets/images/ads1.svg" class="w-16" />
            <img src="/src/assets/images/ads2.svg" class="w-16 " />

          </div>
        </div>

      </div>

    </div>
  </footer>
</template>

<script setup>

</script>


