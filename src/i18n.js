import { createI18n } from 'vue-i18n';
import en from './locales/en.json';
import ar from './locales/ar.json';

const messages = { en, ar };

const i18n = createI18n({
  locale: 'en',
  fallbackLocale: 'en',
  messages,
});


// async function loadLocaleMessages(locale) {
//   const messages = await import(`./locales/${locale}.json`);
//   i18n.global.setLocaleMessage(locale, messages.default);
//   return messages;
// }


// async function setLocale(locale) {
//   if (!i18n.global.availableLocales.includes(locale)) {
//     await loadLocaleMessages(locale);
//   }
//   i18n.global.locale = locale;
// }


function setLanguageAndDirection(locale) {
  i18n.global.locale = locale;
  const direction = locale === 'ar' ? 'rtl' : 'ltr';
  document.documentElement.lang = locale;
  document.documentElement.dir = direction;
}

export  { i18n, setLanguageAndDirection};


