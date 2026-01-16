<template>
  <div ref="calendarButton"></div>
</template>

<script>
export default {
  name: 'GoogleCalendarButton',
  mounted() {
    this.loadCalendarScript();
  },
  beforeUnmount() {
    this.removeCalendarScript();
  },
  methods: {
    loadCalendarScript() {
      const calendarScriptId = 'google-calendar-script';
      const calendarStyleId = 'google-calendar-style';

      if (document.getElementById(calendarScriptId)) {
        this.initializeCalendarButton();
        return;
      }

      const style = document.createElement('link');
      style.id = calendarStyleId;
      style.href = 'https://calendar.google.com/calendar/scheduling-button-script.css';
      style.rel = 'stylesheet';
      document.head.appendChild(style);

      const script = document.createElement('script');
      script.id = calendarScriptId;
      script.src = 'https://calendar.google.com/calendar/scheduling-button-script.js';
      script.async = true;
      script.onload = () => {
        this.initializeCalendarButton();
      };
      document.head.appendChild(script);
    },
    initializeCalendarButton() {
      if (window.calendar && window.calendar.schedulingButton) {
        window.calendar.schedulingButton.load({
          url: 'https://calendar.google.com/calendar/appointments/schedules/AcZssZ3J7AjNiv6lQZAEbQdYpk6S9tt_V85U5-NGhv_PsPOGOIay3Ncl-0AV6CI-MnteGDnskLu_HYFV?gv=true',
          color: '#039BE5',
          label: '進行預約',
          target: this.$refs.calendarButton,
        });
      }
    },
    removeCalendarScript() {
      const calendarScriptId = 'google-calendar-script';
      const calendarStyleId = 'google-calendar-style';
      const script = document.getElementById(calendarScriptId);
      const style = document.getElementById(calendarStyleId);
      if (script) {
        script.remove();
      }
      if (style) {
        style.remove();
      }
    }
  }
}
</script>