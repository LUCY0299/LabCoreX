<template>
  <div class="icqab-page">
    <!-- Page Header -->
    <div class="page-header position-relative text-center text-white">
      <div class="bg-overlay"></div>
      <b-container class="position-relative py-5">
        <p class="h4 fw-normal conference-date">{{ $t('conference.header.date') }}</p>
        <h1 class="display-4 fw-bold" v-html="$t('conference.header.title')"></h1>
        <h2 class="h1 fw-normal mt-3">{{ $t('conference.header.subtitle') }}</h2>
      </b-container>
    </div>

    <!-- Main Content -->
    <main class="py-5 bg-white">
      <b-container>
        <!-- Accordion -->
        <b-accordion class="mb-5 custom-accordion">
          <b-accordion-item v-for="(item, index) in sections" :key="index">
            <template #title>
              <h3 class="accordion-title-custom">{{ item.title }}</h3>
            </template>
            <div class="accordion-content-inner fs-5 fw-bolder">
              <div v-if="!item.isStructured" v-html="item.content"></div>
              <div v-else>
                <p v-html="item.content.intro"></p>
                <ul class="styled-list">
                  <li v-for="(detail, detailIndex) in item.content.details" :key="detailIndex">
                    <b>{{ detail.label }}</b><br>
                    <div v-if="detail.value" v-html="detail.value"></div>
                    <div v-if="detail.isOrganizer">
                      <div v-for="(org, orgIndex) in detail.items" :key="orgIndex" class="d-flex align-items-center mb-3">
                        <img :src="getImageUrl(org.logo)" :alt="org.alt" :style="org.style" class="me-3" >
                        <a v-if="org.url" :href="org.url" target="_blank" rel="noopener noreferrer" class="ms-2">{{ org.name }}</a>
                        <span v-else >{{ org.name }}</span>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </b-accordion-item>
        </b-accordion>

        <!-- Info Sections -->
        <div class="info-sections mt-5">
          <!-- New Registration Section -->
          <div class="registration-section my-5 py-5">
            <b-card no-body class="shadow-lg border-0 overflow-hidden">
              <b-row no-gutters>
                <b-col md="7" class="p-5 d-flex flex-column justify-content-center">
                  <h3 class="mb-4 fs-2 fw-bold" style="color: #003366;">{{ $t('conference.registration.title') }}</h3>
                  <p class="text-muted mb-4 fs-5">
                    {{ $t('conference.registration.description') }}
                  </p>
                  <div class="mb-4 d-flex align-items-center flex-wrap">
                    <b-button :href="info.registration.url" target="_blank" variant="primary" size="lg" class="me-3 mb-2">
                      <i class="fas fa-edit me-2"></i> {{ $t('conference.registration.button_register') }}
                    </b-button>
                    <b-button :href="info.registration.inquiryUrl" target="_blank" size="lg" class="mb-2 btn-contact">
                      <i class="fas fa-question-circle me-2"></i> {{ $t('conference.registration.button_inquiry') }}
                    </b-button>
                  </div>
                  <hr class="my-4">
                  <div>
                    <h5 class="h5 text-uppercase text-muted mb-3">{{ $t('conference.registration.contact_title') }}</h5>
                    <a href="mailto:tgdirc.ncu@gmail.com" class="link-dark text-decoration-none contact-link">
                      <i class="fas fa-envelope me-2 text-primary"></i> <span class="fs-5">tgdirc.ncu@gmail.com</span>
                    </a>
                  </div>
                </b-col>
                <b-col md="5" class="d-flex align-items-center justify-content-center p-5" style="background-color: #f8f9fa;">
                  <div class="text-center">
                    <img :src="getImageUrl('qr-registration.png')" :alt="$t('conference.registration.qr_alt')" class="qr-code-large img-fluid rounded">
                    <p class="text-muted small mt-3">{{ $t('conference.registration.qr_caption') }}</p>
                  </div>
                </b-col>
              </b-row>
            </b-card>
          </div>
          
          <b-row class="py-5">
            <b-col>
              <h4 class="accordion-title-custom mb-4 fs-2">{{ $t('conference.venue.title') }}</h4>
              <b-row>
                <b-col lg="6" class="mb-5 mb-lg-0">
                  <div class="h5 fw-bold text-primary mb-3">{{ info.host.venue }}</div>
                  
                  <div class="d-flex mb-3">
                    <div class="venue-icon-wrapper"><i class="fas fa-chalkboard-teacher fa-fw"></i></div>
                    <div>
                      <h5 class="h5 mb-1 fw-bold">{{ $t('conference.venue.main_hall_title') }}</h5>
                      <p class="text-muted mb-0 h6">{{ info.host.mainVenue }}</p>
                    </div>
                  </div>

                  <div class="d-flex mb-4">
                    <div class="venue-icon-wrapper"><i class="fas fa-users fa-fw"></i></div>
                    <div>
                      <h5 class="h5 mb-1 fw-bold">{{ $t('conference.venue.sessions_title') }}</h5>
                      <p class="text-muted mb-0 h6">{{ info.host.subVenue }}</p>
                    </div>
                  </div>

                  <h5 class="h5 mt-4 mb-2">{{ $t('conference.venue.host_by') }}</h5>
                  <ul class="list-unstyled">
                    <li v-for="host in info.host.hosts" :key="host.name" class="mb-2">
                      <img :src="getImageUrl(host.logo)" :alt="host.alt" :style="host.style">
                      <a v-if="host.url" :href="host.url" target="_blank" rel="noopener noreferrer" class="ms-2">{{ host.name }}</a>
                      <span v-else class="ms-2">{{ host.name }}</span>
                    </li>
                  </ul>

                  <h5 class="h5 mt-4 mb-2">{{ $t('conference.venue.co_hosted_by') }}</h5>
                  <ul class="list-unstyled" v-if="info.host.coHosts">
                    <li v-for="coHost in info.host.coHosts" :key="coHost.name" class="mb-2">
                      <img :src="getImageUrl(coHost.logo)" :alt="coHost.alt" :style="coHost.style">
                      <a v-if="coHost.url" :href="coHost.url" target="_blank" rel="noopener noreferrer" class="ms-2">{{ coHost.name }}</a>
                      <span v-else class="ms-2">{{ coHost.name }}</span>
                    </li>
                  </ul>

                  <h5 class="h5 mt-4 mb-2">{{ $t('conference.venue.advised_by') }}</h5>
                  <ul class="list-unstyled" v-if="info.host.advisors">
                    <li 
                      v-for="advisor in info.host.advisors" 
                      :key="advisor.name" 
                      class="d-flex align-items-center mb-2"
                    >
                      <img :src="getImageUrl(advisor.logo)" :alt="advisor.alt" :style="advisor.style" class="me-2">
                      <a v-if="advisor.url" :href="advisor.url" target="_blank" rel="noopener noreferrer">{{ advisor.name }}</a>
                      <span v-else>{{ advisor.name }}</span>
                    </li>
                  </ul>
                </b-col>
                <b-col lg="6">
                  <b-row>
                    <b-col sm="6" class="mb-4">
                      <b-card no-body class="shadow-sm">
                        <b-card-header>{{ $t('conference.venue.surroundings_map') }}</b-card-header>
                        <img :src="getImageUrl('surroundings-map.jpg')" :alt="$t('conference.venue.surroundings_map')" class="img-fluid">
                      </b-card>
                    </b-col>
                    <b-col sm="6" class="mb-4">
                      <b-card no-body class="shadow-sm">
                        <b-card-header>{{ $t('conference.venue.campus_map') }}</b-card-header>
                        <img :src="getImageUrl('campus-map.jpg')" :alt="$t('conference.venue.campus_map')" class="img-fluid">
                      </b-card>
                    </b-col>
                  </b-row>
                </b-col>
              </b-row>
              <b-row class="mt-5">
                <b-col lg="8" offset-lg="2">
                  <div class="ratio ratio-16x9 rounded shadow-sm">
                     <iframe :src="info.location.mapUrl" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                  </div>
                </b-col>
              </b-row>
            </b-col>
          </b-row>
        </div>
      </b-container>
    </main>
  </div>
