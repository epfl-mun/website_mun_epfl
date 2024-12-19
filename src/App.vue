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
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.element-at-center{
  min-height : 100vh;
}
</style>