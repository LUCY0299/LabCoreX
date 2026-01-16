<template>
  <b-navbar toggleable="lg" :class="['site-header', { 'scrolled': isScrolled }]">
    <b-container fluid class="d-flex flex-nowrap align-items-center">
      <!-- Logo 品牌 -->
      <b-navbar-brand to="/">
        <img src="@/assets/swclab_logo2.png" :alt="$t('header.logoAlt')" class="logo-img">
      </b-navbar-brand>

      <!-- 手機版的漢堡選單按鈕 -->
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <!-- 導航項目，會被漢堡選單包裹 -->
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ms-auto mb-2 mb-lg-0 align-items-center">
          <b-nav-item to="/" :active="$route.path === '/'">{{ $t('header.nav.home') }}</b-nav-item>
          <b-nav-item to="/professor">{{ $t('header.nav.professor') }}</b-nav-item>
          <b-nav-item to="/research">{{ $t('header.nav.research') }}</b-nav-item>
          <b-nav-item to="/team">{{ $t('header.nav.team') }}</b-nav-item>
          <b-nav-item to="/publications">{{ $t('header.nav.publications') }}</b-nav-item>
          <b-nav-item to="/gallery">{{ $t('header.nav.gallery') }}</b-nav-item>
          <b-nav-item to="/contact">{{ $t('header.nav.contact') }}</b-nav-item>
          <b-nav-item @click="switchLanguage" class="lang-switcher ms-lg-2">{{ $t('header.nav.language') }}</b-nav-item>
          <b-nav-item class="search-icon-item ms-lg-3">
            <div class="search-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
            </div>
          </b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-container>
  </b-navbar>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      isScrolled: false
    };
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
    this.handleScroll();
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    switchLanguage() {
      const newLocale = this.$i18n.locale === 'zh-TW' ? 'en' : 'zh-TW';
      localStorage.setItem('locale', newLocale);
      window.location.reload();
    },
    handleScroll() {
      this.isScrolled = window.scrollY > 10;
    }
  }
}
</script>

<style scoped>
.site-header {
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 1030; /* Bootstrap's default z-index for navbars */
  padding-top: 0;
  padding-bottom: 0.5rem;
  transition: background-color 0.3s ease-in-out;
}

.site-header.scrolled {
  background-color: #0f1c2d;
  box-shadow: 0 2px 10px rgba(0,0,0,0.15);
}

.logo-img {
  height: 65px; /* Slightly smaller for better navbar integration */
}

/* Customizing navbar link colors for the transparent theme */
:deep(.nav-link) {
  color: rgba(255, 255, 255, 0.8) !important;
  font-weight: 550;
  font-size: 1.1rem;
  transition: color 0.3s;
}

:deep(.nav-link:hover) {
  color: #ffffff !important;
}

:deep(.nav-link.active) {
  color: #ffffff !important;
  font-weight: 700;
}

.lang-switcher {
  cursor: pointer;
}

.search-icon {
  color: rgba(255, 255, 255, 0.8);
  cursor: pointer;
  transition: color 0.3s;
}
.search-icon:hover {
  color: #ffffff;
}

/* Style for the navbar toggler (hamburger icon) on dark backgrounds */
:deep(.navbar-toggler) {
  border-color: rgba(255, 255, 255, 0.2);
}

:deep(.navbar-toggler-icon) {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba(255, 255, 255, 0.7)' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e");
}

/* When the menu is collapsed, give it a dark background */
@media (max-width: 991.98px) {
  :deep(.navbar-collapse) {
    background-color: rgba(26, 42, 58, 0.95); /* Semi-transparent dark blue */
    border-radius: 0.5rem;
    padding: 1rem;
    margin-top: 0.5rem;
  }
}
</style>
