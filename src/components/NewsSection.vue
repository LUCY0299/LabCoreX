<template>
  <section class="news-section py-5">
    <b-container>
      <div class="section-header text-center mb-5">
        <h2 class="display-5 fw-bold section-title">
          {{ $t('news.title') }}
          <span class="dot">.</span>
        </h2>
        <div class="title-underline"></div>
      </div>

      <div class="news-list">
        <transition-group name="list" tag="div">
          <div 
            v-for="(item, index) in visibleNews" 
            :key="item.id" 
            class="news-item"
            :style="{ '--delay': index * 0.05 + 's' }"
          >
            <div class="news-date">
              <span class="year">{{ item.date.split('.')[0] }}</span>
              <span class="month">{{ item.date.split('.')[1] }}</span>
            </div>

            <div class="news-content">
              <p class="mb-0">{{ item.title }}</p>
            </div>

            <div class="news-icon">
              <i class="fas fa-chevron-right"></i>
            </div>
          </div>
        </transition-group>
      </div>

      <div class="text-center mt-5" v-if="hasMoreNews">
        <button class="btn-show-more" @click="showAllNews">
          {{ $t('news.showMore') || 'Show More' }}
          <i class="fas fa-arrow-down ms-2"></i>
        </button>
      </div>
    </b-container>
  </section>
</template>

<script>
export default {
  name: 'NewsSection',
  data() {
    return {
      // 預設顯示幾筆資料
      displayCount: 5,
      isExpanded: false
    };
  },
  computed: {
    // 從 i18n 獲取所有新聞
    allNews() {
      // 確保回傳陣列，避免錯誤
      return this.$tm('news.items') || [];
    },
    // 計算目前要顯示的新聞
    visibleNews() {
      if (this.isExpanded) {
        return this.allNews;
      }
      return this.allNews.slice(0, this.displayCount);
    },
    // 判斷是否還有更多新聞
    hasMoreNews() {
      return this.allNews.length > this.displayCount && !this.isExpanded;
    }
  },
  methods: {
    showAllNews() {
      this.isExpanded = true;
    }
  }
};
</script>

<style scoped>
/* 1. 背景設定：淺色系、乾淨 */
.news-section {
  background-color: #f4f7f6; /* 淺灰帶一點點綠藍，很適合實驗室 */
  background-image: 
    radial-gradient(#e0e7e9 1px, transparent 1px),
    radial-gradient(#e0e7e9 1px, transparent 1px);
  background-size: 20px 20px;
  background-position: 0 0, 10px 10px;
  min-height: 600px;
}

/* 2. 標題樣式 */
.section-title {
  color: #2c3e50;
  position: relative;
  display: inline-block;
}

.section-title .dot {
  color: #d4a373; /* 保留原本的強調色 */
}

.title-underline {
  width: 60px;
  height: 4px;
  background: #d4a373;
  margin: 10px auto 0;
  border-radius: 2px;
}

/* 3. 新聞橫條樣式 (核心設計) */
.news-list {
  max-width: 900px;
  margin: 0 auto;
}

.news-item {
  display: flex;
  align-items: center;
  background: white;
  margin-bottom: 15px;
  padding: 15px 25px;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.02);
  border-left: 5px solid transparent; /* 預留左側邊框 */
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  cursor: default;
  position: relative;
  overflow: hidden;
  
  /* 進場動畫設定 */
  animation: slideIn 0.5s ease-out backwards;
  animation-delay: var(--delay);
}

/* Hover 效果：浮起 + 左側亮條 + 位移 */
.news-item:hover {
  transform: translateX(10px) translateY(-2px);
  box-shadow: 5px 15px 25px rgba(0, 0, 0, 0.08);
  border-left-color: #d4a373;
}

/* 左側日期設計：圓形或方塊 */
.news-date {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-width: 70px;
  height: 70px;
  background: #eef2f5;
  border-radius: 10px;
  margin-right: 25px;
  color: #555;
  font-weight: bold;
  transition: background 0.3s, color 0.3s;
}

.news-item:hover .news-date {
  background: #2c3e50;
  color: #d4a373;
}

.news-date .year {
  font-size: 0.8rem;
  opacity: 0.7;
}

.news-date .month {
  font-size: 1.4rem;
  line-height: 1;
}

/* 中間文字內容 */
.news-content {
  flex-grow: 1;
  color: #444;
  font-size: 1.05rem;
  line-height: 1.5;
  padding-right: 15px;
}

/* 右側小箭頭 */
.news-icon {
  color: #ddd;
  transition: transform 0.3s, color 0.3s;
}

.news-item:hover .news-icon {
  color: #d4a373;
  transform: translateX(5px);
}

/* 4. 按鈕樣式 */
.btn-show-more {
  background: transparent;
  border: 2px solid #2c3e50;
  color: #2c3e50;
  padding: 10px 30px;
  border-radius: 50px;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn-show-more:hover {
  background: #2c3e50;
  color: white;
  transform: translateY(-3px);
  box-shadow: 0 5px 15px rgba(44, 62, 80, 0.2);
}

/* 5. 列表展開動畫 (Vue transition) */
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateY(20px);
}

@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* 響應式調整 */
@media (max-width: 768px) {
  .news-item {
    flex-direction: column;
    align-items: flex-start;
    padding: 20px;
  }
  
  .news-date {
    flex-direction: row;
    width: 100%;
    height: auto;
    background: transparent;
    justify-content: flex-start;
    margin-bottom: 10px;
    padding-bottom: 10px;
    border-bottom: 1px solid #eee;
  }
  
  .news-date .year {
    margin-right: 5px;
    font-size: 1rem;
  }
  
  .news-date .month {
    font-size: 1rem;
  }

  .news-date::after {
    content: '/';
    margin-left: 5px;
  }
  
  .news-icon {
    display: none; /* 手機版隱藏箭頭 */
  }
  
  .news-item:hover {
    transform: translateY(-2px); /* 手機版取消橫移，保留上浮 */
  }
}
</style>