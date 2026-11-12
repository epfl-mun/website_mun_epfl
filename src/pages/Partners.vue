<template>
<section class="partners content-shell"><header class="section-heading"><span class="section-index">05 / MUN EPFL</span><h1>{{ $t('partners.title') }}</h1><p>{{ $t('partners.description') }}</p></header><div class="partner-grid"><a v-for="partner in partners" :key="partner.name" class="partner-tile" :href="partner.url" target="_blank" rel="noopener noreferrer"><div class="partner-logo"><img :src="'/pictures/partners/' + partner.picture" :alt="partner.name" loading="lazy"/></div><div class="partner-copy"><h2>{{ partner.name }}<svg width="14" height="14" viewBox="0 0 20 20" aria-hidden="true"><path d="M5 15 15 5M5 5h10v10" fill="none" stroke="currentColor" stroke-width="1.5"/></svg></h2><p>{{ partner.description[$i18n.locale] }}</p></div></a></div></section>
</template>

<script>
import partners from '../assets/partners.json';
// import { seo } from '@/composables/seo';


export default {
  name: 'PartnersPage',

  data() {
    return {
      partners
    }
  }
//   setup() {
//     seo('partners')
//   }
}

</script>