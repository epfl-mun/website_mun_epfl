<template>
<div class="content-shell contact-editorial"><header class="section-heading"><span class="section-index">06 / MUN EPFL</span><h1>{{ $t('contact.title') }}</h1></header><div class="contact-layout"><div class="contact-links"><a v-for="link in allLinks" :key="link.name" :href="link.url" target="_blank" rel="noopener noreferrer" class="contact-link"><span class="contact-icon"><component :is="link.icon" v-if="link.isHeroIcon"/><img v-else :src="`/svg/socialLinks/${link.name.toLowerCase()}.svg`" :alt="link.name"/></span><div><h3>{{ link.name }}</h3><p>{{ getSocialLabel(link.name) }}</p></div><span class="contact-arrow"><svg width="14" height="14" viewBox="0 0 20 20" aria-hidden="true"><path d="M5 15 15 5M5 5h10v10" fill="none" stroke="currentColor" stroke-width="1.5"/></svg></span></a></div><div class="contact-map"><Map/></div></div></div>
</template>

<script>
import socialLinks from '@/assets/socialLinks.json';
import { MapPinIcon } from '@heroicons/vue/24/solid';
import { seo } from '@/composables/seo';
import Map from '@/components/maps/MapContact.vue';

export default {
  name: 'Contact',
  components: {
    MapPinIcon,
    Map
  },
  setup(){
    seo('contact')
  },
  data() {
    return {
      socialLinks
    }
  },
  computed: {
    allLinks() {
      return [{
        name: this.$t('contact.address'),
        url: 'https://maps.google.com',
        icon: MapPinIcon,
        isHeroIcon: true
      }, ...this.socialLinks]
    }
  },
  methods: {
    getSocialLabel(name) {
      const labels = {
        'Address': 'La Coupole CO116, Case Postale Station 10, 1015 Lausanne, Switzerland',
        'Adresse': 'La Coupole CO116, Case Postale Station 10, 1015 Lausanne, Switzerland',
        'Instagram': '@mun.epfl',
        'LinkedIn': this.$t('contact.linkedin'),
        'Facebook': '@MUNEPFL',
        'Whatsapp': '+41 77 201 93 35',
        'Mail': 'info@mun-epfl.ch'
      };
      return labels[name];
    }
  }
}
</script>