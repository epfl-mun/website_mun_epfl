<template>
  <div class="flex flex-col items-center justify-top gap-10">
    <div :style="backgroundImageStyle" class="flex pt-32 pb-16 justify-center items-center">
      <div class="flex max-w-7xl justify-end items-center h-full w-full">
        <div class="flex flex-col w-1/4 bg-white h-full px-8 py-8 justify-between items-start">
          <h1 class="text-4xl font-bold">{{ event.title }}</h1>
          <div>
            <p class="text-2xl text-left">{{ $t("events.date") }}</p>
            <p class="text-2xl font-bold">{{ event.date }}</p>
          </div>
          <div>
            <p class="text-2xl text-left">{{ $t("events.location")}}</p>
            <p class="text-2xl font-bold">{{ event.location }}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="max-w-7xl">
      <h2 class="text-3xl font-bold text-left mb-5">Details :</h2>
      <div class="event-description text-xl text-left" v-html="event.description"></div>
    </div>
  </div>
</template>

<script>
import events from '../assets/events.json'

export default {
  name: 'EventDetail',
  computed: {
    eventId() {
      return this.$route.params.id;
    },
    event() {
      return events.find(event => event.id === parseInt(this.eventId));
    },
    backgroundImageStyle() {
      return {
        backgroundImage: `url(${this.event.image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '600px',
        width: '100%'
      };
    }
  }
}
</script>
