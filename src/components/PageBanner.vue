<template>
  <div class="page-banner d-flex justify-content-center align-items-center text-center text-white" :style="bannerStyle">
    <b-container class="banner-content">
      <h1 v-if="title" class="display-4 fw-bold">{{ $t(title) }}</h1>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'PageBanner',
  props: {
    title: {
      type: String,
      required: false,
      default: ''
    },
    bgImage: {
      type: String,
      default: ''
    },
    bgPosition: {
      type: String,
      default: 'center' // 預設居中
    }
  },
  computed: {
    bannerStyle() {
      const style = {};
      
      // 設定背景圖片
      if (this.bgImage) {
        try {
          style.backgroundImage = `url(${require('@/assets/banners/' + this.bgImage)})`;
        } catch (e) {
          console.warn('Banner image not found:', this.bgImage);
        }
      }

      // 設定背景位置 (覆蓋 CSS 中的預設值)
      if (this.bgPosition) {
        style.backgroundPosition = this.bgPosition;
      }

      return style;
    }
  }
}
</script>

<style scoped>
.page-banner {
  background-image: url('../assets/banners/banner.png');
  height: 65vh;
  min-height: 550px;
  max-height: 700px;
  background-size: cover;
  background-position: center;
  position: relative;
}

.page-banner::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(-45deg, rgba(32, 56, 87, 0.8) 20%, rgba(0, 0, 0, 0.2));
}

.banner-content {
    position: relative;
    z-index: 1;
}

.banner-content h1 {
  text-shadow: 2px 2px 10px rgba(0,0,0,0.5);
}
</style>