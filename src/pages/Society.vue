<template>
<div class="society-editorial content-shell">
 <header class="section-heading"><span class="section-index">01 / MUN EPFL</span><h1>{{ $t('society.title') }}</h1><p>{{ $t('society.description') }}</p></header>
 <div class="editorial-split"><figure class="editorial-photo"><img src="/pictures/society/weekly_session.jpeg" alt="Committee debating" loading="lazy"/><span class="photo-corner">MUN EPFL</span></figure><div class="editorial-copy"><span class="editorial-number">01</span><h2>{{ $t('society.weeklySessions.title') }}</h2><p>{{ $t('society.weeklySessions.description') }}</p></div></div>
 <section class="society-benefits"><h2>{{ $t('society.plusForStudents') }}</h2><SocietyCardSection/></section>
 <div class="editorial-split editorial-reverse"><figure class="editorial-photo"><img src="/pictures/society/delegation.jpeg" alt="committee on EPFL logo" loading="lazy"/></figure><div class="editorial-copy"><span class="editorial-number">02</span><h2>{{ $t('society.objectives.title') }}</h2><p>{{ $t('society.objectives.description1') }}</p><p>{{ $t('society.objectives.description2') }}</p><p class="editorial-note">{{ $t('society.objectives.description3') }}</p></div></div>
</div>
</template>
  
  <script>
    import SocietyCardSection from "@/components/SocietyCardSection.vue";
    import { seo } from '@/composables/seo'

    export default {
      components: {
        SocietyCardSection,
      },
      setup() {
        seo('society')
      }
    }
  </script>