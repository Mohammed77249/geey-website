import './assets/styles/main.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import { useAuthStore } from './stores/auth'
import i18n from "@/plugins/i18n";
import { useLanguageStore } from '@/stores/language'
const app = createApp(App)
app.use(router)
app.use(createPinia())
app.use(i18n)
const authStore = useAuthStore()
authStore.restoreAuth()
const languageStore = useLanguageStore()
languageStore.restoreLanguage()
app.mount('#app')
