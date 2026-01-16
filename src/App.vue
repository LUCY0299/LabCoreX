<template>
  <div id="app">
    <Header />
    <main>
      <!-- [關鍵] 這裡是路由的出口，會根據當前網址顯示對應的 View 組件 -->
      <router-view />
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    Header,
    Footer
  }
}
</script>

<style>
* {
  box-sizing: border-box;
}
html, body {
  margin: 0;
  padding: 0;
  width: 100%;
}
body {
  font-family: 'Roboto', 'Helvetica Neue', Arial, 'PingFang TC', 'Microsoft JhengHei', sans-serif;
  color: #333;
  background-color: #0f1c2d; /* 您網站的深色背景 */
  -webkit-font-smoothing: antialiased; /* 讓字體在 Chrome/Safari 上更平滑 */
  -moz-osx-font-smoothing: grayscale; /* 讓字體在 Firefox 上更平滑 */
}

#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

main {
  flex: 1;
}
a {
  color: inherit; /* 繼承父元素的顏色 */
  text-decoration: none; /* 移除底線 */
}
</style>