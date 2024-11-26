import './assets/styles/main.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import { useAuthStore } from './stores/auth'
import {i18n,setLanguageAndDirection } from './i18n';
const app = createApp(App)

app.use(createPinia())
app.use(router)


const authStore = useAuthStore();
authStore.restoreAuth();
 app.use(i18n);
 setLanguageAndDirection('ar');
app.mount('#app')
