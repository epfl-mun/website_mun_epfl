<template>
  <div class="benefit-card">
    <div class="benefit-icon">
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
