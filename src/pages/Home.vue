<template>
    <section class="relative h-1/2 w-full bg-cover bg-center" style="height: 500px;">
      <div class="flex items-center justify-center h-full">
        <LazyImage src="/pictures/team/home_page_picture.jpg" alt="committee on EPFL logo" height="100%" montainsTransform="rotate(45deg) translate(50%, 70%)" sunOrigin="1000px 5000px" sunSize="5%"/>
        <img v-show="!loading" src="/pictures/logos/Mun_EPFL_long_reversed.svg" alt="Logo" class="logo absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" style="height : 80%">
      </div>
    </section>

    <section class="w-full flex justify-center items-center">
      <div class="container max-w-3xl flex justify-center flex-col items-center">
        <h1 class="text-center font-bold text-6xl my-10">
          Welcome to <span class="text-red-primary">MUN EPFL</span>
        </h1>
        <p class="text-center text-xl">
          <span class="text-red-primary">MUN EPFL</span> is a simulation of the United Nations where students play the role of delegates from different countries and attempt to solve real world issues with the policies and perspectives of their assigned country. 
        </p>

        <router-link to="/about" class="bg-red-primary text-white font-bold py-2 px-4 rounded-md my-10 text-lg transform transition-transform duration-200 hover:scale-105 hover:bg-red-700">
          Learn More
        </router-link>
      </div>
    </section>

    <section>
      <Events />
    </section>
  </template>
  
  <script>
import Events from '@/components/Events.vue';
import LazyImage from '@/components/LazyImage.vue';

  export default {
    name: 'HomePage',
    components: {
      Events,
      LazyImage
    },
  }
  </script>