// import { defineStore } from 'pinia'
// import i18n from "@/plugins/i18n";

// export const useLanguageStore = defineStore('language', {
//   state: () => ({
//     currentLanguage: 'ar',
//     loadin:false,
//   }),
//   actions: {
//     setLanguage(lang) {
//       this.loadin = true
//       this.currentLanguage = lang;
//       i18n.global.locale = lang;
//       localStorage.setItem("language", lang);
//       document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
//       this.loadin = false
//     },
//     restoreLanguage() {
//       this.loadin = true
//       const storedLanguage = localStorage.getItem("language");
//       if (storedLanguage) {
//         this.currentLanguage = storedLanguage;
//         i18n.global.locale = storedLanguage;
//         document.documentElement.dir = storedLanguage === "ar" ? "rtl" : "ltr";
//         this.loadin = false
//       }
//     },
//   },
// })


import { defineStore } from 'pinia';
import i18n from "@/plugins/i18n";

export const useLanguageStore = defineStore('language', {
  state: () => ({
    currentLanguage: 'ar', // اللغة الافتراضية
    loadin: false,
  }),
  actions: {
    setLanguage(lang) {
      this.loadin = true;
      this.currentLanguage = lang;
      i18n.global.locale = lang;
      localStorage.setItem("language", lang);
      document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
      this.loadin = false;
    },
    restoreLanguage() {
      this.loadin = true;
      const storedLanguage = localStorage.getItem("language");

      if (storedLanguage) {
        // إذا كانت اللغة مخزنة مسبقًا في localStorage
        this.setLanguage(storedLanguage);
      } else {
        // إذا لم تكن اللغة مخزنة، استخدم لغة المتصفح الافتراضية
        const browserLanguage = navigator.language || navigator.userLanguage;
        const defaultLanguage = browserLanguage.startsWith("ar") ? "ar" : "en";
        this.setLanguage(defaultLanguage);
      }
      this.loadin = false;
    },
  },
});

