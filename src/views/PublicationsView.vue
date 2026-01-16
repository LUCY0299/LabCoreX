<template>
  <div class="publications-view">
    <PageBanner title="Publications" :subtitle="$t('header.nav.publications')" bgImage="Publications_banner.png" bgPosition="center center" />
    
    <div class="container py-5">
      
      <!-- Filter Controls -->
      <div class="row mb-5">
        <div class="col-md-8 mx-auto text-center">
          <div class="btn-group shadow-sm" role="group">
            <button 
              type="button" 
              class="btn" 
              :class="filterType === 'All' ? 'btn-primary' : 'btn-outline-primary'"
              @click="filterType = 'All'"
            >All</button>
            <button 
              type="button" 
              class="btn" 
              :class="filterType === 'Journal' ? 'btn-primary' : 'btn-outline-primary'"
              @click="filterType = 'Journal'"
            >Journal Papers</button>
            <button 
              type="button" 
              class="btn" 
              :class="filterType === 'Conference' ? 'btn-primary' : 'btn-outline-primary'"
              @click="filterType = 'Conference'"
            >Conference Papers</button>
          </div>
        </div>
      </div>

      <!-- Publications List Grouped by Year -->
      <div v-if="groupedPubs.length > 0">
        <div v-for="(group, index) in groupedPubs" :key="index" class="year-group mb-5 animate-fade-up">
          <h3 class="year-heading border-bottom pb-2 mb-4 text-secondary fw-bold">
            <i class="far fa-calendar-alt me-2"></i>{{ group.year }}
          </h3>
          
          <div class="list-group list-group-flush">
            <div v-for="pub in group.items" :key="pub.id" class="list-group-item py-4 pub-item">
              <div class="row align-items-center">
                <!-- Icon -->
                <div class="col-auto d-none d-md-block">
                  <div class="pub-icon-wrapper text-center text-white" :class="pub.type === 'Journal' ? 'bg-primary' : 'bg-success'">
                    <i :class="pub.type === 'Journal' ? 'fas fa-book-open' : 'fas fa-users'"></i>
                  </div>
                </div>

                <!-- Content -->
                <div class="col">
                  <div class="d-flex align-items-center mb-1">
                    <span class="badge rounded-pill me-2" :class="pub.type === 'Journal' ? 'bg-primary' : 'bg-success'">
                      {{ pub.type }}
                    </span>
                    <span v-for="tag in pub.tags" :key="tag" class="badge bg-light text-dark border me-1">
                      {{ tag }}
                    </span>
                  </div>
                  
                  <h5 class="pub-title mb-2 fw-bold text-dark">{{ pub.title }}</h5>
                  <p class="pub-authors mb-1 text-muted">{{ pub.authors }}</p>
                  <p class="pub-venue fst-italic mb-2 text-primary small">
                    {{ pub.venue }} <span v-if="pub.details">, {{ pub.details }}</span>
                  </p>
                  
                  <!-- Actions -->
                  <div class="mt-3">
                    <a v-if="pub.doi" :href="pub.doi" target="_blank" class="btn btn-sm btn-outline-secondary me-2">
                      <i class="fas fa-link me-1"></i> DOI
                    </a>
                    <button class="btn btn-sm btn-outline-secondary" @click="copyBibtex(pub)">
                      <i class="fas fa-quote-right me-1"></i> Cite
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div v-else class="text-center py-5 text-muted">
        <i class="fas fa-search fa-3x mb-3"></i>
        <p>No publications found matching current filter.</p>
      </div>

    </div>
  </div>
</template>

<script>
import PageBanner from '@/components/PageBanner.vue'
import pubData from '@/assets/data/publications.json'

export default {
  name: 'PublicationsView',
  components: { PageBanner },
  data() {
    return {
      allPubs: pubData,
      filterType: 'All'
    }
  },
  computed: {
    filteredPubs() {
      if (this.filterType === 'All') {
        return this.allPubs;
      }
      return this.allPubs.filter(p => p.type === this.filterType);
    },
    groupedPubs() {
      // Sort by year desc
      const sorted = [...this.filteredPubs].sort((a, b) => b.year - a.year);
      // Group
      const groups = {};
      sorted.forEach(pub => {
        if (!groups[pub.year]) groups[pub.year] = [];
        groups[pub.year].push(pub);
      });
      // Convert to array
      return Object.keys(groups)
        .sort((a, b) => b - a)
        .map(year => ({ year, items: groups[year] }));
    }
  },
  methods: {
    copyBibtex(pub) {
      const text = `@article{pub${pub.id},\n  title={${pub.title}},\n  author={${pub.authors}},\n  journal={${pub.venue}},\n  year={${pub.year}}}
`;
      navigator.clipboard.writeText(text).then(() => {
        alert('BibTeX copied to clipboard!');
      });
    }
  }
}
</script>

<style scoped>
.pub-item {
  transition: background-color 0.2s;
  border: none;
  border-bottom: 1px solid #eee;
}
.pub-item:hover {
  background-color: #f8f9fa;
}

.pub-icon-wrapper {
  width: 50px;
  height: 50px;
  line-height: 50px;
  border-radius: 50%;
  font-size: 1.2rem;
}

.pub-title {
  font-size: 1.15rem;
  line-height: 1.4;
}

.year-heading {
  position: relative;
  display: inline-block;
  padding-right: 20px;
}
</style>