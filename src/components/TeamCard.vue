<template>
    <div class="card flex flex-col">
      <img :src="`${person.image}`" :alt="person.name + ' picture'" style="width: 100%; height : 300px" class="mb-5 bg-slate-800">
      <div class="flex flex-col justify-between text-left px-8 mb-5 flex-grow">
        <div class="">
          <h3 class="text-lg font-bold">{{ person.poste }}</h3>
          <h2 class="text-2xl font-bold mb-5">{{ person.name }}</h2>
          <p class="text-left text-base">
              {{ person.description }}
            </p>
        </div>
            
            <div class="flex gap-3">
                <div>Linkedin</div>
                <div>Mail</div>
            </div>
        </div>
    </div>


  </template>
  
  <script>
  export default {
    name: 'EventCard',
    props: {
      person: {
        type: Object,
        required: true
      }
    }
  }
  </script>
  
  <style>
  .card {
    z-index: 1;
    overflow: hidden;
    border: 1px solid #ccc;
    margin: 8px;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  </style>