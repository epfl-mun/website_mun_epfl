<template>
  <section>
    <div style="height : 600px; width : 100%;" class="relative">
        <LazyImage src="/pictures/team/home_page_picture.jpg" alt="committee on EPFL logo" height="100%" montainsTransform="rotate(45deg) translate(50%, 70%)" sunOrigin="1000px 5000px" sunSize="5%"/>
        <div v-show="!loading"  class="logo absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white max-w-3xl p-10">
          <h1 class="text-red-primary font-bold text-7xl mb-5">EPFLMUN 2024</h1>
          <p class="text-center mb-5 font-bold text-xl">
            was held from the 8th to the 10th of March 2024
          </p>
        </div>
    </div>
  </section>

  <section>
    <div class="flex flex-col items-center justify-center py-5 gap-5 text-lg text-center">
        <h2 class="text-5xl font-bold mb-5">Thank you!</h2>
        <p class="max-w-4xl">MUN EPFL was happy to welcome over 100 delegates to the EPFL campus, leaving delegates, chairs, and speakers with lasting memories and new friendships forged over a shared passion for global diplomacy. </p>
        <p class="max-w-4xl">Together, we achieved more than just passing resolutions—we created connections and discovered new perspectives that will inspire the leaders of tomorrow.</p>
        <p class="max-w-4xl">To every delegate, chair, and speaker, we extend our deepest thanks. Your dedication, insights, and energy brought EPFLMUN 2024 to life, making it an unforgettable experience for everyone involved. With newfound connections and strengthened determination, we look forward to future collaborations and hope to see each of you again in EPFLMUN's upcoming editions. Here's to the future of diplomacy, one discussion at a time!</p>
    </div>
  </section>

  <section>
    <div class="flex flex-col items-center justify-center py-7 bg-red-primary">
        <h2 class="text-6xl text-white font-bold mb-10">Committees</h2>
        <div class="flex max-w-7xl">
          <div v-for="committee in committees" :key="committee.title" class="flex-1">
            <div class="flex flex-col items-center gap-4">
                <div class="rounded-full bg-white p-2">
                  <LazyImage :src="`/pictures/conf_2024/committee/${committee.image}.png`" :alt="committee.title" width="40px" height="40px"/>
                </div>
                <h3 class="text-xl text-gray-100">{{committee.title}}</h3>
            </div>
          </div>
        </div>
    </div>
</section>

    <section>
      <div class="max-w-6xl m-auto mt-5">

        <Carousel v-bind="config">
          <Slide v-for="(image, index) in images" v-bind:key="index">
            <div style="width : 1200px; aspect-ratio: 16/9;">
              <img :src="image" alt="Slider Image" class="w-full h-auto object-cover" :key="index"/>
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
      partners : [
        {
            image : "ZUMUN",
            title : "Zurich Model United Nations",
        },
        {
            image : "SIMUN",
            title : "Sorbonne International Model United Nations",
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