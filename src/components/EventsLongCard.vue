<template>
<article class="event-story" :class="{'event-highlighted':isHighlighted}"><figure><img :src="imageUrl" :alt="title" loading="lazy"/></figure><div class="event-story-copy"><div class="event-meta"><span><CalendarIcon/>{{ date }}</span><span><MapPinIcon/>{{ location }}</span></div><h3><span v-if="isUpcoming" class="event-upcoming">{{ $t('events.upcoming') }}</span>{{ title }}</h3><div class="event-description" v-html="description"></div></div></article>
</template>

<script>
import { CalendarIcon, MapPinIcon } from '@heroicons/vue/24/solid'
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';

export default {
  components: {
    CalendarIcon,
    MapPinIcon
  },
  props: {
    id: {
      type: Number,
      required: true
    },
    isUpcoming: {
        type: Boolean,
        default: false
    },
    title: {
      type: String,
      required: true
    },
    date: {
      type: String,
      required: true
    },
    location: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    imageUrl: {
      type: String,
      required: true
    }
  },
  setup(props) {
    const route = useRoute();
    const isHighlighted = ref(false);

    onMounted(() => {
      const highlightId = parseInt(route.query.highlight);
      if (highlightId === props.id) {
        isHighlighted.value = true;
        
        setTimeout(() => {
          document.querySelector('.ring-red-500')?.scrollIntoView({ 
            behavior: 'smooth',
            block: 'center'
          });
        }, 100);

        setTimeout(() => {
          isHighlighted.value = false;
        }, 3000);
      }
    });

    return {
      isHighlighted
    };
  }
}
</script>