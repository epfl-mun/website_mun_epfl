<template>
    <article @click="navigateToEvent" @keydown.enter="navigateToEvent" tabindex="0" class="event-card group m-0 overflow-hidden rounded-2xl hover:cursor-pointer focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-2">
      <div class="relative w-full h-56 overflow-hidden">
        <img :src="imageUrl" :alt="title" class="object-cover w-full h-full" />
        <span class="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-bold uppercase tracking-wider text-red-700">MUN EPFL</span>
      </div>
      <div class="p-6">
        <h2 class="text-2xl font-bold tracking-tight text-slate-900">{{ title }}</h2>
        <div class="mt-5 grid grid-cols-2 gap-4 text-sm text-slate-500">
          <div class="flex items-start gap-2">
              <CalendarIcon class="h-5 w-5 shrink-0 text-red-600"/>
              <p class="break-words">{{ date }}</p>
          </div>
          <div class="flex items-start gap-2">
              <MapPinIcon class="h-5 w-5 shrink-0 text-red-600"/>
              <p>{{ location }}</p>
        </div>
        </div>
      </div>
    </article>
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
