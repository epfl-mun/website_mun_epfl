<template>

    <div class="wrap max-w-5xl m-auto flex flex-col items-center justify-center">
      <h2 class="text-4xl font-bold mb-5"> {{ $t("events.title") }}</h2>
      <div class="events-container grid grid-cols-3">
        <EventCard v-for="event in sortedEvents" :key="event.id" :event="event" />
      </div>
    </div>
  </template>
  
  <script>
  import events from '../assets/events.json'
  import EventCard from '../components/EventCard.vue'
  
  export default {
    name: 'EventsPage',
    components: {
      EventCard
    },
    data() {
      return {
        events
      }
    },
    computed: {
      sortedEvents() {
        return [...this.events]
          .filter(event => event.positionFirstPage)
          .sort((a, b) => a.positionFirstPage - b.positionFirstPage)
      }
    }
  }
  </script>