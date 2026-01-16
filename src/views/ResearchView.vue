<template>
  <div>
    <PageBanner title="research.bannerTitle" bgImage="Research_banner.png" bgPosition="center center" />
    <main class="py-5 bg-light">
      <b-container>
        <b-row class="justify-content-center text-center mb-5">
          <b-col lg="10">
            <h1 class="display-5 fw-bold mb-4" style="color: #003366;">{{ $t('research.mainTitle') }}</h1>
            <p class="lead text-muted">
              {{ $t('research.description') }}
            </p>
          </b-col>
        </b-row>

        <b-row class="g-4">
          <b-col v-for="area in researchAreas" :key="area.title" md="6" lg="4">
            <b-card no-body class="h-100 shadow-sm text-center research-card">
              <b-card-body class="p-4 d-flex flex-column">
                <div class="icon-wrapper mb-4">
                  <i :class="area.icon"></i>
                </div>
                <h4 class="card-title-custom">{{ area.title }}</h4>
                <p class="text-muted small flex-grow-1">{{ area.description }}</p>
                <div class="mt-4 keywords-section">
                  <h6 class="fw-bold">{{ $t('research.keywordsTitle') }}</h6>
                  <div class="keywords-tags">
                    <b-badge v-for="keyword in area.keywords" :key="keyword" pill variant="primary" class="me-1 mb-1 fw-normal">{{ keyword }}</b-badge>
                  </div>
                </div>
              </b-card-body>
            </b-card>
          </b-col>
        </b-row>
      </b-container>
    </main>
  </div>
</template>

<script>
import PageBanner from '@/components/PageBanner.vue';

export default {
  name: 'ResearchView',
  components: {
    PageBanner
  },
  computed: {
    researchAreas() {
      return this.$tm('research.areas');
    }
  }
}
</script>

<style scoped>
.research-card {
  border: none;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.research-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1) !important;
}
.icon-wrapper {
  margin: 0 auto;
}
.card-title-custom {
  font-size: 1.5rem;
  font-weight: 700;
  color: #003366;
  margin-bottom: 1rem;
}
.keywords-section {
  border-top: 1px solid #eee;
  padding-top: 1rem;
}
.keywords-tags {
  margin-top: 0.5rem;
}
.badge.bg-primary {
  background-color: #0056b3 !important; /* A slightly more vibrant blue for tags */
  font-size: 0.8rem;
  padding: 0.4em 0.8em;
}
</style>