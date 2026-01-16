<template>
  <div>
    <PageBanner title="team.bannerTitle" bgImage="members_banner.png" bgPosition="center 60%" />
    <main class="py-5 bg-light">
      <b-container>
        <div v-for="(category, index) in categories" :key="index" class="mb-5 category-section">
          <!-- Render section only if it has members or if we want to show empty sections -->
          <div v-if="category.members && category.members.length > 0">
            <h2 class="text-center mb-4 fw-bold category-title">{{ category.title }}</h2>
            <b-row class="g-4 align-items-stretch justify-content-center">
              <b-col v-for="(member, mIndex) in category.members" :key="mIndex" md="6" lg="4">
                <b-card no-body class="text-center h-100 shadow-sm card-hover-effect">
                  <b-card-body class="d-flex flex-column p-4 h-100">
                    <div class="mb-4">
                        <b-img :src="getImageUrl(member.image)" rounded :alt="member.name" class="member-img"></b-img>
                    </div>
                    <div class="flex-grow-1">
                      <h4 class="card-title-custom">{{ member.name }}</h4>
                      <p class="text-muted mb-3">{{ member.title }} <span v-if="member.department">| {{ member.department }}</span></p>
                      <div v-if="member.expertise && member.expertise.length" class="expertise-block mt-3 pt-3 border-top">
                        <h6 class="fw-bold text-primary-emphasis">{{ $t('team.expertiseTitle') }}</h6>
                        <div class="expertise-content d-inline-block">
                          <span v-for="(exp, i) in member.expertise" :key="i">
                            {{ exp }}<span v-if="i < member.expertise.length - 1">, </span>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div class="mt-4" v-if="member.detailUrl && member.detailUrl !== '#'">
                      <b-button :href="member.detailUrl" target="_blank" size="sm" class="btn-read-more">{{ $t('team.readMore') }}</b-button>
                    </div>
                  </b-card-body>
                </b-card>
              </b-col>
            </b-row>
          </div>
        </div>
      </b-container>
    </main>
  </div>
</template>

<script>
import PageBanner from '@/components/PageBanner.vue';

export default {
  name: 'TeamView',
  components: {
    PageBanner
  },
  computed: {
    categories() {
      // Fetch the categories array from i18n
      return this.$tm('team.categories');
    }
  },
  methods: {
    getImageUrl(imageName) {
      if (!imageName) return 'https://via.placeholder.com/200';
      try {
        return require(`@/assets/${imageName}`);
      } catch (e) {
        // Fallback or placeholder
        return 'https://via.placeholder.com/200?text=No+Image';
      }
    },
  },
};
</script>

<style scoped>
.category-title {
  color: #003366;
  position: relative;
  display: inline-block;
  padding-bottom: 10px;
}

.category-title::after {
  content: '';
  display: block;
  width: 60px;
  height: 3px;
  background-color: #003366;
  margin: 10px auto 0;
}

.category-section {
  border-bottom: 1px solid #eee;
  padding-bottom: 3rem;
}

.category-section:last-child {
  border-bottom: none;
}

.member-img {
  width: 220px;           /* 寬度與高度相等以形成正方形 */
  height: 220px;          
  object-fit: cover;      /* 確保照片填滿區域且不變形 */
  border-radius: 50%;     /* 關鍵：設為 50% 變成圓形 */
  border: 4px solid #fff; /* 增加白色邊框讓圓形更精緻 */
  box-shadow: 0 4px 12px rgba(0,0,0,0.15); /* 稍微加深陰影 */
}
.card-hover-effect:hover .member-img {
  transform: scale(1.02);
}
.card-title-custom {
  font-size: 1.5rem;
  font-weight: 700;
  color: #003366;
}
.expertise-content {
  font-size: 0.9rem;
  line-height: 1.7;
  text-align: left;
}
.card-hover-effect {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.card-hover-effect:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 25px rgba(0, 0, 0, 0.12) !important;
}

.btn-read-more {
  background-color: #003366;
  border-color: #003366;
  color: #fff;
  opacity: 0.85;
  transition: all 0.2s ease-in-out;
}

.btn-read-more:hover {
  background-color: #002244;
  border-color: #002244;
  color: #fff;
  opacity: 1;
}
</style>
