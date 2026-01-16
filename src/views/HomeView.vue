<template>
  <div>
    <HeroSection />
    
 
    <div data-aos="fade-up" data-aos-delay="100">
      <NewsSection />
    </div>
    
    <div data-aos="fade-up" data-aos-delay="200">
      <ContactSection />
    </div>
  </div>
</template>

<script>
import HeroSection from '../components/HeroSection.vue'
import NewsSection from '../components/NewsSection.vue'
import ContactSection from '../components/ContactSection.vue'

export default {
  name: 'HomeView',
  components: {
    HeroSection,
    NewsSection,
    ContactSection
  }
}
</script>
