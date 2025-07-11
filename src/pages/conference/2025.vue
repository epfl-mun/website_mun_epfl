<template>
  <section>
    <div style="height: 600px; width: 100%;" class="relative p-1">
      <LazyImage src="/pictures/events/conference2024.jpeg" alt="committee on EPFL logo" height="100%" montainsTransform="rotate(45deg) translate(50%, 70%)" sunOrigin="1000px 5000px" sunSize="5%" class="rounded-xl overflow-hidden" />
      <div v-show="!loading" class="logo absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-md opacity-90 max-w-3xl p-10">
        <h1 class="text-red-primary font-bold text-7xl mb-5">{{ $t('conference_2025.title') }}</h1>
        <p class="text-center mb-5 font-bold text-xl">{{ $t('conference_2025.date') }}</p>
      </div>
    </div>
  </section>

  <section>
    <div class="flex flex-col items-center justify-center py-5 gap-5 text-lg text-center">
      <h2 class="text-5xl font-bold mb-5">{{ $t('conference_2025.thankYou') }}</h2>
      <p class="max-w-4xl">{{ $t('conference_2025.thankYouMessage1') }}</p>
      <p class="max-w-4xl">{{ $t('conference_2025.thankYouMessage2') }}</p>
      <p class="max-w-4xl">{{ $t('conference_2025.thankYouMessage3') }}</p>
    </div>
  </section>

  <!-- <section>
    <div class="flex flex-col items-center justify-center py-7 bg-red-primary">
      <h2 class="text-6xl text-white font-bold mb-10">{{ $t('conference_2025.committees') }}</h2>
      <div class="flex flex-col lg:flex-row gap-6 max-w-7xl">
        <div v-for="committee in committees" :key="committee.title" class="flex-1">
          <div class="flex flex-col items-center gap-4">
            <div class="rounded-full bg-white p-2">
              <LazyImage :src="`/pictures/conf_2024/committee/${committee.image}.png`" :alt="committee.title" width="50px" height="50px" />
            </div>
            <h3 class="text-xl text-gray-100">{{ $t(`conference_2025.committeesList[${committees.indexOf(committee)}].title`) }}</h3>
          </div>
        </div>
      </div>
    </div>
  </section> -->

  <section>
    <div class="flex flex-col items-center justify-center py-7">
      <h2 class="text-6xl font-bold mb-10">{{ $t('conference_2025.partners') }}</h2>
      <div class="flex flex-col lg:flex-row gap-6 max-w-7xl overflow-x-scroll">
        <div v-for="partner in partners" :key="partner.title" class="flex-1">
          <div class="flex flex-col items-center gap-4">
            <div class="rounded-full p-2">
              <LazyImage :src="`/pictures/conf_2025/partners/${partner.image}.png`" :alt="partner.title" width="150px" height="150px" />
            </div>
            <h3 class="text-xl text-black">{{ $t(`conference_2025.partnersList[${partners.indexOf(partner)}].title`) }}</h3>
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
import { seo } from '@/composables/seo';

export default {
  name: 'Conference_2025',
  components: {
    LazyImage,
    Carousel,
    Slide,
    Navigation,
    Pagination
  },
  setup(){
    seo('conference.2025')
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
          url : "https://zumun.ch/",
        },
        {
          image: "LakeMUN",
          url : "https://www.lakemun-conference.com/",
        },
        {
          image : "GiMUN",
          url : "https://www.gimun.org/?lang=en",
        },
        {
          image : "KAMUN",
          url : "https://kamun.org/",
        },
        {
          image : "LYONMUN",
          url : "https://www.univ-lyon3.fr/lyon-mun",
        },
        {
          image : "IEUMUN",
          url : "https://ieumun.com/ieumun/",
        },
        {
          image : "fMUN",
          url : "https://www.fdnu.fr/",
        },
        {
          image : "UABMUN",
          url : "https://www.uab.cat/web/life-on-campus/participation/join-the-debate/uabmun-1345840008865.html",
        },
        {
          image: "SIMUN",
          url : "https://fondation.pantheonsorbonne.fr/evenements/sorbonne-international-model-united-nations-simun",
        },
        {
          image : "YEREMUN",
          url : "https://www.yeremun.com/",
        }
      ],
      images: [
        '/pictures/conf_2024/pictures/group_photo.jpg',
        '/pictures/conf_2024/pictures/debate_mod.jpg',
        '/pictures/conf_2024/pictures/debate_opening_speech.jpg',
        '/pictures/conf_2024/pictures/debate_serious.jpg',
        '/pictures/conf_2024/pictures/debate_unmod.jpg',
        '/pictures/conf_2024/pictures/party.jpg',
        '/pictures/conf_2024/pictures/debate_chill.jpeg',
        '/pictures/conf_2024/pictures/best_meme_award.jpg',
      ]
    };
  }
}
</script>