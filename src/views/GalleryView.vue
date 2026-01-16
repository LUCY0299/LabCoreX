<template>
  <div class="gallery-view">
    <PageBanner title="Lab Life" subtitle="Moments & Memories" />
    <div class="container py-5">
      <div class="row g-4">
        <div class="col-md-4" v-for="i in 6" :key="i">
          <div class="gallery-card">
            <div class="placeholder-img bg-light d-flex align-items-center justify-content-center" style="height: 250px;">
              <span class="text-muted">Event Photo {{i}}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PageBanner from '@/components/PageBanner.vue'
export default {
  name: 'GalleryView',
  components: { PageBanner }
}
</script>

<style scoped>
.gallery-card {
  overflow: hidden;
  border-radius: 10px;
  transition: transform 0.3s ease;
}
.gallery-card:hover {
  transform: scale(1.03);
}
</style>
