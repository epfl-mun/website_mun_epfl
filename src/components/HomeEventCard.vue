<template>
    <div @click="navigateToEvent" class="m-2 overflow-hidden border border-gray-300 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out hover:cursor-pointer lg:pb-2">
      <div class="w-full h-1/2">
        <img :src="imageUrl" alt="Event Image" class="object-cover w-full h-full" />
      </div>
      <h2 class="text-2xl font-bold mb-5 mt-5 mx-2">{{ title }}</h2>
      <div class="flex flex-row justify-around mb-5 max-w-md mx-auto">
        <div class="flex flex-col items-center gap-2">
            <CalendarIcon class="h-6 w-6"/>
            <p class="text-center break-words">{{ date }}</p>
        </div>
        <div class="flex flex-col items-center gap-2">
            <MapPinIcon class="h-6 w-6"/>
            <p>{{ location }}</p>
        </div>
      </div>
    </div>
</template>

<script>
import { CalendarIcon, MapPinIcon } from '@heroicons/vue/24/solid';
import { useRouter } from 'vue-router';

export default {
  name: 'HomeEventCard',
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
    const router = useRouter();
    
    const navigateToEvent = () => {
      router.push({
        path: '/events',
        query: { highlight: props.id }
      });
    };

    return {
      navigateToEvent
    };
  }
}
</script>