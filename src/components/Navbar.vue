<template>
    <nav class="navbar h-16 bg-gray-100 flex justify-center items-center font-bold text-lg">
        <div class="container flex justify-left items-center max-w-6xl gap-10">
            <router-link to="/" class="text-black">Home</router-link>
            <router-link to="/about" class="text-black">About</router-link>
            <router-link to="/events" class="text-black">Events</router-link>
            <router-link to="/team" class="text-black">Team</router-link>
            <router-link to="/conference" class="text-black">Conference</router-link>
            <router-link to="/conference_2024" class="text-black">2024 Edition</router-link>
        </div>
    </nav>
  </template>
  
  <script>
  export default {
    name: 'Navbar'
  }
  </script>
  
  <style>
  </style>