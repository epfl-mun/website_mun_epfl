<template>
  <nav class="navbar h-16 bg-gray-100 flex justify-center items-center font-bold text-lg">
    <div class="container flex justify-left items-center max-w-6xl gap-10">
      <router-link to="/" class="text-black" active-class="text-red-600">Home</router-link>
      <router-link to="/about" class="text-black" active-class="text-red-600">About</router-link>
      <router-link to="/events" class="text-black" active-class="text-red-600">Events</router-link>
      <router-link to="/team" class="text-black" active-class="text-red-600">Team</router-link>
      <div class="relative group">
        <button class="text-black">Conference</button>
        <div class="absolute left-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-50">
          <router-link to="/conference" class="block px-4 py-2 text-black hover:bg-gray-100">Conference</router-link>
          <router-link to="/conference_2024" class="block px-4 py-2 text-black hover:bg-gray-100">2024 Edition</router-link>
          <router-link to="/conference" class="block px-4 py-2 text-black hover:bg-gray-100">EPFLMUN 2025</router-link>
        </div>
      </div>
      <router-link to="/contact" class="text-black" active-class="text-red-600">Contact</router-link>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar'
}
</script>

<style>
.group:hover .group-hover\:opacity-100 {
  opacity: 1;
}
</style>