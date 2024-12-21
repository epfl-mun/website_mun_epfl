<template>
  <div class="flex flex-col items-center justify-center min-h-screen bg-gray-100">
    <div class="text-center">
      <h1 class="text-9xl font-bold text-red-primary">404</h1>
      <h2 class="text-6xl font-medium py-8">{{ $t('error.oops') }}</h2>
      <p class="text-2xl pb-8 px-12 font-medium">{{ $t('error.pageNotFound') }}</p>
      <router-link to="/" class="bg-red-primary text-white font-bold py-2 px-4 rounded-md text-lg transform transition-transform duration-200 hover:scale-105 hover:bg-red-700">
        {{ $t('error.goHome') }}
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Error'
}
</script> 