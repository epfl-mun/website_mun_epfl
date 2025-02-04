<template>
    <div id="map" ref="mapContainer" style="height: 400px; width: 100%;"></div>
  </template>
  
  <script>
  import L from 'leaflet';
  import markerIcon from 'leaflet/dist/images/marker-icon.png';
  import markerShadow from 'leaflet/dist/images/marker-shadow.png';

  
  export default {
    name: 'MapContact',
    props: {
      center: {
        type: Array,
        default: () => [46.519898444862235, 6.5657936709033615], // Center at EPFL
    },
      zoom: {
        type: Number,
        default: 13,
      },
    },
    mounted() {
      // Initialize the map
      this.map = L.map(this.$refs.mapContainer).setView(this.center, this.zoom);
  
      // Add a tile layer to the map
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution:
          'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
      }).addTo(this.map);
      const defaultIcon = L.icon({
        iconUrl: markerIcon,
        shadowUrl: markerShadow,
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41]
      });
      // Add a marker to the map (optional)
      L.marker(this.center, { icon: defaultIcon }).addTo(this.map);
    },
    beforeUnmount() {
      // Clean up the map when the component is unmounted
      if (this.map) {
        this.map.remove();
      }
    },
  };
  </script>
  
  <style>
  /* Optional: Customize map styles */
  #map {
    border: 1px solid #ccc;
    z-index: 40; /* This is so that the dropdown menu of the navbar does not collide with it */
  }
  </style>
  