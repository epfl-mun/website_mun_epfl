<template>
<article class="person-card"><figure class="person-photo"><img :src="person.image" :alt="person.name + ' picture'" loading="lazy"/></figure><div class="person-copy"><h2>{{ person.name }}</h2><h3>{{ person.poste[$i18n.locale] }}</h3><details class="person-biography"><summary>{{ $i18n.locale === 'fr' ? 'Biographie' : 'Biography' }}<span aria-hidden="true">+</span></summary><p>{{ person.description[$i18n.locale] }}</p></details><div class="person-socials"><a v-if="person.linkedin" :href="person.linkedin" target="_blank" rel="noopener noreferrer" :aria-label="'LinkedIn — ' + person.name"><font-awesome-icon :icon="['fab','linkedin']"/></a><a v-if="person.mail" :href="'mailto:'+person.mail" :aria-label="'Email — ' + person.name"><font-awesome-icon :icon="['fas','envelope']"/></a></div></div></article>
</template>
  
  <script>


  export default {
    props: {
      person: {
        type: Object,
        required: true
      }
    },

  }
  </script>