<template>
  <div id="app">
    <!-- Navbar -->
     <Navbar />
    <router-view class="element-at-center"></router-view>
    <!-- Footer -->
     <Footer />
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';
import 'leaflet/dist/leaflet.css';


export default {
  name: 'App',
  components: {
    Navbar,
    Footer
  }
}
</script>

<style>
#app {
  font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.element-at-center{
  min-height : 100vh;
}
</style>
