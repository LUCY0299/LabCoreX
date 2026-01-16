 import { createApp } from 'vue'
  import App from './App.vue'
  import router from './router'
  import i18n from './i18n'

  // 引入 Bootstrap 和 BootstrapVue 3 的 CSS 檔案
  import 'bootstrap/dist/css/bootstrap.css'
  import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'

  // 引入 BootstrapVue 3 插件
  import BootstrapVue3 from 'bootstrap-vue-3'

  const app = createApp(App)

  app.use(router)
  app.use(i18n)
  app.use(BootstrapVue3) // <-- 啟用插件

  app.mount('#app')