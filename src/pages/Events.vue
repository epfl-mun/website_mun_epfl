<template>
    <div class="flex flex-col items-center justify-start">

        <div class="max-w-7xl mt-12">
            <Events />
        </div>
    </div>
</template>

<script>
import Events from '@/components/Events.vue';

  export default {
    name: 'HomePage',
    components: {
      Events
    }
  }
  </script>