</template>

<script>
export default {
  name: 'ConferenceView',
  computed: {
    sections() {
      return this.$tm('conference.sections');
    },
    info() {
      return this.$tm('conference.info');
    }
  },
  methods: {
    getImageUrl(imageName) {
      if (!imageName) return '';
      try { return require(`@/assets/${imageName}`); } catch (e) { console.error(e); return ''; }
    }
  }
}
</script>


<style scoped>
/* --- Font Awesome Icons (if not globally imported) --- */
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css');

/* --- Page Styles (Unchanged) --- */
.page-header { background-image: url('../assets/icqab-bg.jpg'); background-size: cover; background-position: center; padding-top: 50px; }
.bg-overlay { background-color: rgba(10, 25, 47, 0.7); }
.qr-code { max-width: 180px; }
.venue-icon-wrapper { font-size: 1.5rem; color: var(--bs-primary); padding-top: 5px; margin-right: 1rem; }

/* --- Custom Accordion Styles --- */
.custom-accordion {
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0,0,0,0.05);
}
.custom-accordion .accordion-item {
  border-bottom: 1px solid #e0e0e0;
  background-color: transparent;
}
.custom-accordion .accordion-item:last-child {
  border-bottom: none;
}
.custom-accordion .accordion-button {
  padding: 20px 25px;
  background-color: #f8f9fa;
  transition: background-color 0.3s;
}
.custom-accordion .accordion-button:hover {
  background-color: #f1f3f5;
}
.custom-accordion .accordion-button:focus {
  box-shadow: none;
  border-color: rgba(0,0,0,.125);
}
.custom-accordion .accordion-button:not(.collapsed) {
  color: #003366;
  background-color: #f1f3f5;
  box-shadow: none;
}
.accordion-title-custom {
  margin: 0;
  font-size: 1.7rem;
  color: #003366;
  font-weight: 700;
}

