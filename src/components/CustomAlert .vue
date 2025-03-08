<!-- components/CustomAlert.vue -->
<template>
  <transition name="alert">
    <div v-if="showAlert" class="fixed top-4 left-1/2 transform -translate-x-1/2 z-50">
      <div
        :class="alertClasses"
        class="min-w-72 p-2 rounded-lg shadow-lg flex items-center justify-center gap-3 mx-auto"
      >
        <div v-html="alertIcon"></div>
        <div>
          <!-- <h3 class="font-semibold">{{ title }}</h3> -->
          <p class="text-sm mt-1">{{ message }}</p>
        </div>
        <!-- <button
          @click="closeAlert"
          class="ml-auto text-gray-500 hover:text-gray-700"
        >
          &times;
        </button> -->
      </div>
    </div>
  </transition>
</template>

<script setup>
import { ref, computed } from 'vue'

const showAlert = ref(false)
const title = ref('')
const message = ref('')
const type = ref('info')



// وظائف مساعدة
// const showSuccess = (message, title = 'نجاح') => {
//   alertRef.value?.show('success', title, message)
// };


// const showError = (message, title = 'خطأ') => {
//   alertRef.value?.show('error', title, message)
// }

// const showWarning = (message, title = 'تحذير') => {
//   alertRef.value?.show('warning', title, message)
// }

// const showInfo = (message, title = 'معلومة') => {
//   alertRef.value?.show('info', title, message)
// }

// الألوان والآيقونات لكل نوع
const alertConfig = {
  success: {
    bg: 'bg-green-500',
    text: 'text-white',
    icon: `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linecap="round" stroke-width="2" d="M5 13l4 4L19 7"/>
    </svg>`
  },
  error: {
    bg: 'bg-primary-900',
    text: 'text-white',
    icon: `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
    </svg>`
  },
  warning: {
    bg: 'bg-yellow-100',
    text: 'text-yellow-700',
    icon: `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/>
    </svg>`
  },
  info: {
    bg: 'bg-blue-100',
    text: 'text-blue-700',
    icon: `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
    </svg>`
  }
}

const alertClasses = computed(() => {
  return `${alertConfig[type.value].bg} ${alertConfig[type.value].text}`
})

const alertIcon = computed(() => alertConfig[type.value].icon)

let timeoutId = null

const show = (alertType, alertTitle, alertMessage, duration = 3000) => {
  type.value = alertType
  title.value = alertTitle
  message.value = alertMessage
  showAlert.value = true

  if (timeoutId) clearTimeout(timeoutId)
  timeoutId = setTimeout(closeAlert, duration)
}

const closeAlert = () => {
  showAlert.value = false
}

defineExpose({ show })
</script>


<style>
.alert-enter-active,
.alert-leave-active {
  transition: all 0.3s ease;
}

.alert-enter-from,
.alert-leave-to {
  opacity: 0;
  transform: translate(-50%, -20px);
}

.alert-enter-to,
.alert-leave-from {
  opacity: 1;
  transform: translate(-50%, 0);
}
</style>



