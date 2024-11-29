<template>
    <section class="relative h-1/2 w-full bg-cover bg-center" style="background-image: url('/pictures/team/home_page_picture.jpg'); height: 500px;">
      <div class="flex items-center justify-center h-full">
        <img src="/pictures/logos/Mun_EPFL_long_reversed.svg" alt="Logo" class="logo" style="height : 80%">
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

        <button class="bg-red-primary text-white bg-red-primary font-bold py-2 px-4 rounded-xl my-10">
          Learn More
        </button>
      </div>
    </section>

    <section>
      <Events />
    </section>
  </template>
  
  <script>
import Events from '@/components/Events.vue';

  export default {
    name: 'HomePage',
    components: {
      Events
    }
  }
  </script>