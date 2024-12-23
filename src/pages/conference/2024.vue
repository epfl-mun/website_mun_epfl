<template>
  <section>
    <div style="height: 600px; width: 100%;" class="relative">
      <LazyImage src="/pictures/team/home_page_picture.jpg" alt="committee on EPFL logo" height="100%" montainsTransform="rotate(45deg) translate(50%, 70%)" sunOrigin="1000px 5000px" sunSize="5%" />
      <div v-show="!loading" class="logo absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-md opacity-90 max-w-3xl p-10">
        <h1 class="text-red-primary font-bold text-7xl mb-5">{{ $t('conference_2024.title') }}</h1>
        <p class="text-center mb-5 font-bold text-xl">{{ $t('conference_2024.date') }}</p>
      </div>
    </div>
  </section>

  <section>
    <div class="flex flex-col items-center justify-center py-5 gap-5 text-lg text-center">
      <h2 class="text-5xl font-bold mb-5">{{ $t('conference_2024.thankYou') }}</h2>
      <p class="max-w-4xl">{{ $t('conference_2024.thankYouMessage1') }}</p>
      <p class="max-w-4xl">{{ $t('conference_2024.thankYouMessage2') }}</p>
      <p class="max-w-4xl">{{ $t('conference_2024.thankYouMessage3') }}</p>
    </div>
  </section>

  <section>
    <div class="flex flex-col items-center justify-center py-7 bg-red-primary">
      <h2 class="text-6xl text-white font-bold mb-10">{{ $t('conference_2024.committees') }}</h2>
      <div class="flex max-w-7xl">
        <div v-for="committee in committees" :key="committee.title" class="flex-1">
          <div class="flex flex-col items-center gap-4">
            <div class="rounded-full bg-white p-2">
              <LazyImage :src="`/pictures/conf_2024/committee/${committee.image}.png`" :alt="committee.title" width="50px" height="50px" />
            </div>
            <h3 class="text-xl text-gray-100">{{ $t(`conference_2024.committeesList[${committees.indexOf(committee)}].title`) }}</h3>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section>
    <div class="flex flex-col items-center justify-center py-7">
      <h2 class="text-6xl font-bold mb-10">{{ $t('conference_2024.partners') }}</h2>
      <div class="flex max-w-7xl">
        <div v-for="partner in partners" :key="partner.title" class="flex-1">
          <div class="flex flex-col items-center gap-4">
            <div class="rounded-full p-2">
              <LazyImage :src="`/pictures/conf_2024/partners/${partner.image}.png`" :alt="partner.title" width="150px" height="150px" />
            </div>
            <h3 class="text-xl text-black">{{ $t(`conference_2024.partnersList[${partners.indexOf(partner)}].title`) }}</h3>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section>
    <div class="max-w-6xl m-auto mt-5">
      <Carousel :items-to-show="1" :navigation-enabled="true">
        <Slide v-for="(image, index) in images" :key="index">
          <div style="width: 1200px; aspect-ratio: 16/9;">
            <img :src="image" alt="Slider Image" class="w-full h-auto object-cover" />
          </div>
        </Slide>
        <template #addons>
          <Navigation />
          <Pagination />
        </template>
      </Carousel>
    </div>
  </section>
</template>

<script>
import LazyImage from '@/components/LazyImage.vue';
import { Carousel, Slide, Navigation, Pagination } from 'vue3-carousel';

export default {
  name: 'Conference_2024',
  components: {
    LazyImage,
    Carousel,
    Slide,
    Navigation,
    Pagination
  },
  data() {
    return {
      committees: [
        {
          image: "DISEC",
          title: "Disarmament and International Security Committee (DISEC)",
        },
        {
          image: "UNHRC",
          title: "United Nations Human Rights Council (UNHRC)",
        },
        {
          image: "UNSC",
          title: "United Nation Security Council (UNSC)",
        },
        {
          image: "Novgorod",
          title: "Crisis committee: Fall of the Novgorod Republic",
        },
      ],
      partners: [
        {
          image: "ZuMUN",
          title: "Zurich Model United Nations",
        },
        {
          image: "SIMUN",
          title: "Sorbonne International Model United Nations",
        }
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