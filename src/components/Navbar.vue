<template>
    <nav class="navbar h-16 bg-red-500 flex justify-center items-center font-bold text-lg">
        <div class="container flex justify-left items-center max-w-6xl gap-10">
            <router-link to="/" class="text-white">Home</router-link>
            <router-link to="/about" class="text-white">About</router-link>
            <router-link to="/sub" class="text-white">Sub Page</router-link>
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