<template>
    <div class="flex flex-col items-center justify-start">
      <div class="max-w-7xl mt-12 flex w-full gap-5">
        <div class="w-1/2 flex flex-col items-start">

          <h2 class="text-4xl font-bold mb-5">Contact</h2>
          <div class="bg-slate-200 px-8 py-5 rounded-md flex flex-col items-start gap-5 w-full">
            <div class="flex flex-col items-start">
              <div class="flex items-center gap-2">
                <font-awesome-icon :icon="['fas', 'location-dot']" size="2x" />
                <h3 class="text-3xl font-bold">Adresse</h3>
              </div>
              <p class="text-left">La Coupole CO116, Case Postale Station 10 <br />1015 Lausanne, Suisse</p>
            </div>
            <div>
              <div class="flex items-center gap-2">
                <font-awesome-icon :icon="['fas', 'phone']" size="2x" />
                <h3 class="text-3xl font-bold">Phone</h3>
              </div>
              <p>+41772019335</p>
            </div>
            <div>
              <div class="flex items-center gap-2">
                <font-awesome-icon :icon="['fas', 'envelope']" size="2x" />
                <h3 class="text-3xl font-bold">Email</h3>
              </div>
              <p><a href="mailto:info@mun-epfl.ch">info@mun-epfl.ch</a></p>
            </div>
          </div>
        </div>
        <div class="mt-10 h-96 w-1/2 rounded-xl overflow-hidden">
          <Map/>
        </div>
      </div>
    </div>
  </template>
  
  <script>
import Map from '@/components/Map.vue';

  
  export default {
    name: 'Contact',
    components: {
      Map
    }
  }
  </script>
  
  <style>
  /* Add any necessary styles here */
  </style>