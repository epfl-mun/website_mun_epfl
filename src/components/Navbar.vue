<template>
  <nav class="navbar h-16 bg-gray-100 flex justify-center items-center font-bold text-lg">
    <div class="container flex justify-left items-center max-w-6xl gap-10">
      <router-link to="/" class="text-black" active-class="text-red-600">
        <img src="/svg/logos/EPFLMUN.svg" alt="Logo" class="h-10" />
      </router-link>
      <router-link to="/" class="text-black" active-class="text-red-600">{{ $t('navbar.home') }}</router-link>
      <router-link to="/about" class="text-black" active-class="text-red-600">{{ $t('navbar.about') }}</router-link>
      <router-link to="/events" class="text-black" active-class="text-red-600">{{ $t('navbar.events') }}</router-link>
      <router-link to="/team" class="text-black" active-class="text-red-600">{{ $t('navbar.team') }}</router-link>
      <div class="relative group">
        <button class="text-black">{{ $t('navbar.conference') }}</button>
        <div class="absolute left-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-50">
          <router-link to="/conference" class="block px-4 py-2 text-black hover:bg-gray-100">{{ $t('navbar.conference') }}</router-link>
          <router-link to="/conference_2024" class="block px-4 py-2 text-black hover:bg-gray-100">{{ $t('navbar.conference2024') }}</router-link>
          <router-link to="/conference" class="block px-4 py-2 text-black hover:bg-gray-100">{{ $t('navbar.epflmun2025') }}</router-link>
        </div>
      </div>
      <router-link to="/contact" class="text-black" active-class="text-red-600">{{ $t('navbar.contact') }}</router-link>
      <div class="ml-auto flex items-center">
        <button @click="changeLanguage('en')" class="mx-2">
          <img src="/svg/flags/english.svg" alt="UK Flag" class="h-6" />
        </button>
        <button @click="changeLanguage('fr')" class="mx-2">
          <img src="/svg/flags/france.svg" alt="FR Flag" class="h-6" />
        </button>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
  methods: {
    changeLanguage(lang) {
      this.$i18n.locale = lang;
    }
  }
}
</script>

<style>
.group:hover .group-hover\:opacity-100 {
  opacity: 1;
}
</style>