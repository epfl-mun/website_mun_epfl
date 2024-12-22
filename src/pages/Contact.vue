<template>
  <div class="w-full p-10 pb-4">
      <div class="flex flex-col items-center gap-4">
          <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold">{{ $t('contact.title') }}</h1>
      </div>
  </div>

  <div class="container mx-auto px-4 py-8">
    <div class="flex flex-col lg:flex-row items-start justify-between gap-8 items-center">
      
      <!-- Contact Information Section -->
      <div class="px-5 w-full sm:w-3/4 sm:px-0 lg:w-1/2">
        <div class="bg-white shadow-lg rounded-lg p-6 space-y-4 border-2 border-gray-200">
          
          <!-- Address -->
          <div v-for="link in allLinks" 
               :key="link.name"
               class="group cursor-pointer"
          >
            <a 
              :href="link.url"
              target="_blank"
              rel="noopener noreferrer"
              class="block hover:translate-x-1 transition-transform"
            >
              <div class="flex items-center gap-3 mb-2">
                <component 
                  :is="link.icon" 
                  v-if="link.isHeroIcon"
                  class="w-6 text-black"
                />
                <img 
                  v-else
                  :src="`/svg/socialLinks/${link.name.toLowerCase()}.svg`"
                  :alt="link.name"
                  class="text-black w-6 h-6"
                />
                <h3 class="text-2xl font-semibold text-gray-800">{{ link.name }}</h3>
              </div>
              <div class="ml-9 text-start">
                <span class="text-gray-600 group-hover:text-red-500 transition-colors">
                  {{ getSocialLabel(link.name) }}
                </span>
              </div>
            </a>
          </div>

        </div>
      </div>

      <!-- Map Section -->
      <div class="w-full lg:w-1/2 h-[400px] rounded-lg overflow-hidden shadow-lg">
        <Map />
      </div>
    </div>
  </div>
</template>

<script>
import Map from '@/components/Map.vue';
import socialLinks from '@/assets/socialLinks.json';
import { MapPinIcon } from '@heroicons/vue/24/solid';
import { seo } from '@/composables/seo';

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