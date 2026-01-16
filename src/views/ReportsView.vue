<template>
  <div>
    <PageBanner title="reports.bannerTitle" />
    <main class="py-5 bg-light">
      <b-container>
        <div v-for="group in publications" :key="group.year" class="mb-5">
          <h2 class="year-title">{{ group.year }}</h2>
          <div class="publications-list">
            <b-card v-for="(paper, index) in group.papers" :key="index" no-body class="publication-item mb-3">
              <b-card-body class="p-4">
                <h5 class="publication-title mb-3">
                  <a :href="paper.doi" target="_blank" rel="noopener noreferrer">{{ paper.title }}</a>
                </h5>
                <p class="publication-authors text-muted mb-2">{{ paper.authors }}</p>
                <p class="publication-journal mb-3">
                  <em>{{ paper.journal }}</em>, {{ paper.details }}
                </p>
                <div class="publication-tags">
                  <b-badge v-for="tag in paper.tags" :key="tag" pill class="me-2 fw-normal" :variant="getTagVariant(tag)">{{ tag }}</b-badge>
                </div>
              </b-card-body>
            </b-card>
          </div>
        </div>
      </b-container>
    </main>
  </div>
</template>

<script>
import PageBanner from '@/components/PageBanner.vue';

export default {
  name: 'ReportsView',
  components: {
    PageBanner
  },
  computed: {
    publications() {
      return this.$tm('reports.publications');
    }
  },
  methods: {
    getTagVariant(tag) {
      if (tag.startsWith('IF')) return 'success';
      if (tag.startsWith('RF')) return 'info';
      if (tag === 'SCI') return 'danger';
      return 'secondary';
    }
  }
}
</script>

<style scoped>
.year-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: #003366;
  border-bottom: 3px solid #0056b3;
  padding-bottom: 0.5rem;
  margin-bottom: 2rem;
}

.publication-item {
  border: 1px solid #e9ecef;
  transition: box-shadow 0.3s ease;
}

.publication-item:hover {
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1) !important;
}

.publication-title a {
  color: #003366;
  text-decoration: none;
  font-weight: 600;
  transition: color 0.3s ease;
}

.publication-title a:hover {
  color: #0056b3;
  text-decoration: underline;
}

.publication-authors {
  font-size: 0.9rem;
}

.publication-journal {
  font-size: 1rem;
}

.publication-tags .badge {
  font-size: 0.75rem;
  padding: 0.3em 0.6em;
}
</style>