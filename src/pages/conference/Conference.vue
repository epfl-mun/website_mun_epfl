<template>
  <section>
    <div style="height: 600px; width: 100%;" class="relative">
      <LazyImage src="/pictures/events/conference2024.jpeg" alt="committee on EPFL logo" height="100%" montainsTransform="rotate(45deg) translate(50%, 70%)" sunOrigin="1000px 5000px" sunSize="5%" />
      <div v-show="!loading" class="logo absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-md opacity-90 max-w-3xl p-10">
        <h1 class="text-red-primary font-bold text-7xl mb-5">{{ $t('conference.title') }}</h1>
        <p class="text-center text-lg mb-5">{{ $t('conference.description1') }}</p>
        <p class="text-center text-lg">{{ $t('conference.description2') }}</p>
      </div>
    </div>
  </section>

  <section class="bg-red-primary">
    <div class="bg-red-primary py-6 flex flex-col items-center justify-normal">
      <h2 class="text-6xl font-bold text-white mb-10">{{ $t('conference.epflmunIs') }}</h2>
      <div class="flex flex-col lg:flex-row gap-6 max-w-7xl">
        <div v-for="element in elements" :key="element.title" class="flex-1">
          <div class="flex flex-col items-center gap-4">
            <div class="rounded-full bg-white p-2">
              <LazyImage :src="`/svg/conference/${element.svg}.svg`" alt="icon" width="40px" height="40px" />
            </div>
            <h3 class="text-xl text-gray-100">{{ $t(`conference.elements[${elements.indexOf(element)}].title`) }}</h3>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section>
    <div class="py-6 flex flex-col items-center justify-normal">
      <h2 class="text-6xl font-bold mb-5">{{ $t('conference.participate2025') }}</h2>
      <a href="https://mymun.com/conferences/EPFLMUN-2025/" target="_blank" rel="noopener noreferrer" class="bg-red-primary text-white font-bold px-8 py-4 rounded-full mt-4 duration-300 hover:scale-105 hover:bg-red-700 text-2xl">{{ $t('conference.registerNow') }}</a>
    </div>
  </section>

  <section>
    <div class="py-6 flex flex-col items-center justify-normal hover:cursor-pointer">
      <a class="max-w-7xl" href="https://mymun.com/conferences/EPFLMUN-2025/" target="_blank" rel="noopener noreferrer">
        <LazyImage src="/pictures/events/screen_mymun.png" alt="image" class="w-full" />
      </a>
    </div>
  </section>

</template>

<script>
import LazyImage from '@/components/LazyImage.vue';
import 'vue3-carousel/dist/carousel.css';
import { seo } from '@/composables/seo';

export default {
  name: 'Conference',
  components: {
    LazyImage,
  },
  setup(){
    seo('conference')
  },
  data() {
    return {
      elements: [
        {
          svg: "world",
          title: "150+ international participants",
        },
        {
          svg: "star",
          title: "6 commissions in French and English",
        },
        {
          svg: "happy_face",
          title: "Honor guests",
        },
        {
          svg: "lightning",
          title: "Post-conference opportunities",
        },
        {
          svg: "calendar",
          title: "3 incredible days, from March 21 to 23",
        },
      ],
      images: [
        '/pictures/conference-not-debate/rolex_welcoming.jpg',
        '/pictures/conference-not-debate/swisstech_talk.jpg',
        '/pictures/conferences/reunion_with_6_people.jpg',
        '/pictures/conference-not-debate/rolex_speaker_front.jpg',
      ]
    };
  }
}
</script>