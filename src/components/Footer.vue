<template>
  <footer class="site-footer text-white text-center py-4">
    <b-container>
      <p class="mb-0">{{ $t('footer.copyright') }}</p>
    </b-container>
  </footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style scoped>
.site-footer {
  background-color: #003366; /* Custom brand color */
  font-size: 0.9rem;
}
</style>