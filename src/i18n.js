import { createI18n } from 'vue-i18n'
import en from './locales/en.json'
import zhTW from './locales/zh-TW.json'

const i18n = createI18n({
  legacy: true, // Use legacy API to ensure reactivity with Options API
  locale: localStorage.getItem('locale') || 'en', // set default locale to English
  fallbackLocale: 'en', // set fallback locale
  messages: {
    'en': en,
    'zh-TW': zhTW
  }
})

export default i18n
