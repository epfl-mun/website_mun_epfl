<template>

    <div class="events max-w-4xl m-auto flex flex-col items-center justify-center">
      <h2>Events</h2>
      <div class="events-container flex">
        <EventCard v-for="event in events" :key="event.id" :event="event" />
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
    }
  }
  </script>
  
  <style>
  .events {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  </style>