<template>
  <div
    v-if="props.isOpen"
    class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
  >
    <div class="fixed bottom-0 w-full border-t-2 rounded z-50">
      <div
        class="bg-white w-full overflow-y-auto custom-scroll max-h-[500px] h-full"
      >
        <div>
          <div class="py-1  px-2  border-b-2  bg-white m-2 grid grid-cols-12 items-center ">
                <h1  class="col-span-11 text-center text-gray-500 font-bold text-sm"> مشاركة </h1>
                <button
                  @click="close"
                  class="text-primary-900 col-span-1 text-[20px] hover:text-black "
                >
                  &times;
                </button>
              </div>
          <div class="w-full shadow-xl">
            <div class="p-2 space-y-2">
              <!-- مشاركة عبر فيسبوك -->
              <a
                :href="facebookShareUrl"
                target="_blank"
                class="flex items-center gap-2 p-2 hover:bg-gray-100 rounded-md text-black"
              >
                <svg
                  class="w-5 h-5 text-blue-600"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
                  />
                </svg>
                فيسبوك
              </a>

              <!-- مشاركة عبر تويتر -->
              <a
                :href="twitterShareUrl"
                target="_blank"
                class="flex items-center gap-2 p-2 hover:bg-gray-100 rounded-md text-gray-700"
              >
                <svg
                  class="w-5 h-5 text-blue-400"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"
                  />
                </svg>
                تويتر
              </a>

              <!-- مشاركة عبر الواتساب -->
              <a
                :href="whatsappShareUrl"
                target="_blank"
                class="flex items-center gap-2 p-2 hover:bg-gray-100 rounded-md text-gray-700"
              >
                <svg
                  class="w-5 h-5 text-green-500"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"
                  />
                </svg>
                واتساب
              </a>

              <!-- نسخ الرابط -->
              <button
                @click="copyLink"
                class="w-full flex items-center gap-2 p-2 hover:bg-gray-100 rounded-md text-gray-700"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5 text-gray-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                  />
                </svg>
                نسخ الرابط
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const props = defineProps({
  isOpen: {
    type: Boolean,
    required: true,
  },
})



const currentUrl = ref(window.location.href)


const product = ref({
  name: '',
  description: '',
  shortUrl: currentUrl.value
})

const isMobile = computed(() => /Android|webOS|iPhone|iPad/i.test(navigator.userAgent))
const message = `السلام عليكم 🛍 \n\n

🔹 المنتج: ${product.value.name} \n\n
📝 الوصف: ${product.value.description}\n\n
🔗 رابط المنتج: ${product.value.shortUrl}\n\n

📲 تواصل معنا للمزيد من التفاصيل!\n\n`


const whatsappShareUrl = computed(() => {
  return isMobile.value ?
    `whatsapp://send?text=${encodeURIComponent(message)}` :
    `https://web.whatsapp.com/send?text=${encodeURIComponent(message)}`
})


// روابط المشاركة

const facebookShareUrl = computed(() => {
  const params = new URLSearchParams({
    u: currentUrl.value,
    quote: message,
    hashtag: '#متجرنا'
  })

  return isMobile.value ?
    `fb://sharer/?${params}` : // رابط التطبيق
    `https://www.facebook.com/sharer/sharer.php?${params}`
})



const twitterShareUrl = computed(() => {
  const params = new URLSearchParams({
    url: currentUrl.value,
    text: message,
    hashtags: 'متجرنا'
  })

  return isMobile.value ?
    `twitter://post?${params}` : // رابط التطبيق
    `https://twitter.com/intent/tweet?${params}`
})

// const facebookShareUrl = computed(() => {
//   return `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl.value)}`
// })

// const twitterShareUrl = computed(() => {
//   return `https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl.value)}&text=${encodeURIComponent(productTitle.value)}`
// })

// const whatsappShareUrl = computed(() => {
//   return `https://wa.me/?text=${encodeURIComponent(`${productTitle.value} - ${currentUrl.value}`)}`
// })

// نسخ الرابط
const copyLink = async () => {
  try {
    await navigator.clipboard.writeText(currentUrl.value)
    alert('تم نسخ الرابط بنجاح!')
  } catch (err) {
    console.error('فشل في نسخ الرابط:', err)
  }
};


// Emits
const emit = defineEmits(['close'])
// Close the dialog
const close = () => {
  emit('close')
};

</script>
