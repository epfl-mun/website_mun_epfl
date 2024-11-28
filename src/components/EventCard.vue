<template>
    <div class="card">
      <h2>{{ event.title }}</h2>
      <p>{{ event.date }}</p>
      <p>{{ event.description }}</p>
    </div>
  </template>
  
  <script>
  export default {
    name: 'EventCard',
    props: {
      event: {
        type: Object,
        required: true
      }
    }
  }
  </script>
  
  <style>
  .card {
    border: 1px solid #ccc;
    padding: 16px;
    margin: 8px;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  </style>