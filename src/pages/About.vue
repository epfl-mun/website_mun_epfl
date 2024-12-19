<template>
    <div class="flex flex-col justify-start items-center">
      <div class="flex flex-between mt-10 items-center" style="width : 1324px">
        <div style="height : 400px; width : 50%; overflow: hidden;" class="rounded">
          <LazyImage src="/pictures/conference-not-debate/rolex_public.jpg" alt="committee on EPFL logo" height="500px" />
        </div>
        <div class="flex flex-col justify-start items-center gap-7 w-1/2 p-5 px-20">
          <h1 class="text-4xl font-bold text-black">About Us</h1>
          <p class="text-lg"><span class="text-red-primary">MUN EPFL</span> {{ $t('about.aboutDescription') }}</p>
        </div>
      </div>

      <div class="flex flex-between mt-10 items-center" style="width : 1324px">
        <div class="flex flex-col justify-start items-center gap-7 w-1/2 p-5 px-20">
          <h2 class="text-4xl font-bold text-black">{{ $t('about.weeklySessions') }}</h2>
          <p class="text-lg">{{ $t('about.weeklySessionsDescription') }}</p>
        </div>
        <div style="height : 400px; width : 50%; overflow: hidden;" class="rounded">
          <LazyImage src="/pictures/conference-not-debate/welcoming_sg.jpg" alt="committee on EPFL logo" height="500px" />
        </div>
      </div>

      <div class="flex flex-between mt-10" style="width : 1324px">
        <div style="height : 400px; width : 50%; overflow: hidden;" class="rounded">
          <LazyImage src="/pictures/conferences/reunion_with_6_people.jpg" alt="committee on EPFL logo" height="500px" />
        </div>
        <div class="flex flex-col justify-start items-center gap-7 w-1/2 p-5 px-20">
          <h2 class="text-4xl font-bold text-black">{{ $t('about.objective') }}</h2>
          <p class="text-lg">{{ $t('about.objectiveDescription1') }}</p>
          <p class="text-lg">{{ $t('about.objectiveDescription2') }}</p>
          <p class="text-lg">{{ $t('about.objectiveDescription3') }}</p>
        </div>
      </div>

      <div class="bg-gray-200 w-full flex justify-center items-center mt-10 p-5">
        <div class="flex flex-col flex-between justify-center items-center" style="width: 1324px">
          <h2 class="text-4xl font-bold mb-5">{{ $t('about.plusForStudents') }}</h2>
          
          <div class="flex items-stretch gap-5 justify-around">
            <div class="bg-gray-300 rounded p-3 w-1/3 flex-grow">
              <h3 class="text-2xl mb-2 text-left">{{ $t('about.weeklySessionsTitle') }}</h3>
              <p class="text-left">{{ $t('about.weeklySessionsText') }}</p>
            </div>

            <div class="bg-gray-300 rounded p-3 w-1/3 flex-grow">
              <h3 class="text-2xl mb-2 text-left">{{ $t('about.developOralSkillsTitle') }}</h3>
              <p class="text-left">{{ $t('about.developOralSkillsText') }}</p>
            </div>

            <div class="bg-gray-300 rounded p-3 w-1/3 flex-grow">
              <h3 class="text-2xl mb-2 text-left">{{ $t('about.internationalIssuesTitle') }}</h3>
              <p class="text-left">{{ $t('about.internationalIssuesText') }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>

</template>
  
  <script>

import LazyImage from '@/components/LazyImage.vue';

  export default {
    name: 'AboutPage',
    components: {
      LazyImage
    }
  }
  </script>