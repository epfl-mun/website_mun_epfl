<template>
    <div id="map" ref="mapContainer" style="height: 400px; width: 100%;"></div>
  </template>
  
  <script>
  import L from 'leaflet';
  import markerShadow from 'leaflet/dist/images/marker-shadow.png';

  
  export default {
    name: 'MapTransports',
    mounted() {

      const green_icon = "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png"
      const red_icon = "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png"
      const blue_icon = "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-blue.png"
      // const black_icon = "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-black.png"
      // Initialize the map
      this.center = [46.528, 6.600]
      this.zoom = 14     
      
      this.map = L.map(this.$refs.mapContainer).setView(this.center, this.zoom);
      
      // Add a tile layer to the map
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution:
        'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
      }).addTo(this.map);
      
      // Define the default icon
      const defaultIcon = (url) => {
        return L.icon({
          iconUrl: url,
          shadowUrl: markerShadow,
          iconSize: [25, 41],
          iconAnchor: [12, 41],
          popupAnchor: [1, -34],
          shadowSize: [41, 41],
        }
      )};

        const flon_epfl = [
        [46.522, 6.566], // epfl
        [46.522, 6.573],
        [46.525, 6.579],
        [46.524, 6.585],
        [46.523, 6.590],
        [46.524, 6.603],
        [46.523, 6.609],
        [46.522, 6.613],
        [46.5215, 6.624],
        [46.520, 6.630] // flon
        ];

        const gare_flon = [
            [46.520, 6.630], // flon
            [46.517, 6.629] // le point de la gare
        ]


        L.polyline(flon_epfl, { color: 'blue', weight: 4 }).addTo(this.map);
        L.polyline(gare_flon, {color: "#3399ff", weight: 4}).addTo(this.map).bindPopup("Gare de Lausanne");

        const epfl_renens = [
            [46.522, 6.566], // epfl
            [46.525, 6.565],
            [46.528, 6.567],
            [46.533, 6.570],
            [46.538, 6.574],
            [46.537, 6.579], // renens
        ]

        L.polyline(epfl_renens, {color: "red", weight: 4}).addTo(this.map).bindPopup("Renens");
        

        // const metro_bc = [
        //     [46.522, 6.566], // métro epfl
        //     [46.522, 6.565],
        //     [46.520, 6.565],
        //     [46.51877, 6.5632],
        //     [46.519, 6.56287],
        //     [46.5189, 6.56275],
        //     [46.5189, 6.5618],
        //     [46.5187, 6.5618], // bc building
        // ]

        // L.polyline(metro_bc, {color: "green", weight: 4}).addTo(this.map).bindPopup("Métro M1");

        const gare_lausanne = [46.517, 6.629]
        L.marker(gare_lausanne, { icon: defaultIcon(blue_icon) }).addTo(this.map).bindPopup("Lausanne train station");

        const gare_renens = [46.537, 6.579]
        L.marker(gare_renens, { icon: defaultIcon(red_icon) }).addTo(this.map).bindPopup("Renens train station");

        const lausanne_flon = [46.520, 6.630]
        L.marker(lausanne_flon, { icon: defaultIcon(blue_icon) }).addTo(this.map).bindPopup("Lausanne Flon");

        const epfl = [46.522, 6.566]
        L.marker(epfl, { icon: defaultIcon(green_icon) }).addTo(this.map).bindPopup("EPFL");

        // const bc_building = [46.5187, 6.5618]
        // L.marker(bc_building, { icon: defaultIcon(green_icon) }).addTo(this.map).bindPopup("BC Building");

        // const mx_building = [46.5192, 6.5636]
        // L.marker(mx_building, { icon: defaultIcon(black_icon) }).addTo(this.map).bindPopup("MX Building");
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