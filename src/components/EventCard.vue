<template>
    <div class="card pb-4">
      <div style="width: 400px; height:250px">
        <LazyImage :src="`${event.image}`" alt="Event Image" montainsTransform="rotate(45deg) translate(40%, 70%)" mountainsShadow="50px -100px" sunOrigin="200px 700px" sunSize="10%" />
      </div>
      <!-- <img :src="`${event.image}`" alt="Event Image" style="width: 100%; height:250px" class="mb-5 object-cover"> -->
      <h2 class="text-2xl font-bold mb-5">{{ event.title }}</h2>
      <div class="flex flex-col justify-left text-left gap-3 px-8 mb-5">
        <div>
            <div class="font-bold">Date</div>
            <p>{{ event.date }}</p>
        </div>
        <div>
            <div class="font-bold">Location</div>
            <p>{{  event.location }}</p>
        </div>
    </div>
    <router-link :to="'/event/'+event.id" class="rounded-md bg-red-primary text-white px-4 py-2 text-lg">Learn more</router-link>
    </div>


  </template>
  
  <script>
import LazyImage from './LazyImage.vue';

  export default {
    name: 'EventCard',
    props: {
      event: {
        type: Object,
        required: true
      }
    },
    components: {
      LazyImage
    }
  }
  </script>
  
  <style>
  .card {
    z-index: 1;
    overflow: hidden;
    border: 1px solid #ccc;
    margin: 8px;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  </style>