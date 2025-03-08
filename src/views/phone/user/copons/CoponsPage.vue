<template>
  <div class="">
    <!-- زر المشاركة الرئيسي -->
    <button
      @click="toggleShareOptions"
      class="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
        />
      </svg>
      مشاركة
    </button>

    <!-- قائمة خيارات المشاركة -->
    <div
      v-if="showShareOptions"
      class=" bottom-0 mb-2 fixed w-48 bg-red-500 shadow-xl z-50 "
    >

      <div class="p-2 space-y-2">
        <!-- مشاركة عبر فيسبوك -->
        <a
          :href="facebookShareUrl"
          target="_blank"
          class="flex items-center gap-2 p-2 hover:bg-gray-100 rounded-md text-black"
        >
          <svg class="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
          </svg>
          فيسبوك
        </a>

        <!-- مشاركة عبر تويتر -->
        <a
          :href="twitterShareUrl"
          target="_blank"
          class="flex items-center gap-2 p-2 hover:bg-gray-100 rounded-md text-gray-700"
        >
          <svg class="w-5 h-5 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
            <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
          </svg>
          تويتر
        </a>

        <!-- مشاركة عبر الواتساب -->
        <a
          :href="whatsappShareUrl"
          target="_blank"
          class="flex items-center gap-2 p-2 hover:bg-gray-100 rounded-md text-gray-700"
        >
          <svg class="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
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
</template>

<script setup>
import { ref, computed } from 'vue'

const showShareOptions = ref(false)
const currentUrl = ref(window.location.href)
const productTitle = ref('اسم المنتج هنا') // استبدل بقيمة ديناميكية

// روابط المشاركة
const facebookShareUrl = computed(() => {
  return `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl.value)}`
})

const twitterShareUrl = computed(() => {
  return `https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl.value)}&text=${encodeURIComponent(productTitle.value)}`
})

const whatsappShareUrl = computed(() => {
  return `https://wa.me/?text=${encodeURIComponent(`${productTitle.value} - ${currentUrl.value}`)}`
})

// نسخ الرابط
const copyLink = async () => {
  try {
    await navigator.clipboard.writeText(currentUrl.value)
    alert('تم نسخ الرابط بنجاح!')
  } catch (err) {
    console.error('فشل في نسخ الرابط:', err)
  }
}

// إغلاق القائمة عند النقر خارجها
const toggleShareOptions = (e) => {
  e.stopPropagation() // إيقاف انتشار الحدث
  showShareOptions.value = !showShareOptions.value
  alert('القائمة مفتوحة؟', showShareOptions.value) // للتحقق من تغيير الحالة
}


// إغلاق القائمة عند النقر خارجها
window.addEventListener('click', (e) => {
  if (!e.target.closest('.relative')) {
    showShareOptions.value = false
  }
})




import { onMounted, onUnmounted } from 'vue'

const handleClickOutside = (e) => {
  const shareMenu = document.querySelector('.share-menu-container')
  if (!shareMenu.contains(e.target)) {
    showShareOptions.value = false
  }
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside)
})

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside)
})

</script>
