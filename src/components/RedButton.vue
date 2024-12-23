<template>
  <router-link
    :to="to"
    class="inline-flex items-center justify-center bg-red-600 text-white rounded-lg hover:bg-red-700 hover:scale-105 transition-transform duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500
    px-4 py-2 text-md sm:text-lg"
  >
    <slot></slot>
  </router-link>
</template>

<script setup>
import { defineProps } from 'vue'

defineProps({
  to: {
    type: [String, Object],
    required: true
  }
});
</script>
