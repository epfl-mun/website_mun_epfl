<template>
    <div>
      <h1>Event Detail</h1>
      <p>Event ID: {{ eventId }}</p>
    </div>
  </template>
  
  <script>
  export default {
    name: 'EventDetail',
    computed: {
      eventId() {
        return this.$route.params.id;
      }
    },
  }
  </script>