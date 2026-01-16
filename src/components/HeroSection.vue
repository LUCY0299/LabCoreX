<template>
  <div class="hero d-flex justify-content-center align-items-center text-center text-white">
    <video ref="bgVideo" autoplay muted loop playsinline class="hero-video">
      <source src="@/assets/background video 3.mp4" type="video/mp4">
    </video>
    <b-container class="hero-content">
      <h1 class="display-2 fw-bold">{{ $t('hero.title') }}</h1>
      <h2 class="display-5 fw-bold">{{ $t('hero.subtitle') }}</h2>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'HeroSection',
  mounted() {
    // Set video playback speed to 0.5 (half speed)
    if (this.$refs.bgVideo) {
      this.$refs.bgVideo.playbackRate = 0.7;
    }
  }
}
</script>

<style scoped>
.hero {
  height: 65vh;
  max-height: 800px;
  background-color: #000; /* Fallback color */
  background-size: cover;
  background-position: center;
  position: relative;
  overflow: hidden; /* Hide video overflow */
}

.hero-video {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  min-width: 100%;
  min-height: 100%;
  width: auto;
  height: auto;
  z-index: 0;
}

.hero::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(-45deg, rgba(15, 28, 45, 0.5) 30%, rgba(0, 0, 0, 0.0));
  z-index: 1; /* Make sure overlay is on top of video but below content */
}

.hero-content {
  position: relative;
  z-index: 2; /* Make sure content is on top of the overlay */
  max-width: 95%; /* Widen the container for long text */
}

/* Applying text-shadow to the text elements */
.hero-content * {
  text-shadow: 2px 2px 8px rgba(0,0,0,0.6);
}


</style>
