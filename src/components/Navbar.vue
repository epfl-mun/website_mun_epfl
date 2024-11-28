<template>
    <nav class="navbar h-16 bg-red-500 flex justify-around items-center">
        <router-link to="/" class="text-white">Home</router-link>
        <router-link to="/about" class="text-white">About</router-link>
        <router-link to="/sub" class="text-white">Sub Page</router-link>
    </nav>
  </template>
  
  <script>
  export default {
    name: 'Navbar'
  }
  </script>
  
  <style>
  </style>