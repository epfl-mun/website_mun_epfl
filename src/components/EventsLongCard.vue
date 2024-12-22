<template>
  <div :class="['relative my-4 max-w-4xl w-full sm:w-3/4 xl:w-2/3']">
    <!-- Animated ring wrapper -->
    <div v-if="isHighlighted" class="absolute inset-0 ring-4 ring-red-500 rounded-lg animate-[pulse_1s_ease-in-out_infinite]"></div>
    
    <!-- Main card content (no animation) -->
    <div class="relative flex flex-col md:flex-row bg-white rounded-lg shadow-xl overflow-hidden h-full border border-gray-200 transition-all duration-300">
      <div class="w-full md:w-1/3 relative">
        <div class="aspect-[4/3] w-full h-full">
          <img 
            :src="imageUrl" 
            :alt="title"
            class="w-full h-full object-cover absolute inset-0"
          />
        </div>
      </div>

      <!-- Content container -->
      <div class="w-full md:w-2/3 p-4 flex flex-col">
        <h3 class="text-xl font-semibold mb-2">{{ title }}</h3>
        <p class="text-gray-600 mb-2 flex-grow" v-html="description"></p>
        
        <!-- Date and location row -->
        <div class="grid grid-cols-2 text-gray-500 sm:px-2">
          <div class="flex items-center">
            <CalendarIcon class="w-5 h-5 mr-1" />
            <span class="text-base">{{ date }}</span>
          </div>
          <div class="flex items-center justify-end">
            <MapPinIcon class="w-5 h-5 mr-1" />
            <span class="text-base">{{ location }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
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