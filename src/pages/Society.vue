<template>
    <div class="flex flex-col justify-start items-center">
        <div class="w-full py-10 px-10">
            <div class="flex flex-col items-center gap-4">
                <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold">{{ $t('society.title') }}</h1>
                <p class="text-lg md:text-xl lg:text-2xl max-w-3xl text-center">{{ $t('society.description') }}</p>
            </div>
        </div>

        <div class="flex flex-col md:flex-row items-center p-4 md:p-10 bg-gray-100">
          <div class="w-2/3 md:w-1/2 aspect-[4/3] overflow-hidden rounded">
            <LazyImage src="/pictures/society/weekly-session.png" alt="Committee debating" class="w-full h-full object-cover" />
          </div>
          <div class="flex flex-col justify-start items-center gap-4 w-full lg:w-1/2 pt-5 md:pl-10">
            <h2 class="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-black">{{ $t('society.weeklySessions.title') }}</h2>
            <p class="text-base lg:text-xl xl:text-2xl">{{ $t('society.weeklySessions.description') }}</p>
          </div>
        </div>

        <Section class="max-w-4xl p-10">
          <h2 class="text-4xl mb-5 font-bold text-black">{{ $t('society.plusForStudents') }}</h2>
          <CardSection />
        </Section>
        
        <div class="flex flex-col md:flex-row items-center p-4 md:p-10 bg-gray-100">
          <div class="flex flex-col justify-center items-center gap-4 w-full lg:w-1/2 pt-5 md:pt-0 md:pr-10 order-2 md:order-1">
            <h2 class="text-2xl md:text-3xl lg:text-4xl font-bold text-black">{{ $t('society.objectives.title') }}</h2>
            <div class="flex flex-col gap-1">
              <p class="text-base lg:text-xl xl:text-2xl">{{ $t('society.objectives.description1') }}</p>
              <p class="text-base lg:text-xl xl:text-2xl">{{ $t('society.objectives.description2') }}</p>
              <p class="text-base lg:text-xl xl:text-2xl">{{ $t('society.objectives.description3') }}</p>
            </div>
          </div>

          <div class="w-2/3 md:w-1/2 aspect-[4/3] overflow-hidden rounded order-1 md:order-2">
            <LazyImage src="/pictures/society/delegation.jpeg" alt="committee on EPFL logo" class="" />
          </div>
        </div>

        
    </div>

</template>
  
  <script>

import LazyImage from '@/components/LazyImage.vue';
import CardSection from "@/components/CardSection.vue";

  export default {
    components: {
      LazyImage,
      CardSection,
    }
  }
  </script>