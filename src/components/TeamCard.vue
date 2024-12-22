<template>
    <div class="card flex flex-col relative overflow-hidden border border-gray-300 m-2 rounded-lg shadow-md">
      <div style="width: 100%; height : 300px" class="mb-5 bg-slate-100">
        <LazyImage :src="`${person.image}`" :alt="person.name + ' picture'" montainsTransform="rotate(45deg) translate(40%, 70%)" mountainsShadow="50px -100px" sunOrigin="200px 1000px" sunSize="10%" />
      </div>
      <div class="flex flex-col justify-between text-left px-8 mb-5 flex-grow">
        <div class="">
          <h2 class="text-3xl font-bold mb-1">{{ person.name }}</h2>
          <h3 class="text-md text-red-600 font-bold mb-5">{{ person.poste[$i18n.locale] }}</h3>
          <p class="text-left text-sm">
              {{ person.description[$i18n.locale] }}
            </p>
        </div>
            
            <div class="flex gap-3 mt-4">
              <a :href="person.linkedin" v-if="person.linkedin != ''" target="_blank" class="text-white rounded-3xl p-2 aspect-square w-8 h-8 flex justify-center items-center bg-black">
                <font-awesome-icon :icon="['fab', 'linkedin']" />
              </a>
              <a :href="'mailto:' + person.mail" v-if="person.mail != ''" class="text-white rounded-3xl p-2 aspect-square w-8 h-8 flex justify-center items-center bg-black">
                <font-awesome-icon :icon="['fas', 'envelope']" />
              </a>
              </div>
        </div>
    </div>


  </template>
  
  <script>
import LazyImage from './LazyImage.vue';

  export default {
    props: {
      person: {
        type: Object,
        required: true
      }
    },
    components: {
      LazyImage
    }
  }
  </script>