<template>
  <div class="contact-view">
    <PageBanner title="Contact Us" subtitle="Get in Touch" />
    <div class="container py-5">
      <div class="row">
        <div class="col-md-6">
          <h4>Location</h4>
          <p>國立中央大學 ... 實驗室</p>
          <h4>Email</h4>
          <p>hsu@ncu.edu.tw (範例)</p>
        </div>
        <div class="col-md-6">
          <div class="map-container bg-light" style="height: 300px;">
            <!-- Google Map Embed here -->
            <p class="p-5 text-center">Google Maps Placeholder</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PageBanner from '@/components/PageBanner.vue'
export default {
  name: 'ContactView',
  components: { PageBanner }
}
</script>
