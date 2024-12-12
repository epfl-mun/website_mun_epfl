<template>
    <nav class="navbar h-16 bg-gray-100 flex justify-center items-center font-bold text-lg">
        <div class="container flex justify-left items-center max-w-6xl gap-10">
            <router-link to="/" class="text-black" active-class="text-red-600">Home</router-link>
            <router-link to="/about" class="text-black" active-class="text-red-600">About</router-link>
            <router-link to="/events" class="text-black" active-class="text-red-600">Events</router-link>
            <router-link to="/team" class="text-black" active-class="text-red-600">Team</router-link>
            <router-link to="/conference" class="text-black" active-class="text-red-600">Conference</router-link>
            <router-link to="/conference_2024" class="text-black" active-class="text-red-600">2024 Edition</router-link>
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