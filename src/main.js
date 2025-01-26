import './assets/styles/main.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import { useAuthStore } from './stores/auth'
import i18n from "@/plugins/i18n";
import { useLanguageStore } from '@/stores/language'
// import { Vue3GoogleMap } from 'vue3-google-map';

import '@fontsource/ibm-plex-sans-arabic';
import * as Vue3GoogleMap from 'vue3-google-map';
const app = createApp(App)
app.use(router)
app.use(createPinia())
app.use(i18n)

const authStore = useAuthStore()
authStore.restoreAuth()
const languageStore = useLanguageStore()
app.use(Vue3GoogleMap, {
  load: {
    key: 'AIzaSyAdR4i_FaGlxZM0_rju7BNQEziPG1GZ0ME',
    libraries: 'places', // مكتبات إضافية (اختياري)
  },
});

languageStore.restoreLanguage()
app.mount('#app')


// AIzaSyAdR4i_FaGlxZM0_rju7BNQEziPG1GZ0ME
// 2 AIzaSyCHShZz-2aciDHjlCDh7rHFGWjxSIRJztY
