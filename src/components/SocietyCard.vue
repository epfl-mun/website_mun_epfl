<template>
  <div class="md:flex gap-4 border rounded-lg p-4 shadow bg-white">
    <div class="text-3xl md:self-center mb-3 md:mb-0 flex justify-center md:block">
      <slot name="icon"></slot>
    </div>
    <div>
      <h3 class="text-lg font-bold">{{ title }}</h3>
      <p class="text-gray-600">{{ description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    description: String,
  },
};
</script>
