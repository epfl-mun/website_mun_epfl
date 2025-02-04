<template>
    <div id="map" ref="mapContainer" style="height: 400px; width: 100%;"></div>
  </template>
  
  <script>
  import L from 'leaflet';
  import markerShadow from 'leaflet/dist/images/marker-shadow.png';

  
  export default {
    name: 'MapConference',
    mounted() {

      const green_icon = "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png"
      const red_icon = "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png"
      const blue_icon = "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-blue.png"
      
      // Initialize the map
      this.center = [46.527, 6.600]
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

      const center_bounds = [
        [46.525, 6.635], // Center point
        [46.521, 6.641], // Point 1
        [46.515, 6.637], // Point 1
        [46.513, 6.630], // Point 1
        [46.514, 6.625], // Point 2
        [46.518, 6.618], // Point 2
        [46.522, 6.612], // Point 2
        [46.526, 6.618] // Point 2
      ]
      L.polygon(center_bounds, { color: "#33ff11", weight: 2 }).addTo(this.map).bindPopup("City center");

      const epfl_bounds = [
        [46.524, 6.564], // Center point
        [46.524, 6.565], // Center point
        [46.522, 6.565], // Center point
        [46.522, 6.568], // Center point
        [46.5215, 6.572], // Center point
        [46.518, 6.572], // Center point
        [46.517, 6.565], // Center point
        [46.515, 6.560], // Center point
        [46.520, 6.5617], // Center point
      ]
      L.polygon(epfl_bounds, { color: "#1133ff", weight: 2 }).addTo(this.map).bindPopup("EPFL Campus");
      const bc_building = [46.5185, 6.5619]
      // Add a marker to the map
      L.marker(bc_building, { icon: defaultIcon(blue_icon) }).addTo(this.map).bindPopup("BC Building");
  
      // Define the bounds of the rectangle (20m by 20m around the center point)
      const bounds_bc = [
        [bc_building[0] - 0.00025, bc_building[1] - 0.00025], // Southwest corner
        [bc_building[0] + 0.00030, bc_building[1] + 0.00030]  // Northeast corner
      ];
  
      // Add a rectangle to the map
      L.rectangle(bounds_bc, { color: "#0096c7", weight: 1 }).addTo(this.map).bindPopup("BC Building");
      const gare_lausanne = [46.5165, 6.630]
      L.marker(gare_lausanne, { icon: defaultIcon(green_icon) }).addTo(this.map).bindPopup("Lausanne train station");

      const gare_renens = [46.5345, 6.586]
      L.marker(gare_renens, { icon: defaultIcon(green_icon) }).addTo(this.map).bindPopup("Renens train station");

      const starling_hotel = [46.5166, 6.5672]
      L.marker(starling_hotel, { icon: defaultIcon(red_icon) }).addTo(this.map).bindPopup("Starling Hotel");

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