.accordion-content-inner {
  padding: 25px;
  font-size: 1.25rem;
  font-weight: 300;
  line-height: 1.8;
  background-color: #fff;
}

/* --- :deep selector to style v-html content --- */
:deep(.accordion-content-inner p) { margin-bottom: 1rem; }
:deep(.accordion-content-inner ol) { padding-left: 2rem; }
:deep(.accordion-content-inner li) { margin-bottom: 1rem; }
:deep(.accordion-content-inner strong) { color: #212529; }
:deep(.accordion-content-inner ul a) { font-weight: bold; color: #007ACC; text-decoration: underline; transition: color 0.3s; }
:deep(.accordion-content-inner ul a:hover) { color: #007bff; }

/* New: Speaker subtitle style */
:deep(.speakers-subtitle) {
  font-size: 1.8rem;
  font-weight: 700;
  color: #003366;
  margin-top: 2.5rem;
  margin-bottom: 1.5rem;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid #003366;
}

/* Reusable .accent-box style */
:deep(.accent-box) {
  margin-bottom: 2rem;
  padding: 1.5rem;
  border-left: 4px solid #007bff;
  background-color: #f8f9fa;
  border-radius: 0 8px 8px 0;
}
:deep(.accent-box h4) {
  font-size: 1.25rem;
  font-weight: 600;
  color: #003366;
  margin-top: 0;
  margin-bottom: 0.75rem;
}
:deep(.accent-box p) {
  margin-bottom: 0;
  line-height: 1.7;
  font-size: 1.1rem;
  font-weight: 500;
}

:deep(.accordion-content-inner .themes-list) { list-style-type: none; padding-left: 0; margin-top: 2rem; }
:deep(.accordion-content-inner .themes-list li.accent-box) {
  margin-bottom: 2rem;
  padding: 1.5rem;
  border-left: 4px solid #007bff;
  background-color: #f8f9fa;
  border-radius: 0 8px 8px 0;
}
:deep(.accordion-content-inner .themes-list h4) { font-size: 1.25rem; font-weight: 600; color: #003366; margin-top: 0; margin-bottom: 0.75rem; }
:deep(.accordion-content-inner .themes-list p) { margin-bottom: 0; line-height: 1.7; font-size: 1.2rem; font-weight: 600; }

:deep(.accordion-content-inner .styled-list) { list-style-type: revert; padding-left: 25px; }

:deep(.accordion-content-inner .agenda-table) { width: 100%; border-collapse: collapse; margin-bottom: 2rem; font-size: 0.9rem; }
:deep(.accordion-content-inner .agenda-table th),
:deep(.accordion-content-inner .agenda-table td) { border: 1px solid #dee2e6; padding: 8px 12px; text-align: center; vertical-align: middle; }
:deep(.accordion-content-inner .agenda-table thead th) { background-color: #003366; color: white; font-weight: 600; }
:deep(.accordion-content-inner .agenda-table .break-row) { background-color: #e9ecef; font-weight: bold; }
:deep(.accordion-content-inner .agenda-table .meal-row) { background-color: #d1ecf1; font-weight: bold; }

/* --- Registration Section Styles --- */
.qr-code-large {
  max-width: 220px;
  border: 6px solid white;
  box-shadow: 0 10px 30px rgba(0,0,0,0.1);
}
.contact-link {
  transition: color 0.3s ease;
}
.contact-link:hover {
  color: var(--bs-primary) !important;
}
.registration-section .btn-primary {
  background-color: #003366;
  border-color: #003366;
  transition: all 0.3s ease;
}
.registration-section .btn-primary:hover {
  background-color: #002244;
  border-color: #002244;
  transform: translateY(-2px);
  box-shadow: 0 4px 10px rgba(0,0,0,0.15);
}
.btn-contact {
  background-color: #c18951;
  border-color: #d4a373;
  color: white;
  transition: all 0.3s ease;
}
.btn-contact:hover {
  background-color: #c8925a;
  border-color: #c8925a;
  color: white;
  transform: translateY(-2px);
  box-shadow: 0 4px 10px rgba(0,0,0,0.15);
}
</style>